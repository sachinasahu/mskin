import nodemailer from "nodemailer";

export type AppointmentPayload = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  notes?: string;
};

// ============================================
// EMAIL NOTIFICATION
// ============================================
export async function sendAppointmentEmail(
  payload: AppointmentPayload,
  appointmentId: string
) {
  const to = process.env.CLINIC_EMAIL || "bapunisahu7@gmail.com";
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    console.warn(
      "[EMAIL] GMAIL_USER or GMAIL_APP_PASSWORD not set. Email not sent."
    );
    console.log("[MOCK EMAIL]", { to, appointmentId, payload });
    return { mocked: true };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  const subject = `New Appointment: ${appointmentId}`;
  const htmlContent = `
    <h2>New Appointment Request</h2>
    <p><strong>Appointment ID:</strong> ${appointmentId}</p>
    <p><strong>Patient Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Phone:</strong> ${payload.phone}</p>
    <p><strong>Date:</strong> ${payload.date}</p>
    <p><strong>Time:</strong> ${payload.time}</p>
    <p><strong>Service:</strong> ${payload.service}</p>
    <p><strong>Notes:</strong> ${payload.notes || "None"}</p>
    <hr>
    <p><em>Patient will be contacted for confirmation.</em></p>
  `;

  try {
    const info = await transporter.sendMail({
      from: gmailUser,
      to,
      subject,
      html: htmlContent,
      text: `New appointment request\n\nAppointment ID: ${appointmentId}\nName: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nDate: ${payload.date}\nTime: ${payload.time}\nService: ${payload.service}\nNotes: ${payload.notes || "None"}`,
    });
    console.log("[EMAIL SENT]", info.messageId);
    return { messageId: info.messageId };
  } catch (e) {
    console.error("[EMAIL ERROR]", e);
    return { error: String(e) };
  }
}

// ============================================
// SMS NOTIFICATION (TWILIO)
// ============================================
export async function sendAppointmentSMS(payload: AppointmentPayload, appointmentId: string) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromPhone = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !fromPhone) {
    console.warn("[SMS] Twilio credentials not configured. SMS not sent.");
    console.log("[MOCK SMS]", { to: payload.phone, appointmentId });
    return { mocked: true };
  }

  const toPhone = payload.phone.startsWith("+") ? payload.phone : `+91${payload.phone}`;

  const message = `Hi ${payload.name}, your appointment has been booked!\n\nID: ${appointmentId}\nDate: ${payload.date}\nTime: ${payload.time}\nService: ${payload.service}\n\nDr. Manoj's Skin & Hair Clinic`;

  try {
    const response = await fetch("https://api.twilio.com/2010-04-01/Accounts/" + accountSid + "/Messages.json", {
      method: "POST",
      headers: {
        Authorization: "Basic " + Buffer.from(accountSid + ":" + authToken).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        From: fromPhone,
        To: toPhone,
        Body: message,
      }).toString(),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("[SMS SENT]", data.sid);
      return { messageSid: data.sid };
    } else {
      console.error("[SMS ERROR]", data);
      return { error: data.message };
    }
  } catch (e) {
    console.error("[SMS ERROR]", e);
    return { error: String(e) };
  }
}

// ============================================
// WHATSAPP MESSAGE NOTIFICATION (TWILIO)
// ============================================
export async function sendAppointmentWhatsApp(payload: AppointmentPayload, appointmentId: string) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const whatsappFrom = process.env.TWILIO_WHATSAPP_NUMBER;

  if (!accountSid || !authToken || !whatsappFrom) {
    console.warn("[WHATSAPP] Twilio credentials not configured. WhatsApp message not sent.");
    console.log("[MOCK WHATSAPP]", { to: payload.phone, appointmentId });
    return { mocked: true };
  }

  const toPhone = payload.phone.startsWith("+") ? payload.phone : `+91${payload.phone}`;

  const message = `Hi ${payload.name}! 👋\n\nYour appointment has been successfully booked! ✅\n\n*Appointment Details:*\n🆔 ID: ${appointmentId}\n📅 Date: ${payload.date}\n⏰ Time: ${payload.time}\n🏥 Service: ${payload.service}\n\n_We look forward to seeing you!_\n\nDr. Manoj's Skin & Hair Clinic 🏨`;

  try {
    const response = await fetch("https://api.twilio.com/2010-04-01/Accounts/" + accountSid + "/Messages.json", {
      method: "POST",
      headers: {
        Authorization: "Basic " + Buffer.from(accountSid + ":" + authToken).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        From: whatsappFrom,
        To: `whatsapp:${toPhone}`,
        Body: message,
      }).toString(),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("[WHATSAPP SENT]", data.sid);
      return { messageSid: data.sid };
    } else {
      console.error("[WHATSAPP ERROR]", data);
      return { error: data.message };
    }
  } catch (e) {
    console.error("[WHATSAPP ERROR]", e);
    return { error: String(e) };
  }
}

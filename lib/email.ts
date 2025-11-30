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

export async function sendAppointmentEmail(
  payload: AppointmentPayload,
  appointmentId: string
) {
  const to = "bapunisahu7@gmail.com";
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
  const text = `New appointment request\n\nAppointment ID: ${appointmentId}\nName: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nDate: ${payload.date}\nTime: ${payload.time}\nService: ${payload.service}\nNotes: ${payload.notes || "None"}`;

  try {
    const info = await transporter.sendMail({
      from: gmailUser,
      to,
      subject,
      text,
    });
    console.log("[EMAIL SENT]", info.messageId);
    return { messageId: info.messageId };
  } catch (e) {
    console.error("[EMAIL ERROR]", e);
    return { error: String(e) };
  }
}

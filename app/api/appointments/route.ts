import { NextResponse } from "next/server";
import { sendAppointmentEmail, sendAppointmentSMS, sendAppointmentWhatsApp } from "@/lib/email";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone } = body;
  const firstName = name.split(" ")[0] || "Guest";
  const appointmentId = `${firstName}${phone}`;

  console.log("[APPOINTMENT]", { appointmentId, body });

  // Send notifications via email, SMS, and WhatsApp simultaneously
  const [emailResult, smsResult, whatsappResult] = await Promise.all([
    sendAppointmentEmail(body, appointmentId),
    sendAppointmentSMS(body, appointmentId),
    sendAppointmentWhatsApp(body, appointmentId),
  ]);

  console.log("[NOTIFICATIONS]", { emailResult, smsResult, whatsappResult });

  return NextResponse.json(
    {
      success: true,
      appointmentId,
      notifications: {
        email: emailResult,
        sms: smsResult,
        whatsapp: whatsappResult,
      },
      message: "Appointment booked successfully. Confirmation sent via email, SMS, and WhatsApp.",
    },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json({ message: "Appointments endpoint" });
}

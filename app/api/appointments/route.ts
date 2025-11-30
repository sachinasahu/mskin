import { NextResponse } from "next/server";
import { sendAppointmentEmail } from "@/lib/email";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone } = body;
  const firstName = name.split(" ")[0] || "Guest";
  const appointmentId = `${firstName}${phone}`;

  console.log("[APPOINTMENT]", { appointmentId, body });
  const emailResult = await sendAppointmentEmail(body, appointmentId);

  return NextResponse.json(
    {
      success: true,
      appointmentId,
      emailResult,
      message: "Appointment booked successfully",
    },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json({ message: "Appointments endpoint" });
}

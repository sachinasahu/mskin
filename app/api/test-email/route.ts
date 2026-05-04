import { NextResponse } from "next/server";
import { sendAppointmentEmail } from "@/lib/email";

export async function GET() {
  console.log("=== EMAIL TEST ===");
  console.log("GMAIL_USER:", process.env.GMAIL_USER);
  console.log("GMAIL_APP_PASSWORD:", process.env.GMAIL_APP_PASSWORD ? "***SET***" : "NOT SET");

  const testPayload = {
    name: "Test User",
    email: "test@example.com",
    phone: "9876543210",
    date: "2026-05-10",
    time: "02:00 PM",
    service: "Test Appointment",
    notes: "This is a test email",
  };

  try {
    const result = await sendAppointmentEmail(testPayload, "TestUser9876543210");
    console.log("Email result:", result);
    
    return NextResponse.json({
      success: true,
      message: "Test email sent",
      envVars: {
        gmailUser: process.env.GMAIL_USER,
        gmailPassSet: !!process.env.GMAIL_APP_PASSWORD,
      },
      result,
    });
  } catch (error: any) {
    console.error("Email test error:", error);
    return NextResponse.json({
      success: false,
      error: error.message,
      envVars: {
        gmailUser: process.env.GMAIL_USER,
        gmailPassSet: !!process.env.GMAIL_APP_PASSWORD,
      },
    }, { status: 500 });
  }
}

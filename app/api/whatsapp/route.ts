// app/api/whatsapp/route.ts
// ==================================================
// WhatsApp Business API - Booking & Webhook Handling
// ==================================================

import { NextResponse } from "next/server";

/**
 * WEBHOOK VERIFICATION
 * WhatsApp sends GET request to verify your webhook
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN;

  if (mode === "subscribe" && token === verifyToken) {
    console.log("[WEBHOOK VERIFIED]");
    return new Response(challenge, { status: 200 });
  } else {
    console.error("[WEBHOOK VERIFICATION FAILED]");
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
}

/**
 * WEBHOOK MESSAGE HANDLER
 * Receives messages from WhatsApp customers
 */
export async function POST(req: Request) {
  const body = await req.json();

  // WhatsApp webhook structure
  const entry = body.entry?.[0];
  const changes = entry?.changes?.[0];
  const message = changes?.value?.messages?.[0];
  const from = changes?.value?.contacts?.[0]?.wa_id;
  const senderName = changes?.value?.contacts?.[0]?.profile?.name;

  if (!message || !from) {
    return NextResponse.json({ received: true });
  }

  console.log("[WHATSAPP MESSAGE]", {
    from,
    senderName,
    messageText: message.text?.body,
    timestamp: message.timestamp,
  });

  // Parse the incoming message
  const messageText = message.text?.body?.toLowerCase() || "";

  try {
    // Appointment booking conversation flow
    if (messageText.includes("book") || messageText.includes("appointment")) {
      await handleAppointmentBooking(from, senderName);
    } else if (messageText.includes("cancel")) {
      await handleCancellation(from);
    } else if (messageText.includes("hello") || messageText.includes("hi")) {
      await sendGreetingMenu(from, senderName);
    } else {
      await sendDefaultResponse(from);
    }

    // Mark message as read
    await markAsRead(message.id);
  } catch (error) {
    console.error("[WHATSAPP ERROR]", error);
  }

  return NextResponse.json({ received: true });
}

// ==================================================
// HELPER FUNCTIONS
// ==================================================

/**
 * Send initial greeting and menu options
 */
async function sendGreetingMenu(to: string, name?: string) {
  const message = {
    messaging_product: "whatsapp",
    to,
    type: "template",
    template: {
      name: "hello_world", // You'll need to create this template in WhatsApp Manager
      language: {
        code: "en_US",
      },
    },
  };

  await sendWhatsAppMessage(message);
}

/**
 * Interactive menu for appointment booking
 * Shows service options to select from
 */
async function handleAppointmentBooking(to: string, name?: string) {
  const services = [
    "General Consultation",
    "Acne Treatment",
    "Anti-Aging",
    "Hair Loss Treatment",
    "Skin Rejuvenation",
  ];

  const serviceButtons = services.map((service, idx) => ({
    type: "reply",
    reply: {
      id: `service_${idx}`,
      title: service,
    },
  }));

  const message = {
    messaging_product: "whatsapp",
    to,
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: `Hello ${name || "there"}! 👋\n\nWhich service would you like to book? Please select from the options below:`,
      },
      action: {
        buttons: serviceButtons,
      },
    },
  };

  await sendWhatsAppMessage(message);
}

/**
 * Send list of available time slots
 */
async function sendTimeSlots(to: string, date: string) {
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const sectionRows = timeSlots.map((time, idx) => ({
    id: `time_${idx}`,
    title: time,
  }));

  const message = {
    messaging_product: "whatsapp",
    to,
    type: "interactive",
    interactive: {
      type: "list",
      body: {
        text: `Available times for ${date}:`,
      },
      action: {
        button: "Select Time",
        sections: [
          {
            title: "Available Slots",
            rows: sectionRows,
          },
        ],
      },
    },
  };

  await sendWhatsAppMessage(message);
}

/**
 * Send booking confirmation
 */
async function sendBookingConfirmation(
  to: string,
  appointmentId: string,
  appointmentDetails: {
    name: string;
    service: string;
    date: string;
    time: string;
  }
) {
  const message = {
    messaging_product: "whatsapp",
    to,
    type: "text",
    text: {
      body: `✅ *Appointment Confirmed!*\n\n📋 *Details:*\n🆔 ID: ${appointmentId}\n👤 Name: ${appointmentDetails.name}\n🏥 Service: ${appointmentDetails.service}\n📅 Date: ${appointmentDetails.date}\n⏰ Time: ${appointmentDetails.time}\n\n_Thank you for choosing Dr. Manoj's Skin & Hair Clinic!_\n\nDo you want to *cancel* or *reschedule*?`,
    },
  };

  await sendWhatsAppMessage(message);
}

/**
 * Handle appointment cancellation
 */
async function handleCancellation(to: string) {
  const message = {
    messaging_product: "whatsapp",
    to,
    type: "text",
    text: {
      body: "We're sorry to see you go. To cancel your appointment, please provide your Appointment ID and we'll process it right away.",
    },
  };

  await sendWhatsAppMessage(message);
}

/**
 * Default response for unrecognized messages
 */
async function sendDefaultResponse(to: string) {
  const message = {
    messaging_product: "whatsapp",
    to,
    type: "text",
    text: {
      body: "👋 Hello! How can I help you?\n\nReply with:\n📅 *book* - to book an appointment\n❌ *cancel* - to cancel appointment\n❓ *help* - for more information\n\nDr. Manoj's Skin & Hair Clinic",
    },
  };

  await sendWhatsAppMessage(message);
}

/**
 * Send WhatsApp message via Meta API
 */
async function sendWhatsAppMessage(payload: any) {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const token = process.env.WHATSAPP_TOKEN;

  if (!phoneNumberId || !token) {
    console.warn("[WHATSAPP] Credentials not configured");
    return;
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/v17.0/${phoneNumberId}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (response.ok) {
      console.log("[WHATSAPP SENT]", data.messages[0].id);
      return data;
    } else {
      console.error("[WHATSAPP ERROR]", data);
      return null;
    }
  } catch (error) {
    console.error("[WHATSAPP API ERROR]", error);
    return null;
  }
}

/**
 * Mark message as read
 */
async function markAsRead(messageId: string) {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const token = process.env.WHATSAPP_TOKEN;

  if (!phoneNumberId || !token) return;

  try {
    await fetch(`https://graph.instagram.com/v17.0/${phoneNumberId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        status: "read",
        message_id: messageId,
      }),
    });
  } catch (error) {
    console.error("[MARK READ ERROR]", error);
  }
}

/**
 * ADVANCED: Collect appointment details via conversation
 * 
 * Example conversation flow:
 * 
 * User: "book"
 * Bot: "What service?" [buttons with services]
 * 
 * User: [selects Acne Treatment]
 * Bot: "What date?" [date picker or just ask for text]
 * 
 * User: "2026-05-10"
 * Bot: "What time?" [list of times]
 * 
 * User: [selects time]
 * Bot: "Confirmation message with appointment ID"
 */

// ==================================================
// ENVIRONMENT VARIABLES NEEDED IN .env.local
// ==================================================

/*
WHATSAPP_BUSINESS_ACCOUNT_ID=xxxxxxxxxxxx
WHATSAPP_PHONE_NUMBER_ID=xxxxxxxxxxxx
WHATSAPP_TOKEN=your_long_token_here
WHATSAPP_VERIFY_TOKEN=any_random_string_you_choose

Steps to get these:
1. Go to https://developers.facebook.com
2. Create Business Account
3. Set up WhatsApp Business API
4. Get Phone Number ID from your phone number
5. Generate Access Token
6. Set webhook URL to: https://yoursite.com/api/whatsapp
7. Set Verify Token to any random string (you define it)
*/

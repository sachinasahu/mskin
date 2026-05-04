# Appointment Booking System Setup Guide

Your appointment system now sends notifications via **Email**, **SMS**, and **WhatsApp**. Here's how to configure each service.

---

## 1️⃣ EMAIL SETUP (Gmail)

Your Gmail notification system is already configured. To enable it:

### Step 1: Set Up Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Search for **"App passwords"** and select it
4. Choose **Mail** and **Windows Computer** (or your device)
5. Google will generate a 16-character password

### Step 2: Add to `.env.local`

Create or update `.env.local` file in the root directory:

```
GMAIL_USER=your-clinic-email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
```

### Step 3: Appointment Details Go To

📧 Email: `bapunisahu7@gmail.com`

---

## 2️⃣ SMS SETUP (Twilio)

Enable SMS notifications to patient's phone number.

### Step 1: Create Twilio Account

1. Go to [Twilio.com](https://www.twilio.com/console)
2. Sign up for a free account
3. Get your **Account SID** and **Auth Token** from the dashboard
4. Purchase a **Twilio Phone Number** (costs ~$1/month)
   - Dashboard → Phone Numbers → Get a Number
   - Choose any number (e.g., +1-xxx-xxx-xxxx)

### Step 2: Add to `.env.local`

```
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=+1xxxxxxxxxx
```

### Step 3: SMS Format

Patient receives:

```
Hi John, your appointment has been booked!

ID: John9876543210
Date: 2026-05-10
Time: 02:00 PM
Service: Acne Treatment

Dr. Manoj's Skin & Hair Clinic
```

---

## 3️⃣ WHATSAPP SETUP (Twilio)

Enable WhatsApp message notifications to patient's WhatsApp.

### Step 1: Enable WhatsApp Sandbox

1. In **Twilio Console**, go to **Mass Messaging** → **WhatsApp**
2. Click **Try it Out** and select **Sandbox**
3. Follow the setup wizard to join the sandbox
4. Get your **WhatsApp Sandbox Number** (provided by Twilio)
5. Send "join" to the sandbox number to activate

### Step 2: Add to `.env.local`

```
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
```

**Note:** The number format starts with `whatsapp:` prefix (Twilio provides this)

### Step 3: WhatsApp Message Format

Patient receives:

```
Hi John! 👋

Your appointment has been successfully booked! ✅

*Appointment Details:*
🆔 ID: John9876543210
📅 Date: 2026-05-10
⏰ Time: 02:00 PM
🏥 Service: Acne Treatment

_We look forward to seeing you!_

Dr. Manoj's Skin & Hair Clinic 🏨
```

### Step 4: Upgrade from Sandbox (Production)

When ready for production:

1. Request **WhatsApp Business Account** integration
2. Register your clinic's WhatsApp number with Twilio
3. Update `TWILIO_WHATSAPP_NUMBER` with your official number
4. This allows unlimited message sending

---

## 4️⃣ COMPLETE `.env.local` EXAMPLE

```
# Gmail Configuration
GMAIL_USER=drmanojclinic@gmail.com
GMAIL_APP_PASSWORD=hpfk ksdj lsdn dnso

# Twilio Configuration (SMS)
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=+15551234567

# Twilio Configuration (WhatsApp)
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
```

---

## 5️⃣ WHATSAPP BUSINESS API FOR DIRECT BOOKING

There are **two approaches** for WhatsApp booking:

### Approach A: Notifications Only (Current Implementation)

- Patient books on your website → Auto-sends WhatsApp confirmation
- ✅ Simple, cost-effective
- ✅ Patient still uses website form
- ✅ Great for confirmation messages

### Approach B: Full WhatsApp Booking (WhatsApp Business API)

- Patient books DIRECTLY in WhatsApp chat
- No website needed for booking
- Requires **Meta's WhatsApp Business API** integration

---

## APPROACH B DETAILED: WhatsApp Business API Setup

If you want patients to book appointments **directly in WhatsApp**:

### Step 1: WhatsApp Business API Setup

1. Go to [Meta for Developers](https://developers.facebook.com/)
2. Create a Business Account
3. Register your clinic's WhatsApp number
4. Get **WhatsApp Business API credentials**

### Step 2: Webhook Setup

Create an endpoint that receives messages from WhatsApp:

```bash
# Add to .env.local
WHATSAPP_BUSINESS_ACCOUNT_ID=xxxx
WHATSAPP_PHONE_NUMBER_ID=xxxx
WHATSAPP_TOKEN=xxxx
```

### Step 3: Webhook Handler

We can create an API route to handle incoming WhatsApp messages:

```typescript
// app/api/whatsapp/route.ts
export async function POST(req: Request) {
  const body = await req.json();
  const message = body.messages[0];

  // Parse appointment request from WhatsApp message
  // Extract: date, time, service, etc.
  // Store booking in database or send to email

  // Send confirmation back via WhatsApp
  // await sendWhatsAppConfirmation(message.from)
}
```

### Step 4: Chatbot Flow (Optional)

You can build a conversational flow:

```
Patient: "Book appointment"
Bot: "What service? (1. Acne, 2. Hair Loss, 3. Anti-aging)"
Patient: "1"
Bot: "What date?"
Patient: "2026-05-10"
Bot: "What time?"
Patient: "2:00 PM"
Bot: "Appointment booked! ID: John9876543210"
```

---

## 6️⃣ TESTING THE SYSTEM

### Test Email

```bash
npm run dev
# Go to http://localhost:3000/appointments
# Fill form and submit
# Check bapunisahu7@gmail.com
```

### Test SMS

```bash
# If Twilio is configured, check patient's phone for SMS
```

### Test WhatsApp

```bash
# For sandbox: Message the sandbox number first
# Then submit appointment form
# You'll receive WhatsApp message
```

---

## 7️⃣ WHATSAPP BUSINESS API PROS & CONS

| Feature                  | Notifications (Current)    | Full WhatsApp API       |
| ------------------------ | -------------------------- | ----------------------- |
| Cost                     | Free                       | ~$0.05-0.10 per message |
| Setup                    | Easy                       | Complex                 |
| User Journey             | Website → WhatsApp confirm | WhatsApp only           |
| Best For                 | Small clinics              | High volume clinics     |
| Chatbot                  | No                         | Yes                     |
| Booking directly in chat | ❌ No                      | ✅ Yes                  |

---

## 8️⃣ RECOMMENDED SETUP

**For Dr. Manoj's Clinic, I recommend:**

1. ✅ **Email** - Already configured
2. ✅ **SMS** - Easy setup with Twilio (reaches all patients)
3. ✅ **WhatsApp Notifications** - Best for confirmation (patients already use WhatsApp)
4. ⚠️ **Full WhatsApp Booking** - Only if you have high appointment volume

---

## 9️⃣ QUICK TROUBLESHOOTING

### Email not received?

- Check .env.local has GMAIL_USER and GMAIL_APP_PASSWORD
- Restart dev server: `npm run dev`
- Check clinic email inbox and spam folder

### SMS not received?

- Verify TWILIO_PHONE_NUMBER format: +1xxxxxxxxxx
- Confirm Twilio account has credits
- Check patient phone number format

### WhatsApp not received?

- For sandbox: You must join the sandbox first (send "join")
- Verify TWILIO_WHATSAPP_NUMBER is correct
- Check Twilio WhatsApp logs in dashboard

---

## NEXT STEPS

1. **Choose your notification method** (email, SMS, or both)
2. **Setup the required accounts** (Gmail or Twilio)
3. **Add credentials to .env.local**
4. **Restart dev server**
5. **Test with a trial appointment booking**
6. **Optional: Implement WhatsApp Business API** for advanced chatbot booking

---

_For support with Twilio, visit: https://www.twilio.com/docs_

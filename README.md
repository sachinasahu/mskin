# MS Clinic Dermatology Portfolio

Next.js + Tailwind CSS portfolio site for a dermatology clinic. Includes hero slider, services, gallery, testimonials, contact, and appointment booking.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to see the site.

## Site URL (SEO)

Set your site URL for sitemap/Open Graph:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

## Appointment Email (Gmail SMTP - Free)

Create `.env.local` with Gmail credentials for appointment notifications to bapunisahu7@gmail.com:

```
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

**How to get Gmail App Password:**
1. Enable 2-Step Verification on your Google account
2. Go to https://myaccount.google.com/apppasswords
3. Generate an app password for "Mail"
4. Copy the 16-character password (no spaces)

If unset, appointments are logged to console only (no email sent).

## Pages

- `/` Home (hero slider, services, before/after, testimonials)
- `/about` Doctor profile
- `/services` Skin care guide
- `/gallery` Educational skin conditions
- `/contact` Contact info and form
- `/appointments` Booking form

## Images

Replace placeholders under `public/images` and update `app/components/HeroSlider.tsx`.

## Deployment (Free Hosting)

### Option 1: Vercel (Recommended - Free)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repository
4. Add environment variables in project settings:
   - `NEXT_PUBLIC_SITE_URL` (your Vercel URL, e.g., https://ms-clinic.vercel.app)
   - `GMAIL_USER` (your Gmail address)
   - `GMAIL_APP_PASSWORD` (Gmail app password from https://myaccount.google.com/apppasswords)
5. Deploy automatically - Vercel will build and host your site

**Auto-deploys:** Every push to `main` branch triggers automatic redeployment.

### Option 2: Netlify (Free Alternative)

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" > "Import an existing project"
4. Connect to your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables in Site settings > Environment variables
7. Deploy site

### Option 3: Railway (Free with limits)

1. Visit [railway.app](https://railway.app)
2. Create new project from GitHub repo
3. Add environment variables in Variables tab
4. Railway auto-detects Next.js and deploys

**Note:** After deployment, update `NEXT_PUBLIC_SITE_URL` with your live domain for proper sitemap/SEO.

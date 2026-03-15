import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr Manoj's Skin & Hair Clinic | Best Dermatologist in Bhubaneswar",
  description:
    "Dr Manoj's Skin & Hair Clinic offers advanced dermatology, hair restoration, laser treatments, and cosmetic skin care in Bhubaneswar. Book your consultation now.",
  keywords: [
    "dermatologist bhubaneswar",
    "skin clinic bhubaneswar",
    "hair clinic bhubaneswar",
    "acne treatment",
    "laser hair removal",
    "skin rejuvenation",
    "prp hair treatment",
  ],
  openGraph: {
    title: "Dr Manoj's Skin & Hair Clinic | Bhubaneswar Dermatology",
    description:
      "Advanced dermatology, laser, and hair treatments in Bhubaneswar. Personalized care from Dr Manoj Kumar Nayak.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white`}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Dr Manoj's Skin & Hair Clinic",
              medicalSpecialty: "Dermatology",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://msclinic.com",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Unit 4, Madhusudan Nagar, Near Truptee Restaurant, Old Ag Colony",
                addressLocality: "Bhubaneswar",
                addressRegion: "Odisha",
                postalCode: "751001",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8050719779",
                contactType: "customer service",
              },
              employee: {
                "@type": "Physician",
                name: "Dr. Manoj Kumar Nayak",
                medicalSpecialty: "Dermatology",
                description:
                  "MBBS, MD (Skin & VD). AIIMS Rishikesh; Ex-Senior Resident, AIIMS Bhubaneswar",
              },
            }),
          }}
        />
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


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
  title: "MS Clinic - Dermatology & Skin Care",
  description:
    "Professional dermatological care: acne, anti-aging, screening, cosmetic procedures. Personalized, modern, and caring.",
  openGraph: {
    title: "MS Clinic - Dermatology & Skin Care",
    description:
      "Professional dermatological care: acne, anti-aging, screening, cosmetic procedures.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "MS Clinic",
              medicalSpecialty: "Dermatology",
              url: "https://example.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3rd Lane Gandhi Nagar",
                addressLocality: "Berhampur",
                addressRegion: "Odisha",
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
                description: "MBBS, MD (Skin & VD). AIIMS Rishikesh; Ex-Senior Resident, AIIMS Bhubaneswar",
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

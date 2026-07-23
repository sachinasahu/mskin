import React from "react";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "../styles/tailwind.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "MSkinClinic — Expert Dermatology Care",
  description:
    "MSkinClinic offers expert dermatological treatments by Dr. Manoj — acne, anti-aging, pigmentation, hair loss & cosmetic skin care in India.",
  keywords: [
    "dermatologist",
    "skin clinic",
    "acne treatment",
    "skin care",
    "MSkinClinic",
    "Dr Manoj",
    "dermatology",
  ],
  openGraph: {
    title: "MSkinClinic — Expert Dermatology",
    description:
      "Board-certified dermatologist with 15+ years. Expert skin treatments for acne, aging, pigmentation & more.",
    type: "website",
    images: [{ url: "/assets/images/app_logo.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MSkinClinic — Expert Dermatology",
    description:
      "Board-certified dermatologist with 15+ years. Expert skin treatments.",
    images: ["/assets/images/app_logo.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${fraunces.variable}`}
    >
      <body className={plusJakartaSans.className}>
        {children}

        <script
          type="module"
          async
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fmskinclini6200back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.19"
        />
        <script
          type="module"
          defer
          src="https://static.rocket.new/rocket-shot.js?v=0.0.2"
        />
      </body>
    </html>
  );
}

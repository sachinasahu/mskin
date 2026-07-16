import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CalendarCheck,
  Clock,
  Leaf,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Booking", href: "/appointments" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Acne Treatment", href: "/services#service-collection" },
  { label: "Hair Restoration", href: "/services#service-collection" },
  { label: "Laser Therapy", href: "/services#service-collection" },
  { label: "Anti-Aging", href: "/services#service-collection" },
];

const trustBadges = [
  { label: "ISO Certified", icon: Award },
  { label: "Govt. Approved", icon: BadgeCheck },
  { label: "Clinical Care", icon: ShieldCheck },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Dr-Manojs-Skin-Clinic/61586769355453/",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/drmanojskinclinic",
    icon: FaInstagram,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917657015719",
    icon: FaWhatsapp,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-[#091210] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,131,90,0.18),transparent_34%),linear-gradient(135deg,rgba(26,51,37,0.88),rgba(9,18,16,1)_58%)]" />

      {/* Shared responsive container; max-width is defined in globals.css. */}
      <div className="relative container pb-12 pt-14 sm:pb-14 sm:pt-16 lg:pt-20 xl:pb-[4.5rem] xl:pt-24">
        {/* ── Consultation banner ─────────────────────────────
            mb grows with screen size so this card can never visually
            run into the link grid below it. Background/border opacity
            raised too — at 6% white-on-dark the card was nearly
            invisible, which read as bare overlapping text rather than
            a contained card. */}
        <div className="relative z-10 mb-14 grid min-w-0 grid-cols-1 gap-5 rounded-lg border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur sm:mb-16 sm:p-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-6 lg:mb-20 lg:p-8">
          <div className="min-w-0">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E8C4AE] sm:text-[11px] sm:tracking-[0.28em]">
              Private Consultation
            </p>
            <h2 className="text-balance font-[var(--font-dm-sans)] text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              Begin with a skin plan made for you.
            </h2>
          </div>
          <Link
            href="/appointments"
            className="inline-flex h-12 w-full max-w-sm shrink-0 items-center justify-center gap-2 rounded-md bg-[#C8835A] px-5 text-sm font-semibold text-white shadow-lg shadow-[#C8835A]/20 transition-all hover:-translate-y-0.5 hover:bg-[#B0703D] md:w-auto md:px-6"
          >
            <CalendarCheck className="size-4 shrink-0" />
            Book Appointment
          </Link>
        </div>

        <div className="relative z-10 grid min-w-0 grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-[1.4fr_0.9fr_0.9fr_1fr] xl:gap-12 2xl:gap-16">
          <div className="min-w-0 md:col-span-2 xl:col-span-1 xl:max-w-sm">
            <Link
              href="/"
              className="mb-5 inline-flex max-w-full items-center gap-3"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10">
                <Leaf className="size-5 text-[#E8C4AE]" />
              </span>
              <span className="min-w-0 text-wrap font-[var(--font-dm-sans)] text-xl font-semibold leading-7 tracking-tight text-white sm:text-2xl">
                Manoj Skin Clinic
              </span>
            </Link>
            <p className="max-w-prose text-sm leading-7 text-white/[0.62]">
              Expert dermatology and aesthetic care dedicated to healthy,
              radiant skin in Bhubaneswar and Berhampur.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {trustBadges.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/[0.72]"
                >
                  <Icon className="size-3.5 shrink-0 text-[#E8C4AE]" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <nav aria-label="Footer quick links" className="min-w-0">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E8C4AE]">
              Quick Links
            </p>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex min-w-0 items-center gap-2 text-sm text-white/[0.68] transition-colors hover:text-white"
                >
                  <ArrowRight className="size-3.5 shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  <span className="min-w-0 break-words">{link.label}</span>
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Footer services" className="min-w-0">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E8C4AE]">
              Services
            </p>
            <div className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group inline-flex min-w-0 items-center gap-2 text-sm text-white/[0.68] transition-colors hover:text-white"
                >
                  <ArrowRight className="size-3.5 shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  <span className="min-w-0 break-words">{link.label}</span>
                </Link>
              ))}
            </div>
          </nav>

          <div className="min-w-0 md:col-span-2 xl:col-span-1">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E8C4AE]">
              Contact
            </p>
            <div className="grid gap-4 text-sm text-white/[0.68] sm:grid-cols-2 xl:grid-cols-1">
              <a
                href="tel:+917657015719"
                className="flex min-w-0 items-center gap-3 transition-colors hover:text-white"
              >
                <Phone className="size-4 shrink-0 text-[#E8C4AE]" />
                <span>+91 76570 15719</span>
              </a>
              <a
                href="mailto:drmanojsskinclinic@gmail.com"
                className="flex min-w-0 items-center gap-3 transition-colors hover:text-white"
              >
                <Mail className="size-4 shrink-0 text-[#E8C4AE]" />
                <span className="min-w-0 break-all">
                  drmanojsskinclinic@gmail.com
                </span>
              </a>
              <div className="flex min-w-0 items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#E8C4AE]" />
                <span className="min-w-0 break-words">
                  Bhubaneswar and Berhampur
                </span>
              </div>
              <div className="flex min-w-0 items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-[#E8C4AE]" />
                <span className="min-w-0 break-words">
                  Consultation by appointment
                </span>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-[#E8C4AE] transition-all hover:-translate-y-0.5 hover:border-[#E8C4AE]/40 hover:bg-white/[0.14] hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Legal bar ───────────────────────────────────────────
          Border stays full-bleed; inner content shares the exact same
          max-width as everything above (1200px, matching globals.css
          and Navbar.tsx) so this divider lines up with the rest of the
          site, not just the screen edge. */}
      <div className="relative border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 text-center text-xs leading-5 text-white/[0.48] md:flex-row md:text-left xl:gap-6">
          <span className="min-w-0">
            © {currentYear} Manoj Skin Clinic. All rights reserved.
          </span>
          <span className="min-w-0 text-white/[0.40] md:text-right">
            Dermatology, aesthetics, and skin wellness care.
          </span>
        </div>
      </div>
    </footer>
  );
}

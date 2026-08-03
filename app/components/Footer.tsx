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
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,131,90,0.18),transparent_34%),linear-gradient(135deg,rgba(26,51,37,0.88),rgba(9,18,16,1)_58%)]" />

      {/* Main Footer Content */}
      <div className="relative">
        {/* Consultation Banner */}
        <div className="mb-14 flex flex-col gap-6 rounded-xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:mb-16 sm:p-8 lg:mb-20 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div className="min-w-0">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E8C4AE] sm:text-[11px]">
              Private Consultation
            </p>

            <h2 className="max-w-2xl font-[var(--font-plus-jakarta)] text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              Begin with a skin plan made for you.
            </h2>
          </div>

          <Link
            href="/appointments"
            className="inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-md bg-[#C8835A] px-6 text-sm font-semibold text-white shadow-lg shadow-[#C8835A]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#B0703D] sm:w-fit"
          >
            <CalendarCheck className="size-4 shrink-0" />
            <span>Book Appointment</span>
          </Link>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 xl:gap-16 mx-8">
          {/* Brand */}
          <div className="min-w-0">
            <Link href="/" className="mb-6 inline-flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
                <Leaf className="size-5 text-[#E8C4AE]" />
              </span>

              <span className="font-[var(--font-plus-jakarta)] text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">
                Manoj Skin Clinic
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-white/[0.62]">
              Expert dermatology and aesthetic care dedicated to healthy,
              radiant skin in Bhubaneswar and Berhampur.
            </p>

            {/* Trust Badges */}
            <div className="mt-7 flex flex-wrap gap-2">
              {trustBadges.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/[0.70]"
                >
                  <Icon className="size-3.5 shrink-0 text-[#E8C4AE]" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer quick links">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E8C4AE]">
              Quick Links
            </p>

            <div className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex w-fit items-center gap-2 text-sm text-white/[0.68] transition-colors hover:text-white"
                >
                  <ArrowRight className="size-3.5 shrink-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />

                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E8C4AE]">
              Services
            </p>

            <div className="flex flex-col gap-4">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group inline-flex w-fit items-center gap-2 text-sm text-white/[0.68] transition-colors hover:text-white"
                >
                  <ArrowRight className="size-3.5 shrink-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />

                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Contact */}
          <div className="min-w-0">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E8C4AE]">
              Contact
            </p>

            <div className="flex flex-col gap-5 text-sm text-white/[0.68]">
              {/* Phone */}
              <a
                href="tel:+917657015719"
                className="flex items-start gap-3 transition-colors hover:text-white"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-[#E8C4AE]" />

                <span>+91 76570 15719</span>
              </a>

              {/* Email */}
              <a
                href="mailto:drmanojsskinclinic@gmail.com"
                className="flex items-start gap-3 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-[#E8C4AE]" />

                <span className="min-w-0 break-all">
                  drmanojsskinclinic@gmail.com
                </span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#E8C4AE]" />

                <span>Bhubaneswar and Berhampur</span>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-[#E8C4AE]" />

                <span>Consultation by appointment</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 mb-8 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[#E8C4AE] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E8C4AE]/40 hover:bg-white/[0.12] hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legal Bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex flex-col gap-3 px-5 py-5 text-center text-xs leading-5 text-white/[0.48] sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 md:text-left">
          <span>© {currentYear} Manoj Skin Clinic. All rights reserved.</span>

          <span className="text-white/[0.40]">
            Dermatology, aesthetics, and skin wellness care.
          </span>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CalendarCheck,
  HomeIcon,
  Image as ImageIcon,
  Info,
  Leaf,
  Menu,
  Phone,
  Stethoscope,
  Syringe,
  X,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "Services", href: "/services", icon: Stethoscope },
  { label: "About", href: "/about", icon: Info },
  { label: "Treatments", href: "/services#service-collection", icon: Syringe },
  { label: "Gallery", href: "/gallery", icon: ImageIcon },
  { label: "Contact", href: "/contact", icon: Phone },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActiveLink = (href: string) => {
    const path = href.split("#")[0];

    if (href.includes("#")) {
      return false;
    }

    if (path === "/") {
      return pathname === "/";
    }

    return pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-md">
      {/* Shared responsive container; max-width is defined in globals.css. */}
      <div className="container flex min-h-16 items-center justify-between gap-3 py-3 lg:min-h-20 lg:gap-6 xl:gap-10 2xl:gap-14">
        {/* Logo */}
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 sm:gap-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#0E1F15] sm:size-10">
            <Leaf className="size-5 text-[#E8C4AE]" />
          </div>
          <span className="truncate font-[var(--font-cormorant)] text-lg font-semibold leading-7 tracking-tight text-[#1A1A18] sm:text-2xl sm:leading-8">
            Manoj Skin Clinics
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-10 2xl:gap-12">
          {NAV_LINKS.map(({ label, href, icon: Icon }) => {
            const isActive = isActiveLink(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`relative flex items-center gap-1.5 text-sm leading-5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0E1F15] ${
                  isActive
                    ? "font-semibold text-[#1A1A18]"
                    : "font-medium text-[#1A1A18]/70 hover:text-[#C8835A]"
                }`}
              >
                <Icon className="size-4" />
                {label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#C8835A]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/appointments"
          className="hidden h-11 items-center justify-center gap-2 rounded-full bg-[#C8835A] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#B0703D] lg:inline-flex xl:px-6 2xl:px-8"
        >
          <CalendarCheck className="size-4" />
          Book Appointment
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="flex size-10 items-center justify-center rounded-full text-[#1A1A18] transition-colors hover:bg-[#F8F7F4] lg:hidden"
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {isMenuOpen && (
        <div className="flex flex-col gap-1 border-t border-neutral-200 bg-white px-4 py-4 shadow-lg sm:px-6 lg:hidden">
          {NAV_LINKS.map(({ label, href, icon: Icon }) => {
            const isActive = isActiveLink(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-[#0E1F15]/10 font-semibold text-[#0E1F15]"
                    : "font-medium text-[#1A1A18]/70 hover:bg-[#F8F7F4]"
                }`}
              >
                <Icon className="size-4" />
                {label}
              </Link>
            );
          })}
          <Link
            href="/appointments"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#C8835A] font-semibold text-white transition-colors hover:bg-[#B0703D]"
          >
            <CalendarCheck className="size-4" />
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
}

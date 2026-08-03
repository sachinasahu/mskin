"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppLogo from "@/components/ui/AppLogo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Appointments", href: "/appointments" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const useSolidHeader = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          useSolidHeader
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-teal-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className=" mx-auto px-4 sm:px-5 md:px-8 flex items-center justify-between gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <AppLogo
              size={36}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
                useSolidHeader ? "text-foreground" : "text-white"
              }`}
            >
              MSkin<span className="text-accent">Clinic</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  useSolidHeader
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link?.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/appointments"
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-200 shadow-teal-sm"
            >
              Book Appointment
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors ${
                useSolidHeader ? "hover:bg-muted" : "hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  useSolidHeader ? "bg-foreground" : "bg-white"
                } ${menuOpen ? "w-5 rotate-45 translate-y-2" : "w-5"}`}
              />
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  useSolidHeader ? "bg-foreground" : "bg-white"
                } ${menuOpen ? "opacity-0 w-5" : "w-3.5"}`}
              />
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  useSolidHeader ? "bg-foreground" : "bg-white"
                } ${menuOpen ? "w-5 -rotate-45 -translate-y-2" : "w-5"}`}
              />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />
        <nav
          className={`absolute top-0 right-0 h-full w-72 bg-background shadow-2xl flex flex-col pt-20 pb-8 px-6 transition-transform duration-400 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e?.stopPropagation()}
        >
          <div className="flex flex-col gap-1">
            {navLinks?.map((link, i) => (
              <Link
                key={link?.href}
                href={link?.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 py-4 px-4 rounded-xl text-base font-medium text-foreground hover:bg-muted hover:text-primary transition-colors duration-200 border-b border-border last:border-0"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link?.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto">
            <Link
              href="/appointments"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center bg-primary text-primary-foreground w-full py-3.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors shadow-teal-md"
            >
              Book Appointment
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

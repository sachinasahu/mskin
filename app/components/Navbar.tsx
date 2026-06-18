"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`nav ${isScrolled ? "is-scrolled" : ""}`}>
        <Link href="/" className="nav-logo">
          <div className="logo-mark">M</div>
          <div className="logo-text">
            <span className="logo-name">Dr. Manoj's</span>
            <span className="logo-sub">Skin & Hair Clinic</span>
          </div>
        </Link>

        <ul className="nav-links">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/#doctor">Our Doctor</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <div className="nav-right">
          <a href="tel:+917657015719" className="nav-phone">+91 76570 15719</a>
          <Link href="/appointments" className="nav-book">Book Now</Link>
        </div>

        <button 
          className="nav-hamburger" 
          aria-label="Open menu"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "is-open" : ""}`}>
        <button 
          className="mobile-close" 
          onClick={() => setIsMobileMenuOpen(false)}
        >
          ✕
        </button>
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
        <Link href="/#doctor" onClick={() => setIsMobileMenuOpen(false)}>Our Doctor</Link>
        <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        <Link href="/appointments" onClick={() => setIsMobileMenuOpen(false)}>Book Appointment</Link>
      </div>
    </>
  );
}

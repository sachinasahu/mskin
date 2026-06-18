import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="nav-logo" style={{ marginBottom: 0 }}>
              <div className="logo-mark">M</div>
              <div className="logo-text">
                <span className="logo-name">Dr. Manoj's</span>
                <span className="logo-sub">Skin & Hair Clinic</span>
              </div>
            </div>
            <p className="footer-brand-text">
              Advanced dermatology care in Bhubaneswar & Berhampur.
              AIIMS-trained specialist. ISO-certified clinic. Govt. approved.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/people/Dr-Manojs-Skin-Clinic/61586769355453/" className="social-btn" target="_blank" rel="noopener noreferrer">f</a>
              <a href="https://www.instagram.com/drmanojskinclinic" className="social-btn" target="_blank" rel="noopener noreferrer">ig</a>
              <a href="https://wa.me/917657015719" className="social-btn" target="_blank" rel="noopener noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <p className="footer-col-head">Services</p>
            <ul className="footer-links-list">
              <li><Link href="/services#skin">Acne Treatment</Link></li>
              <li><Link href="/services#hair">Hair Restoration</Link></li>
              <li><Link href="/services#laser">Laser Treatments</Link></li>
              <li><Link href="/services#laser">Skin Brightening</Link></li>
              <li><Link href="/services#laser">Chemical Peeling</Link></li>
            </ul>
          </div>

          <div>
            <p className="footer-col-head">Clinic</p>
            <ul className="footer-links-list">
              <li><Link href="/about">About Dr. Manoj</Link></li>
              <li><Link href="/appointments">Book Appointment</Link></li>
              <li><Link href="/#testimonials">Patient Stories</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <p className="footer-col-head">Contact</p>
            <div className="footer-contact-row">
              <span className="fc-icon">📍</span>
              <span className="fc-text">Unit-4, Madhusudhan Nagar, Next to Truptee Restaurant, Bhubaneswar 751001</span>
            </div>
            <div className="footer-contact-row">
              <span className="fc-icon">📍</span>
              <span className="fc-text">Near Barracks High School, Berhampur, Ganjam 760001</span>
            </div>
            <div className="footer-contact-row">
              <span className="fc-icon">📞</span>
              <span className="fc-text">+91 76570 15719</span>
            </div>
            <div className="footer-contact-row">
              <span className="fc-icon">✉️</span>
              <span className="fc-text">drmanojsskinclinic@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© {currentYear} Dr. Manoj's Skin & Hair Clinic. All rights reserved.</span>
          <div className="footer-badges">
            <span className="badge">ISO CERTIFIED</span>
            <span className="badge">GOVT. APPROVED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Clinic Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl">📍</div>
              <div>
                <p className="font-semibold">Our Clinic</p>
                <p className="text-sm text-teal-100">Dr Manoj&apos;s Skin Clinic</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="md:col-span-1">
            <p className="text-sm font-semibold mb-2">CLINIC LOCATIONS</p>
            <p className="text-teal-100 text-sm">
              <strong>Clinic No‑1:</strong> Unit‑4, Madhusudhan Nagar, Next to Truptee Restaurant, Bhubaneswar, Odisha 751001<br />
              <strong>Clinic No‑2:</strong> Near Barracks High School, Berhampur, Ganjam, Odisha 760001
            </p>
          </div>

          {/* Phone */}
          <div className="md:col-span-1">
            <p className="text-sm font-semibold mb-2">CALL</p>
            <p className="text-teal-100 text-sm">
              +91 76570 15719<br />
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <p className="text-sm font-semibold mb-2">EMAIL</p>
            <p className="text-teal-100 text-sm">drmanojsskinclinic@gmail.com</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20v-7.21h-2.3V9.25h2.3V7.31c0-2.87 1.77-4.43 4.29-4.43 1.22 0 2.26.09 2.56.13v2.97h-1.76c-1.38 0-1.64.66-1.64 1.62v2.12h3.28l-.43 3.54h-2.85V20z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-500 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-teal-100">
              &copy; {new Date().getFullYear()} Dr Manoj&apos;s Skin & Hair Clinic. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-teal-100 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-teal-100 hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-teal-100 hover:text-white transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

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
                <p className="text-sm text-teal-100">
                  Dr Manoj&apos;s Skin Clinic
                </p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="md:col-span-1">
            <p className="text-sm font-semibold mb-2">CLINIC LOCATIONS</p>
            <p className="text-teal-100 text-sm">
              <strong>Clinic No‑1:</strong> Unit‑4, Madhusudhan Nagar, Next to
              Truptee Restaurant, Bhubaneswar, Odisha 751001
              <br />
              <strong>Clinic No‑2:</strong> Near Barracks High School,
              Berhampur, Ganjam, Odisha 760001
            </p>
          </div>

          {/* Phone */}
          <div className="md:col-span-1">
            <p className="text-sm font-semibold mb-2">CALL</p>
            <p className="text-teal-100 text-sm">
              +91 76570 15719
              <br />
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <p className="text-sm font-semibold mb-2">EMAIL</p>
            <p className="text-teal-100 text-sm">
              drmanojsskinclinic@gmail.com
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/people/Dr-Manojs-Skin-Clinic/61586769355453/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/drmanojskinclinic?igsh=ODBhOGR5M3RuMWVx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
              </a>

              <a
                href="https://wa.me/917657015719"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="https://maps.google.com/maps?q=Dr+Manoj's+Skin+Clinic+Bhubaneswar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <FaMapMarkerAlt className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-500 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-teal-100">
              &copy; {new Date().getFullYear()} Dr Manoj&apos;s Skin & Hair
              Clinic. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

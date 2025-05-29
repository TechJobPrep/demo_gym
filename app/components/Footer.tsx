import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-10 px-6 sm:px-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div>
          <h2 className="text-yellow-500 text-2xl font-bold mb-4">FlexPulse Gym</h2>
          <p className="text-sm text-neutral-400">
            Elevate your fitness journey with our expert trainers, premium facilities, and motivating atmosphere.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow-500 transition">Home</Link></li>
            <li><Link href="/classes" className="hover:text-yellow-500 transition">Classes</Link></li>
            <li><Link href="/trainers" className="hover:text-yellow-500 transition">Trainers</Link></li>
            <li><Link href="/membership" className="hover:text-yellow-500 transition">Membership</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-yellow-500 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-yellow-400"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram" className="hover:text-yellow-400"><FaInstagram /></a>
            <a href="#" aria-label="Twitter" className="hover:text-yellow-400"><FaTwitter /></a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm text-neutral-400">
            📍 123 Gym Lane, FitCity<br />
            📞 (123) 456-7890<br />
            ✉️ contact@flexpulse.com
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-neutral-700 pt-6 text-center text-sm text-neutral-500">
        &copy; {new Date().getFullYear()} FlexPulse Gym. All rights reserved.
      </div>
    </footer>
  );
}

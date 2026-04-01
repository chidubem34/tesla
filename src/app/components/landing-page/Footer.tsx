import AppLogo from "./AppLogo";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#050505] py-10">
      <div className="bg-white/5 backdrop-blur-xl border-t border-white/10 py-4 mt-12 rounded-full mx-auto max-w-7xl">
        <div className="px-6 flex items-center justify-between">
          <AppLogo />

          {/* Copyright */}
          <div className="hidden md:block">
            <p className="text-white text-xs font-medium">
              © {new Date().getFullYear()} Tesla Holdings. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {[<FaTwitter/>, <FaLinkedin/>, <FaYoutube/>, <FaInstagram/>].map((social, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:text-red-400 text-sm md:text-xl font-bold uppercase transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

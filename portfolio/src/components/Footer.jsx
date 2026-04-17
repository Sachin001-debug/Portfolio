import text from "../assets/Sachin.png";
import fb from "../assets/facebook_icon.png";
import linkedin from "../assets/linkedin_icon.png";
import twitter from "../assets/twitter_icon.png";
import { Download } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#blogs", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-white/10 py-8 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={text}
                alt="Sachin"
                className="w-24 h-16 object-contain"
              />
            </div>

            <p className="text-sm text-white/70 mb-3">
              Full Stack Developer || UI/UX Designer
            </p>

            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={fb} alt="Facebook" className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={twitter} alt="Twitter" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-3 text-lg">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-[#00f5d4] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-3 text-lg">About</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Passionate full-stack developer and UI/UX designer crafting clean,
              minimal, and high-performance digital experiences. Based in
              Butwal.
            </p>

            <div className="mt-4 text-xs text-white/40">
              © 2026 Sachin. All rights reserved.
              <br />
              Made with ❤️ using React + Tailwind CSS
            </div>
          </div>
        </div>

        <div className="text-center text-[10px] text-white/30 mt-8 border-t border-white/10 pt-2">
          Inspired by clean minimal design • Built with passion
        </div>
      </div>
    </footer>
  );
};

export default Footer;
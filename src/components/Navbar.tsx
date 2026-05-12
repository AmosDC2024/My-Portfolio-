import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Linkedin, MessageSquare } from "lucide-react";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Tech", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6",
        isScrolled ? "py-4" : "py-8"
      )}
    >
      <nav
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500",
          isScrolled ? "glass shadow-2xl" : "bg-transparent"
        )}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter"
        >
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white italic">P</div>
            <span className="text-gradient">Portfolio.</span>
          </a>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a
                  href={link.href}
                  className="text-sm font-medium text-secondary hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
          
          <div className="h-4 w-[1px] bg-border" />
          
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" className="text-secondary hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="text-secondary hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden text-secondary hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 glass rounded-3xl p-6 md:hidden overflow-hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-secondary hover:text-white transition-colors block py-2 border-b border-border/50"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6 mt-6 justify-center">
              <a href="#" className="flex items-center gap-2 text-secondary hover:text-white">
                <Github size={24} />
              </a>
              <a href="#" className="flex items-center gap-2 text-secondary hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-accent px-6 py-2 rounded-full text-white text-sm font-semibold">
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

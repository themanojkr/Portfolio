import { useState, useEffect } from "react";
import { Menu, X, Smartphone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const NAV_ITEMS = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "timeline", label: "Timeline" },
    { id: "stats", label: "Stats" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background scroll trigger
      setIsScrolled(window.scrollY > 30);

      // Active Section detector
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/5 backdrop-blur-md border-b border-white/10 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo/Brand */}
        <div 
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-600 text-white flex items-center justify-center font-bold text-sm tracking-tighter shadow-md shadow-purple-500/10 group-hover:scale-105 transition">
            MK
          </div>
          <div className="text-left">
            <span className="text-sm font-bold text-zinc-100 tracking-tight block">Manoj Kumar</span>
            <span className="text-[10px] text-purple-400 font-semibold font-mono block -mt-1 tracking-wider">ANDROID DEV</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1.5 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeSection === item.id 
                  ? "text-white opacity-100" 
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {activeSection === item.id && (
                <motion.div 
                  layoutId="activeNavBG"
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-500/30 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>

        {/* CTA Contact Button */}
        <div className="hidden md:flex">
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-1.5 px-4.5 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-xs font-bold rounded-xl border border-white/10 transition shadow-lg hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all uppercase tracking-widest"
          >
            <span>Contact Me</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 bg-[#050508]/95 backdrop-blur-lg text-white"
          >
            <div className="px-6 py-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full py-2 px-4 rounded-xl text-left text-xs font-semibold ${
                    activeSection === item.id 
                      ? "bg-purple-600/15 border border-purple-500/20 text-purple-400" 
                      : "text-zinc-400 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full flex items-center justify-between py-2.5 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold rounded-xl border border-white/10"
                >
                  <span>Contact Me</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { Github, Linkedin, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent border-t border-white/5 py-10 relative overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-xs">
        
        {/* Left copyright and build credentials */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="font-semibold text-zinc-400">
            &copy; {currentYear} Manoj Kumar. All Rights Reserved.
          </p>
          <p className="text-[10px] text-zinc-500 font-medium font-mono">
            Optimized for 120Hz display refresh • Android Software Core
          </p>
        </div>

        {/* Center made with citation */}
        <div className="flex items-center gap-1 text-zinc-400 font-medium">
          <span>Made with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
          <span>by Manoj Kumar</span>
        </div>

        {/* Right social connectors */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/themanojkr"
            target="_blank"
            rel="noreferrer"
            className="p-1 px-2.5 rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition text-[10px] flex items-center gap-1 font-semibold"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://www.linkedin.com/in/themanojkr/"
            target="_blank"
            rel="noreferrer"
            className="p-1 px-2.5 rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition text-[10px] flex items-center gap-1 font-semibold"
          >
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </footer>
  );
}

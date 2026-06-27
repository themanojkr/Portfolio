import { TIMELINE } from "../data";
import { Briefcase, GraduationCap, Globe, Compass } from "lucide-react";
import { motion } from "motion/react";

export default function Timeline() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "education": return <GraduationCap className="w-4 h-4 text-purple-300" />;
      case "freelance": return <Globe className="w-4 h-4 text-blue-400" />;
      default: return <Briefcase className="w-4 h-4 text-purple-400" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "education": return "Academic Core";
      case "freelance": return "Boutique Contracts";
      default: return "Full-Time Corporate";
    }
  };

  return (
    <section id="timeline" className="py-24 bg-transparent relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.02),transparent)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16 space-y-3">
          <span className="text-[10px] font-bold text-purple-400 font-mono tracking-widest uppercase block">Chronological Tracks</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Milestone Timeline
          </h2>
          <p className="text-zinc-350 text-sm leading-relaxed">
            A comprehensive mapping of my educational groundwork and active product lifecycle involvement in corporate spaces.
          </p>
        </div>

        {/* Timeline Path container */}
        <div className="relative border-l-2 border-white/5 ml-4 sm:ml-6 md:ml-32 space-y-12 pb-4">
          
          {TIMELINE.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 sm:pl-10 text-left"
            >
              {/* Year indicator left panel floating (on desktop it is moved to the left padding) */}
              <div className="hidden md:block absolute right-full mr-12 top-1 text-right">
                <span className="text-sm font-extrabold text-white font-mono tracking-wider block">{milestone.year}</span>
                <span className="text-[9px] font-bold text-zinc-500 font-mono uppercase tracking-widest">{getCategoryLabel(milestone.category)}</span>
              </div>

              {/* Timeline bubble node */}
              <div className="absolute top-1 left-0 transform -translate-x-[50%] w-8 h-8 rounded-full bg-[#050508] border border-white/10 flex items-center justify-center shadow-md select-none">
                {getCategoryIcon(milestone.category)}
              </div>

              {/* Content Card layout */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-2xl max-w-2xl hover:border-white/20 transition-all">
                {/* Year tag for mobile */}
                <div className="md:hidden flex items-center gap-1.5 text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest mb-1.5">
                  <span>{milestone.year}</span>
                  <span className="text-zinc-650">•</span>
                  <span>{getCategoryLabel(milestone.category)}</span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">{milestone.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mt-2">{milestone.description}</p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

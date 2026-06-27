import { motion } from "motion/react";
import { Award, Briefcase, Play, Flame } from "lucide-react";
import { STATS } from "../data";

export default function Stats() {
  const getIcon = (label: string) => {
    if (label.includes("Experience")) return <Award className="w-5 h-5 text-purple-400" />;
    if (label.includes("Delivered")) return <Briefcase className="w-5 h-5 text-blue-400" />;
    if (label.includes("Play Store")) return <Play className="w-5 h-5 text-purple-300" />;
    return <Flame className="w-5 h-5 text-rose-450 animate-pulse" />;
  };

  return (
    <section id="stats" className="py-20 bg-transparent relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.02),transparent)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative z-10">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(168, 85, 247, 0.4)", backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              className="bg-white/5 p-5 sm:p-6 rounded-2xl border border-white/10 backdrop-blur-md text-left flex flex-col justify-between h-40 transition-all duration-300 shadow-xl"
            >
              <div className="p-2 bg-white/5 rounded-xl border border-white/10 w-fit">
                {getIcon(stat.label)}
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight leading-none bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  {stat.value}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-zinc-400 font-bold uppercase tracking-widest font-mono">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

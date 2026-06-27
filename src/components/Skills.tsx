import { motion } from "motion/react";
import { Cpu, Layout, Workflow, Code, ShieldCheck, Database, Smartphone, Wrench } from "lucide-react";
import { SKILLS } from "../data";

export default function Skills() {
  // Define custom icons based on technological domain
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Core": return <Code className="w-4 h-4 text-purple-300" />;
      case "UI": return <Layout className="w-4 h-4 text-purple-400" />;
      case "Architecture": return <ShieldCheck className="w-4 h-4 text-blue-400" />;
      case "Networking": return <Workflow className="w-4 h-4 text-purple-400" />;
      case "Storage": return <Database className="w-4 h-4 text-emerald-400" />;
      case "Hardware & Native SDKs": return <Smartphone className="w-4 h-4 text-violet-400" />;
      case "Tools & Ecosystem": return <Wrench className="w-4 h-4 text-amber-400" />;
      default: return <Cpu className="w-4 h-4 text-blue-400" />;
    }
  };

  const categories = Array.from(new Set(SKILLS.map((s) => s.category)));

  return (
    <section id="skills" className="py-24 bg-transparent relative border-t border-white/5 overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-[30%] -right-[15%] w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16 space-y-3">
          <span className="text-[10px] font-bold text-purple-400 font-mono tracking-widest uppercase">Expertise Engine</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Technical Arsenal
          </h2>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
            A comprehensive suite of modern frameworks, language configurations, and architectures optimized for fluid app performance, system longevity, and low memory operations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, catIdx) => {
            const filteredSkills = SKILLS.filter((s) => s.category === category);
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl text-left space-y-4 shadow-xl backdrop-blur-md"
              >
                {/* Header of category */}
                <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                  <div className="p-1.5 bg-white/5 rounded-lg border border-white/10">
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-300 font-mono">
                    {category} Skills
                  </h3>
                </div>

                {/* Animated Chips Grid */}
                <div className="flex flex-wrap gap-2 pt-1.5">
                  {filteredSkills.map((spec, sIdx) => (
                    <motion.div
                      key={spec.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                      whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.4)", backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                      className="px-3.5 py-1.5 bg-white/5 border border-white/10 text-white rounded-xl text-xs font-semibold tracking-wide flex items-center gap-1.5 transition duration-300 pointer-events-auto"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>{spec.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

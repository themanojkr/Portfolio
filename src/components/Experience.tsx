import { useState } from "react";
import { COMPANIES } from "../data";
import { Company, Project } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Calendar, Layers, Smartphone, LayoutGrid, Cpu, Play } from "lucide-react";

interface ExperienceProps {
  onViewScreenshots: (projectId: string, projectName: string, screenshots: string[]) => void;
}

export default function Experience({ onViewScreenshots }: ExperienceProps) {
  const [activeCompanyId, setActiveCompanyId] = useState(COMPANIES[0].id);

  const activeCompany = COMPANIES.find((c) => c.id === activeCompanyId) || COMPANIES[0];

  return (
    <section id="experience" className="py-24 bg-transparent relative border-t border-white/5 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-left">
        
        {/* Header */}
        <div className="max-w-xl mb-14 space-y-3">
          <span className="text-[10px] font-bold text-purple-450 font-mono tracking-widest uppercase mb-1.5 block">Professional Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Industry Experience
          </h2>
          <p className="text-zinc-350 text-sm leading-relaxed">
            Leading engineering practices across dynamic roles by creating modular libraries, executing offline caches, and modernizing design specs.
          </p>
        </div>

        {/* Company Filter Chips Navigation */}
        <div className="flex gap-2.5 border-b border-white/5 pb-4 mb-10 overflow-x-auto scrollbar-none">
          {COMPANIES.map((company) => {
            const isActive = company.id === activeCompanyId;
            return (
              <button
                key={company.id}
                onClick={() => setActiveCompanyId(company.id)}
                className={`relative px-5 py-2.5 rounded-2xl text-xs font-bold tracking-wider uppercase transition-all duration-300 select-none cursor-pointer border ${
                  isActive 
                    ? "text-white border-purple-500 bg-purple-600/10" 
                    : "text-zinc-400 border-white/10 hover:border-white/25 hover:text-zinc-200 bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeCompanyTab" 
                    className="absolute inset-0 bg-purple-500/15 rounded-2xl -z-10" 
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{company.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Company Frame with Project Cards & Animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCompanyId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
          >
            {/* Left Box: Company Briefing Details */}
            <div className="md:col-span-4 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl space-y-4">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-purple-405 font-mono uppercase tracking-widest">Active Tenure</p>
                <h3 className="text-xl font-bold text-white tracking-tight">{activeCompany.fullName}</h3>
                <p className="text-zinc-300 text-sm font-medium">{activeCompany.role}</p>
              </div>

              <div className="space-y-2 border-t border-white/5 pt-4 text-xs font-medium text-zinc-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{activeCompany.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>{activeCompany.location}</span>
                </div>
              </div>

              <div className="bg-[#050508]/50 p-3.5 rounded-xl border border-white/10 space-y-1.5">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase font-mono text-zinc-300">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" /> Key Focus Areas
                </div>
                <p className="text-[10.5px] text-zinc-400 leading-relaxed font-sans">
                  Crafting highly responsive threads, standard native callbacks, SQLite persistence mechanisms, and MVVM architectural stability.
                </p>
              </div>
            </div>

            {/* Right Box: Projects Grid */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {activeCompany.projects.map((project, idx) => (
                <div
                  key={project.id}
                  className="group bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-3xl flex flex-col justify-between min-h-[330px] h-auto hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 shadow-xl"
                >
                  <div className="space-y-4">
                    {/* Project Header */}
                    <div className="flex justify-between items-start">
                      <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:border-purple-500/30 transition-all">
                        <Smartphone className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="text-[9px] font-mono uppercase font-bold tracking-widest px-2 py-0.5 bg-[#050508]/50 border border-white/15 rounded-lg text-zinc-400">
                        {project.category || "Native App"}
                      </span>
                    </div>

                    <div className="space-y-2 text-left">
                      <h4 className="text-base font-bold text-white group-hover:text-purple-400 transition-all">
                        {project.name}
                      </h4>
                      <p className="text-[11.5px] leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-all">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/5">
                    {/* Project Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((techItem) => (
                        <span 
                          key={techItem} 
                          className="px-2 py-0.5 bg-white/5 text-[10px] font-semibold text-zinc-400 rounded-md border border-white/10"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>

                    {/* View Screenshots and Play Store CTAs */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => onViewScreenshots(project.id, project.name, project.screenshots)}
                        className={`${project.playStoreUrl ? 'flex-1' : 'w-full'} flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/20 text-xs font-bold text-white transition-all cursor-pointer`}
                      >
                        <LayoutGrid className="w-3.5 h-3.5 text-purple-400" />
                        <span>Screenshots</span>
                      </button>
                      {project.playStoreUrl && (
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-purple-600/25 hover:bg-purple-600/45 border border-purple-500/30 text-xs font-bold text-purple-300 hover:text-white transition-all text-center"
                        >
                          <Play className="w-3.5 fill-purple-300/10 h-3.5 shrink-0" />
                          <span>Google Play</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

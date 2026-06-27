import { PERSONAL_PROJECTS } from "../data";
import { PlaySquare, Github, LayoutGrid, Award, Sparkles, Heart } from "lucide-react";
import { motion } from "motion/react";

interface PersonalProjectsProps {
  onViewScreenshots: (projectId: string, projectName: string, screenshots: string[]) => void;
}

export default function PersonalProjects({ onViewScreenshots }: PersonalProjectsProps) {
  const getProjectIcon = (id: string) => {
    if (id === "speaklify") return <Sparkles className="w-5 h-5 text-purple-405" />;
    return <Heart className="w-5 h-5 text-purple-300" />;
  };

  const getGradient = (id: string) => {
    if (id === "speaklify") return "from-purple-500/10 via-blue-500/5 to-transparent";
    return "from-blue-500/10 via-purple-500/5 to-transparent";
  };

  return (
    <section id="projects" className="py-24 bg-transparent relative border-t border-white/5 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[110px] pointer-events-none animate-pulse" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-[10px] font-bold text-purple-400 font-mono tracking-widest uppercase block">Personal Creations</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Indie Production Apps
          </h2>
          <p className="text-zinc-350 text-sm md:text-base leading-relaxed">
            Side developments created to experiment with bleeding-edge integrations—such as Google speech processing algorithms, Gemini AI LLM model context, and Cloud Sync state loops.
          </p>
        </div>

        {/* Project Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PERSONAL_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6, borderColor: "rgba(168, 85, 247, 0.3)" }}
              className={`relative group bg-white/5 border border-white/10 p-6 md:p-8 rounded-[32px] flex flex-col justify-between h-[420px] transition-all duration-300 shadow-2xl overflow-hidden backdrop-blur-md`}
            >
              {/* Background accent color layer */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(project.id)} opacity-60 z-0 pointer-events-none`} />

              <div className="relative z-10 space-y-5">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                    {getProjectIcon(project.id)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-purple-400 font-mono flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> Core Play Store App
                  </span>
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-purple-300 transition duration-300">
                    {project.name}
                  </h3>
                  <p className="text-zinc-350 text-xs md:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Footer Tech and Buttons */}
              <div className="relative z-10 space-y-6 pt-5 border-t border-white/5">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((badge) => (
                    <span 
                      key={badge} 
                      className="px-2.5 py-0.5 bg-white/5 border border-white/10 text-[10.5px] font-semibold text-zinc-300 rounded-lg"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Actions Button Row */}
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10.5px] font-bold text-white transition tracking-wide text-center"
                  >
                    <PlaySquare className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Play Store</span>
                  </a>

                  <button
                    onClick={() => onViewScreenshots(project.id, project.name, project.screenshots)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 hover:scale-[1.02] active:scale-[0.98] border border-white/10 rounded-xl text-[10.5px] font-extrabold text-white transition tracking-wide shadow-lg shadow-purple-500/10 cursor-pointer animate-none"
                  >
                    <LayoutGrid className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>Screenshots</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10.5px] font-bold text-white transition tracking-wide text-center"
                  >
                    <Github className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

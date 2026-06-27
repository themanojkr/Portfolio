import { useState, useEffect } from "react";
import PhoneMockup from "./PhoneMockup";
import { X, ChevronLeft, ChevronRight, Play, CheckCircle2, Star, Smartphone, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ScreenshotModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string;
  projectName: string;
  screens: string[];
}

export default function ScreenshotModal({ isOpen, onClose, projectId, projectName, screens }: ScreenshotModalProps) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  // Reset index when project changes
  useEffect(() => {
    setActiveScreenIndex(0);
  }, [projectId]);

  if (!isOpen) return null;

  const currentScreen = screens[activeScreenIndex] || "dashboard";

  // Translate code keys to elegant readable screen titles
  const getScreenTitle = (screenKey: string) => {
    switch (screenKey) {
      case "dashboard": return "Live Status Hub";
      case "rooms": return "Room Status Sync";
      case "booking": return "Expedia Integrator";
      case "chat": return "Concierge Messenger";
      case "tickets": return "Service Ticket Grid";
      case "route": return "GPS Routing Matrix";
      case "checklist": return "Delivery Dispatcher";
      case "inventory": return "Barcode Camera Scanner";
      case "analytics": return "Inventory Performance";
      case "feed": return "Dynamic Social Feed";
      case "channels": return "Enterprise Group Space";
      case "ai-chat": return "AI Speaking Coach";
      case "flashcards": return "Micro-Spaced Flashcards";
      default: return "Active App Mockup";
    }
  };

  const nextScreen = () => {
    setActiveScreenIndex((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setActiveScreenIndex((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop filter blur */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#050508]/90 backdrop-blur-md"
        />

        {/* Modal box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 15 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-[#050508] border border-white/10 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl shadow-purple-500/10 z-10 grid grid-cols-1 md:grid-cols-2"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Left panel: Simulated Device Frame */}
          <div className="bg-white/5 backdrop-blur-md p-6 flex flex-col items-center justify-center border-r border-white/5">
            <div className="relative flex items-center gap-2">
              <button 
                onClick={prevScreen}
                className="absolute -left-12 p-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white transition z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <PhoneMockup projectId={projectId} screenType={currentScreen} />

              <button 
                onClick={nextScreen}
                className="absolute -right-12 p-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white transition z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots navigation */}
            <div className="flex gap-2 mt-4">
              {screens.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveScreenIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeScreenIndex ? "w-6 bg-purple-500" : "bg-white/15"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right panel: Information and Technical Context */}
          <div className="p-6 md:p-8 flex flex-col justify-between text-left text-white space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-purple-400 flex items-center gap-1.5 font-mono">
                  <Smartphone className="w-3.5 h-3.5 text-purple-400" /> Live Interactive Mockup
                </span>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mt-1">{projectName}</h3>
              </div>

              <div className="space-y-3">
                <div className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs rounded-xl font-medium">
                  Screen: {getScreenTitle(currentScreen)}
                </div>

                <p className="text-zinc-350 text-xs leading-relaxed">
                  Below is a representation of the production Android build of <span className="text-white font-medium">{projectName}</span>. 
                  Tap elements within the phone frame context (like list items, checkbox inputs, or conversation text forms) to trigger live simulation logs and state transitions.
                </p>
              </div>

              <div className="bg-[#050508]/50 p-3 rounded-xl border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
                  <Info className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Engineering Highlights</span>
                </div>
                <ul className="text-[10px] text-zinc-400 space-y-1 list-disc pl-4">
                  <li>Formulated inside Material Design 3 guidelines.</li>
                  <li>Automated Local-First synchronization mechanisms.</li>
                  <li>Jetpack Compose state management and atomic reactive triggers.</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-white/5">
              <button 
                onClick={onClose}
                className="flex-1 py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white font-semibold transition text-center cursor-pointer"
              >
                Close Viewport
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

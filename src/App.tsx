import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import PersonalProjects from "./components/PersonalProjects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScreenshotModal from "./components/ScreenshotModal";
import { motion, AnimatePresence } from "motion/react";
import { Smartphone, Sparkles, Cpu } from "lucide-react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);

  // Screenshot modal states
  const [screenshotModal, setScreenshotModal] = useState<{
    isOpen: boolean;
    projectId: string;
    projectName: string;
    screens: string[];
  }>({
    isOpen: false,
    projectId: "",
    projectName: "",
    screens: [],
  });

  useEffect(() => {
    // Beautiful fake progressive compiler buffer representation
    const totalDuration = 1800; // 1.8 seconds loading speed
    const stepTime = 30;
    const progressSteps = totalDuration / stepTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const currentPercentage = Math.min(Math.round((currentStep / progressSteps) * 100), 100);
      setLoadPercentage(currentPercentage);

      if (currentStep >= progressSteps) {
        clearInterval(interval);
        // Add tiny timeout for satisfying full load feel
        setTimeout(() => {
          setIsLoading(false);
        }, 1500); // 1.5 seconds loading speed
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  const openScreenshotModal = (projectId: string, projectName: string, screens: string[]) => {
    setScreenshotModal({
      isOpen: true,
      projectId,
      projectName,
      screens,
    });
  };

  const closeScreenshotModal = () => {
    setScreenshotModal((prev) => ({ ...prev, isOpen: false }));
  };

  const getSplashText = (pct: number) => {
    if (pct < 20) return "Starting Gradle compiler server...";
    if (pct < 45) return "Resolving Android Jetpack UI dependencies...";
    if (pct < 70) return "Binding Kotlin Coroutines and MVVM components...";
    if (pct < 90) return "Compiling local Room database entity charts...";
    return "Optimizing dex binaries and launching device mockups...";
  };

  return (
    <div className="bg-[#050508] text-white min-h-screen font-sans selection:bg-violet-500/30 selection:text-violet-300 antialiased overflow-x-hidden relative">
      {/* Target Theme Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/15 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/15 blur-[120px] rounded-full"></div>
        <div className="absolute top-[40%] right-[-15%] w-[40%] h-[40%] bg-indigo-900/10 blur-[130px] rounded-full"></div>
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          /* Premium Custom Android Compile / Launch Screen */
          <motion.div
            key="splash-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[#050508] flex flex-col items-center justify-center p-6 text-center select-none"
          >
            {/* Ambient Back Glow */}
            <div className="absolute w-[320px] h-[320px] bg-violet-600/10 rounded-full blur-[90px] animate-pulse" />

            <div className="relative z-10 max-w-sm space-y-6">
              
              {/* Animating Device Frame logo placeholder */}
              <div className="relative flex justify-center">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    borderColor: ["#8b5cf6", "#3b82f6", "#8b5cf6"]
                  }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="w-16 h-16 rounded-2xl border-2 border-violet-500 flex items-center justify-center bg-zinc-900 shadow-lg shadow-violet-500/15"
                >
                  <Cpu className="w-8 h-8 text-violet-400" />
                </motion.div>
                
                {/* Micro sparks */}
                <span className="absolute top-0 right-1/4">
                  <Sparkles className="w-4 h-4 text-emerald-400 animate-ping duration-1000" />
                </span>
              </div>

              {/* Title Header */}
              <div className="space-y-1">
                <h2 className="text-xl font-bold tracking-tight text-white font-sans">Manoj Kumar</h2>
                <p className="text-[10px] text-zinc-500 tracking-wider uppercase font-bold font-mono">
                  Android Workstation 3.2
                </p>
              </div>

              {/* Progress visual slider */}
              <div className="space-y-3">
                <div className="h-[2px] bg-zinc-900 border border-zinc-900 rounded-full w-56 mx-auto overflow-hidden relative">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                    style={{ width: `${loadPercentage}%` }}
                    transition={{ ease: "easeInOut" }}
                  />
                </div>
                
                {/* Dynamically cycled compile statement */}
                <div className="h-4">
                  <p className="text-[10px] text-violet-400 font-mono tracking-wide font-semibold">
                    {getSplashText(loadPercentage)} ({loadPercentage}%)
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        ) : (
          /* Actual Portfolio Layout contents */
          <motion.div
            key="portfolio-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col relative z-10"
          >
            {/* Header Sticky Navbar */}
            <Navbar />

            {/* Main Segment Areas */}
            <main className="flex-1">
              
              {/* 1. Introductory Hero Area */}
              <Hero />

              {/* 2. Key Quantifiable Benchmarks (Stats) */}
              <Stats />

              {/* 3. Skills Matrix Area */}
              <Skills />

              {/* 4. Professional Experience and Selected Tabs */}
              <Experience onViewScreenshots={openScreenshotModal} />

              {/* 5. Personal Project Showcases */}
              <PersonalProjects onViewScreenshots={openScreenshotModal} />

              {/* 6. Professional Milestones Timeline */}
              <Timeline />

              {/* 7. Client Form Area (Contact) */}
              <Contact />

            </main>

            {/* Global Absolute Footer Block */}
            <Footer />

            {/* Global Mobile Device Viewport overlay Modal */}
            <ScreenshotModal
              isOpen={screenshotModal.isOpen}
              onClose={closeScreenshotModal}
              projectId={screenshotModal.projectId}
              projectName={screenshotModal.projectName}
              screens={screenshotModal.screens}
            />

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

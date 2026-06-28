import { useState } from "react";
import { motion } from "motion/react";
import { 
  FileText, MessageSquare, Linkedin, Github, Compass, 
  Sparkles, Smartphone, ShieldCheck, Cpu 
} from "lucide-react";
import CoverLetterModal from "./CoverLetterModal";

export default function Hero() {
  const [isCoverLetterOpen, setIsCoverLetterOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleDownloadResume = () => {
    const resumeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Manoj Kumar - Android Developer Resume</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      color: #1f2937;
      line-height: 1.45;
      margin: 0;
      padding: 30px;
      background-color: #ffffff;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
    }
    header {
      text-align: center;
      border-bottom: 2.5px solid #6d28d9;
      padding-bottom: 16px;
      margin-bottom: 20px;
    }
    h1 {
      margin: 0 0 4px 0;
      font-size: 30px;
      font-weight: 700;
      letter-spacing: -0.5px;
      color: #5b21b6;
    }
    .tagline {
      font-size: 16px;
      font-weight: 600;
      color: #4c1d95;
      margin: 0 0 10px 0;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .contact-links {
      display: flex;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
      font-size: 13px;
      color: #4b5563;
      font-weight: 500;
    }
    .contact-links a {
      color: #6d28d9;
      text-decoration: none;
    }
    .contact-links a:hover {
      text-decoration: underline;
    }
    section {
      margin-bottom: 20px;
    }
    h2 {
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      color: #1e1b4b;
      border-bottom: 1.5px solid #e5e7eb;
      padding-bottom: 4px;
      margin: 0 0 10px 0;
    }
    .summary {
      font-size: 13px;
      color: #374151;
      text-align: justify;
      margin: 0;
    }
    .job {
      margin-bottom: 14px;
    }
    .job-header {
      display: flex;
      justify-content: space-between;
      font-weight: 600;
      font-size: 13.5px;
      color: #111827;
      margin-bottom: 4px;
    }
    .company {
      color: #6d28d9;
    }
    .date {
      color: #6b7280;
      font-weight: 500;
      font-size: 12.5px;
    }
    ul {
      margin: 0;
      padding-left: 18px;
      font-size: 12.5px;
      color: #4b5563;
    }
    li {
      margin-bottom: 3.5px;
    }
    .skills-grid {
      display: grid;
      grid-template-cols: repeat(2, 1fr);
      gap: 8px 16px;
      font-size: 12.5px;
    }
    .skill-cat {
      color: #4b5563;
    }
    .skill-cat strong {
      color: #1e1b4b;
    }
    .project {
      margin-bottom: 12px;
    }
    .project-header {
      font-weight: 600;
      font-size: 13.5px;
      color: #111827;
      margin-bottom: 3px;
    }
    .edu-header {
      display: flex;
      justify-content: space-between;
      font-weight: 600;
      font-size: 13.5px;
      color: #111827;
    }
    @media print {
      body {
        padding: 0;
        color: #000000;
      }
      .container {
        max-width: 100%;
      }
      header {
        border-bottom-color: #000000;
      }
      .company {
        color: #000000;
      }
      .contact-links a {
        color: #000000;
      }
      h1, .tagline {
        color: #000000;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>MANOJ KUMAR</h1>
      <div class="tagline">Android Developer</div>
      <div class="contact-links">
        <span>+91 7255804850</span>
        <span>&bull;</span>
        <a href="mailto:manojkr32000@gmail.com">manojkr32000@gmail.com</a>
        <span>&bull;</span>
        <a href="https://linkedin.com/in/themanojkr" target="_blank">linkedin.com/in/themanojkr</a>
      </div>
    </header>

    <section>
      <h2>Professional Summary</h2>
      <p class="summary">
        Results-driven Android Developer with 3+ years of experience building and shipping production-ready applications on the Google Play Store. Proficient in Kotlin, MVVM architecture, and modern Android development practices including Jetpack components, Coroutines, and Hilt DI. Proven track record of delivering full-lifecycle app development &mdash; from architecture design and API integration to testing and Play Store deployment. Hands-on expertise with Camera APIs, ARCore, and AI tool integration for accelerated development workflows.
      </p>
    </section>

    <section>
      <h2>Work Experience</h2>
      <div class="job">
        <div class="job-header">
          <span>Software Engineer &ndash; Android &bull; <span class="company">INNSight Intractive Pvt Ltd.</span></span>
          <span class="date">Jul 2024 &ndash; Present</span>
        </div>
        <ul>
          <li>Architected and deployed the INNsight Hospitality PMS application end-to-end, including architecture design, API integration, QA testing, and Play Store release</li>
          <li>Implemented clean MVVM architecture with Data Binding, Coroutines, and Hilt for a scalable, maintainable codebase</li>
          <li>Built robust REST API integrations with offline-first support using Room database for reliable data persistence</li>
          <li>Reduced memory leaks and improved runtime performance through proactive profiling and resource management</li>
          <li>Ensured cross-device compatibility via systematic testing across varied screen sizes and Android versions</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-header">
          <span>Software Engineer &ndash; Android &bull; <span class="company">Beetonz Infotech</span></span>
          <span class="date">May 2023 &ndash; Jul 2024</span>
        </div>
        <ul>
          <li>Delivered multiple Android applications end-to-end, from UI/UX implementation to feature development and Play Store deployment</li>
          <li>Integrated Firebase Authentication, Firestore, and Cloud Messaging to power backend functionality and real-time notifications</li>
          <li>Improved app performance and code maintainability through refactoring and adopting modern Jetpack libraries</li>
          <li>Collaborated in Agile sprints with cross-functional teams to identify and resolve bugs and improve overall app quality</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Key Projects</h2>
      <div class="project">
        <div class="project-header">INNsight Hospitality App (PMS)</div>
        <ul>
          <li>Built a full-scale Property Management System with modules for bookings, channel management, and dynamic pricing</li>
          <li>Designed modular, scalable architecture that supports ongoing feature expansion with minimal technical debt</li>
          <li>Measurably improved operational efficiency for hotel and rental businesses using the platform</li>
        </ul>
      </div>
      
      <div class="project">
        <div class="project-header">Keen Reputation Management App (RMS)</div>
        <ul>
          <li>Developed a centralized review management dashboard aggregating data from multiple review platforms</li>
          <li>Integrated real-time push notifications and analytics to surface actionable business insights</li>
          <li>Streamlined review workflows, boosting user engagement and response time for businesses</li>
        </ul>
      </div>

      <div class="project">
        <div class="project-header">GPS Map Camera</div>
        <ul>
          <li>Built a camera app that stamps GPS coordinates, altitude, compass bearing, and weather data onto photos</li>
          <li>Worked directly with Android Camera2 API and camera pipeline for real-time, high-performance image capture</li>
          <li>Implemented location metadata overlays with smooth, responsive UI for field use cases</li>
        </ul>
      </div>

      <div class="project">
        <div class="project-header">AR Measurement App</div>
        <ul>
          <li>Created an ARCore-powered measurement tool using real-time plane detection and depth estimation</li>
          <li>Optimized AR rendering pipeline for smooth frame rates and accurate real-world distance calculations</li>
        </ul>
      </div>

      <div class="project">
        <div class="project-header">AI Math Solver</div>
        <ul>
          <li>Developed an AI-powered math solver supporting both image scan and manual input modes</li>
          <li>Integrated external AI APIs to deliver step-by-step solutions with a clean, intuitive interface</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Technical Skills</h2>
      <div class="skills-grid">
        <div class="skill-cat"><strong>Languages:</strong> Kotlin (primary), Java</div>
        <div class="skill-cat"><strong>Architecture:</strong> MVVM, Clean Architecture, Repository Pattern</div>
        <div class="skill-cat"><strong>Jetpack & Libraries:</strong> Coroutines, Flow, Hilt, Data Binding, Room, Retrofit, LiveData, Navigation</div>
        <div class="skill-cat"><strong>UI:</strong> XML Layouts, RecyclerView, Material Design, Picasso, Glide, Jetpack Compose</div>
        <div class="skill-cat"><strong>Camera & AR:</strong> Camera2 API, CameraX, ARCore, Image Processing</div>
        <div class="skill-cat"><strong>Backend & Services:</strong> Firebase (Auth, Firestore, FCM), REST APIs, SQLite</div>
        <div class="skill-cat"><strong>Tools:</strong> Android Studio, Git, GitHub, Postman, VS Code</div>
        <div class="skill-cat"><strong>AI & Productivity:</strong> ChatGPT, Gemini, Claude (prompt engineering & code generation)</div>
      </div>
    </section>

    <section>
      <h2>Education</h2>
      <div class="edu-header">
        <span>Bachelor of Technology &ndash; Computer Science &bull; <span class="company">Sanskriti University</span></span>
        <span class="date">2019 &ndash; 2023</span>
      </div>
    </section>
  </div>
</body>
</html>`;

    const blob = new Blob([resumeHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Manoj_Kumar_Android_Developer_Resume.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft blob 1 */}
        <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-purple-900/10 rounded-full blur-[110px] animate-pulse duration-[6000ms]" />
        {/* Soft blob 2 */}
        <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] bg-blue-900/10 rounded-full blur-[110px] animate-pulse duration-[4000ms]" />
        
        {/* Android Dot Grid representation background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10 text-left">
        
        {/* Left Column (Metadata & Introductions) */}
        <div className="md:col-span-7 space-y-6">
          
          {/* Tagline Material Pill */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full text-[11px] font-bold font-mono tracking-wider shadow-sm shadow-purple-500/5 uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>Android Software Architect</span>
          </motion.div>

          <div className="space-y-3">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Building Native <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
                Mobile Experiences
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl font-medium text-zinc-300 font-sans tracking-wide"
            >
              Manoj Kumar — <span className="text-purple-400">Android Developer</span>
            </motion.p>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl font-sans"
          >
            With <strong className="text-white font-semibold">3.2 Years of Experience</strong>, I craft high-performance, robust, and scalable Android environments utilizing <span className="text-white">Kotlin</span>, <span className="text-white">Java</span>, <span className="text-white">MVVM</span>, Jetpack Compose, Retrofit, Room database, and offline synchronizers. Certified in delivering battery-aware, pixel-perfect user journeys.
          </motion.p>

          {/* Quick Technical Specs Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-3 border-y border-white/5 py-4 max-w-lg text-[11px] font-semibold text-zinc-400 uppercase font-mono"
          >
            <div className="flex items-center gap-1.5 border-r border-white/5 pr-2">
              <Smartphone className="w-4 h-4 text-emerald-450 inline shrink-0" />
              <span>Native Core</span>
            </div>
            <div className="flex items-center gap-1.5 border-r border-white/5 px-2 justify-center">
              <ShieldCheck className="w-4 h-4 text-purple-400 inline shrink-0" />
              <span>Clean Arch</span>
            </div>
            <div className="flex items-center gap-1.5 pl-2 justify-end">
              <Cpu className="w-4 h-4 text-blue-400 inline shrink-0" />
              <span>Jetpack UI</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-3.5 pt-2"
          >
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold rounded-2xl hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all uppercase tracking-widest cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Contact Me</span>
            </button>

            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-bold rounded-2xl transition shadow-lg shadow-black/10 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-purple-400" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => setIsCoverLetterOpen(true)}
              className="flex items-center gap-2 px-5 py-3 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-purple-300 text-xs font-bold rounded-2xl transition shadow-lg shadow-purple-500/5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-purple-450 animate-pulse" />
              <span>Cover Letter</span>
            </button>

            <div className="flex items-center gap-2 pl-2">
              <a 
                href="https://github.com/themanojkr" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:text-white border border-white/10 text-zinc-400 rounded-xl transition"
                title="GitHub Profiles"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/themanojkr/" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:text-white border border-white/10 text-zinc-400 rounded-xl transition"
                title="LinkedIn Network"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Right Column (High Fidelity Visual Identity Representing Android Dev) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-72 sm:w-80 h-96 group">
            
            {/* Ambient Background Glow Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/25 to-blue-500/20 rounded-[48px] blur-2xl group-hover:scale-105 transition-all duration-700" />

            {/* Profile Avatar Frame Container */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-[48px] overflow-hidden p-6 shadow-2xl flex flex-col justify-between select-none">
              
              {/* Header Grid details */}
              <div className="flex justify-between items-center opacity-80 border-b border-white/5 pb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
                </div>
                <p className="text-[10px] font-mono font-medium text-purple-300">Class MainActivity</p>
              </div>

              {/* Code Blocks Representing Kotlin Development */}
              <div className="flex-1 py-4 flex flex-col justify-center font-mono text-[10.5px] leading-relaxed text-left">
                <p className="text-purple-305"><span className="text-zinc-500">import</span> android.os.Bundle</p>
                <p className="text-purple-305 mb-1.5"><span className="text-zinc-500">import</span> androidx.compose.ui</p>
                
                <p className="text-blue-300"><span className="text-zinc-500">class</span> MainActivity : ComponentActivity() &#123;</p>
                <p className="pl-3.5 text-zinc-350">
                  <span className="text-zinc-500">override fun</span> onCreate(savedState: Bundle?) &#123;
                </p>
                <p className="pl-7 text-purple-300">
                  setContent &#123;
                </p>
                <p className="pl-10 text-zinc-100 font-semibold flex items-center gap-1">
                  ManojKumarAppTheme &#123;
                </p>
                <p className="pl-14 text-blue-450 animate-pulse font-bold">
                  PortfolioScreen()
                </p>
                <p className="pl-10 text-zinc-100">&#125;</p>
                <p className="pl-7 text-purple-300">&#125;</p>
                <p className="pl-3.5 text-zinc-350">&#125;</p>
                <p className="text-blue-300">&#125;</p>
              </div>

              {/* Material Chip Overlay on bottom of avatar */}
              <div className="border-t border-white/5 pt-3 flex justify-between items-center text-[10px] font-mono">
                <span className="text-zinc-500 font-medium">SDK Version 34(U)</span>
                <span className="text-purple-300 font-semibold bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full">ACTIVE WORKSTATION</span>
              </div>
            </div>

            {/* Float badge 1: Years Experience */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-3 -right-4 bg-[#050508]/80 backdrop-blur-md border border-white/10 rounded-2xl p-3 px-4 shadow-xl text-left"
            >
              <h4 className="text-xl font-extrabold text-purple-400 font-mono leading-none">3.2+</h4>
              <p className="text-[9px] text-zinc-400 uppercase font-mono font-bold tracking-wider mt-1">Experience</p>
            </motion.div>

            {/* Float badge 2: Google Core Play Store */}
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, delay: 0.5, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-6 bg-[#050508]/80 backdrop-blur-md border border-white/10 rounded-2xl p-3 px-3.5 shadow-xl flex items-center gap-2.5 text-left"
            >
              <div className="w-7 h-7 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center font-bold text-xs">
                3.2
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Google Play</h4>
                <p className="text-[8px] text-zinc-500 font-mono">Verified Publisher</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      <CoverLetterModal 
        isOpen={isCoverLetterOpen} 
        onClose={() => setIsCoverLetterOpen(false)} 
      />
    </section>
  );
}

import { useState, useEffect } from "react";
import { X, Copy, Check, Download, Printer, FileText, Sparkles, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CoverLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CoverLetterModal({ isOpen, onClose }: CoverLetterModalProps) {
  const [copied, setCopied] = useState(false);
  const recipient = "Recruitment Team";
  const company = "Engineering Department";

  // Dynamically calculate the current date
  const currentDateString = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getLetterText = () => {
    return `Date: ${currentDateString}

Recipient:
${recipient}
${company}

Dear Hiring Team,

I am writing to express my strong interest in the Android Developer position. With over 3.2 years of hands-on experience in native Android development, a robust foundation in clean architecture patterns, and a genuine passion for engineering stable, user-centric mobile applications, I am highly eager to contribute to your team's success.

Throughout my professional tenure at INNsight Interactive and Beetonz Infotech, I have successfully designed, built, and shipped production-grade applications with significant active footprints on the Google Play Store. At INNsight, I play a critical role in engineering our core hospitality Property Management System (PMS) and Reputation Management System (RMS) client suites. My contributions span end-to-end full-lifecycle development, including setting up robust MVVM and Clean Architecture patterns, implementing secure custom authentication flows, and designing a reliable REST API synchronization engine with Room database to facilitate offline-first workspaces. Additionally, I successfully optimized runtime metrics by profiling memory usage and transitioned legacy visual screens to Jetpack Compose declarative UI, significantly reducing codebase footprints.

Previously, at Beetonz Infotech, I worked closely with modern hardware integration tools, utilizing the Camera2 and CameraX APIs to build high-performance image capture solutions with dynamic GPS/compass bearing stamping, and integrated ARCore spatial environments to build responsive measurements tools. My background also includes extensive integration with Firebase ecosystems (Auth, Firestore, Cloud Messaging, and Crashlytics) and scalable dependency injection utilizing Hilt.

I hold a Bachelor of Technology in Computer Science from Sanskriti University (2019-2023), which equipped me with rich, formal understanding of algorithms, database management, computer networks, and software engineering principles.

I am highly motivated to bring my expertise in native Android SDK, reactive threads, responsive layouts, and performance optimization to your engineering workflows. I am eager to apply my technical skills to build highly responsive, robust features that drive business growth and deliver flawless user experiences.

Thank you for your time, consideration, and opportunity. I look forward to the possibility of discussing how my experience and technical strengths align with your engineering goals.

Sincerely,

Manoj Kumar
Android Developer
manojkr32000@gmail.com | +91 7255804850`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getLetterText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const letterHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Manoj Kumar - Android Developer Cover Letter</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      color: #1f2937;
      line-height: 1.6;
      margin: 0;
      padding: 40px;
      background-color: #ffffff;
    }
    .container {
      max-width: 700px;
      margin: 0 auto;
    }
    header {
      border-bottom: 2px solid #6d28d9;
      padding-bottom: 20px;
      margin-bottom: 25px;
    }
    h1 {
      margin: 0 0 5px 0;
      font-size: 28px;
      font-weight: 700;
      color: #5b21b6;
    }
    .title-sub {
      font-size: 14px;
      font-weight: 600;
      color: #6d28d9;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 12px;
    }
    .contact-info {
      font-size: 13px;
      color: #4b5563;
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
    }
    .contact-info a {
      color: #6d28d9;
      text-decoration: none;
    }
    .date-recipient {
      margin-bottom: 25px;
      font-size: 14px;
    }
    .date {
      color: #6b7280;
      margin-bottom: 15px;
      font-weight: 500;
    }
    .recipient {
      font-weight: 600;
      color: #111827;
      line-height: 1.5;
    }
    .salutation {
      font-weight: 600;
      margin-bottom: 15px;
      color: #111827;
    }
    p {
      font-size: 14px;
      color: #374151;
      text-align: justify;
      margin-bottom: 16px;
    }
    .sign-off {
      margin-top: 30px;
      font-size: 14px;
    }
    .signature {
      font-weight: 700;
      color: #111827;
      margin-top: 20px;
      font-size: 16px;
    }
    @media print {
      body {
        padding: 0;
        color: #000000;
      }
      header {
        border-bottom-color: #000000;
      }
      h1, .title-sub, .contact-info a {
        color: #000000;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>MANOJ KUMAR</h1>
      <div class="title-sub">Android Developer</div>
      <div class="contact-info">
        <span><strong>Phone:</strong> +91 7255804850</span>
        <span><strong>Email:</strong> <a href="mailto:manojkr32000@gmail.com">manojkr32000@gmail.com</a></span>
        <span><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/themanojkr" target="_blank">linkedin.com/in/themanojkr</a></span>
      </div>
    </header>

    <div class="date-recipient">
      <div class="date">${currentDateString}</div>
      <div class="recipient">
        <strong>${recipient}</strong><br>
        ${company}
      </div>
    </div>

    <div class="salutation">Dear Hiring Team,</div>

    <p>I am writing to express my strong interest in the Android Developer position. With over 3.2 years of hands-on experience in native Android development, a robust foundation in clean architecture patterns, and a genuine passion for engineering stable, user-centric mobile applications, I am highly eager to contribute to your team's success.</p>

    <p>Throughout my professional tenure at INNsight Interactive and Beetonz Infotech, I have successfully designed, built, and shipped production-grade applications with significant active footprints on the Google Play Store. At INNsight, I play a critical role in engineering our core hospitality Property Management System (PMS) and Reputation Management System (RMS) client suites. My contributions span end-to-end full-lifecycle development, including setting up robust MVVM and Clean Architecture patterns, implementing secure custom authentication flows, and designing a reliable REST API synchronization engine with Room database to facilitate offline-first workspaces. Additionally, I successfully optimized runtime metrics by profiling memory usage and transitioned legacy visual screens to Jetpack Compose declarative UI, significantly reducing codebase footprints.</p>

    <p>Previously, at Beetonz Infotech, I worked closely with modern hardware integration tools, utilizing the Camera2 and CameraX APIs to build high-performance image capture solutions with dynamic GPS/compass bearing stamping, and integrated ARCore spatial environments to build responsive measurements tools. My background also includes extensive integration with Firebase ecosystems (Auth, Firestore, Cloud Messaging, and Crashlytics) and scalable dependency injection utilizing Hilt.</p>

    <p>I hold a Bachelor of Technology in Computer Science from Sanskriti University (2019-2023), which equipped me with rich, formal understanding of algorithms, database management, computer networks, and software engineering principles.</p>

    <p>I am highly motivated to bring my expertise in native Android SDK, reactive threads, responsive layouts, and performance optimization to your engineering workflows. I am eager to apply my technical skills to build highly responsive, robust features that drive business growth and deliver flawless user experiences.</p>

    <p>Thank you for your time, consideration, and opportunity. I look forward to the possibility of discussing how my experience and technical strengths align with your engineering goals.</p>

    <div class="sign-off">
      Sincerely,
      <div class="signature">Manoj Kumar</div>
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([letterHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Manoj_Kumar_Cover_Letter_${company.replace(/[^a-zA-Z0-9]/g, "_")}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Print Cover Letter - Manoj Kumar</title>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
              body {
                font-family: 'Inter', sans-serif;
                padding: 40px;
                color: #1f2937;
                line-height: 1.6;
              }
              .container { max-width: 650px; margin: 0 auto; }
              header { border-bottom: 2px solid #4b5563; padding-bottom: 15px; margin-bottom: 25px; }
              h1 { margin: 0; font-size: 24px; color: #111827; }
              .sub { font-size: 13px; font-weight: 600; color: #4b5563; text-transform: uppercase; margin-bottom: 10px; }
              .contacts { font-size: 12px; color: #4b5563; display: flex; gap: 15px; }
              .section { margin-bottom: 20px; }
              p { font-size: 13.5px; margin-bottom: 15px; text-align: justify; }
              .sig { margin-top: 30px; font-size: 13.5px; }
              .name { font-weight: bold; margin-top: 15px; }
            </style>
          </head>
          <body>
            <div class="container">
              <header>
                <h1>MANOJ KUMAR</h1>
                <div class="sub">Android Developer</div>
                <div class="contacts">
                  <span>+91 7255804850</span>
                  <span>manojkr32000@gmail.com</span>
                  <span>linkedin.com/in/themanojkr</span>
                </div>
              </header>
              <div class="section">
                <div>${currentDateString}</div>
                <br>
                <strong>${recipient}</strong><br>
                ${company}
              </div>
              <div class="section">
                <p>Dear Hiring Team,</p>
                <p>I am writing to express my strong interest in the Android Developer position. With over 3.2 years of hands-on experience in native Android development, a robust foundation in clean architecture patterns, and a genuine passion for engineering stable, user-centric mobile applications, I am highly eager to contribute to your team's success.</p>
                <p>Throughout my professional tenure at INNsight Interactive and Beetonz Infotech, I have successfully designed, built, and shipped production-grade applications with significant active footprints on the Google Play Store. At INNsight, I play a critical role in engineering our core hospitality Property Management System (PMS) and Reputation Management System (RMS) client suites. My contributions span end-to-end full-lifecycle development, including setting up robust MVVM and Clean Architecture patterns, implementing secure custom authentication flows, and designing a reliable REST API synchronization engine with Room database to facilitate offline-first workspaces. Additionally, I successfully optimized runtime metrics by profiling memory usage and transitioned legacy visual screens to Jetpack Compose declarative UI, significantly reducing codebase footprints.</p>
                <p>Previously, at Beetonz Infotech, I worked closely with modern hardware integration tools, utilizing the Camera2 and CameraX APIs to build high-performance image capture solutions with dynamic GPS/compass bearing stamping, and integrated ARCore spatial environments to build responsive measurements tools. My background also includes extensive integration with Firebase ecosystems (Auth, Firestore, Cloud Messaging, and Crashlytics) and scalable dependency injection utilizing Hilt.</p>
                <p>I hold a Bachelor of Technology in Computer Science from Sanskriti University (2019-2023), which equipped me with rich, formal understanding of algorithms, database management, computer networks, and software engineering principles.</p>
                <p>I am highly motivated to bring my expertise in native Android SDK, reactive threads, responsive layouts, and performance optimization to your engineering workflows. I am eager to apply my technical skills to build highly responsive, robust features that drive business growth and deliver flawless user experiences.</p>
                <p>Thank you for your time, consideration, and opportunity. I look forward to the possibility of discussing how my experience and technical strengths align with your engineering goals.</p>
              </div>
              <div class="sig">
                Sincerely,<br>
                <div class="name">Manoj Kumar</div>
              </div>
            </div>
            <script>
              window.onload = function() {
                window.print();
              }
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#050508]/95 backdrop-blur-md"
        />

        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-zinc-950 border border-white/10 rounded-3xl w-full max-w-3xl h-[85vh] max-h-[820px] flex flex-col overflow-hidden shadow-2xl shadow-purple-500/5 z-10"
        >
          {/* Header Panel */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-zinc-900/40">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                <FileText className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-purple-400 uppercase">Professional Document</span>
                  <Sparkles className="w-3 h-3 text-purple-400 animate-pulse" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">Android Developer Cover Letter</h3>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-300 hover:text-white transition flex items-center gap-1.5 text-xs font-semibold px-3 cursor-pointer"
                title="Copy letter to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDownload}
                className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 text-purple-300 hover:text-white transition flex items-center gap-1.5 text-xs font-semibold px-3 cursor-pointer"
                title="Download HTML Document"
              >
                <Download className="w-4 h-4" />
                <span>Download HTML</span>
              </button>

              <button
                onClick={handlePrint}
                className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-300 hover:text-white transition cursor-pointer"
                title="Print Cover Letter"
              >
                <Printer className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Letter Body View (Scrollable area) */}
          <div className="flex-1 overflow-y-auto p-8 text-left bg-zinc-950 text-zinc-300 font-sans text-sm leading-relaxed space-y-6">
            
            {/* Sender Address */}
            <div className="flex justify-between items-start border-b border-white/5 pb-4">
              <div>
                <h4 className="text-lg font-bold text-white tracking-tight font-sans">Manoj Kumar</h4>
                <p className="text-purple-450 text-xs font-semibold uppercase tracking-wider font-mono">Software Engineer – Android</p>
              </div>
              <div className="text-right text-xs text-zinc-400 font-mono space-y-1">
                <p>+91 7255804850</p>
                <p><a href="mailto:manojkr32000@gmail.com" className="hover:text-purple-400 transition">manojkr32000@gmail.com</a></p>
                <p><a href="https://linkedin.com/in/themanojkr" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">linkedin.com/in/themanojkr</a></p>
              </div>
            </div>

            {/* Date & Recipient Details */}
            <div className="space-y-1.5 text-xs text-zinc-400">
              <p className="font-mono text-purple-400 font-medium">{currentDateString}</p>
              <div className="pt-2 font-mono">
                <p className="text-white font-semibold text-sm font-sans">{recipient}</p>
                <p className="text-zinc-300 font-medium font-sans">{company}</p>
              </div>
            </div>

            {/* Letter Content paragraphs */}
            <div className="space-y-4 text-zinc-300 text-sm leading-relaxed pt-2 font-normal">
              <p className="font-medium text-white">Dear Hiring Team,</p>

              <p>
                I am writing to express my strong interest in the <span className="text-white font-medium">Android Developer</span> position. With over 3.2 years of hands-on experience in native Android development, a robust foundation in clean architecture patterns, and a genuine passion for engineering stable, user-centric mobile applications, I am highly eager to contribute to your team's success.
              </p>

              <p>
                Throughout my professional tenure at <strong className="text-white font-semibold">INNsight Interactive</strong> and <strong className="text-white font-semibold">Beetonz Infotech</strong>, I have successfully designed, built, and shipped production-grade applications with significant active footprints on the Google Play Store. At INNsight, I play a critical role in engineering our core hospitality Property Management System (PMS) and Reputation Management System (RMS) client suites. My contributions span end-to-end full-lifecycle development, including setting up robust MVVM and Clean Architecture patterns, implementing secure custom authentication flows, and designing a reliable REST API synchronization engine with Room database to facilitate offline-first workspaces. Additionally, I successfully optimized runtime metrics by profiling memory usage and transitioned legacy visual screens to Jetpack Compose declarative UI, significantly reducing codebase footprints.
              </p>

              <p>
                Previously, at Beetonz Infotech, I worked closely with modern hardware integration tools, utilizing the Camera2 and CameraX APIs to build high-performance image capture solutions with dynamic GPS/compass bearing stamping, and integrated ARCore spatial environments to build responsive measurements tools. My background also includes extensive integration with Firebase ecosystems (Auth, Firestore, Cloud Messaging, and Crashlytics) and scalable dependency injection utilizing Hilt.
              </p>

              <p>
                I hold a Bachelor of Technology in Computer Science from Sanskriti University (2019-2023), which equipped me with rich, formal understanding of algorithms, database management, computer networks, and software engineering principles.
              </p>

              <p>
                I am highly motivated to bring my expertise in native Android SDK, reactive threads, responsive layouts, and performance optimization to your engineering workflows. I am eager to apply my technical skills to build highly responsive, robust features that drive business growth and deliver flawless user experiences.
              </p>

              <p>
                Thank you for your time, consideration, and opportunity. I look forward to the possibility of discussing how my experience and technical strengths align with your engineering goals.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-6 border-t border-white/5 space-y-4">
              <div>
                <p className="text-zinc-400">Sincerely,</p>
                <p className="text-base font-bold text-white tracking-tight mt-1.5 font-sans">Manoj Kumar</p>
                <p className="text-xs text-purple-450 font-semibold uppercase tracking-wider font-mono">Software Engineer – Android</p>
              </div>
            </div>

          </div>

          {/* Footer with a submit prompt representation */}
          <div className="px-6 py-4 bg-zinc-900/20 border-t border-white/5 flex justify-between items-center text-[11px] text-zinc-500 font-mono">
            <span className="flex items-center gap-1"><Send className="w-3.5 h-3.5 text-purple-500" /> Active Job Application Ready</span>
            <span>Manoj_Kumar_Cover_Letter.html • 12 KB</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

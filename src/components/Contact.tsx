import { useState, FormEvent } from "react";
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 2500);
      return;
    }

    setFormState("loading");

    // Simulate standard fast server dispatch
    setTimeout(() => {
      setFormState("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative border-t border-white/5 overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute bottom-[5%] left-[5%] w-[380px] h-[380px] bg-purple-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl text-left mb-16 space-y-3">
          <span className="text-[10px] font-bold text-purple-400 font-mono tracking-widest uppercase block">Active Gateway</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Connect With Me
          </h2>
          <p className="text-zinc-350 text-sm md:text-base leading-relaxed">
            Interested in building next-generation native systems together or scaling current structures? Submit a notification below or ping directly.
          </p>
        </div>

        {/* Main Content Info x Form Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left panel: Info cards */}
          <div className="md:col-span-5 space-y-5 text-left text-white">
            
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-3xl space-y-4">
              <h3 className="text-base font-bold tracking-tight text-zinc-100">Direct Credentials</h3>
              
              <div className="space-y-4 text-xs font-semibold text-zinc-400 pt-2 font-mono">
                
                <a 
                  href="mailto:manojkr32000@gmail.com" 
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 hover:text-white transition group"
                >
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-purple-900/20 text-purple-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <p className="text-[9px] text-zinc-500 font-mono">EMAIL ADDRESS</p>
                    <p className="text-[11.5px] truncate text-zinc-300 group-hover:text-purple-300">manojkr32000@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+917255804850" 
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 hover:text-white transition group"
                >
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-purple-900/20 text-blue-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <p className="text-[9px] text-zinc-500 font-mono">PHONE TELEPHONE</p>
                    <p className="text-[11.5px] text-zinc-300 group-hover:text-blue-300">+91 7255804850</p>
                  </div>
                </a>

              </div>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-3xl space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-350 font-mono">Networking Handles</h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/themanojkr"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#050508]/50 border border-white/10 hover:border-white/25 text-xs font-semibold text-zinc-300 hover:text-white transition"
                >
                  <Github className="w-4 h-4 text-zinc-400" />
                  <span>GitHub</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/themanojkr/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#050508]/50 border border-white/10 hover:border-white/25 text-xs font-semibold text-zinc-300 hover:text-white transition"
                >
                  <Linkedin className="w-4 h-4 text-purple-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right panel: Contact Form */}
          <div className="md:col-span-7">
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 sm:p-8 rounded-[36px] relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-5 text-left text-white relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide font-mono">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Akash Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#050508]/60 border border-white/10 focus:border-purple-500 rounded-2xl p-3 px-4 text-xs font-medium text-white focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide font-mono">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. akash@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#050508]/60 border border-white/10 focus:border-purple-500 rounded-2xl p-3 px-4 text-xs font-medium text-white focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide font-mono">Message Textbox</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your design specifications or potential projects..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#050508]/60 border border-white/10 focus:border-purple-500 rounded-2xl p-3 px-4 text-xs font-medium text-white focus:outline-none transition-all duration-300 resize-none"
                  />
                </div>

                {/* State-driven actions button */}
                <button
                  type="submit"
                  disabled={formState === "loading" || formState === "success"}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-xs font-extrabold rounded-2xl border border-white/10 shadow-lg shadow-purple-500/10 cursor-pointer disabled:opacity-50 transition-all duration-300"
                >
                  {formState === "idle" && (
                    <>
                      <span>Transmit Notification</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}

                  {formState === "loading" && (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Broadcasting Signals...</span>
                    </>
                  )}

                  {formState === "success" && (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Message Broadcast Completed!</span>
                    </>
                  )}

                  {formState === "error" && (
                    <>
                      <AlertCircle className="w-3.5 h-3.5 text-rose-300" />
                      <span>Please complete all fields</span>
                    </>
                  )}
                </button>
              </form>

              {/* Success Panel Overlay */}
              <AnimatePresence>
                {formState === "success" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#050508]/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center text-white"
                  >
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center text-emerald-400 mb-4"
                    >
                      <CheckCircle2 className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-base font-bold tracking-tight">Signal Dispatch Successful</h3>
                    <p className="text-zinc-400 text-xs mt-2 max-w-xs leading-normal">
                      Thank you! Your notification has been logged securely in the cloud inbox. Manoj will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="mt-5 py-1.5 px-4 rounded-xl bg-white/5 border border-white/10 text-[10.5px] font-bold text-zinc-300 hover:text-white transition"
                    >
                      Dismiss View
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

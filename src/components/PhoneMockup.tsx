import { useState, useEffect } from "react";
import { 
  Wifi, Signal, Battery, Search, MessageSquare, Send, Calendar, CheckCircle2, 
  MapPin, CheckSquare, Plus, AlertCircle, ShoppingCart, Sparkles, Languages,
  Clock, ServerCrash, Layers, User, MoreVertical, Heart, ThumbsUp, HelpCircle,
  Cpu
} from "lucide-react";

interface PhoneMockupProps {
  projectId: string;
  screenType: string;
}

export default function PhoneMockup({ projectId, screenType }: PhoneMockupProps) {
  // Simulate active dynamic state on the mock phone
  const [currentTime, setCurrentTime] = useState("10:42 AM");
  const [messages, setMessages] = useState<Array<{ sender: string; text: string; time: string }>>([]);
  const [inputText, setInputText] = useState("");
  const [rooms, setRooms] = useState([
    { number: "101", type: "Deluxe King", status: "Occupied", color: "text-amber-400 bg-amber-400/10 border-amber-500/30" },
    { number: "102", type: "Standard Queen", status: "Needs Service", color: "text-rose-400 bg-rose-400/10 border-rose-500/30" },
    { number: "103", type: "Premium Suite", status: "Available", color: "text-emerald-400 bg-emerald-400/10 border-emerald-500/30" },
    { number: "104", type: "Deluxe Twin", status: "Available", color: "text-emerald-400 bg-emerald-400/10 border-emerald-500/30" },
  ]);
  const [todoTasks, setTodoTasks] = useState([
    { id: 1, text: "Deliver organic dairy bundle to Apt 4B", done: false },
    { id: 2, text: "Check age ID verification for Order #1042", done: true },
    { id: 3, text: "Contact dispatch coordinate @ Node 7", done: false },
  ]);

  useEffect(() => {
    // Keep time matching real-world or standard
    const t = new Date();
    setCurrentTime(`${t.getHours().toString().padStart(2, "0")}:${t.getMinutes().toString().padStart(2, "0")}`);
  }, []);

  // Pre-populate chat list once on mount or when chat screen loads
  useEffect(() => {
    if (screenType === "chat") {
      setMessages([
        { sender: "guest", text: "Hello! We checked into Room 102. Can we request 2 extra soft pillows and an ambient light adapter?", time: "10:39 AM" },
        { sender: "staff", text: "Hello! Absolutely. Our front-desk coordinator is deploying housekeeping to Room 102. They'll arrive shortly.", time: "10:41 AM" }
      ]);
    } else if (screenType === "ai-chat") {
      setMessages([
        { sender: "ai", text: "Bonjour, Manoj! Let's practice ordering coffee in Paris. Ready? Try saying: 'Je voudrais un café, s'il vous plaît.'", time: "10:40 AM" },
        { sender: "user", text: "Je voudrais un café, s'il vous plaît! Is my pronunciation okay?", time: "10:41 AM" },
        { sender: "ai", text: "Excellent! Speed & tone score: 94%. Your nasal sound on 'un' is perfect. Now, let's learn how to ask for the bill.", time: "10:42 AM" }
      ]);
    }
  }, [screenType]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    const newMsg = { sender: "user", text: inputText, time: "Just now" };
    setMessages((prev) => [...prev, newMsg]);
    setInputText("");

    if (screenType === "ai-chat") {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "ai", text: "Magnifique! Your rhythm exceeds 90% of native speaker levels. Daily streak is now 14 days. 🚀", time: "Just now" }
        ]);
      }, 900);
    } else {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "staff", text: "Understood. The operational ticket has been updated successfully. Thank you!", time: "Just now" }
        ]);
      }, 1000);
    }
  };

  const toggleRoomStatus = (index: number) => {
    setRooms(prev => {
      const copy = [...prev];
      if (copy[index].status === "Needs Service") {
        copy[index].status = "Clean";
        copy[index].color = "text-emerald-400 bg-emerald-400/10 border-emerald-500/30";
      } else if (copy[index].status === "Clean") {
        copy[index].status = "Occupied";
        copy[index].color = "text-amber-400 bg-amber-400/10 border-amber-500/30";
      } else {
        copy[index].status = "Needs Service";
        copy[index].color = "text-rose-400 bg-rose-400/10 border-rose-500/30";
      }
      return copy;
    });
  };

  // Render different screen contents inside the premium frame
  const renderScreenContent = () => {
    switch (projectId) {
      case "rms-app":
        if (screenType === "dashboard") {
          return (
            <div className="p-4 space-y-4 text-white overflow-y-auto h-full max-h-[460px] scrollbar-thin">
              <div className="flex justify-between items-center bg-violet-600/20 border border-violet-500/30 rounded-xl p-3">
                <div>
                  <p className="text-[10px] text-violet-300 font-semibold tracking-wider uppercase">RMS Active Property</p>
                  <p className="text-sm font-semibold truncate">Grand Imperial Palace</p>
                </div>
                <div className="px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 text-[10px] rounded-full text-emerald-400 font-medium">Synced</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex flex-col justify-between h-24">
                  <div className="p-1 px-2 text-[10px] font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit rounded-lg flex items-center gap-1">
                    <User className="w-3 h-3" /> Guests
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-mono">48</h3>
                    <p className="text-[10px] text-zinc-400">Total Check-Ins Today</p>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex flex-col justify-between h-24">
                  <div className="p-1 px-2 text-[10px] font-medium bg-amber-500/10 border border-amber-500/20 text-amber-400 w-fit rounded-lg flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Cleanings
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-mono">14</h3>
                    <p className="text-[10px] text-zinc-400">Rooms in Queue</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-zinc-300">Quick Operations Panel</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 bg-zinc-950 p-2.5 rounded-lg border border-zinc-800 hover:border-zinc-700 transition">
                    <Calendar className="w-4 h-4 text-violet-400" />
                    <div className="flex-1 text-left">
                      <p className="text-xs font-medium">Verify Walk-In Guest</p>
                      <p className="text-[9px] text-zinc-400">QR Code or Confirmation ID</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-zinc-950 p-2.5 rounded-lg border border-zinc-800 hover:border-zinc-700 transition">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <div className="flex-1 text-left">
                      <p className="text-xs font-medium">Inspect VIP Suite 402</p>
                      <p className="text-[9px] text-zinc-400">Ready for clean checklist checkoff</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (screenType === "rooms") {
          return (
            <div className="p-4 space-y-4 text-white">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold tracking-wide">Housekeeping Sync</h3>
                <span className="text-[10px] bg-violet-500/20 text-violet-300 border border-violet-500/30 px-2 py-0.5 rounded-full">Automatic Mode</span>
              </div>
              <div className="space-y-2.5">
                {rooms.map((room, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => toggleRoomStatus(idx)}
                    className="flex justify-between items-center p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-left cursor-pointer hover:border-zinc-700 transition"
                  >
                    <div>
                      <p className="text-xs font-bold font-mono">Room {room.number}</p>
                      <p className="text-[9px] text-zinc-400">{room.type}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`px-2 py-1 text-[9px] rounded font-semibold border ${room.color}`}>
                        {room.status}
                      </div>
                      <p className="text-[8px] text-zinc-500 italic">Tap to cycle</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        } else { // booking
          return (
            <div className="p-3 space-y-3 text-white">
              <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800 text-left space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xs font-semibold text-zinc-100">Live Booking Intake</h3>
                    <p className="text-[9px] text-zinc-400">Incoming online channels</p>
                  </div>
                  <span className="text-[8px] tracking-wider px-1.5 py-0.5 bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded font-semibold">URGENT</span>
                </div>
                
                <div className="space-y-2 border-t border-zinc-800 pt-2">
                  <div className="text-[10px] bg-zinc-950 p-2 rounded border border-zinc-800">
                    <div className="flex justify-between font-bold text-zinc-300">
                      <span>Anish K. (Expedia)</span>
                      <span className="text-emerald-400">$210.00</span>
                    </div>
                    <p className="text-[8px] text-zinc-500 mt-1">Check-in: 12 Jun - 14 Jun | Room: Executive</p>
                  </div>
                  <div className="text-[10px] bg-zinc-950 p-2 rounded border border-zinc-800">
                    <div className="flex justify-between font-bold text-zinc-300">
                      <span>Sarah Stone (Direct)</span>
                      <span className="text-emerald-400">$380.00</span>
                    </div>
                    <p className="text-[8px] text-zinc-500 mt-1">Check-in: 13 Jun - 16 Jun | Room: Suite VIP</p>
                  </div>
                </div>
              </div>
            </div>
          );
        }

      case "innsight-hospitality":
        if (screenType === "chat") {
          return (
            <div className="flex flex-col h-[400px] text-white">
              <div className="bg-zinc-900 p-2 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center text-[10px] font-bold">102</div>
                  <div className="text-left">
                    <p className="text-[10px] font-semibold">Room 102 Concierge Chat</p>
                    <p className="text-[8px] text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span> Guest Active
                    </p>
                  </div>
                </div>
                <MoreVertical className="w-4 h-4 text-zinc-400" />
              </div>

              {/* Chat history */}
              <div className="flex-1 p-3 overflow-y-auto space-y-2 flex flex-col justify-end text-left scrollbar-thin">
                {messages.map((m, idx) => (
                  <div 
                    key={idx} 
                    className={`max-w-[80%] rounded-xl p-2.5 text-[10px] ${
                      m.sender === "guest" 
                        ? "bg-zinc-900 border border-zinc-800 self-start" 
                        : m.sender === "staff"
                        ? "bg-violet-600/30 border border-violet-500/30 self-end text-right"
                        : "bg-violet-600 text-white self-end text-right" // user typing
                    }`}
                  >
                    <p>{m.text}</p>
                    <p className="text-[7px] text-zinc-400 mt-1">{m.time}</p>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-2 border-t border-zinc-800 flex items-center gap-2 bg-zinc-950">
                <input 
                  type="text" 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type concierge reply..."
                  className="flex-1 bg-zinc-900 text-[10px] border border-zinc-800 rounded-lg p-1.5 px-2.5 focus:outline-none focus:border-violet-500 text-white"
                />
                <button 
                  onClick={handleSendMessage}
                  className="p-1.5 bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        } else { // tickets
          return (
            <div className="p-4 space-y-3 text-white">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-semibold">Service Log</h3>
                <span className="text-[8px] bg-amber-500/20 text-amber-300 border border-amber-500/20 px-1.5 py-0.5 rounded-full font-mono">2 Escalations</span>
              </div>

              <div className="space-y-2 text-left">
                <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800">
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-bold text-zinc-100 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                      AC Inoperative Room 208
                    </p>
                    <span className="text-[7px] bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded font-semibold px-1 py-0.5">HIGH</span>
                  </div>
                  <p className="text-[9px] text-zinc-400 mt-1">Reported by: Guest via Chat | Assigned to: Maintenance (Amit)</p>
                  <div className="flex items-center gap-1.5 mt-2 bg-zinc-950 p-1 px-2 rounded w-fit">
                    <span className="w-1 h-1 rounded-full bg-amber-400"></span>
                    <p className="text-[8px] text-amber-200">Engineer is on-site</p>
                  </div>
                </div>

                <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800 opacity-60">
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-bold text-zinc-200 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Extra Towels Room 312
                    </p>
                    <span className="text-[7px] bg-zinc-800 text-zinc-400 border border-zinc-700 rounded px-1 py-0.5">RESOLVED</span>
                  </div>
                  <p className="text-[9px] text-zinc-500 mt-1">Housekeeper closed issue in 4.5 minutes.</p>
                </div>
              </div>
            </div>
          );
        }

      case "gps-camera":
        if (screenType === "live-lens") {
          return (
            <div className="text-white h-full max-h-[460px] flex flex-col justify-between relative bg-black select-none">
              {/* Live Camera Viewport */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-black/40 pointer-events-none" />
              
              {/* Simulated Landscape backdrop */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="w-[180px] h-[180px] bg-sky-400/10 rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-10 inset-x-0 h-24 bg-gradient-to-t from-emerald-950/20 to-transparent border-t border-emerald-950/5 lg:opacity-40" />
              </div>

              {/* Overlays */}
              <div className="p-3 flex justify-between items-start z-10">
                <div className="p-1 px-2 bg-black/60 border border-white/10 rounded-lg text-[9px] font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
                  <span>SATS: 14 Active</span>
                </div>
                <div className="p-1 px-2 bg-black/60 border border-white/10 rounded-lg text-[9px] font-mono">
                  <span>312° NW</span>
                </div>
              </div>

              {/* Crosshair */}
              <div className="flex-1 flex items-center justify-center relative">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                </div>
                <div className="absolute w-12 h-[1px] bg-white/10" />
                <div className="absolute h-12 w-[1px] bg-white/10" />
              </div>

              {/* Stamp overlay */}
              <div className="p-3 bg-black/70 border-t border-white/10 text-left space-y-1.5 font-mono z-10">
                <p className="text-purple-400 font-bold text-[10px] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> GPS MAP CAMERA
                </p>
                <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[8px] text-zinc-350">
                  <p><span className="text-zinc-500">LAT:</span> 21.1702° N</p>
                  <p><span className="text-zinc-500">LONG:</span> 72.8311° E</p>
                  <p><span className="text-zinc-500">ALT:</span> 24.3 m</p>
                  <p><span className="text-zinc-500">ACC:</span> 1.8 m</p>
                </div>
                <p className="text-[7.5px] text-purple-300 truncate border-t border-white/5 pt-1">
                  Surat Fort Area, Gujarat, India
                </p>
              </div>

              <div className="p-2.5 bg-black flex justify-around items-center border-t border-white/5 text-[9px] z-10">
                <button className="text-zinc-450">⚡ HDR</button>
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center active:scale-95 duration-100 transition cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-white active:bg-zinc-200" />
                </div>
                <button className="text-zinc-450">⚙️ Mode</button>
              </div>
            </div>
          );
        } else if (screenType === "map-overlay") {
          return (
            <div className="text-white h-full max-h-[460px] flex flex-col justify-between relative bg-[#050508] select-none text-left">
              <div className="p-3 border-b border-white/10 bg-[#050508] z-10">
                <p className="text-[9px] text-purple-450 font-bold uppercase tracking-wider">Coordinates Layer</p>
                <h4 className="text-xs font-bold truncate">Real-time Map Synced</h4>
              </div>
              
              <div className="flex-1 relative bg-zinc-950 flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <div className="w-full h-full border border-dashed border-zinc-850 grid grid-cols-6 grid-rows-8"></div>
                </div>

                <svg className="w-60 h-32 border border-white/10 bg-[#050508]/60 rounded-xl z-10" viewBox="0 0 200 100">
                  <path d="M 20 50 Q 100 0 140 70 T 180 30" fill="none" stroke="#a855f7" strokeWidth="2.5" strokeDasharray="3,2" />
                  <g transform="translate(140, 70)">
                    <circle cx="0" cy="0" r="5" fill="#a855f7" className="animate-ping" />
                    <circle cx="0" cy="0" r="4" fill="#a855f7" />
                  </g>
                  <path d="M 180 25 L 180 35 M 175 30 L 185 30" stroke="#f43f5e" strokeWidth="1.5" />
                </svg>

                <div className="absolute bottom-2 left-2 p-1.5 px-2 bg-black/80 border border-white/10 rounded-lg text-[8px] font-mono z-20">
                  SPEED: <span className="text-purple-400">0.0 km/h</span>
                </div>
              </div>
            </div>
          );
        } else { // logbook
          return (
            <div className="p-3.5 space-y-3 text-white text-left overflow-y-auto max-h-[460px] scrollbar-thin">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <h4 className="text-xs font-bold text-zinc-200">GPS Photo Logs</h4>
                <span className="text-[8px] bg-purple-500/20 text-purple-300 border border-purple-500/25 px-1.5 py-0.5 rounded font-mono">3 Logs Saved</span>
              </div>
              <div className="space-y-2">
                <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 space-y-1">
                  <p className="text-[10px] font-bold">Surat Fort Survey_003.jpg</p>
                  <p className="text-[8px] text-zinc-400 font-mono">21.1702° N, 72.8311° E</p>
                  <div className="flex justify-between text-[7px] text-zinc-500 font-mono mt-1">
                    <span>Altitude: 24.3m</span>
                    <span>12-Jun-2026</span>
                  </div>
                </div>
                <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 space-y-1">
                  <p className="text-[10px] font-bold">Western Hub Gate_002.jpg</p>
                  <p className="text-[8px] text-zinc-400 font-mono">21.1685° N, 72.8256° E</p>
                  <div className="flex justify-between text-[7px] text-zinc-500 font-mono mt-1">
                    <span>Altitude: 21.0m</span>
                    <span>11-Jun-2026</span>
                  </div>
                </div>
              </div>
            </div>
          );
        }

      case "two-factor-authenticator":
        if (screenType === "token-feed") {
          return (
            <div className="p-3 text-white text-left flex flex-col justify-between h-full max-h-[460px] relative">
              <div className="space-y-3 overflow-y-auto scrollbar-thin flex-1">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <h4 className="text-xs font-bold text-zinc-200">OTP Code Accounts</h4>
                  <div className="w-3 h-3 rounded-full border-2 border-purple-500 border-t-transparent animate-spin shrink-0"></div>
                </div>
                <div className="space-y-2">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 relative flex justify-between items-center hover:border-white/10 transition">
                    <div className="space-y-0.5">
                      <p className="text-[8px] font-bold text-purple-400 font-mono uppercase tracking-wider">GitHub Enterprise</p>
                      <h3 className="text-lg font-mono font-bold tracking-wider text-white">481 092</h3>
                      <p className="text-[7.5px] text-zinc-500">manoj-kumar@github</p>
                    </div>
                    <span className="text-[10px] text-purple-400 font-bold bg-purple-500/10 px-1.5 py-0.5 rounded font-mono">24s</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 relative flex justify-between items-center hover:border-white/10 transition">
                    <div className="space-y-0.5">
                      <p className="text-[8px] font-bold text-emerald-400 font-mono uppercase tracking-wider">Amazon Web Services</p>
                      <h3 className="text-lg font-mono font-bold tracking-wider text-white">938 124</h3>
                      <p className="text-[7.5px] text-zinc-500">aws-prod-admin</p>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono">18s</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 flex justify-end z-10">
                <div className="p-2 bg-purple-600 hover:bg-purple-500 rounded-full cursor-pointer transition">
                  <Plus className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          );
        } else if (screenType === "qr-import") {
          return (
            <div className="text-white h-full max-h-[460px] flex flex-col justify-between bg-black text-center select-none relative">
              <div className="p-3 bg-[#050508]/80 z-10 border-b border-white/5 text-left">
                <p className="text-[8px] text-purple-450 font-bold uppercase tracking-wider">QR Scanner Engine</p>
                <h4 className="text-xs font-semibold">Align Authentication Code</h4>
              </div>

              <div className="flex-1 flex items-center justify-center relative">
                <div className="w-32 h-32 border-2 border-purple-500 rounded-2xl relative flex items-center justify-center">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-450 -mt-[2px] -ml-[2px] rounded-tl-md"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-450 -mt-[2px] -mr-[2px] rounded-tr-md"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-450 -mb-[2px] -ml-[2px] rounded-bl-md"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-450 -mb-[2px] -mr-[2px] rounded-br-md"></div>
                  
                  <div className="w-28 h-0.5 bg-purple-500/80 rounded-full animate-bounce"></div>
                </div>
                <p className="absolute bottom-4 inset-x-0 text-[8.5px] text-zinc-400">Scanner searching for TOTP seeds...</p>
              </div>
            </div>
          );
        } else { // security-lock
          return (
            <div className="text-white h-full max-h-[460px] flex flex-col items-center justify-center bg-[#050508] text-center p-6 space-y-4">
              <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/30 rounded-full flex items-center justify-center animate-pulse">
                <CheckSquare className="w-6 h-6 text-purple-400" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold tracking-tight">Authenticator Locked</h4>
                <p className="text-[10px] text-zinc-400 max-w-[180px] mx-auto leading-relaxed">
                  Authentication requires secure biometric validation to unlock your personal account credentials.
                </p>
              </div>
              <button className="py-1.5 px-4 bg-purple-600 hover:bg-purple-500 rounded-xl text-[9px] font-bold tracking-wider uppercase transition cursor-pointer">
                Scan Fingerprint
              </button>
            </div>
          );
        }

      case "ar-ruler-camera":
        if (screenType === "measure-lens") {
          return (
            <div className="text-white h-full max-h-[460px] flex flex-col justify-between relative bg-black select-none text-left">
              <div className="p-3 bg-gradient-to-b from-black/80 to-transparent z-10 flex justify-between items-center">
                <span className="text-[8px] bg-yellow-500/20 text-yellow-350 border border-yellow-500/25 px-1.5 py-0.5 rounded font-mono">ARCore Live</span>
                <span className="text-[9px] font-mono">METRIC SYSTEM</span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <line x1="40" y1="140" x2="160" y2="80" stroke="#facc15" strokeWidth="2" strokeDasharray="3,3" />
                  <circle cx="40" cy="140" r="3.5" fill="#facc15" />
                  <circle cx="160" cy="80" r="3.5" fill="#facc15" />
                  <text x="75" y="105" fill="#facc15" className="text-[8px] font-bold font-mono">1.84m (Height)</text>
                </svg>
              </div>

              <div className="absolute bottom-16 inset-x-8 h-12 flex flex-wrap justify-around opacity-40 pointer-events-none">
                {[1,2,3,4,5,6,7,8].map(i => (
                  <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                ))}
              </div>

              <div className="p-3 bg-black/85 border-t border-white/10 z-10 flex justify-between items-center">
                <div className="space-y-0.5">
                  <p className="text-[8px] text-zinc-400">Captured Dimension</p>
                  <p className="text-xs font-bold font-mono text-yellow-400 font-sans">184.2 cm</p>
                </div>
                <button className="px-2.5 py-1 bg-yellow-500 rounded-lg text-black font-bold text-[9px] cursor-pointer">
                  Save Record
                </button>
              </div>
            </div>
          );
        } else { // dimension-grids
          return (
            <div className="p-3.5 space-y-3.5 text-white text-left overflow-y-auto max-h-[460px] scrollbar-thin">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <h4 className="text-xs font-bold text-zinc-200">AR Dimension Records</h4>
                <span className="text-[8px] text-zinc-500 uppercase font-mono">Noida Office</span>
              </div>
              <div className="space-y-2">
                <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 flex justify-between items-center">
                  <div>
                    <h5 className="text-[10px] font-bold">Main Sofa Width</h5>
                    <p className="text-[7.5px] text-zinc-450">AR Anchor: surface_041</p>
                  </div>
                  <span className="text-xs font-mono text-yellow-400 font-bold">2.14 m</span>
                </div>
                <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 flex justify-between items-center">
                  <div>
                    <h5 className="text-[10px] font-bold">Workstation Height</h5>
                    <p className="text-[7.5px] text-zinc-455">AR Anchor: surface_009</p>
                  </div>
                  <span className="text-xs font-mono text-yellow-400 font-bold">0.76 m</span>
                </div>
              </div>
            </div>
          );
        }

      case "video-dubbing":
        if (screenType === "timelines") {
          return (
            <div className="text-white h-full max-h-[460px] flex flex-col justify-between bg-[#050508] select-none text-left">
              <div className="p-3 border-b border-white/10 flex justify-between items-center bg-[#050508] z-10">
                <span className="text-[8px] text-purple-400 font-bold uppercase tracking-widest">Compiler Timeline</span>
                <span className="text-[7.5px] bg-rose-500/15 text-rose-300 border border-rose-500/25 px-1 rounded font-mono">01:34 / 04:12</span>
              </div>

              <div className="flex-1 bg-zinc-950 flex flex-col justify-center items-center relative overflow-hidden border-b border-white/5">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition z-10">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[11px] border-l-purple-400 border-b-[6px] border-b-transparent ml-1"></div>
                </div>
                <p className="absolute bottom-2 text-[8px] text-zinc-500 font-mono">source_cinematic_1080p.mp4</p>
              </div>

              <div className="p-3 space-y-2 bg-[#050508] z-10">
                <div className="space-y-1">
                  <p className="text-[8px] text-zinc-500">Track 1: Main Audio (Muted)</p>
                  <div className="h-3 bg-white/5 border border-white/5 rounded flex items-center justify-around overflow-hidden px-1 opacity-40">
                    {[1,3,2,1,2,1,3,2,3,1,2,3].map((h, i) => (
                      <span key={i} style={{ height: `${h * 2}px` }} className="w-0.5 bg-zinc-600 rounded"></span>
                    ))}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[8px] text-purple-400 font-bold">Track 2: Dubbed Voiceover</p>
                  <div className="h-3 bg-purple-500/10 border border-purple-500/20 rounded flex items-center justify-around overflow-hidden px-1">
                    {[2,4,3,1,4,5,3,2,4,2,3,4].map((h, i) => (
                      <span key={i} style={{ height: `${h * 2}px` }} className="w-0.5 bg-purple-400 rounded"></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (screenType === "audio-mixer") {
          return (
            <div className="p-4 space-y-4 text-white text-left overflow-y-auto max-h-[460px] scrollbar-thin">
              <h4 className="text-xs font-bold border-b border-white/15 pb-2">Multi-Channel Mixer</h4>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
                    <span>Video Volume Level</span>
                    <span>15%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-zinc-500 w-[15%]"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] text-purple-400 font-bold font-mono">
                    <span>Dubbed Audio Gain</span>
                    <span>85%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-[85%]"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
                    <span>Decibel Noise Filter</span>
                    <span>-45 dB</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-zinc-400 w-[45%] font-mono"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else { // rendering-vault
          return (
            <div className="text-white h-full max-h-[460px] flex flex-col items-center justify-center p-6 text-center space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/35 flex items-center justify-center animate-spin">
                <Cpu className="w-5 h-5 text-purple-400" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-purple-400 uppercase font-mono tracking-wider">Audio Muxer Processing</p>
                <h4 className="text-xs font-bold">Merging Tracks...</h4>
                <p className="text-[8px] text-zinc-500 font-mono">Progress: 88% | dubbed_final.mp4</p>
              </div>
              <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full w-[88%] rounded-full"></div>
              </div>
            </div>
          );
        }

      case "ai-photo-expand":
        if (screenType === "upscale-editor") {
          return (
            <div className="text-white h-full max-h-[460px] flex flex-col justify-between bg-black select-none text-left relative">
              <div className="p-3 bg-black z-10 border-b border-white/5 flex justify-between items-center">
                <span className="text-[8px] uppercase font-bold text-violet-400 tracking-wider">Neural Super-Res 4X</span>
                <span className="text-[8px] bg-purple-500/20 text-purple-300 px-1 rounded">PRO BUILD</span>
              </div>

              {/* Slider Simulator */}
              <div className="flex-1 bg-zinc-950 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex">
                  {/* Left Blurry Before side */}
                  <div className="w-1/2 h-full bg-gradient-to-r from-purple-950/20 to-zinc-900 flex items-center justify-center filter blur-[1px]">
                    <span className="text-[32px] text-zinc-650 font-bold font-mono">Before</span>
                  </div>
                  {/* Right Sharp After side */}
                  <div className="w-1/2 h-full bg-gradient-to-r from-zinc-900 to-purple-900/10 flex items-center justify-center border-l border-purple-500/30">
                    <span className="text-[32px] text-purple-400/90 font-bold font-mono">After</span>
                  </div>
                </div>

                {/* Vertical slider line */}
                <div className="absolute inset-y-0 left-1/2 w-[1px] bg-purple-405 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-purple-500 border border-white text-[7px] text-white font-bold flex items-center justify-center select-none shadow">
                    ⇄
                  </div>
                </div>
              </div>

              <div className="p-3 bg-black border-t border-white/5 flex justify-between items-center z-13">
                <div className="space-y-0.5">
                  <p className="text-[8px] text-zinc-500 font-mono">INPUT: 256x256 WebP</p>
                  <p className="text-[9.5px] font-bold text-purple-400 font-mono">OUTPUT: 1024x1024 Sharp PNG</p>
                </div>
                <button className="py-1 px-3 bg-purple-600 hover:bg-purple-500 text-white text-[9px] font-bold rounded-lg transition text-center cursor-pointer">
                  Export
                </button>
              </div>
            </div>
          );
        } else { // outpaint-expand
          return (
            <div className="text-white h-full max-h-[460px] flex flex-col justify-between bg-[#050508] select-none text-left p-3.5 space-y-3">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <h4 className="text-xs font-bold text-zinc-150">Generative Outpainter</h4>
                <span className="text-[8px] uppercase tracking-wider font-mono text-purple-400">Scale: 16:9</span>
              </div>

              <div className="flex-1 bg-zinc-950 border border-dashed border-white/10 rounded-2xl flex flex-col justify-center items-center relative overflow-hidden">
                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-xl relative flex items-center justify-center">
                  <p className="text-[8px] text-zinc-500">Original Clip</p>
                  
                  <div className="absolute -inset-4 border border-dashed border-purple-500/40 rounded-2xl flex items-center justify-center">
                    <p className="text-[7px] text-purple-400 font-mono uppercase bg-purple-600/10 px-1 py-0.5 rounded -mt-10">Extended Boundary</p>
                  </div>
                </div>

                <div className="absolute bottom-2 text-center text-[8px] text-zinc-500 animate-pulse">
                  Ready with neural border expansion
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-white/5 rounded-xl border border-white/10 text-center text-[8.5px] hover:border-purple-500/30 cursor-pointer active:bg-white/10 transition">
                  Extend: Beach Shore
                </div>
                <div className="p-2 bg-white/5 rounded-xl border border-white/10 text-center text-[8.5px] hover:border-purple-500/30 cursor-pointer active:bg-white/10 transition">
                  Extend: Neon Cityline
                </div>
              </div>
            </div>
          );
        }

      case "circleup":
        if (screenType === "feed") {
          return (
            <div className="flex flex-col h-[400px] text-white overflow-hidden text-left">
              <div className="bg-zinc-900 p-2.5 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-lg bg-indigo-600 flex items-center justify-center text-[11px] font-bold">C</div>
                  <p className="text-xs font-bold font-sans">CircleUp Feed</p>
                </div>
                <button className="p-1 font-bold text-violet-400 text-xs">Post</button>
              </div>

              <div className="flex-1 p-3 overflow-y-auto space-y-3.5 scrollbar-thin">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-2">
                  <div className="flex gap-2 items-center">
                    <div className="w-6 h-6 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 flex items-center justify-center text-[10px] uppercase font-bold">MK</div>
                    <div>
                      <p className="text-[10px] font-bold">Manoj Kumar</p>
                      <p className="text-[8px] text-zinc-500">Android Enthusiast • 2 hrs ago</p>
                    </div>
                  </div>
                  <p className="text-[10px] text-zinc-300 leading-relaxed">
                    Very excited to compile the first custom release candidate of CircleUp! Seamless connection pooling and beautiful offline support powered by Room databases and Firebase. 🚀📱
                  </p>
                  <div className="flex gap-4 border-t border-zinc-800 pt-2 text-[8px] text-zinc-400">
                    <button className="flex items-center gap-1 text-rose-400 font-bold">
                      <Heart className="w-3.5 h-3.5 fill-rose-500/20" /> 18 Likes
                    </button>
                    <button className="flex items-center gap-1 hover:text-white">
                      <MessageSquare className="w-3.5 h-3.5" /> 3 Comments
                    </button>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-2">
                  <div className="flex gap-2 items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center justify-center text-[10px] uppercase font-bold">RL</div>
                    <div>
                      <p className="text-[10px] font-bold">Radhika Lal</p>
                      <p className="text-[8px] text-zinc-500">Product Designer • 5 hrs ago</p>
                    </div>
                  </div>
                  <p className="text-[10px] text-zinc-300 leading-relaxed">
                    Check out our revamped Material 3 micro-states. Interactive buttons look phenomenal!
                  </p>
                </div>
              </div>
            </div>
          );
        } else { // channels
          return (
            <div className="p-4 space-y-3.5 text-white text-left">
              <div className="flex justify-between items-center text-xs">
                <h4 className="font-bold">Active Circles</h4>
                <span className="text-[8px] font-sans text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 rounded">8 Online</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-purple-600/20 border border-purple-500/30 rounded-lg text-purple-400 flex items-center justify-center text-xs font-bold">#</div>
                    <div>
                      <p className="text-[10.5px] font-bold">Android-Dev-Noida</p>
                      <p className="text-[8px] text-zinc-500">2,410 members • 14 active today</p>
                    </div>
                  </div>
                  <button className="px-2.5 py-1 text-[8px] font-semibold bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition">Join</button>
                </div>

                <div className="flex justify-between items-center p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-emerald-600/20 border border-emerald-500/30 rounded-lg text-emerald-400 flex items-center justify-center text-xs font-bold">#</div>
                    <div>
                      <p className="text-[10.5px] font-bold">Compose-UI-Lovers</p>
                      <p className="text-[8px] text-zinc-500">890 members • 5 online</p>
                    </div>
                  </div>
                  <button className="px-2.5 py-1 text-[8px] font-semibold bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition">Join</button>
                </div>
              </div>
            </div>
          );
        }

      case "speaklify":
        if (screenType === "ai-chat") {
          return (
            <div className="flex flex-col h-[400px] text-white">
              <div className="bg-zinc-900 p-2 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-5 h-5 bg-gradient-to-r from-violet-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Languages className="w-3 h-3 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10.5px] font-bold">Speaklify AI Tutor</p>
                    <p className="text-[7.5px] text-violet-400 font-semibold tracking-wider uppercase">Active Session (Gemini v2)</p>
                  </div>
                </div>
                <div className="p-1 px-2 text-[8px] font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded">FR Level B1</div>
              </div>

              {/* Chat list */}
              <div className="flex-1 p-3 overflow-y-auto space-y-2.5 flex flex-col justify-end text-left scrollbar-thin">
                {messages.map((m, idx) => (
                  <div 
                    key={idx} 
                    className={`max-w-[85%] rounded-xl p-2.5 text-[9.5px] leading-relaxed ${
                      m.sender === "ai" 
                        ? "bg-zinc-900 border border-zinc-800 text-zinc-100 self-start" 
                        : "bg-gradient-to-r from-violet-600/30 to-blue-600/20 border border-violet-500/20 self-end text-right"
                    }`}
                  >
                    {m.sender === "ai" && (
                      <p className="text-[7.5px] text-violet-400 font-bold mb-1.5 flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 animate-pulse" /> Tutor Bot
                      </p>
                    )}
                    <p>{m.text}</p>
                    <p className="text-[7px] text-zinc-400 mt-1">{m.time}</p>
                  </div>
                ))}
              </div>

              {/* Voice wave indicator */}
              <div className="h-6 bg-zinc-950 flex items-center justify-center gap-1 border-t border-zinc-900">
                {[1, 2, 3, 4, 3, 2, 4, 1, 3, 5, 2, 3, 1, 4, 2].map((h, i) => (
                  <span 
                    key={i} 
                    style={{ height: `${h * 3}px` }}
                    className="w-0.5 bg-violet-500 rounded-full animate-pulse"
                  ></span>
                ))}
                <span className="text-[8px] text-violet-400 font-mono ml-2">Voice Input Ready</span>
              </div>

              {/* Send Chat */}
              <div className="p-2 border-t border-zinc-800 flex items-center gap-2 bg-zinc-950">
                <input 
                  type="text" 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your spoken speech representation..."
                  className="flex-1 bg-zinc-900 text-[9px] border border-zinc-800 rounded-lg p-1.5 px-2.5 focus:outline-none focus:border-violet-500 text-white"
                />
                <button 
                  onClick={handleSendMessage}
                  className="p-1.5 bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        } else { // flashcards
          return (
            <div className="p-4 space-y-4 text-white text-left h-full max-h-[460px] flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-bold text-zinc-300">Daily Vocabulary</h4>
                <span className="text-[8px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/20">Streak: 14 Days</span>
              </div>

              <div className="flex-1 flex flex-col justify-center py-2.5">
                <div className="bg-gradient-to-tr from-zinc-900 to-zinc-950 border-2 border-dashed border-violet-500/30 rounded-2xl p-6 text-center space-y-4 shadow-xl select-none cursor-pointer hover:border-violet-500 transition">
                  <p className="text-[10px] text-zinc-500 tracking-wider">FRENCH WORD (tap to flip)</p>
                  <h3 className="text-xl font-bold font-sans text-violet-400 tracking-widest">Le Papillon</h3>
                  <div className="h-[1px] bg-zinc-800 w-12 mx-auto"></div>
                  <p className="text-xs font-medium text-zinc-300 italic">"The Butterfly"</p>
                </div>
              </div>

              <div className="flex justify-around text-[10px]">
                <button className="px-3 py-1 bg-zinc-900 hover:bg-zinc-800 rounded-lg border border-zinc-800 text-rose-400">Review Later</button>
                <button className="px-3 py-1 bg-violet-600 hover:bg-violet-500 rounded-lg text-white font-medium">I Learned It!</button>
              </div>
            </div>
          );
        }

      default:
        return (
          <div className="p-4 flex flex-col items-center justify-center text-zinc-400 h-64 text-xs">
            <ServerCrash className="w-8 h-8 text-rose-500 mb-2" />
            <p>Mockup data unavailable</p>
          </div>
        );
    }
  };

  return (
    <div className="w-[280px] h-[550px] bg-zinc-950 border-[6px] border-zinc-800 rounded-[36px] shadow-2xl shadow-violet-500/5 overflow-hidden flex flex-col relative select-none">
      {/* Speaker and Camera notch */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-4 bg-zinc-950 rounded-full border border-zinc-900 z-50 flex items-center justify-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
        <div className="w-8 h-1 rounded bg-zinc-800"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-900/50"></div>
      </div>

      {/* Top Status Bar (Android Style) */}
      <div className="h-9 bg-zinc-950 text-white flex justify-between items-end px-5 pb-1 select-none z-40 text-[9px] font-mono">
        <span>{currentTime}</span>
        <div className="flex items-center gap-1">
          <Signal className="w-3 h-3 text-zinc-400" />
          <Wifi className="w-3 h-3 text-zinc-400" />
          <Battery className="w-3.5 h-3.5 text-zinc-400 rotate-90 shrink-0" />
        </div>
      </div>

      {/* Render Screen Workspace */}
      <div className="flex-1 bg-zinc-950 relative overflow-hidden flex flex-col justify-between pt-1">
        {renderScreenContent()}
      </div>

      {/* Android Bottom Soft Navigation Keys */}
      <div className="h-8 bg-zinc-950 border-t border-zinc-900 flex justify-around items-center px-10 text-zinc-500 z-40">
        <button className="p-1 text-xs">◀</button>
        <button className="w-3 h-3 border border-zinc-500 rounded-full"></button>
        <button className="w-2.5 h-2.5 border border-zinc-500 rounded-sm"></button>
      </div>
    </div>
  );
}

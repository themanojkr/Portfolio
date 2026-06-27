import { Company, TimelineMilestone, StatItem } from "./types";

export const SKILLS = [
  // Core Domain
  { name: "Kotlin", category: "Core" },
  { name: "Java", category: "Core" },
  { name: "Android SDK", category: "Core" },
  { name: "NDK & JNI bridging", category: "Core" },

  // UI Frameworks & Graphics
  { name: "Jetpack Compose", category: "UI" },
  { name: "XML Layouts & Views", category: "UI" },
  { name: "Material 3 & Theme Customization", category: "UI" },
  { name: "ConstraintLayout", category: "UI" },
  { name: "Custom Canvas & Drawing", category: "UI" },
  { name: "Lottie Animations", category: "UI" },

  // Architecture & Flow
  { name: "MVVM & Clean Architecture", category: "Architecture" },
  { name: "MVI Pattern (Unidirectional Data Flow)", category: "Architecture" },
  { name: "Dagger Hilt (Dependency Injection)", category: "Architecture" },
  { name: "Koin (Service Locator)", category: "Architecture" },
  { name: "Kotlin Coroutines & Flow (State/Shared)", category: "Architecture" },

  // Networking & Serialization
  { name: "Retrofit & OkHttp Client", category: "Networking" },
  { name: "REST APIs & WebSocket Streams", category: "Networking" },
  { name: "Moshi / KotlinX Serialization", category: "Networking" },
  { name: "Ktor HTTP Client", category: "Networking" },

  // Database & Local Persistence
  { name: "Room SQLite Database", category: "Storage" },
  { name: "Schema Versioning & Migrations", category: "Storage" },
  { name: "Preferences DataStore (Proto & Primitive)", category: "Storage" },
  { name: "Scoped Storage & File System", category: "Storage" },

  // Specialized Hardware & Native SDKs
  { name: "ARCore Spatial Tracking", category: "Hardware & Native SDKs" },
  { name: "CameraX & Camera2 APIs", category: "Hardware & Native SDKs" },
  { name: "Google Maps Platform & Location APIs", category: "Hardware & Native SDKs" },
  { name: "ExoPlayer / Jetpack Media3", category: "Hardware & Native SDKs" },
  { name: "FFmpeg Media Muxing", category: "Hardware & Native SDKs" },
  { name: "Biometric Auth & Android Keystore", category: "Hardware & Native SDKs" },

  // Tools, DevOps & Ecosystem
  { name: "Gradle Build Customization (Groovy/Kotlin DSL)", category: "Tools & Ecosystem" },
  { name: "Git Workflow & CI/CD Pipelines", category: "Tools & Ecosystem" },
  { name: "Google Play Console Publishing", category: "Tools & Ecosystem" },
  { name: "Firebase (Cloud Messaging, Crashlytics, Firestore)", category: "Tools & Ecosystem" },
  { name: "WorkManager (Background Scheduler)", category: "Tools & Ecosystem" },
  { name: "Android Profilers & LeakCanary", category: "Tools & Ecosystem" }
];

export const COMPANIES: Company[] = [
  {
    id: "innsight",
    name: "INNsight",
    fullName: "INNsight Intractive Pvt Ltd.",
    location: "Noida, India",
    role: "Software Engineer – Android",
    period: "Jul 2024 - Present",
    projects: [
      {
        id: "rms-app",
        name: "RMS App",
        description: "A comprehensive hotel management solution helping hospitality staff track real-time bookings, room cleanup statuses, and front-desk check-ins on-the-go.",
        tech: ["Kotlin", "MVVM", "Retrofit", "Firebase", "Material 3"],
        screenshots: ["dashboard", "rooms", "booking"],
        playStoreUrl: "https://play.google.com/store/search?q=innsight&c=apps"
      },
      {
        id: "innsight-hospitality",
        name: "INNsight Hospitality App",
        description: "An ultimate guest relations and operational app. Enables real-time concierge chat, custom client notifications, amenities check-outs, and tickets assignment.",
        tech: ["Kotlin", "Room", "REST APIs", "Jetpack Compose", "Coroutines"],
        screenshots: ["chat", "tickets"],
        playStoreUrl: "https://play.google.com/store/search?q=innsight&c=apps"
      }
    ]
  },
  {
    id: "beetonz",
    name: "Beetonz Infotech",
    fullName: "Beetonz Infotech",
    location: "Surat, Gujarat",
    role: "Software Engineer – Android",
    period: "May 2023 - Jul 2024",
    projects: [
      {
        id: "gps-camera",
        name: "GPS Map Camera",
        description: "A professional mapping and logging utility designed to overlay real-time satellite coordinates, custom layouts, geotracking data, and instant compass indicators on photographs.",
        tech: ["Kotlin", "CameraX API", "Google Maps SDK", "Geocoding API", "ExifInterface"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.mnxcamera.gpscamera",
        screenshots: ["live-lens", "map-overlay", "logbook"],
        category: "Camera Tools"
      },
      {
        id: "two-factor-authenticator",
        name: "2FA Authenticator Vault",
        description: "An offline security app supporting fully encrypted Time-Based (TOTP) and Counter-Based (HOTP) verification algorithms with hardware-backed biometric verification locks.",
        tech: ["Kotlin", "Room Database", "Biometric Auth", "Zxing Scanner", "Android KeyStore"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.mnxtwofactor.authenticators",
        screenshots: ["token-feed", "qr-import", "security-lock"],
        category: "Utilities & Security"
      },
      {
        id: "ar-ruler-camera",
        name: "AR Ruler - Photo Measure",
        description: "An advanced volumetric and linear measurement environment executing spatial ARCore raycasting to render dimensions, height grids, and angles on high-resolution viewports.",
        tech: ["Java", "ARCore SDK", "OpenGL ES", "CameraX API", "Jetpack Compose"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.lbrtruler.arrulercamphotomeasure",
        screenshots: ["measure-lens", "dimension-grids"],
        category: "Augmented Reality"
      },
      {
        id: "video-dubbing",
        name: "Voice Dubbing Studio",
        description: "A high-fidelity media compiler that enables users to dynamically strip video soundtracks, configure custom multi-track overlay timelines, and record real-time voiceovers with low extraction latency.",
        tech: ["Java", "ExoPlayer", "FFmpeg Android", "MediaRouter", "AudioRecord API"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.lbrtvideodub.videodubbing",
        screenshots: ["timelines", "audio-mixer", "rendering-vault"],
        category: "Audio & Video"
      },
      {
        id: "ai-photo-expand",
        name: "AI Photo Expand & Enlarge",
        description: "A neural graphics platform featuring state-of-the-art super-resolution upscaling, border outpainting, and background enlargements via generative model layers.",
        tech: ["Kotlin", "Gemini API", "Generative AI SDK", "Glide", "Bitmap Shaders"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.lbrtphotoexpand.aienlarge",
        screenshots: ["upscale-editor", "outpaint-expand"],
        category: "Artificial Intelligence"
      }
    ]
  }
];

export const PERSONAL_PROJECTS = [
  {
    id: "circleup",
    name: "CircleUp",
    description: "A community-focused social networking app designed with customizable group circles, peer-to-peer micro-interactions, local discoverability, and real-time end-to-end event invites.",
    tech: ["Kotlin", "Firebase Auth", "Firestore", "Cloud Messaging", "Glide"],
    playStoreUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/manoj-kumar/circleup",
    screenshots: ["feed", "channels"]
  },
  {
    id: "speaklify",
    name: "Speaklify",
    description: "An AI-powered language tutor app featuring conversational speaking practices, instant acoustic feedback, pronunciation grades, and adaptive daily flashcards fueled by Gemini.",
    tech: ["Kotlin", "Gemini AI", "Android Speech API", "Room", "Jetpack Compose"],
    playStoreUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/manoj-kumar/speaklify",
    screenshots: ["ai-chat", "flashcards"]
  }
];

export const TIMELINE: TimelineMilestone[] = [
  {
    year: "2019 - 2023",
    title: "B.Tech in Computer Science — Sanskriti University",
    description: "Acquired robust technical foundations in data structures, algorithms, operating systems, and advanced software engineering paradigms.",
    category: "education"
  },
  {
    year: "May 2023 - Jul 2024",
    title: "Software Engineer – Android — Beetonz Infotech",
    description: "Delivered multiple end-to-end applications: integrated Firebase Services, modernized Jetpack components, and optimized screen layouts for multi-device compatibility.",
    category: "experience"
  },
  {
    year: "Jul 2024 - Present",
    title: "Software Engineer – Android — INNsight Intractive Pvt Ltd.",
    description: "Architected and engineered the core PMS Property Management system, ensuring reliable REST API offline synchronization, reduced memory footprints, and fully modular codebase builds.",
    category: "experience"
  }
];

export const STATS: StatItem[] = [
  { value: "3.2+", label: "Years Experience" },
  { value: "12+", label: "Projects Delivered" },
  { value: "7+", label: "Public Play Store Apps" },
  { value: "100%", label: "Passion for Mobile Development" }
];

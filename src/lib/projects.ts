export interface ProjectData {
  slug: string;
  title: string;
  company: string;
  period: string;
  role: string;
  summary: string;
  coverImage: string;
  images: { src: string; caption: string }[];
  gradient: string;
  icon: string; // lucide icon name
  tech: string[];
  results: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  highlights?: string[];
  lessons?: string;
  featured?: boolean;
}

export const projects: ProjectData[] = [
  {
    slug: "chatclothes",
    title: "ChatClothes Virtual Try-On",
    company: "Auckland University of Technology",
    period: "Nov 2024 – Apr 2025",
    role: "AI Engineer & Python Developer (Independent)",
    summary:
      "Master's thesis: multimodal AI virtual try-on combining OOTDiffusion+LoRA generation, YOLO12n-LC classification, and DeepSeek LLM conversational control. Completed 6 months early. Published at IVCNZ 2025.",
    coverImage: "/projects/chatclothes/arch.png",
    images: [
      { src: "/projects/chatclothes/arch.png", caption: "System Architecture" },
      { src: "/projects/chatclothes/demo.png", caption: "Live Demo" },
      { src: "/projects/chatclothes/diffusion-model.png", caption: "Diffusion Model Pipeline" },
      { src: "/projects/chatclothes/yolo-detection.png", caption: "YOLO12n-LC Detection" },
      { src: "/projects/chatclothes/pose-estimation.png", caption: "Pose Estimation" },
      { src: "/projects/chatclothes/clothing-segmentation.png", caption: "Clothing Segmentation" },
      { src: "/projects/chatclothes/diffusion-detail.png", caption: "Diffusion Model Detail" },
      { src: "/projects/chatclothes/post-processing.png", caption: "Post Processing" },
      { src: "/projects/chatclothes/quality-control.png", caption: "Quality Control" },
      { src: "/projects/chatclothes/data-flow.png", caption: "Data Flow" },
      { src: "/projects/chatclothes/comfyui-workflow.png", caption: "ComfyUI Workflow" },
      { src: "/projects/chatclothes/pipeline-overview.png", caption: "Pipeline Overview" },
      { src: "/projects/chatclothes/edge-deployment.png", caption: "Raspberry Pi 5 Deployment" },
      { src: "/projects/chatclothes/edge-deployment-detail.png", caption: "Edge Deployment Detail" },
      { src: "/projects/chatclothes/multimodal-input.png", caption: "Multimodal Input" },
      { src: "/projects/chatclothes/dify-integration.png", caption: "Dify LLM Integration" },
      { src: "/projects/chatclothes/results.png", caption: "Results" },
      { src: "/projects/chatclothes/user-interface.png", caption: "User Interface" },
      { src: "/projects/chatclothes/user-interface-detail.png", caption: "User Interface Detail" },
      { src: "/projects/chatclothes/mobile-app.png", caption: "Mobile Control App" },
      { src: "/projects/chatclothes/mobile-app-detail.png", caption: "Mobile App Detail" },
      { src: "/projects/chatclothes/system-components.png", caption: "System Components" },
      { src: "/projects/chatclothes/performance.png", caption: "Performance Metrics" },
      { src: "/projects/chatclothes/accuracy.png", caption: "Accuracy Analysis" },
      { src: "/projects/chatclothes/challenges.png", caption: "Challenges & Solutions" },
      { src: "/projects/chatclothes/optimization.png", caption: "Optimization" },
      { src: "/projects/chatclothes/future-work.png", caption: "Future Work" },
      { src: "/projects/chatclothes/cloud-deployment.png", caption: "Cloud Deployment" },
      { src: "/projects/chatclothes/ecommerce-integration.png", caption: "E-commerce Integration" },
      { src: "/projects/chatclothes/demo-workflow.png", caption: "Demo Workflow" },
      { src: "/projects/chatclothes/test-cases.png", caption: "Test Cases" },
      { src: "/projects/chatclothes/user-testing.png", caption: "User Testing" },
      { src: "/projects/chatclothes/conclusion.png", caption: "Conclusion" },
    ],
    gradient: "from-violet-500 to-fuchsia-500",
    icon: "Sparkles",
    tech: [
      "Python", "PyTorch", "OOTDiffusion", "LoRA", "YOLO12n-LC",
      "ComfyUI", "Dify", "DeepSeek", "FastAPI", "Raspberry Pi 5",
    ],
    results:
      "FID 28.5 (19%↑), 75% hand artifact reduction, 94.2% accuracy, <10s Pi latency, 87% user success (50 users)",
    problem:
      "Fashion e-commerce lacks interactive, multimodal try-on experiences that work on edge devices.",
    solution:
      "Multimodal AI VTON: OOTDiffusion with LoRA fine-tuning for pose-aligned generation, YOLO12n-LC lightweight classifier (5MB, 8x smaller), DeepSeek LLM + RAG for natural language to structured prompts.",
    architecture:
      "Python AI pipeline (PyTorch/ComfyUI/Dify) → FastAPI backend → PWA Android frontend → Raspberry Pi 5 edge deployment",
    highlights: [
      "Shipped handheld-facing PWA control UX for diffusion/LLM jobs on mobile alongside Pi deployments",
      "Applied LoRA fine-tuning to OOTDiffusion for enhanced pose alignment and texture reconstruction",
      "Optimized YOLO12n to YOLO12n-LC for on-device and resource-constrained targets",
      "Orchestrated DeepSeek LLM via Ollama for natural language control",
      "Deployed full system on Raspberry Pi 5 for offline-capable inference",
      "Thesis passed with First Class Honours, published at IVCNZ 2025",
    ],
    lessons:
      "Model compression for edge deployment is critical; multimodal alignment needs iterative tuning; LoRA fine-tuning achieves significant quality gains without modifying the backbone.",
    featured: true,
  },
  {
    slug: "smart-factory",
    title: "Smart Factory Platform",
    company: "Chunxiao Technology",
    period: "2018 – 2024",
    role: "System Designer, Developer & Team Lead",
    summary:
      "Full-stack IoT smart manufacturing platform for garment factories. Spring Cloud microservices + Android shop-floor terminals + Vue.js dashboards. Deployed across 10+ factory sites, led 6-person team.",
    coverImage: "/projects/smart-factory/quality-station.png",
    images: [
      { src: "/projects/smart-factory/quality-station.png", caption: "Quality Station" },
      { src: "/projects/smart-factory/bi-dashboard.jpg", caption: "BI Dashboard Overview" },
      { src: "/projects/smart-factory/equipment-dashboard.png", caption: "Equipment Dashboard" },
      { src: "/projects/smart-factory/production-tasks.png", caption: "Production Tasks" },
      { src: "/projects/smart-factory/input-keypad.png", caption: "Production Input Keypad" },
      { src: "/projects/smart-factory/rfid-reader.png", caption: "RFID Reader" },
      { src: "/projects/smart-factory/smart-washer.png", caption: "Smart Washer Integration" },
      { src: "/projects/smart-factory/terminal-login.png", caption: "Shop-floor Terminal" },
      { src: "/projects/smart-factory/projector-ironing.png", caption: "Projector Ironing" },
      { src: "/projects/smart-factory/smart-accessories-cabinet.png", caption: "Smart Accessories Cabinet" },
      { src: "/projects/smart-factory/accessories-cabinet.jpg", caption: "Accessories Cabinet Design" },
      { src: "/projects/smart-factory/customization-app.png", caption: "Customization App" },
      { src: "/projects/smart-factory/screenshot-01.png", caption: "System Screenshot 1" },
      { src: "/projects/smart-factory/screenshot-02.png", caption: "System Screenshot 2" },
      { src: "/projects/smart-factory/screenshot-03.png", caption: "System Screenshot 3" },
    ],
    gradient: "from-emerald-500 to-teal-500",
    icon: "Factory",
    tech: [
      "Java", "Spring Cloud", "MyBatis", "Android", "Vue.js", "RFID",
      "MySQL", "Redis", "MongoDB", "Docker", "Jenkins", "ActiveMQ", "Kafka",
    ],
    results:
      "10+ factory sites, 30%+ efficiency gain, 6-person team, hundreds of daily workers",
    problem:
      "Garment factories lack real-time production visibility — electronic scales need manual reading, production data entry is error-prone, and cross-site coordination is slow.",
    solution:
      "Full IoT platform: local serial-port service for auto weight capture via WebSocket, RFID-based production tracking, Spring Cloud microservices (Production/Inventory/Device), Android shop-floor terminals, Vue.js BI dashboards.",
    architecture:
      "Android app + Vue.js web → Nginx → Spring Cloud (MyBatis) → MySQL/Redis/MongoDB → IoT hardware (RFID, scales, conveyors via RS232/RS485)",
    highlights: [
      "Scaled from single-site pilot to 10+ factory deployments across multiple regions",
      "Event-driven service coordination using ActiveMQ and Kafka to decouple production workflows",
      "Replaced manual releases with Jenkins + GitLab CI/CD pipeline",
      "Serial-to-WebSocket bridge for browser weight auto-fill, eliminating read-and-retype steps",
      "Field-led prioritization with deep shop-floor engagement under high ambiguity",
      "Led and mentored 6-person cross-functional engineering team",
    ],
    lessons:
      "Event-driven architecture critical for factory coordination; field-led prioritization beats big design upfront; staged cloud migration balances delivery speed and performance.",
    featured: true,
  },
  {
    slug: "enterprise-messaging",
    title: "Enterprise Messaging Platform",
    company: "Chunxiao Technology",
    period: "2014 – 2024",
    role: "Developer & System Designer",
    summary:
      "Android-led enterprise IM evolving from standalone tool to multi-platform system (Android/Web/PC). 5,000 DAU, sub-200ms latency, 500K+ daily messages across 5 subsystems. Migrated from legacy C++ to cloud IM, eliminating 90%+ defects. 10-year lifecycle.",
    coverImage: "/projects/enterprise-messaging/app-home.jpg",
    images: [
      { src: "/projects/enterprise-messaging/app-home.jpg", caption: "App Home Screen" },
    ],
    gradient: "from-blue-500 to-cyan-500",
    icon: "MessageSquare",
    tech: [
      "Kotlin", "Java", "C/C++", "NDK", "Spring Cloud", "Node.js",
      "MySQL", "Redis", "FastDFS", "WebSocket", "Easemob", "JPush",
    ],
    results:
      "5,000 DAU, <200ms latency, 500K+ msgs/day, 90%+ defect reduction, <2% downtime over 10 years",
    problem:
      "Enterprise needs reliable low-latency messaging across Android/Web/PC, with unified identity, file storage, and subsystem integration.",
    solution:
      "Cross-platform IM: NDK TCP/UDP transport for sub-200ms delivery, Spring Cloud message gateway, FastDFS distributed file storage, Easemob cloud IM migration (eliminated 90%+ defects), JPush backup push channel.",
    architecture:
      "Android NDK (TCP/UDP) + Web + PC → Nginx → Spring Cloud Message Gateway → Core Services → MySQL/Redis/FastDFS → Easemob/JPush",
    highlights: [
      "Engineered NDK TCP/UDP transport supporting 5,000 DAU and <200ms message latency",
      "Migrated core IM from unstable C++ to Easemob cloud, eliminating 90%+ defects",
      "Built FastDFS distributed file storage supporting 100GB+ user uploads",
      "Architected unified platform: user center, file service, permissions across 5+ subsystems",
      "Integrated JPush as backup push channel alongside Easemob IM",
      "Maintained <2% downtime across 10-year product lifecycle",
    ],
    lessons:
      "NDK TCP/UDP path essential for sub-200ms at scale; cloud migration eliminated chronic instability; manufacturer ROM push differences need layered backup channels.",
    featured: true,
  },
  {
    slug: "iot-device",
    title: "IoT Device Management Platform",
    company: "Chunxiao Technology",
    period: "2016 – 2023",
    role: "Android Developer, Gateway Developer & Platform Designer",
    summary:
      "IoT device management platform for smart switches and gateways. Android app for device discovery/binding/control, embedded Linux gateway firmware handling Zigbee/WiFi protocols, Spring Cloud backend for registration, grouping, and remote monitoring. 7-year product line.",
    coverImage: "/projects/iot-device/gateway-switches.jpg",
    images: [
      { src: "/projects/iot-device/gateway-switches.jpg", caption: "Gateway & Smart Switches" },
      { src: "/projects/iot-device/platform-demo.png", caption: "Platform Demo" },
      { src: "/projects/iot-device/discover.jpg", caption: "Device Discovery" },
      { src: "/projects/iot-device/device-status.jpg", caption: "Device Status" },
      { src: "/projects/iot-device/fire-alert.jpg", caption: "Fire Alert" },
      { src: "/projects/iot-device/messages.jpg", caption: "App Messages" },
      { src: "/projects/iot-device/profile-center.jpg", caption: "Profile Center" },
    ],
    gradient: "from-orange-500 to-amber-500",
    icon: "Cpu",
    tech: [
      "Java", "Kotlin", "Android SDK", "Embedded Linux", "Zigbee",
      "WiFi", "MQTT", "UART/Serial", "GPIO", "Spring Cloud", "Vue.js",
    ],
    results: "7-year product line, multiple device types shipped",
    problem:
      "Smart home/industrial devices with heterogeneous protocols (Zigbee/WiFi/proprietary) need unified discovery, binding, and remote management.",
    solution:
      "Android app + embedded gateway firmware + Spring Cloud backend. Gateway handles protocol translation (Zigbee/WiFi → MQTT), supports local/offline behavior with auto-sync on reconnect.",
    architecture:
      "Android app → REST/WebSocket → Spring Cloud → MQTT → Gateway (Embedded Linux) → Zigbee/WiFi → IoT Devices",
    highlights: [
      "Owned the Android app for device discovery, binding, and remote control across 7-year product line",
      "Delivered gateway software for protocol handling and MQTT/cloud forwarding at fleet scale",
      "Shaped the IoT stack spanning mobile, gateway, and backend APIs",
      "Extended backend and web surfaces for device management and operational monitoring",
    ],
    lessons:
      "Gateway firmware needs robust offline/online transition; MQTT chosen over HTTP for constrained devices.",
    featured: false,
  },
  {
    slug: "live-streaming",
    title: "Live Streaming Commerce",
    company: "Chunxiao Technology",
    period: "2015 – 2018",
    role: "Full-stack Developer (Android + Web)",
    summary:
      "Full-stack live streaming commerce platform: Android client with custom C++ streaming core, ASP.NET web admin, real-time WebSocket chat. Multi-bitrate adaptive streaming (360p–1080p), 1000+ peak concurrent viewers, 8-person team, 3-year product cycle.",
    coverImage: "",
    images: [],
    gradient: "from-rose-500 to-pink-500",
    icon: "Video",
    tech: [
      "C#", "ASP.NET", "Java", "Kotlin", "C++", "NDK", "Python", "Lua",
      "Node.js", "WebRTC", "RTMP", "HLS", "FFmpeg", "WebSocket",
    ],
    results:
      "1000+ peak concurrent viewers, 99.5% streaming uptime, multi-bitrate 360p–1080p, 3-year production run",
    problem:
      "Brands need an integrated live selling platform combining real-time streaming with in-stream e-commerce and chat interaction.",
    solution:
      "Hybrid multi-language architecture: .NET (business logic) + Node.js (real-time push) + C++ (media processing). Android NDK streaming core with RTMP ingest, HLS/M3U8 adaptive delivery, and WebRTC low-latency mode.",
    architecture:
      "Android NDK (C++ core) → RTMP/WebRTC → .NET + Node.js backend → SQL Server/Redis/MongoDB → HLS (M3U8) delivery",
    highlights: [
      "Delivered Android live-streaming client with custom C++ core as part of 8-person team",
      "Implemented HLS (M3U8) adaptive streaming with multi-bitrate support (360p to 1080p)",
      "Created hybrid backend: .NET + Node.js + C++ for optimal performance",
      "WebSocket and Socket.IO for real-time chat and live room interactions",
    ],
    lessons:
      "Multi-bitrate adaptive streaming critical for diverse network conditions; hybrid architecture lets each layer play to its strengths; Socket.IO simplifies room management.",
    featured: false,
  },
  {
    slug: "forest-patrol",
    title: "Forest Patrol GIS",
    company: "Chunxiao Technology",
    period: "2021 – 2022",
    role: "Android Mobile Client Developer",
    summary:
      "Offline-first Android GIS app for forest rangers working in zero-signal areas. Offline map tiles, GPS trajectory recording, GIS layer annotation, and fire/pest/incident reporting with deferred sync when connectivity returns.",
    coverImage: "/projects/forest-patrol/map-workflow.png",
    images: [
      { src: "/projects/forest-patrol/map-workflow.png", caption: "Patrol Map Workflow" },
      { src: "/projects/forest-patrol/photo-capture.jpg", caption: "Photo Capture" },
      { src: "/projects/forest-patrol/task-report.png", caption: "Task Report" },
      { src: "/projects/forest-patrol/risk-entry.png", caption: "Risk Entry" },
      { src: "/projects/forest-patrol/field-01.jpg", caption: "Field Scene 1" },
      { src: "/projects/forest-patrol/field-02.jpg", caption: "Field Scene 2" },
      { src: "/projects/forest-patrol/field-03.jpg", caption: "Field Scene 3" },
      { src: "/projects/forest-patrol/field-04.jpg", caption: "Field Scene 4" },
      { src: "/projects/forest-patrol/field-05.jpg", caption: "Field Scene 5" },
      { src: "/projects/forest-patrol/field-06.jpg", caption: "Field Scene 6" },
      { src: "/projects/forest-patrol/field-07.jpg", caption: "Field Scene 7" },
      { src: "/projects/forest-patrol/field-08.jpg", caption: "Field Scene 8" },
    ],
    gradient: "from-green-600 to-lime-500",
    icon: "MapPin",
    tech: [
      "Java", "Kotlin", "Android SDK", "SQLite", "GPS", "Offline Maps", "GIS Layers",
    ],
    results:
      "Deployed for forestry department, reliable zero-connectivity operation, full data sync on reconnect",
    problem:
      "Forest rangers patrol remote areas with zero cellular signal — traditional online apps cannot work, and patrol data must be reliably logged.",
    solution:
      "Offline-first architecture: pre-loaded offline map tiles, local SQLite for all data persistence, GPS trajectory recording stored locally, GIS annotation layers for marking incidents. Smart sync protocol uploads all data when network returns.",
    highlights: [
      "Delivered offline-first Android GIS for forest patrol in no-signal areas",
      "Custom offline maps, GPS tracks, GIS annotations, and risk reporting",
      "Synced patrol and incident data after connectivity returned",
      "Improved field risk reporting continuity with offline-first architecture",
    ],
    lessons:
      "Offline-first design patterns are essential for field apps; local SQLite with smart sync prevents data loss; UX must guide users about online/offline status.",
    featured: false,
  },
  {
    slug: "visit-booking",
    title: "Visit Booking & Access Management",
    company: "Chunxiao Technology",
    period: "2020 – 2022",
    role: "Full-stack Engineer",
    summary:
      "Multi-terminal visitation platform for high-security scenarios (prisons, hospital ICU/NICU). Admin booking system, face recognition terminals with liveness detection, visitor WeChat mini-program, and WebRTC audio-video sessions.",
    coverImage: "",
    images: [],
    gradient: "from-indigo-500 to-purple-500",
    icon: "Users",
    tech: [
      "Java", "Kotlin", "Spring Cloud", "Android", "WeChat Mini Program",
      "WebRTC", "Face Recognition", "Liveness Detection", "MySQL", "Redis",
      "SMS Gateway", "HIS Interface",
    ],
    results:
      "99.5% face recognition accuracy, <1s verification, 30% efficiency gain, deployed in ICU/NICU/infectious disease",
    problem:
      "High-security facilities need controlled, auditable visitation with identity verification and pandemic-safe contactless options.",
    solution:
      "Multi-terminal platform: online booking + approval + time slot quota, face recognition access control with liveness detection, WebRTC remote audio-video visitation with full recording/audit, WeChat mini-program for visitors.",
    highlights: [
      "Developed multi-terminal visit booking platform (admin, terminal, visitor)",
      "Integrated face recognition with liveness detection for visitor entry/exit",
      "Built WebRTC audio-video visitation with recording and audit",
      "Supported contactless visit during pandemic",
    ],
    lessons:
      "Face recognition for access control needs liveness detection; pandemic contactless visit requires robust WebRTC + audit trail; HIS integration is key for hospital workflows.",
    featured: false,
  },
  {
    slug: "picture-locker",
    title: "Picture Book Locker",
    company: "Chunxiao Technology",
    period: "2020 – 2023",
    role: "Android Developer (Locker & Client Apps)",
    summary:
      "24/7 smart self-service library cabinet for schools. Android control cabinet drives electromagnetic locks, UV-C disinfection, and sensors via UART/RS485. User app supports face/QR auth for <3s borrowing. Zero book loss across multiple school deployments.",
    coverImage: "/projects/picture-locker/front.png",
    images: [
      { src: "/projects/picture-locker/front.png", caption: "Cabinet Front View" },
      { src: "/projects/picture-locker/exterior-gates.png", caption: "Exterior with Gates" },
      { src: "/projects/picture-locker/exterior-blue.png", caption: "Blue Site Installation" },
      { src: "/projects/picture-locker/exterior-green.jpg", caption: "Outdoor Installation" },
      { src: "/projects/picture-locker/exterior-red.jpg", caption: "Red Cabinet" },
      { src: "/projects/picture-locker/exterior-gates-alt.png", caption: "Gates Alternate View" },
      { src: "/projects/picture-locker/smart-cabinet.jpg", caption: "Smart Cabinet" },
      { src: "/projects/picture-locker/campus-hall.png", caption: "Campus Hall" },
      { src: "/projects/picture-locker/library-room.jpg", caption: "Library Room" },
      { src: "/projects/picture-locker/borrow-ui.png", caption: "Borrow UI on Device" },
      { src: "/projects/picture-locker/borrow-ui-closeup.png", caption: "Borrow UI Close-up" },
      { src: "/projects/picture-locker/uv-mode.png", caption: "UV Disinfection Mode" },
      { src: "/projects/picture-locker/bank-of-china.png", caption: "Bank of China Deployment" },
      { src: "/projects/picture-locker/illustration-cartoon.png", caption: "Locker Illustration" },
    ],
    gradient: "from-sky-500 to-blue-500",
    icon: "BookOpen",
    tech: [
      "Java", "Kotlin", "Android SDK", "Face Recognition", "ZXing",
      "ARM Board", "UART/RS485", "GPIO", "Electromagnetic Locks", "UV-C",
      "MQTT", "Spring Cloud",
    ],
    results:
      "24/7 unattended operation, <3s borrow/return, multiple schools, 0% book loss rate",
    problem:
      "Schools need 24/7 self-service book borrowing when libraries are closed, with hygienic handling and robust hardware.",
    solution:
      "Smart locker cabinet: Android host controlling electromagnetic locks (sub-second via UART/RS485), UV-C auto-disinfection on return, door sensors, LED indicators. User Android app with face recognition + ZXing QR auth.",
    highlights: [
      "Programmed Android control stack for electromagnetic locks, UV disinfection, sensors",
      "Shipped borrower-facing Android app for self-service check-out and return",
      "Combined face recognition and QR code scanning for authentication",
      "Sustained 24/7 self-service with stable multi-cabinet networking",
    ],
    lessons:
      "Hardware integration demands robust fail-safes for every component; UV disinfection timing must be precise; splitting scope early when inheriting legacy code saves the project.",
    featured: false,
  },
  {
    slug: "boobit",
    title: "Boobit Crypto Trading App",
    company: "Chunxiao Technology",
    period: "Jan 2022 – Dec 2022",
    role: "Sole Android Developer",
    summary:
      "Android cryptocurrency trading app supporting real-time market data, token search, exchange, and recharge flows. WebSocket real-time feeds, encrypted local storage, MVVM + Clean Architecture. Banking-style reliability for sensitive financial actions.",
    coverImage: "/projects/boobit/screenshot-01.jpg",
    images: [
      { src: "/projects/boobit/screenshot-01.jpg", caption: "Market Overview" },
      { src: "/projects/boobit/screenshot-02.jpg", caption: "Token Search" },
      { src: "/projects/boobit/screenshot-03.jpg", caption: "Trading Screen" },
      { src: "/projects/boobit/screenshot-04.jpg", caption: "Exchange Flow" },
      { src: "/projects/boobit/screenshot-05.jpg", caption: "Wallet View" },
      { src: "/projects/boobit/screenshot-06.jpg", caption: "Recharge Flow" },
      { src: "/projects/boobit/screenshot-07.jpg", caption: "Order History" },
      { src: "/projects/boobit/screenshot-08.jpg", caption: "Account Settings" },
      { src: "/projects/boobit/screenshot-09.jpg", caption: "Trading Detail" },
      { src: "/projects/boobit/screenshot-10.jpg", caption: "Market Analysis" },
      { src: "/projects/boobit/screenshot-11.jpg", caption: "Portfolio View" },
      { src: "/projects/boobit/screenshot-12.jpg", caption: "Transaction History" },
      { src: "/projects/boobit/screenshot-13.jpg", caption: "Advanced Trading" },
      { src: "/projects/boobit/screenshot-14.jpg", caption: "Token Details" },
      { src: "/projects/boobit/screenshot-15.jpg", caption: "Settings & Security" },
    ],
    gradient: "from-yellow-500 to-orange-500",
    icon: "Wallet",
    tech: [
      "Kotlin", "Java", "Android SDK", "Jetpack Compose", "MVVM",
      "WebSocket", "Retrofit", "OkHttp", "Room", "Encrypted Storage",
    ],
    results:
      "5+ core features delivered, real-time WebSocket market data, production Android client",
    problem:
      "Users need a secure and responsive mobile cryptocurrency trading experience with real-time market data.",
    solution:
      "MVVM + Clean Architecture Android app: WebSocket for real-time market feeds, encrypted local storage for wallet data, clear trading workflow UI with robust error handling and retries.",
    architecture:
      "Presentation (UI + ViewModels) → Domain (Use Cases) → Data (Repositories + API + Room DB) → WebSocket feeds",
    highlights: [
      "Implemented real-time market feed via WebSocket channels",
      "Developed secure wallet data handling with encrypted local storage",
      "Designed clear trading workflow UI to reduce operation complexity",
      "Integrated recharge and exchange APIs with robust error handling",
    ],
    lessons:
      "Fintech apps need banking-style reliability for sensitive financial actions; encrypted local storage is non-negotiable; real-time WebSocket feeds require careful reconnection handling.",
    featured: false,
  },
  {
    slug: "smart-power",
    title: "Smart Power Management System",
    company: "Chunxiao Technology",
    period: "2019 – 2022",
    role: "Java Backend & Android Developer",
    summary:
      "Smart power platform for factories and buildings: onboard gateways, switches, and meters; monitor per-load electrical parameters; remote control and alarm policies. 15% energy saving, sub-second alarm, 99.9% data collection rate.",
    coverImage: "/projects/smart-power/dashboard.png",
    images: [
      { src: "/projects/smart-power/dashboard.png", caption: "Power Dashboard" },
      { src: "/projects/smart-power/env-control.png", caption: "Environment Control" },
      { src: "/projects/smart-power/mobile-app.png", caption: "Mobile App" },
    ],
    gradient: "from-yellow-400 to-green-500",
    icon: "Zap",
    tech: [
      "Java", "Spring Cloud", "Modbus RTU/TCP", "DL/T645", "InfluxDB",
      "RabbitMQ", "Apache Flink", "Vue.js", "ECharts", "MQTT", "RS485",
    ],
    results:
      "15% energy saving, <1s alarm response, 99.9% collection rate, 3+ parks unified management",
    problem:
      "Factories and buildings need granular power monitoring and control to reduce energy waste and respond to electrical anomalies quickly.",
    solution:
      "IoT platform: Modbus/RS485 gateways and smart meters for telemetry, Spring Cloud + InfluxDB for time-series storage, Apache Flink for stream processing, Vue.js/ECharts dashboards, Android app for mobile monitoring.",
    architecture:
      "Smart meters/breakers → Modbus/RS485 → Gateway → MQTT → Spring Cloud → InfluxDB/Flink → Vue.js dashboards + Android app",
    highlights: [
      "Ran Java services for multi-site power monitoring under long-lived production load",
      "Shipped Android app for live energy readouts and sub-second alarm escalation",
      "Wired Modbus/RS485 gateways and smart meters into the telemetry path",
      "Achieved 15% average energy consumption reduction",
    ],
    lessons:
      "Time-series databases (InfluxDB) are essential for power telemetry; stream processing (Flink) enables real-time anomaly detection; edge gateways reduce cloud bandwidth.",
    featured: false,
  },
  {
    slug: "exhibition-robot",
    title: "Exhibition Service Robot",
    company: "Chunxiao Technology",
    period: "2019",
    role: "Full-stack Engineer / System Integration",
    summary:
      "Intelligent service robot for exhibitions and malls. Voice interaction (ASR/TTS), face recognition, autonomous SLAM navigation with centimeter-level precision. Multi-modal interaction and 7x24 continuous operation.",
    coverImage: "/projects/exhibition-robot/navigation-ui.png",
    images: [
      { src: "/projects/exhibition-robot/robot-exterior.png", caption: "Robot Exterior" },
      { src: "/projects/exhibition-robot/navigation-ui.png", caption: "Navigation UI" },
      { src: "/projects/exhibition-robot/voice-interaction.png", caption: "Voice Interaction" },
    ],
    gradient: "from-cyan-500 to-blue-600",
    icon: "Bot",
    tech: [
      "Java", "Kotlin", "Python", "C++", "ROS", "SLAM", "OpenCV",
      "ASR/TTS", "Face Recognition", "LiDAR", "Android SDK", "Spring Cloud", "MQTT",
    ],
    results:
      "cm-level navigation, >98% face recognition, >90% voice understanding, 7x24 operation, multiple exhibitions",
    problem:
      "Exhibitions and malls need interactive robots for guided tours, information, and visitor engagement in dynamic environments.",
    solution:
      "Android-based robot system: ROS SLAM navigation with LiDAR, ASR/TTS voice interaction, face recognition for VIP greeting, multi-modal touch/voice/vision interaction, Spring Cloud backend for remote monitoring.",
    architecture:
      "Android touch UI → ROS (SLAM/Navigation) → LiDAR/IMU/RGBD sensors → Spring Cloud backend → WebSocket/MQTT",
    highlights: [
      "Integrated ROS for autonomous navigation with centimeter-level precision",
      "Developed multi-modal interaction: voice, touch, and vision",
      "Face recognition for VIP greeting and attendance tracking",
      "7x24 continuous operation capability for multi-day events",
    ],
    lessons:
      "Multi-modal interaction fusion provides redundancy in noisy environments; SLAM tuning for dynamic exhibition halls requires careful parameter calibration; rule-based + API-driven approach was practical when AI wasn't yet mature.",
    featured: false,
  },
  {
    slug: "broadcast-control",
    title: "Broadcast Control Platform",
    company: "Chunxiao Technology",
    period: "2020",
    role: "Project Manager, System Designer & Android Developer",
    summary:
      "Large-scale digital signage platform with management console and Android screen clients. MQTT broadcast for campaign task distribution, device grouping, scheduled playback, and remote publishing for elevator, in-store, and public displays.",
    coverImage: "",
    images: [],
    gradient: "from-purple-500 to-indigo-600",
    icon: "Radio",
    tech: [
      "Java", "Kotlin", "Android SDK", "MQTT", "HTTP/REST", "WebSocket",
    ],
    results:
      "Unified ad delivery for heterogeneous public screens, efficient remote campaign management",
    problem:
      "Multiple public screen types (elevator, in-store, outdoor) need centralized ad campaign management and remote content delivery.",
    solution:
      "Multi-terminal platform: management console for campaign scheduling, MQTT broadcast for mass task distribution, Android screen clients for playback, device heartbeat monitoring, and operation audit trails.",
    highlights: [
      "Led overall system design and project management for multi-terminal platform",
      "Implemented MQTT broadcast for large-scale campaign task distribution",
      "Built device grouping and campaign policy control for targeted delivery",
      "Supported remote publishing without on-site operation",
    ],
    lessons:
      "MQTT broadcast mechanism is efficient for one-to-many device management; audit trails are essential for ad publishing compliance; remote management reduces operational costs significantly.",
    featured: false,
  },
  {
    slug: "chinese-herbal-recognition",
    title: "Chinese Herbal Recognition Platform",
    company: "Chunxiao Technology",
    period: "2019",
    role: "Platform Designer & AI Workflow Developer",
    summary:
      "End-to-end AI platform for image classification: category management, data annotation, model training (YOLOv4/ResNet/MobileNetV3), evaluation with release-gate criteria, and inference serving. Designed as reusable workflow for multiple visual classification domains.",
    coverImage: "",
    images: [],
    gradient: "from-green-500 to-emerald-600",
    icon: "Leaf",
    tech: [
      "Python", "TypeScript", "YOLOv4", "ResNet", "MobileNetV3", "EfficientNet",
      "FastAPI", "Vue.js", "Element Plus", "MySQL", "Docker", "GPU Training",
    ],
    results:
      "Full-loop annotation-to-inference pipeline, reusable for multiple classification domains",
    problem:
      "Traditional Chinese medicine identification needs a systematic AI platform covering the full workflow from data annotation to model serving.",
    solution:
      "Closed-loop AI platform: category creation → image annotation → quality review → model training with experiment tracking → evaluation with release gates → versioned model publishing → inference API.",
    highlights: [
      "Designed end-to-end AI platform workflow from category setup to recognition inference",
      "Built image annotation process with quality review and dispute handling",
      "Added model training pipeline with experiment tracking and model registry",
      "Low-confidence sample feedback to re-annotation queue for continuous improvement",
    ],
    lessons:
      "AI platforms need standardized release criteria for model publishing; low-confidence feedback loops improve model quality over time; designing for extensibility enables quick domain adaptation.",
    featured: false,
  },
  {
    slug: "device-maintenance-prediction",
    title: "Device Maintenance Prediction",
    company: "Chunxiao Technology",
    period: "2023",
    role: "AI Algorithm Developer",
    summary:
      "Predictive maintenance AI: SparkNet + Random Forest models analyze equipment aging trends and predict next maintenance windows. Feature engineering on intervals, fault frequency, and usage intensity with multi-model comparison.",
    coverImage: "",
    images: [],
    gradient: "from-red-500 to-orange-500",
    icon: "Wrench",
    tech: [
      "Python", "SparkNet", "Random Forest", "Regression Models",
      "Time-series Forecasting", "Ensemble Modeling", "Feature Engineering",
    ],
    results:
      "Predictive maintenance recommendations replacing fixed-cycle scheduling, reusable model pipeline",
    problem:
      "Equipment maintenance is typically reactive or fixed-cycle, leading to either premature servicing or unexpected failures.",
    solution:
      "ML pipeline: historical maintenance data → feature engineering (intervals, fault frequency, usage intensity) → SparkNet + Random Forest prediction → maintenance window recommendations with risk-priority scoring.",
    highlights: [
      "Designed predictive maintenance workflow from historical service records",
      "Implemented SparkNet + Random Forest for next-maintenance timing prediction",
      "Built feature engineering pipeline for intervals, fault frequency, and usage intensity",
      "Multi-model comparison with regression and time-series baselines",
    ],
    lessons:
      "Feature engineering on maintenance intervals and usage patterns is more impactful than complex models; ensemble approaches provide more stable predictions than single models.",
    featured: false,
  },
  {
    slug: "banknote-paper-mill",
    title: "Banknote Paper Mill Integration",
    company: "Chunxiao Technology",
    period: "2018 – 2020",
    role: "Developer & Integrator",
    summary:
      "High-secrecy banknote paper mill on-site integration. Air-gapped environment with no internet access — offline laptops for data format analysis, in-plant testing, and external development cycles. Each site visit required ~1 week advance approval.",
    coverImage: "",
    images: [],
    gradient: "from-stone-500 to-neutral-600",
    icon: "Shield",
    tech: [
      "Java", "Air-gapped Workflow", "Data Format Analysis",
      "Secure Manufacturing Integration", "Offline Deployment Packaging",
    ],
    results:
      "Delivered integration under strict secrecy, managed air-gapped deployment with controlled release artifacts",
    problem:
      "High-security banknote paper mill prohibits internet access on-site, making traditional development and deployment impossible.",
    solution:
      "Air-gapped workflow: offline laptops for format analysis and in-plant testing, external development cycles, controlled transfer paths for deployment. Small provable checkpoints per visit with transparent scheduling communication.",
    highlights: [
      "Delivered under strict secrecy with no on-site internet",
      "Formal access controls: ~1 week lead time per site visit",
      "Air-gapped deployment with offline artifacts and rollback discipline",
      "Aligned expectations via provable checkpoints per visit",
    ],
    lessons:
      "Air-gapped environments require extreme off-site preparation; expectation management is critical when access friction causes non-visible progress days; controlled deployment paths need extra packaging and verification.",
    featured: false,
  },
  {
    slug: "field-weighing-access",
    title: "Entrance Road Weighing & Access Interlock",
    company: "Chunxiao Technology",
    period: "2015 – 2017",
    role: "Developer (Field Software Integration)",
    summary:
      "Customer-site vehicle weigh-in system: read stable weight from entrance scales, raise overload warnings, and interlock with barrier/signal hardware. Serial/device integration with Delphi under field constraints.",
    coverImage: "",
    images: [],
    gradient: "from-amber-600 to-yellow-500",
    icon: "Scale",
    tech: [
      "Delphi", ".NET", "Weigh-scale Integration", "Barrier Interlocks",
      "Overload Detection",
    ],
    results:
      "Delivered field weighing integration with barrier interlocks under tight schedules",
    problem:
      "Vehicle entrance weighing needs reliable software integration with scales, barriers, and alarm hardware in industrial environments.",
    solution:
      "Field integration: serial communication for weight reading, overload threshold detection, barrier/signal hardware interlocks. Shipped in Delphi for speed, with documented interfaces for maintainability.",
    highlights: [
      "Field workflow: vehicle on scale → software reads weight → triggers alarms → coordinates barrier interlocks",
      "Advocated for team-aligned stack over individual familiarity",
      "Documented interfaces and operational risks for next maintainer",
      "Professional execution under non-preferred stack decision",
    ],
    lessons:
      "Technical disagreements should focus on maintainability and bus factor; when the org picks a lane you don't own, execution quality and written-down risk beat hallway debate.",
    featured: false,
  },
  {
    slug: "patent-search",
    title: "Patent Search System",
    company: "Chunxiao Technology",
    period: "2014",
    role: "Full-stack Developer",
    summary:
      "Enterprise patent document management: .NET Framework 2.0 Windows desktop app with Lucene.NET 2.9 full-text search. 10,000+ patent records, Excel batch processing, sub-2s search response for 50+ daily research users.",
    coverImage: "",
    images: [],
    gradient: "from-slate-500 to-gray-600",
    icon: "Search",
    tech: [
      "C#", ".NET Framework 2.0", "Windows Forms", "SQL Server 2008",
      "Lucene.NET 2.9", "EPPlus", "ADO.NET", "SQLite",
    ],
    results:
      "10,000+ patents managed, <2s search response, 50+ daily users",
    problem:
      "Research teams need efficient patent document management with fast full-text search across large collections.",
    solution:
      ".NET desktop application: Windows Forms UI, SQL Server 2008 backend, Lucene.NET 2.9 for full-text search, EPPlus for Excel batch import/export, ADO.NET 2.0 data access with connection pooling.",
    highlights: [
      "Built enterprise desktop app on .NET Framework 2.0 with C# 3.0",
      "Integrated Lucene.NET 2.9 for sub-2s full-text search",
      "Excel batch import/export with data validation",
      "Multi-criteria advanced search with date range, inventor, category filters",
    ],
    lessons:
      "Full-text search engines like Lucene dramatically improve document retrieval; Excel batch processing is essential for enterprise data workflows; proper indexing strategy matters for growing datasets.",
    featured: false,
  },
  {
    slug: "school-attendance",
    title: "School Face Recognition Attendance",
    company: "Chunxiao Technology",
    period: "2020 – 2021",
    role: "Full-stack Engineer",
    summary:
      "Smart face recognition attendance system for schools with real-time parent notifications. 99%+ recognition accuracy, sub-second response, liveness detection, deployed across multiple schools.",
    coverImage: "",
    images: [],
    gradient: "from-teal-500 to-cyan-600",
    icon: "GraduationCap",
    tech: [
      "Java", "Kotlin", "Python", "OpenCV", "Face Recognition", "Liveness Detection",
      "Android SDK", "Spring Cloud", "JPush", "MySQL", "Redis", "MQTT",
    ],
    results:
      "3+ schools deployed, <1s recognition, 99%+ accuracy, real-time parent notifications",
    problem:
      "Schools need touchless, automated attendance tracking that reliably identifies students and keeps parents informed.",
    solution:
      "Face recognition terminals with liveness detection, Spring Cloud backend, JPush for real-time parent notifications, attendance statistics dashboard, offline mode support.",
    highlights: [
      "Developed face recognition attendance terminal and management system",
      "Real-time attendance notifications pushed to parents",
      "Liveness detection to prevent photo spoofing",
      "Deployed across multiple schools with stable operation",
    ],
    lessons:
      "Liveness detection is essential to prevent spoofing in face recognition systems; real-time parent notification increases engagement; offline mode is critical for school network reliability.",
    featured: false,
  },
  {
    slug: "visual-gateway",
    title: "Visual Gateway / Breaker Control",
    company: "Chunxiao Technology",
    period: "2022 – 2024",
    role: "Android Developer / Gateway Control Engineer",
    summary:
      "Gateway-centric breaker control platform: non-networked circuit breakers connect via RS232 serial bus to Android gateway. Telemetry collection, remote open/close control, local alerting, and cloud reporting for multi-site monitoring.",
    coverImage: "",
    images: [],
    gradient: "from-violet-600 to-indigo-500",
    icon: "Network",
    tech: [
      "Java", "Kotlin", "Android SDK", "SerialPort API", "Modbus RTU",
      "RS232", "MQTT", "InfluxDB", "MySQL", "Vue.js", "ECharts", "WebSocket",
    ],
    results:
      "1:N gateway-to-breaker control, real-time telemetry, 24/7 operation, multi-site deployment",
    problem:
      "Non-networked circuit breakers need remote monitoring and control without expensive per-device networking upgrades.",
    solution:
      "Android gateway bridges serial breakers to cloud: RS232 polling for telemetry (current/voltage/power/energy), remote open/close commands with retry, local alerting for electrical anomalies, cloud dashboards for centralized monitoring.",
    architecture:
      "Circuit breakers → RS232 serial bus → Android Gateway → MQTT → Spring Cloud → InfluxDB → Vue.js/ECharts dashboards",
    highlights: [
      "Designed Android-based breaker control gateway architecture",
      "Implemented RS232 serial communication for polling and control",
      "Edge alerting with sub-second local response for electrical anomalies",
      "Reduced retrofit costs by reusing non-networked breakers",
    ],
    lessons:
      "Gateway pattern is cost-effective for retrofitting legacy equipment; edge alerting reduces response time for critical anomalies; serial polling needs robust retry and timeout handling.",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): ProjectData[] {
  return projects.filter((p) => p.featured);
}

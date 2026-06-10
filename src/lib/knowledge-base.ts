// Leo Zhang Knowledge Base - Compiled from E:\Coding\leozhang2056
// Source of truth for AI chatbot

export const KNOWLEDGE_BASE = {
  personal: {
    name: "Yuchao Zhang (Leo Zhang)",
    nameCN: "张玉超",
    email: "leozhang2056@gmail.com",
    phone: "+64 27 385 0794",
    location: "Auckland, New Zealand (North Shore, Hillcrest)",
    visa: "Post-Study Work Visa — Open full-time work for any employer",
    linkedin: "https://www.linkedin.com/in/leo-zhang-305626280/",
    github: "https://github.com/leozhang2056",
  },

  summary: {
    core: "Full-stack software engineer with 10+ years shipping production software across Android, modern Java backends, and AI integration. Master of Computer and Information Sciences from AUT with First Class Honours.",
    android: "Android engineer with 10+ years of production mobile delivery for enterprise IM and field deployment scenarios, expert in Kotlin/Java and API integration. Strong in full lifecycle delivery from requirements to post-release support.",
    ai: "AI engineer with 10+ years in applied AI, computer vision, and full-stack delivery, focused on deployable, iterative engineering. Expert in LLM applications and vision pipelines from prototype to production.",
    java: "Backend software engineer with 10+ years in Java delivery including Spring Cloud, MyBatis, and microservices. Expert in enterprise backends for manufacturing and messaging, with focus on uptime, latency, and release rhythm.",
  },

  education: [
    {
      degree: "Master of Computer and Information Sciences",
      degreeCN: "计算机与信息科学硕士",
      institution: "Auckland University of Technology (AUT)",
      institutionCN: "奥克兰理工大学",
      location: "New Zealand",
      period: "2024-07 to 2026-02",
      status: "Completed",
      gpa: "8.25/9.0",
      honors: "First Class Honours",
      highlights: ["Computer Vision", "Diffusion Models", "Large Language Models", "Multimodal AI"],
      thesis: "ChatClothes: Conversational Virtual Try-On with Diffusion Models",
      thesisDOI: "10.1109/IVCNZ67716.2025.11281834",
      completedEarly: "6 months early",
    },
    {
      degree: "Bachelor of Software Engineering",
      degreeCN: "软件工程学士",
      institution: "Hebei University of Science and Technology",
      institutionCN: "河北科技大学",
      location: "China",
      period: "2009-07 to 2013-06",
      highlights: ["National Scholarship", "Data Structures", "Algorithms", "Java Programming", "Database Systems"],
    },
  ],

  experience: [
    {
      company: "Auckland University of Technology",
      companyURL: "https://www.aut.ac.nz",
      location: "Auckland, New Zealand",
      role: "AI Research Engineer",
      period: "2024-07 to 2026-02",
      type: "Education/Research",
      achievements: [
        "Completed Master's at AUT (2025), building ChatClothes — multimodal virtual try-on combining diffusion models for garment generation, YOLO-LC for lightweight garment classification, and local LLM for conversational control via Ollama. Trained and fine-tuned LoRA adapters on DressCode and VITON-HD datasets. Submitted thesis 6 months early.",
        "Designed end-to-end pipeline: data preprocessing/augmentation, model training/evaluation, ComfyUI workflow orchestration, and on-device inference optimization for constrained hardware. Published at IVCNZ 2025.",
        "Worked on hyperspectral imaging and computer vision to classify kiwifruit ripeness.",
      ],
      techStack: ["AWS", "Azure", "Linux", "Docker", "Git", "PyTorch", "OpenCV", "YOLO", "LoRA", "DeepSeek", "ComfyUI", "Ollama"],
    },
    {
      company: "Chunxiao Technology Co., Ltd.",
      companyURL: "https://www.chunxiao.net/",
      location: "China",
      role: "Full-stack Engineer & Team Lead",
      period: "2018-02 to 2024-02",
      type: "Full-time",
      achievements: [
        "Built media transcoding pipeline (H.264/AAC) supporting RTMP/HLS distribution using FFmpeg and C#, and developed ASP.NET backend services with SQL Server for media asset management.",
        "Architected and delivered smart factory platform for garment manufacturing — integrated RFID, electronic scales, conveyors, and barcode scanners across 10+ factory sites using Spring Cloud microservices and Docker-based CI/CD. Built Android shop-floor terminals and Vue.js web portals for hundreds of daily workers. Improved production efficiency 30%+. Awarded Hebei Provincial Science and Technology Achievement Award (2020).",
        "Built enterprise messaging platform serving 5,000 DAU with 500K+ daily messages, including SSO, file services, and permission frameworks across 5+ subsystems — migrated from legacy C++ to cloud IM, eliminating 90%+ defects.",
        "Delivered IoT projects including smart switches, Zigbee/WiFi gateways, smart power systems, and device management platforms.",
        "Led Android architecture and delivery across projects — established MVVM patterns with Jetpack Compose, Coroutines, and modularisation.",
      ],
      techStack: [".NET", "C++", "Kotlin", "Java", "Spring Cloud", "Docker", "MySQL", "Redis", "Kafka", "ActiveMQ", "Vue.js", "Android"],
    },
    {
      company: "Chunxiao Technology Co., Ltd.",
      location: "China",
      role: "Senior Mobile Developer",
      period: "2013-07 to 2018-02",
      type: "Full-time",
      achievements: [
        "Shipped 8+ production Android apps across field inspection, IoT device management, and mobile workforce solutions.",
        "Designed modular Android architecture reused across 12+ internal projects, cutting code duplication by 50%+.",
        "Reduced OOM crashes on image-heavy and real-time streaming apps through memory profiling and leak detection.",
        "Managed Android app releases to Google Play and domestic app stores, handled push notification delivery with failover channels.",
      ],
      techStack: ["Kotlin", "Java", "Android SDK", "Coroutines", "NDK/JNI", "Gradle", "CI/CD"],
    },
  ],

  skills: {
    programming: [
      { name: "Java", level: "Expert", years: 10 },
      { name: "Kotlin", level: "Advanced", years: 5 },
      { name: "Python", level: "Advanced", years: 3 },
      { name: "JavaScript", level: "Advanced", years: 6 },
      { name: "TypeScript", level: "Advanced", years: 5 },
    ],
    mobile: [
      "Android SDK", "Kotlin", "Java", "Jetpack Compose", "MVVM", "Coroutines & Flow",
      "Hilt", "NDK/JNI", "Clean Architecture", "Gradle"
    ],
    ai_ml: [
      "PyTorch", "OpenCV", "YOLO", "Diffusion Models", "LLM Fine-tuning",
      "RAG", "Prompt Engineering", "LoRA", "ComfyUI"
    ],
    backend: [
      "Spring Cloud", "Java", "Python", "Kotlin", "REST APIs",
      "Microservices", "Event-Driven Architecture", "MySQL", "Redis"
    ],
    iot: [
      "RFID", "UART/Serial", "MQTT", "Raspberry Pi", "Embedded Linux",
      "TCP/UDP Networking", "Zigbee"
    ],
    devops: [
      "Docker", "Jenkins", "GitHub Actions", "GitLab CI/CD", "Kubernetes",
      "Nginx", "CentOS/Ubuntu", "Azure"
    ],
  },

  projects: [
    {
      id: "chatclothes",
      name: "ChatClothes Virtual Try-On",
      type: "AI/ML - Master's Thesis",
      period: "2024-11 to 2025-04 (6 months, completed early)",
      role: "AI Engineer & Python Developer (Independent)",
      teamSize: 1,
      summary: "Multimodal AI virtual try-on combining diffusion generation, YOLO12n-LC classification, and local LLM control via Ollama. Deployed on Raspberry Pi 5.",
      techStack: ["Python", "PyTorch", "OpenCV", "Diffusion Models", "LoRA", "LLM", "YOLO12n-LC", "FastAPI", "ComfyUI", "Ollama", "Raspberry Pi 5"],
      metrics: {
        fid: "28.5 (19% improvement)",
        classificationAccuracy: "94.2%",
        modelSize: "8x smaller than YOLO12n",
        latency: "<10s on Raspberry Pi 5",
        userSuccess: "87%",
      },
      publication: "IVCNZ 2025 - DOI: 10.1109/IVCNZ67716.2025.11281834",
      awards: ["First Class Honours", "Thesis submitted 6 months early"],
    },
    {
      id: "smart-factory",
      name: "Smart Factory System",
      type: "Industrial IoT - Enterprise",
      period: "2018-2024 (6 years)",
      role: "System Designer, Developer & Maintainer",
      teamSize: 6,
      summary: "Industrial IoT smart manufacturing platform deployed across 10+ factory sites. Spring Cloud microservices + Android shop-floor apps + Vue.js portals + IoT (RFID, scales, conveyors).",
      techStack: ["Spring Cloud", "Java", "Android", "Vue.js", "RFID", "MySQL", "Redis", "Docker", "Jenkins", "ActiveMQ", "Kafka"],
      metrics: {
        factories: "10+ sites",
        efficiency: "30%+ improvement",
        workers: "Hundreds daily users",
        team: "6-person cross-functional team",
      },
      awards: ["Hebei Provincial Science and Technology Achievement Award (2020)"],
    },
    {
      id: "enterprise-messaging",
      name: "Enterprise Messaging Platform",
      type: "Enterprise Communication",
      period: "2014-2024 (10 years)",
      role: "Developer & System Designer",
      summary: "Android-led enterprise IM serving 5,000 DAU with sub-200ms latency and 500K+ daily messages. NDK TCP/UDP transport, Spring Cloud microservices, migrated from legacy C++ eliminating 90%+ defects.",
      techStack: ["Kotlin", "Java", "NDK", "Spring Cloud", "Node.js", "MySQL", "Redis", "FastDFS", "WebSocket"],
      metrics: {
        dau: "5,000 daily active users",
        latency: "<200ms",
        messages: "500K+ per day",
        defectReduction: "90%+",
      },
    },
    {
      id: "iot-device-management",
      name: "IoT Device Management Platform",
      type: "IoT - Product Line",
      period: "2016-2023 (7 years)",
      role: "Full-stack Developer",
      summary: "Android app + embedded gateway firmware + Spring Cloud backend for smart switches and gateways. MQTT integration with Zigbee/WiFi devices.",
      techStack: ["Android SDK", "Embedded Linux", "Zigbee", "WiFi", "MQTT", "Spring Cloud", "Vue.js"],
      metrics: "7-year product line, multiple device types shipped",
    },
    {
      id: "live-streaming-commerce",
      name: "Live Streaming Commerce Platform",
      type: "E-commerce/Streaming",
      period: "2015-2018 (3 years)",
      summary: "Full-stack streaming platform: Android client (C++ core), ASP.NET web admin, WebSocket chat. RTMP/HLS delivery, 1000+ concurrent viewers.",
      techStack: ["Java", "Kotlin", "C++", "C#", "ASP.NET", "Node.js", "WebRTC", "RTMP", "HLS", "FFmpeg"],
      metrics: "1000+ peak concurrent viewers, 3-year production run",
    },
    {
      id: "forest-patrol",
      name: "Forest Patrol GIS",
      type: "Mobile GIS",
      period: "2021-2022 (1 year)",
      summary: "Offline-first Android GIS app for forest rangers in no-signal areas. Custom offline maps, GPS tracking, incident reporting with deferred sync.",
      techStack: ["Java", "Kotlin", "Android SDK", "SQLite", "GPS", "Offline Maps"],
      metrics: "Deployed for forestry department, reliable zero-connectivity operation",
    },
    {
      id: "visit-system",
      name: "Visit Booking & Access Management",
      type: "Enterprise System",
      period: "2020-2022 (2 years)",
      summary: "Multi-terminal platform: admin booking, face recognition terminals, visitor WeChat mini-program, WebRTC sessions.",
      techStack: ["Spring Cloud", "Android", "WeChat Mini Program", "WebRTC", "Face Recognition", "MySQL", "Redis"],
      metrics: "99.5% face recognition accuracy, <1s verification, 30% efficiency gain",
    },
    {
      id: "picture-book-locker",
      name: "Picture Book Locker",
      type: "IoT/Hardware",
      period: "2020-2023 (3 years)",
      summary: "Smart library locker with Android control cabinet (locks, UV, sensors) + borrower app + face/QR authentication.",
      techStack: ["Java", "Kotlin", "Android SDK", "Face Recognition", "ZXing", "ARM Board", "UART/RS485", "GSM"],
      metrics: "<3s borrowing, multiple schools, 0% book loss rate",
    },
  ],

  certifications: [
    { name: "Software Design Engineer Certificate", authority: "China Qualification Authority", year: 2019 },
    { name: "IoT Fundamentals", authority: "Xi'an Jiaotong University", year: 2020 },
  ],

  awards: [
    { name: "First Class Honours", authority: "AUT", year: 2025, category: "Master's Degree" },
    { name: "Science and Technology Achievement Award", authority: "Hebei, China", year: 2020, category: "Smart Manufacturing" },
    { name: "National Scholarship", authority: "Hebei University of Science and Technology", year: 2013, category: "Academic" },
  ],

  publications: [
    {
      title: "ChatClothes: Conversational Virtual Try-On with Diffusion Models",
      venue: "IVCNZ 2025",
      year: 2025,
      type: "Conference Paper",
      doi: "10.1109/IVCNZ67716.2025.11281834",
    },
    {
      title: "Clothes Recognition Based on Lightweight Deep Learning Models",
      venue: "IGI Global — Aesthetics in Creative Technology",
      year: 2026,
      type: "Book Chapter",
      status: "Under Review",
    },
  ],

  languages: [
    { language: "Chinese (Mandarin)", proficiency: "Native" },
    { language: "English", proficiency: "Professional Working" },
  ],

  keywords: [
    "Java", "Kotlin", "Android", "Spring Cloud", "AI", "Machine Learning", "PyTorch",
    "Python", "Microservices", "Docker", "Full-stack", "Computer Vision", "LLM",
    "Agile", "CI/CD", "IoT", "RFID", "Enterprise Messaging", "Industrial IoT",
    "Edge Computing", "Virtual Try-On", "Diffusion Models", "YOLO", "LoRA"
  ],
};

export type KnowledgeBase = typeof KNOWLEDGE_BASE;
export interface ProjectMetric {
  label: string;
  value: string;
}

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
  keyMetrics?: ProjectMetric[];
  problem?: string;
  solution?: string;
  architecture?: string;
  highlights?: string[];
  lessons?: string;
  interviewQA?: string[];
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
      "Master's thesis — a multimodal virtual try-on system combining lightweight YOLO classification with LoRA fine-tuned diffusion models and LLM agent control. Built on limited resources: two 16GB Tencent Cloud free-tier GPU servers (one for diffusion, one for LLM) + Raspberry Pi 5. Published at IVCNZ 2025. 94.2% accuracy, FID 28.5, completed 6 months early.",
    coverImage: "/projects/chatclothes/arch.png",
    images: [
      { src: "/projects/chatclothes/slide02_yolo_detection.PNG", caption: "YOLO12n-LC Detection" },
      { src: "/projects/chatclothes/slide03_pose_estimation.PNG", caption: "Pose Estimation" },
      { src: "/projects/chatclothes/slide04_clothing_segmentation.PNG", caption: "Clothing Segmentation" },
      { src: "/projects/chatclothes/slide05_diffusion_model.PNG", caption: "Diffusion Model Pipeline" },
      { src: "/projects/chatclothes/slide06_post_processing.PNG", caption: "Post Processing" },
      { src: "/projects/chatclothes/slide07_quality_control.PNG", caption: "Quality Control" },
      { src: "/projects/chatclothes/slide08_data_flow.PNG", caption: "Data Flow" },
      { src: "/projects/chatclothes/slide09_system_components.PNG", caption: "System Components" },
      { src: "/projects/chatclothes/slide10_pipeline_overview.PNG", caption: "Pipeline Overview" },
      { src: "/projects/chatclothes/slide12_multimodal_input.PNG", caption: "Multimodal Input" },
      { src: "/projects/chatclothes/slide13_comfyui_workflow.PNG", caption: "ComfyUI Workflow" },
      { src: "/projects/chatclothes/slide14_dify_integration.PNG", caption: "Dify LLM Integration" },
      { src: "/projects/chatclothes/slide15_results.PNG", caption: "Results" },
      { src: "/projects/chatclothes/slide16_user_interface.PNG", caption: "User Interface" },
      { src: "/projects/chatclothes/slide17_performance.PNG", caption: "Performance Metrics" },
      { src: "/projects/chatclothes/slide18_accuracy.PNG", caption: "Accuracy Analysis" },
      { src: "/projects/chatclothes/slide19_challenges.PNG", caption: "Challenges & Solutions" },
      { src: "/projects/chatclothes/slide20_optimization.PNG", caption: "Optimization" },
      { src: "/projects/chatclothes/slide21_future_work.PNG", caption: "Future Work" },
      { src: "/projects/chatclothes/slide22_mobile_app.PNG", caption: "Mobile Control App" },
      { src: "/projects/chatclothes/slide23_cloud_deployment.PNG", caption: "Cloud Deployment" },
      { src: "/projects/chatclothes/slide24_ecommerce_integration.PNG", caption: "E-commerce Integration" },
      { src: "/projects/chatclothes/slide25_research_contribution.PNG", caption: "Research Contribution" },
      { src: "/projects/chatclothes/slide26_technical_innovation.PNG", caption: "Technical Innovation" },
      { src: "/projects/chatclothes/slide28_demo_workflow.PNG", caption: "Demo Workflow" },
      { src: "/projects/chatclothes/slide29_test_cases.PNG", caption: "Test Cases" },
      { src: "/projects/chatclothes/slide30_user_testing.PNG", caption: "User Testing" },
    ],
    gradient: "from-violet-500 to-fuchsia-500",
    icon: "Sparkles",
    tech: [
      "Python", "PyTorch", "OOTDiffusion", "LoRA", "YOLO12n-LC",
      "ComfyUI", "Dify", "DeepSeek", "FastAPI",
    ],
    results:
      "FID 28.5 (19%↑), 75% hand artifact reduction, 94.2% accuracy, 87% user success (50 users)",
    keyMetrics: [
      { label: "FID Score", value: "28.5" },
      { label: "Improvement", value: "19%↑" },
      { label: "Hand Artifacts", value: "75%↓" },
      { label: "Accuracy", value: "94.2%" },
      { label: "Latency (RPi5)", value: "<10s" },
      { label: "User Success", value: "87%" },
      { label: "User Study", value: "50 users" },
      { label: "Timeline", value: "6mo early" },
    ],
    problem:
      "Fashion e-commerce lacks interactive, multimodal try-on experiences with natural language interaction.",
    solution:
      "Multimodal AI VTON: OOTDiffusion with LoRA fine-tuning for pose-aligned generation, YOLO12n-LC lightweight classifier (5MB, 8x smaller), DeepSeek LLM agent via Dify workflow for natural language to structured prompts.",
    architecture:
      "Python AI pipeline (PyTorch/ComfyUI/Dify) → FastAPI backend → PWA Android frontend",
    highlights: [
      "Applied LoRA fine-tuning to OOTDiffusion for enhanced pose alignment and texture reconstruction",
      "Built Dify workflow orchestrating LLM agent + diffusion pipeline + classification",
      "Optimized YOLO12n to YOLO12n-LC for resource-constrained targets",
      "Orchestrated DeepSeek LLM via Ollama for natural language control",
      "Split system across two 16GB Tencent Cloud free-tier GPU servers (ComfyUI/OOTDiffusion on one, Ollama/DeepSeek on the other) — single-server fit was impossible",
      "Thesis passed with First Class Honours, published at IVCNZ 2025",
    ],
    lessons:
      "Multimodal alignment needs iterative tuning; LoRA fine-tuning achieves significant quality gains without modifying the backbone; Dify workflow orchestration simplifies complex AI pipelines.",
    interviewQA: [
      "Two servers needed due to GPU memory limits — Tencent Cloud free tier gives 16GB each; ComfyUI/OOTDiffusion on one, Ollama/DeepSeek on the other",
      "LoRA fine-tuning enabled training on limited GPU without modifying the backbone, achieving significant quality gains",
      "Dify workflow orchestration required careful prompt engineering for structured output from the LLM agent",
      "YOLO12n-LC achieved 94.2% accuracy with only 5MB model size via pruning and quantization",
      "Published at IVCNZ 2025; thesis passed with First Class Honours",
    ],
    featured: true,
  },
  {
    slug: "smart-factory",
    title: "Smart Factory Platform",
    company: "Chunxiao Technology",
    period: "2018 – 2024",
    role: "Full-stack Tech Lead (Android + Backend + Hardware)",
    summary:
      "Garment factories needed real-time production tracking across multiple sites. 6-person team. I owned all Android clients (phone/tablet/shop-floor), wrote ~1/4 of backend (3 Spring Cloud modules), built hardware communication programs (scales via serial-to-WebSocket bridge, conveyors, washers), and helped with Vue.js frontend when needed. 5+ factory sites, 30%+ efficiency gain, hundreds of daily workers.",
    coverImage: "/projects/smart-factory/mom-quality-station.png",
    images: [
      { src: "/projects/smart-factory/mom-quality-station.png", caption: "Quality Station" },
      { src: "/projects/smart-factory/bi-dashboard-overview.jpg", caption: "BI Dashboard Overview" },
      { src: "/projects/smart-factory/equipment-dashboard-list.png", caption: "Equipment Dashboard" },
      { src: "/projects/smart-factory/production-task-list.png", caption: "Production Tasks" },
      { src: "/projects/smart-factory/production-input-keypad.png", caption: "Production Input Keypad" },
      { src: "/projects/smart-factory/rfid-reader-demo-ui.png", caption: "RFID Reader" },
      { src: "/projects/smart-factory/mom-smart-washer.png", caption: "Smart Washer Integration" },
      { src: "/projects/smart-factory/production-terminal-login.png", caption: "Shop-floor Terminal" },
      { src: "/projects/smart-factory/mom-projector-ironing.png", caption: "Projector Ironing" },
      { src: "/projects/smart-factory/mom-smart-accessories-cabinet.png", caption: "Smart Accessories Cabinet" },
      { src: "/projects/smart-factory/accessories-cabinet-design.jpg", caption: "Accessories Cabinet Design" },
      { src: "/projects/smart-factory/mom-customization-app.png", caption: "Customization App" },
      { src: "/projects/smart-factory/admin-system.png", caption: "Admin System" },
      { src: "/projects/smart-factory/admin-web-system.png", caption: "Admin Web System" },
      { src: "/projects/smart-factory/hanging-system.jpg", caption: "Hanging System" },
      { src: "/projects/smart-factory/factory-machine.jpg", caption: "Factory Machine" },
      { src: "/projects/smart-factory/rfid-scan.png", caption: "RFID Scan" },
      { src: "/projects/smart-factory/quality-check.jpg", caption: "Quality Check" },
      { src: "/projects/smart-factory/worker-mobile-task.png", caption: "Worker Mobile Task" },
      { src: "/projects/smart-factory/worker-mobile-info.png", caption: "Worker Mobile Info" },
      { src: "/projects/smart-factory/showroom-data.png", caption: "Showroom Data" },
      { src: "/projects/smart-factory/process.png", caption: "Production Process" },
      { src: "/projects/smart-factory/factory-node-position.png", caption: "Factory Node Position" },
      { src: "/projects/smart-factory/clothes-cabinet.jpg", caption: "Clothes Cabinet" },
      { src: "/projects/smart-factory/waving-machine.jpg", caption: "Waving Machine" },
    ],
    gradient: "from-emerald-500 to-teal-500",
    icon: "Factory",
    tech: [
      "Java", "Spring Cloud", "MyBatis", "Android", "Vue.js", "RFID",
      "MySQL", "Redis", "MongoDB", "Docker", "Jenkins", "ActiveMQ", "Kafka",
    ],
    results:
      "10+ factory sites, 30%+ efficiency gain, 6-person team, hundreds of daily workers",
    keyMetrics: [
      { label: "Factory Sites", value: "10+" },
      { label: "Efficiency Gain", value: "30%+" },
      { label: "Team Size", value: "6" },
      { label: "Duration", value: "6 years" },
      { label: "Daily Workers", value: "100s" },
      { label: "Award", value: "Provincial" },
    ],
    problem:
      "Garment factories lack real-time production visibility — electronic scales need manual reading, production data entry is error-prone, and cross-site coordination is slow.",
    solution:
      "Full IoT platform: local serial-port service for auto weight capture via WebSocket, RFID-based production tracking, Spring Cloud microservices (Production/Inventory/Device), Android shop-floor terminals, Vue.js BI dashboards.",
    architecture:
      "Android app + Vue.js web → Nginx → Spring Cloud (MyBatis) → MySQL/Redis/MongoDB → IoT hardware (RFID, scales, conveyors via RS232/RS485)",
    highlights: [
      "Scaled from single-site pilot to 5+ factory deployments across multiple regions",
      "Event-driven service coordination using ActiveMQ and Kafka to decouple production workflows",
      "Replaced manual releases with Jenkins + GitLab CI/CD pipeline",
      "Serial-to-WebSocket bridge for browser weight auto-fill, eliminating read-and-retype steps",
      "Field-led prioritization with deep shop-floor engagement under high ambiguity",
      "Led and mentored 6-person cross-functional engineering team",
    ],
    lessons:
      "Event-driven architecture critical for factory coordination; field-led prioritization beats big design upfront; staged cloud migration balances delivery speed and performance.",
    interviewQA: [
      "Serial-to-WebSocket bridge: electronic scale data sent via UART/RS485, bridge server converts to WebSocket, browser JS captures weight events and auto-fills form fields",
      "MySQL百万行通过云读写副本分离查询负载、历史数据归档、以及慢查询优化解决",
      "Android终端离线SQLite + 队列同步应对工厂不稳定网络，上线数据在网恢复后自动上传",
      "金属环境RFID信号干扰通过天线位置调整、功率配置、多次重试逻辑解决",
    ],
    featured: true,
  },
  {
    slug: "enterprise-messaging",
    title: "Enterprise Messaging Platform",
    company: "Chunxiao Technology",
    period: "2014 – 2024",
    role: "Developer & System Designer",
    summary:
      "Internal messaging tool for 5,000 employees had chronic stability issues. Legacy C++ core was unmaintainable — migration had to happen without downtime or message loss. Incremental migration to Spring Cloud + Kotlin Android client, keeping the NDK transport layer for low-latency delivery while replacing everything around it. 90%+ defect elimination, <200ms latency, 500K+ daily messages, ran stable for 10 years.",
    coverImage: "/projects/enterprise-messaging/shop-smart-homepage-optimized.png",
    images: [
      { src: "/projects/enterprise-messaging/shop-smart-homepage-optimized.png", caption: "App Homepage" },
      { src: "/projects/enterprise-messaging/shop-smart-homepage-v2.png", caption: "App Homepage v2" },
      { src: "/projects/enterprise-messaging/shop-smart-message-list-detail.png", caption: "Message List Detail" },
      { src: "/projects/enterprise-messaging/shop-smart-profile-logged-in.png", caption: "Profile - Logged In" },
      { src: "/projects/enterprise-messaging/shop-smart-profile-settings.png", caption: "Profile Settings" },
      { src: "/projects/enterprise-messaging/desktop_pc.png", caption: "Desktop PC Client" },
      { src: "/projects/enterprise-messaging/desktop_pc1.png", caption: "Desktop Client View" },
      { src: "/projects/enterprise-messaging/desktop_pc_messages.png", caption: "Desktop Messages" },
      { src: "/projects/enterprise-messaging/desktop_pc_messages2.png", caption: "Desktop Messages View 2" },
      { src: "/projects/enterprise-messaging/desktop_pc_subsystems.png", caption: "Desktop Subsystems" },
      { src: "/projects/enterprise-messaging/ScreenShot_2026-06-12_134110_500.png", caption: "System Screenshot" },
    ],
    gradient: "from-blue-500 to-cyan-500",
    icon: "MessageSquare",
    tech: [
      "Kotlin", "Java", "C/C++", "NDK", "Spring Cloud", "Node.js",
      "MySQL", "Redis", "FastDFS", "WebSocket", "Easemob", "JPush",
    ],
    results:
      "5,000 DAU, <200ms latency, 500K+ msgs/day, 90%+ defect reduction, <2% downtime over 10 years",
    keyMetrics: [
      { label: "Daily Active Users", value: "5,000" },
      { label: "Message Latency", value: "<200ms" },
      { label: "Daily Messages", value: "500K+" },
      { label: "Defect Reduction", value: "90%+" },
      { label: "Uptime", value: "<2% down" },
      { label: "Platforms", value: "3" },
      { label: "Duration", value: "10 years" },
    ],
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
    interviewQA: [
      "WebSocket dropped through corporate proxies/firewalls, upgrade handshakes interfered; designed custom binary TCP protocol: fixed header (type, seq, length) + body; 30s heartbeats, exponential backoff reconnection; UDP for audio/video",
      "Hardest transition at year 3-4 when team grew to ~10; couldn't code full-time while managing; delegated module ownership, shifted to architecture/code review/cross-team coordination",
      "Incremental migration over 3-4 months; both systems parallel; new accounts on Easemob; background sync for existing users; client feature flag for switch; bridge service for cross-system messaging",
      "Definitely organic — IM accumulated user identity; other teams reused user center for login, file service for sharing; each subsystem validated approach; architectural decisions (loose coupling) intentional, direction emerged from needs",
      "Hierarchical model inspired by Feishu/Lark; user center defines roles/departments/positions; subsystems register own permission codes; centralized role assignment; adding new subsystem = register permissions, existing structure applies",
      "Multi-layer: Easemob SDK + JPush backup channels; foreground service with persistent notification; user guidance for battery whitelist/auto-start/lock in recents; some aggressive ROMs still had delays",
      "File server compromise — malicious executables written via insufficient upload validation; shut down, backup restore, migrate to FastDFS with access controls and file scanning; taught input validation importance"
    ],
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
    coverImage: "/projects/iot-device/gateway-smart-switches.jpg",
    images: [
      { src: "/projects/iot-device/gateway-smart-switches.jpg", caption: "Gateway & Smart Switches" },
      { src: "/projects/iot-device/gateway.png", caption: "Gateway Hardware" },
      { src: "/projects/iot-device/iot-platform-demo.png", caption: "Platform Demo" },
      { src: "/projects/iot-device/app-discover.jpg", caption: "Device Discovery" },
      { src: "/projects/iot-device/app-device-home.jpg", caption: "Device Home" },
      { src: "/projects/iot-device/app-fire-alert.jpg", caption: "Fire Alert" },
      { src: "/projects/iot-device/app-messages.jpg", caption: "App Messages" },
      { src: "/projects/iot-device/app-profile-center.jpg", caption: "Profile Center" },
      { src: "/projects/iot-device/iot-locker-control.png", caption: "IoT Locker Control" },
    ],
    gradient: "from-orange-500 to-amber-500",
    icon: "Cpu",
    tech: [
      "Java", "Kotlin", "Android SDK", "Embedded Linux", "Zigbee",
      "WiFi", "MQTT", "UART/Serial", "GPIO", "Spring Cloud", "Vue.js",
    ],
    results: "7-year product line, multiple device types shipped",
    keyMetrics: [
      { label: "Product Line", value: "7 years" },
      { label: "Protocols", value: "Zigbee/WiFi/MQTT" },
      { label: "Platforms", value: "2" },
      { label: "Hardware Types", value: "Multiple" },
    ],
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
    interviewQA: [
      "One main app evolved over 7 years; also built companion apps (installer tool, simplified controller); main app grew from simple binding to grouping/scenes/automation/energy/notifications",
      "Gateway firmware was vendor SDK based; my role was upper-layer: cloud communication, MQTT formatting, local rules, OTA updates; low-level radio protocols by vendor",
      "Time-series (telemetry) → InfluxDB; relational (users, devices, groups, rules) → MySQL; separation optimized for write throughput vs ACID transactions",
      "Multiple discovery methods: WiFi soft-AP for pairing, Zigbee gateway scanning, QR code binding; method depended on device type and protocol",
      "Backward compatibility while evolving — couldn't refactor protocol without breaking deployments; managed through versioning and deprecation policies"
    ],
    featured: false,
  },
  {
    slug: "live-streaming",
    title: "Live Streaming Chat Room",
    company: "Chunxiao Technology",
    period: "2013 – 2015",
    role: "Full-stack Developer (Web + Android + Server)",
    summary:
      "The company's earliest product — a live streaming chat room platform built during the start-up phase before pivoting to IoT. 8-person team. I built: ASP.NET/DNN monolithic admin backend (no front/back separation), a Node.js + Socket.IO web chat room with HTML5 M3U8 video playback, and the Android client. Also contributed to the C++ server core. Server was rewritten multiple times. Company exited this business in 2015.",
    coverImage: "/projects/live-streaming/process.png",
    images: [
      { src: "/projects/live-streaming/process.png", caption: "Live Streaming Process" },
    ],
    gradient: "from-rose-500 to-pink-500",
    icon: "Video",
    tech: [
      "C#", "ASP.NET", "DNN", "Node.js", "Socket.IO", "Python", "Lua", "FFmpeg",
      "Java", "Kotlin", "Android SDK", "C++", "HLS/M3U8", "RTMP",
    ],
    results:
      "Cross-platform live streaming chat room: web + Android, 1000+ peak concurrent viewers, RTMP ingest + HLS delivery",
    keyMetrics: [
      { label: "Peak Concurrent", value: "1,000+" },
      { label: "Uptime", value: "99.5%" },
      { label: "Duration", value: "2 years" },
      { label: "Team Size", value: "8" },
      { label: "Languages", value: "5+" },
    ],
    problem:
      "Early-stage start-up needed a live streaming chat room platform with real-time messaging, room management, and audio/video streaming across web and mobile.",
    solution:
      "Full-stack platform: ASP.NET/DNN monolithic backend for management, C++ server core for messaging/streaming (rewritten multiple times), Node.js + Socket.IO web client with HTML5 M3U8 video, Android mobile client. RTMP ingest with HLS delivery for cross-platform playback.",
    architecture:
      "ASP.NET/DNN Admin + C++ Server Core (RTMP/HLS) \u2192 Node.js Socket.IO Web Client + Android Client",
    highlights: [
      "Built ASP.NET/DNN monolithic management backend (server-side rendered, no front/back separation) for stream and user admin",
      "Developed Node.js + Socket.IO web chat room with HTML5 M3U8 video playback",
      "Delivered Android client for live streaming and chat interaction",
      "Contributed to C++ server core across multiple architecture rewrites",
      "Server core was rewritten multiple times as the team iterated on the architecture during start-up phase",
    ],
    lessons:
      "Start-ups ship fast and iterate — the server was rewritten multiple times as the team figured out the right architecture. Monolithic server-side rendering (DNN/ASP.NET) was the standard before front/back separation became mainstream. Cross-platform (web + Android) with a unified C++ core was the right call for streaming performance.",
    interviewQA: [
      "C++核心因并发和稳定性问题重写3次，每次都在迭代中优化架构",
      "99.5%可用性靠冗余部署 + 自动故障转移 + 健康检查实现",
      "FFmpeg多码率编码 + 客户端自适应切换保证不同网络条件下的播放体验",
      "Node.js + Socket.IO处理1000+并发聊天连接",
    ],
    featured: false,
  },
  {
    slug: "forest-patrol",
    title: "Forest Patrol GIS",
    company: "Chunxiao Technology",
    period: "2021 – 2022",
    role: "Android Mobile Client Developer (Solo)",
    summary:
      "Offline-first Android GIS app for forest rangers in zero-signal areas. ArcGIS Runtime SDK for map rendering, GIS annotation, and area calculation. Key challenges: extremely weak GPS in dense forest (up to 30s between fixes), coordinate system conversion across WGS-84 (offline Google tiles), BD-09 (Baidu online), and GCJ-02 (national standard) with auto-detection on map source change. Deferred sync for fire/pest/flood/risk reporting. Deployed for local forestry dept with tens of field rangers. Built solo over 1 year.",
    coverImage: "/projects/forest-patrol/field-scene-07.jpg",
    images: [
      { src: "/projects/forest-patrol/app-gps-map-offline.jpg", caption: "Offline GPS Map" },
      { src: "/projects/forest-patrol/app-photo-capture.jpg", caption: "Photo Capture" },
      { src: "/projects/forest-patrol/app-event-type-selector.jpg", caption: "Event Type Selector" },
      { src: "/projects/forest-patrol/app-new-collection-form.jpg", caption: "Collection Form" },
      { src: "/projects/forest-patrol/app-risk-entry.png", caption: "Risk Entry" },
      { src: "/projects/forest-patrol/app-task-report.png", caption: "Task Report" },
      { src: "/projects/forest-patrol/web-alarm-query.png", caption: "Web Alarm Query" },
      { src: "/projects/forest-patrol/web-event-query.png", caption: "Web Event Query" },
      { src: "/projects/forest-patrol/web-batch-export.png", caption: "Web Batch Export" },
      { src: "/projects/forest-patrol/web-visualization-stats.png", caption: "Web Visualization Stats" },
      { src: "/projects/forest-patrol/field-scene-01.jpg", caption: "Field Scene 1" },
      { src: "/projects/forest-patrol/field-scene-02.jpg", caption: "Field Scene 2" },
      { src: "/projects/forest-patrol/field-scene-03.jpg", caption: "Field Scene 3" },
      { src: "/projects/forest-patrol/field-scene-04.jpg", caption: "Field Scene 4" },
      { src: "/projects/forest-patrol/field-scene-05.jpg", caption: "Field Scene 5" },
      { src: "/projects/forest-patrol/field-scene-06.jpg", caption: "Field Scene 6" },
      { src: "/projects/forest-patrol/field-scene-07.jpg", caption: "Field Scene 7" },
      { src: "/projects/forest-patrol/field-scene-08.jpg", caption: "Field Scene 8" },
    ],
    gradient: "from-green-600 to-lime-500",
    icon: "MapPin",
    tech: [
      "Java", "Kotlin", "Android SDK", "ArcGIS Runtime SDK", "Baidu LBS", "Firebase",
      "GPS Trajectory", "WGS-84/BD-09/GCJ-02", "SQLite", "Offline Map Tiles",
    ],
    results:
      "Deployed for forestry department, reliable zero-connectivity operation, tolerant of weak GPS (30s gaps), full data sync on reconnect",
    keyMetrics: [
      { label: "Signal Gap Tolerance", value: "30s" },
      { label: "Map Systems", value: "3 (WGS/BD/GCJ)" },
      { label: "Offline Duration", value: "Unlimited" },
      { label: "Sync", value: "Auto on reconnect" },
    ],
    problem:
      "Forest rangers patrol remote areas with zero cellular signal and extremely weak GPS — satellite fixes can take up to 30 seconds. Multiple map coordinate systems (Google offline, Baidu online, national GCJ-02) must coexist in a single app.",
    solution:
      "Offline-first architecture: pre-loaded offline map tiles via ArcGIS Runtime SDK, local SQLite persistence, GPS trajectory recording with weak-signal tolerance, coordinate system conversion layer supporting WGS-84 / BD-09 / GCJ-02 for seamless overlay with auto-detection on map source change. Smart sync protocol uploads all data when network returns.",
    highlights: [
      "Delivered offline-first Android GIS using Esri ArcGIS Runtime SDK for map rendering, GIS annotation, and area calculation",
      "Handled extremely weak GPS in dense forest (up to 30s between fixes) with tolerant acquisition and trajectory smoothing",
      "Implemented coordinate system conversion between WGS-84, BD-09, and GCJ-02 for seamless overlay; auto-detects map source change and triggers conversion",
      "Built offline map tile preloading, location-based attendance (check-in/check-out), background keep-alive (dual-process guard), and Firebase push notifications",
    ],
    lessons:
      "Offline-first design patterns are essential for field apps; coordinate system conversion is a hidden complexity in Chinese GIS apps where Google/Baidu/national maps coexist; GPS weak-signal tolerance (30s gaps) requires careful state management.",
    interviewQA: [
      "GCJ-02是中国坐标偏移系统，GPS坐标必须转换才能正确显示在百度/高德等地图上",
      "Offline-first用SQLite本地存储 + 断网队列同步，网恢后自动上传所有待同步数据",
      "GDAL/Geos/Shapely提供桌面级GIS能力，用于坐标转换和空间计算",
      "GPS丢信号用航位推算 + 不确定性指示器处理密林中长达30秒的信号间隔",
    ],
    featured: false,
  },
  {
    slug: "visit-booking",
    title: "Prison Visit & Video Visitation",
    company: "Chunxiao Technology",
    period: "2020 – 2022",
    role: "Full-stack Engineer",
    summary:
      "Prison visitation system. Android terminal app for inmate-side video visitation (prisons prohibit personal phones — app runs on facility-managed devices). Admin backend for booking approval, time slot allocation, and visit policy. WebRTC audio-video sessions with lifecycle management (create, join, leave, timeout) and compliance recording. Face recognition access control for visitor verification.",
    coverImage: "",
    images: [],
    gradient: "from-indigo-500 to-purple-500",
    icon: "Users",
    tech: [
      "Java", "Kotlin", "Spring Cloud", "Android",
      "WebRTC", "Face Recognition", "MySQL", "Redis",
    ],
    results:
      "Sub-second face recognition (99.5% accuracy), WebRTC video visits with session lifecycle control, audit trail compliance",
    keyMetrics: [
      { label: "Face Recognition", value: "<1s" },
      { label: "Accuracy", value: "99.5%" },
      { label: "Efficiency Gain", value: "30%" },
      { label: "Departments", value: "Multiple" },
    ],
    problem:
      "Prisons prohibit personal mobile phones. Inmates need scheduled video visits with family under strict time limits, approval workflows, and compliance recording.",
    solution:
      "Android terminal app on facility-managed devices for inmate-side video calls, admin backend for booking/approval/time slot management, WebRTC for real-time audio-video with session lifecycle control (create/join/leave/timeout), face recognition for visitor identity verification at facility entry.",
    highlights: [
      "Developed Android terminal app for inmate-side video visitation on facility-managed devices",
      "Built admin backend for visit booking approval, time slot allocation, and quota management",
      "Integrated WebRTC audio-video with session lifecycle (duration limit, auto-end, recording)",
      "Implemented face recognition access control for visitor identity verification",
      "Supported remote video visitation during pandemic period",
    ],
    lessons:
      "High-security environments impose strict constraints: no personal devices, audit trails for every action, rigid time limits. WebRTC session lifecycle management (join/leave/timeout/recording) must be rock-solid for compliance.",
    interviewQA: [
      "WebRTC视频会见 + 服务端倒计时强制断开，确保严格遵守会见时间限制",
      "Android终端人脸识别 <1秒完成，准确率99.5%，用于访客身份验证",
      "疫情期间新增WebRTC视频会见模式，无需物理接触即可完成会见",
      "完整审计日志满足监狱合规要求，每次操作都有记录",
    ],
    featured: false,
  },
  {
    slug: "picture-locker",
    title: "Picture Book Locker",
    company: "Chunxiao Technology",
    period: "2020 – 2023",
    role: "Android Developer (Cabinet Host + Client App)",
    summary:
      "24/7 smart self-service library cabinet for schools. Cabinet-side Android host controls 10+ hardware peripherals via UART/RS485 and GPIO: electromagnetic locks, UV-C lamps, LED strips, RFID high-frequency antennas, face recognition camera, card reader, receipt printer, door sensors. Separate borrower Android app with face/QR auth for <3s transactions. Admin backend handles book catalog, locker init, and cabinet API orchestration. After the other Android dev resigned, handled escalation and scope rebalancing to keep delivery on track.",
    coverImage: "/projects/picture-locker/picture-book-locker-front.png",
    images: [
      { src: "/projects/picture-locker/picture-book-locker-front.png", caption: "Cabinet Front View" },
      { src: "/projects/picture-locker/locker-exterior-with-gates.png", caption: "Exterior with Gates" },
      { src: "/projects/picture-locker/locker-exterior-blue-site.png", caption: "Blue Site Installation" },
      { src: "/projects/picture-locker/locker-exterior-green.png", caption: "Outdoor Installation" },
      { src: "/projects/picture-locker/locker-exterior-red.png", caption: "Red Cabinet" },
      { src: "/projects/picture-locker/smart-cabinet-recycle-style.jpg", caption: "Smart Cabinet Recycle Style" },
      { src: "/projects/picture-locker/picture-book-locker-campus-hall.png", caption: "Campus Hall" },
      { src: "/projects/picture-locker/smart-library-room-exterior.jpg", caption: "Library Room" },
      { src: "/projects/picture-locker/picture-book-library.jpg", caption: "Picture Book Library" },
      { src: "/projects/picture-locker/borrow-ui-on-device.png", caption: "Borrow UI on Device" },
      { src: "/projects/picture-locker/borrow-ui-closeup.png", caption: "Borrow UI Close-up" },
      { src: "/projects/picture-locker/picture-book-locker-uv-mode.jpg", caption: "UV Disinfection Mode" },
      { src: "/projects/picture-locker/picture-book-locker-bank-of-china.png", caption: "Bank of China Deployment" },
      { src: "/projects/picture-locker/scan.png", caption: "QR Scan" },
      { src: "/projects/picture-locker/show.png", caption: "Cabinet Display" },
      { src: "/projects/picture-locker/system.png", caption: "System Overview" },
      { src: "/projects/picture-locker/storage.jpg", caption: "Storage Compartment" },
      { src: "/projects/picture-locker/liucheng.png", caption: "Workflow Diagram" },
    ],
    gradient: "from-sky-500 to-blue-500",
    icon: "BookOpen",
    tech: [
      "Java", "Kotlin", "Android SDK", "Face Recognition", "ZXing",
      "UART/RS485", "GPIO", "RFID", "Electromagnetic Locks", "UV-C",
      "Card Reader", "Receipt Printer", "MQTT", "Spring Cloud",
    ],
    results:
      "24/7 unattended operation, <3s borrow/return, multiple schools, 0% book loss rate",
    keyMetrics: [
      { label: "Borrow Time", value: "<3s" },
      { label: "Book Loss", value: "0%" },
      { label: "Uptime", value: "24/7" },
      { label: "Hardware Peripherals", value: "10+" },
      { label: "Schools", value: "Multiple" },
    ],
    problem:
      "Schools need 24/7 self-service book borrowing when libraries are closed, with hygienic handling, robust hardware control, and simple auth (face/QR/RFID) for children.",
    solution:
      "Smart locker cabinet: Android host controlling 10+ hardware peripherals (locks, UV-C, RFID antennas, face camera, card reader, printer, sensors) via UART/RS485 and GPIO. Separate borrower Android app with face recognition + ZXing QR auth. Spring Cloud backend for book catalog management, locker initialization, and cabinet API orchestration.",
    highlights: [
      "Programmed Android control stack for 10+ hardware peripherals via UART/RS485 and GPIO: electromagnetic locks, UV-C lamps, RFID antennas, face camera, card reader, receipt printer, sensors",
      "Shipped borrower-facing Android app for self-service check-out and return with face/QR auth",
      "Sustained 24/7 unattended multi-cabinet operation across multiple schools",
      "After colleague resigned, escalated workload to leadership, negotiated scope split (retained cabinet host, handed off To-C mobile app), kept delivery on track",
    ],
    lessons:
      "Hardware integration demands robust fail-safes for every component; UV disinfection timing must be precise; escalate workload early rather than silently risking milestones — scope rebalancing kept the project on track.",
    interviewQA: [
      "UART/RS485控制电磁锁 + GPIO控制UV灯，10+硬件外设通过Android主机统一管理",
      "3秒借还通过并行化 + 预加载人脸模板实现，人脸和二维码双认证",
      "同事离职后主动升级风险并重新划分优先级，保留柜机主机、移交To-C手机应用",
      "UV消毒有门传感器安全联锁，确保开门时立即停止紫外线",
    ],
    featured: false,
  },
  {
    slug: "boobit",
    title: "Boobit Crypto Trading App",
    company: "Independent Project",
    period: "2022",
    role: "Independent Android Developer",
    summary:
      "Freelance Android project completed in ~1 month of spare time. Built core crypto trading features — real-time market (WebSocket), wallet, exchange, recharge — on an existing MVVM codebase. Deployed via website distribution (not app stores). Focused on secure comms: HTTPS, request signing, parameter encryption.",
    coverImage: "/projects/boobit/main_product.jpg",
    images: [
      { src: "/projects/boobit/main_product.jpg", caption: "Main Product Page" },
      { src: "/projects/boobit/main_invest_list.jpg", caption: "Investment List" },
      { src: "/projects/boobit/main_invested.jpg", caption: "Invested Assets" },
      { src: "/projects/boobit/main_wallet.jpg", caption: "Wallet Overview" },
      { src: "/projects/boobit/main_wallet2.jpg", caption: "Wallet Detail" },
      { src: "/projects/boobit/invest.jpg", caption: "Investment" },
      { src: "/projects/boobit/invest2.jpg", caption: "Investment View 2" },
      { src: "/projects/boobit/invest_detail.jpg", caption: "Investment Detail" },
      { src: "/projects/boobit/account_info.jpg", caption: "Account Info" },
      { src: "/projects/boobit/trans.jpg", caption: "Transaction" },
      { src: "/projects/boobit/withdrawa.jpg", caption: "Withdrawal" },
      { src: "/projects/boobit/vip_rule.jpg", caption: "VIP Rules" },
      { src: "/projects/boobit/screenshot_02.jpg", caption: "Screenshot" },
    ],
    gradient: "from-yellow-500 to-orange-500",
    icon: "Wallet",
    tech: [
      "Kotlin", "Java", "Android SDK", "Jetpack Compose", "MVVM",
      "WebSocket", "Retrofit", "OkHttp", "Room", "HTTPS", "Request Signing",
    ],
    results:
      "5+ core features delivered independently in ~1 month of spare time, secure communication stack (HTTPS + request signing + parameter encryption)",
    keyMetrics: [
      { label: "Core Features", value: "5+" },
      { label: "Real-time Feed", value: "WebSocket" },
      { label: "Security Layers", value: "3" },
      { label: "Delivery Time", value: "~1 month" },
    ],
    problem:
      "An existing crypto trading platform needed Android business feature implementation — market data, wallet, exchange, and recharge — with financial-grade security.",
    solution:
      "Built core trading features on existing MVVM codebase: WebSocket real-time market feeds, RESTful API integration with HTTPS encryption, request signing, parameter encryption, and authentication handling.",
    architecture:
      "Presentation (UI + ViewModels) → Domain (Use Cases) → Data (Repositories + API + Room DB) → WebSocket feeds",
    highlights: [
      "Independently delivered 5+ core trading features within ~1 month of spare time",
      "Implemented secure communication stack: HTTPS encryption, request signing, parameter encryption",
      "Built WebSocket-based real-time market data with live price feeds",
      "Developed wallet, market, exchange, and account features with clear UX states",
      "Handled high-precision crypto data: decimal truncation, rounding, and normalization across inconsistent backend formats (e.g., BTC 18 decimal places vs. other tokens 8)",
      "Fixed bugs and optimized features under short delivery cycle",
    ],
    lessons:
      "Financial apps require defense-in-depth security (HTTPS alone insufficient — need request signing + parameter encryption); quick codebase adaptation and independent delivery under tight timelines are valuable skills.",
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
    coverImage: "/projects/smart-power/power-dashboard-main.png",
    images: [
      { src: "/projects/smart-power/power-dashboard-main.png", caption: "Power Dashboard" },
      { src: "/projects/smart-power/env-control-bi-kanban.png", caption: "Environment Control BI" },
      { src: "/projects/smart-power/power-mobile-app.png", caption: "Mobile App" },
      { src: "/projects/smart-power/dashboard-import-page-2.jpg", caption: "Dashboard Import Page" },
      { src: "/projects/smart-power/dashboard-import-page-3.jpg", caption: "Dashboard Import Detail" },
      { src: "/projects/smart-power/mobile-app-menu.jpg", caption: "Mobile App Menu" },
      { src: "/projects/smart-power/switch.png", caption: "Switch Control" },
    ],
    gradient: "from-yellow-400 to-green-500",
    icon: "Zap",
    tech: [
      "Java", "Spring Cloud", "Modbus RTU/TCP", "DL/T645", "InfluxDB",
      "RabbitMQ", "Apache Flink", "Vue.js", "ECharts", "MQTT", "RS485",
    ],
    results:
      "15% energy saving, <1s alarm response, 99.9% collection rate, 3+ parks unified management",
    keyMetrics: [
      { label: "Energy Savings", value: "15%" },
      { label: "Alert Response", value: "<1s" },
      { label: "Data Collection", value: "99.9%" },
      { label: "Parks Managed", value: "3+" },
    ],
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
    interviewQA: [
      "Flink processed two workloads: real-time alerting (threshold detection with windowing) and real-time aggregation (rolling averages, peaks for dashboards); freed MySQL from heavy analytical queries",
      "Multi-tenant isolation: InfluxDB measurements prefixed with park ID; MySQL tenant_id with row-level security; API scoping; frontend loaded only accessible parks",
      "0.1% data loss from network issues and firmware bugs; handled through gap filling (interpolation) and gateway local cache/retry on reconnect",
      "15% saving measured against 3-6 month historical baseline (same-month YoY), normalized for production volume; varied by park aggressiveness",
      "Modular protocol adapter layer — each protocol (Modbus RTU/TCP, DL/T645) had own adapter translating to normalized format; rest of system worked with normalized data"
    ],
    featured: false,
  },
  {
    slug: "exhibition-robot",
    title: "Exhibition Service Robot",
    company: "Chunxiao Technology",
    period: "2019",
    role: "Android Developer (SDK Integration)",
    summary:
      "Purchased a complete service robot with built-in Android SDK (navigation, LiDAR SLAM, face recognition, voice interaction exposed as API calls). 4-person team built upper-layer features: product introduction, ArcSoft face recognition check-in, iFlytek voice-guided tours, knowledge base. My role: Android interaction interface and robot SDK feature integration. Deployed at a building materials & decoration client exhibition hall (store fit-outs for brands like Apple, Huawei).",
    coverImage: "/projects/exhibition-robot/robot_compenent.png",
    images: [
      { src: "/projects/exhibition-robot/robot_compenent.png", caption: "Robot Components" },
      { src: "/projects/exhibition-robot/robot_screen.png", caption: "Robot Screen" },
      { src: "/projects/exhibition-robot/robot_face.png", caption: "Face Recognition" },
      { src: "/projects/exhibition-robot/knowledge.png", caption: "Knowledge Base" },
      { src: "/projects/exhibition-robot/map_scan.png", caption: "Map Scanning" },
      { src: "/projects/exhibition-robot/map1.png", caption: "Navigation Map 1" },
      { src: "/projects/exhibition-robot/map2.png", caption: "Navigation Map 2" },
      { src: "/projects/exhibition-robot/map3.png", caption: "Navigation Map 3" },
      { src: "/projects/exhibition-robot/map4.png", caption: "Navigation Map 4" },
      { src: "/projects/exhibition-robot/map5.png", caption: "Navigation Map 5" },
    ],
    gradient: "from-cyan-500 to-blue-600",
    icon: "Bot",
    tech: [
      "Java", "Kotlin", "Android SDK", "ArcSoft Face Recognition",
      "iFlytek ASR/TTS", "Robot Vendor SDK", "Spring Cloud", "MQTT",
    ],
    results:
      "Integrated ArcSoft face recognition (>98%), iFlytek voice (>90%), deployed at client exhibition hall",
    keyMetrics: [
      { label: "Navigation", value: "cm-level" },
      { label: "Voice Accuracy", value: ">90%" },
      { label: "Face Accuracy", value: ">98%" },
      { label: "Uptime", value: "7×24" },
    ],
    problem:
      "Exhibitions need interactive robots for guided tours, visitor check-in, and information queries. Building from scratch with ROS/SLAM would be too costly \u2014 needed a pragmatic SDK-based approach.",
    solution:
      "Purchased complete robot hardware + Android SDK, focused team effort on upper-layer features: ArcSoft face recognition for VIP check-in, iFlytek ASR/TTS voice interaction, multi-modal UI, knowledge base for product introductions, Spring Cloud backend for remote monitoring.",
    architecture:
      "Android touch UI \u2192 Robot Vendor SDK (SLAM/Navigation/Face/Voice APIs) \u2192 Spring Cloud backend \u2192 WebSocket/MQTT",
    highlights: [
      "Integrated robot vendor SDK APIs for navigation, LiDAR map scanning, face recognition (ArcSoft), and voice (iFlytek ASR/TTS)",
      "Built multi-modal interaction combining voice, touch, and vision in noisy exhibition environments",
      "Implemented ArcSoft face recognition for VIP greeting, visitor check-in, and attendance tracking",
      "Developed knowledge base integration for product introduction and information queries",
    ],
    lessons:
      "Buy-vs-build: purchasing a complete robot with SDK was the right call \u2014 let the team focus on upper-layer application value instead of low-level ROS/SLAM tuning. SDK integration skills are underrated but critical for real-world delivery.",
    interviewQA: [
      "Bought robot with SDK because building from scratch (ROS/SLAM) too costly; team focused on application layer; pragmatic for exhibition timeline",
      "Android interaction UI on vendor SDK; integrated APIs for navigation, face recognition (ArcSoft), voice (iFlytek); multi-modal for noisy environments",
      "4-person team: Android (myself), robot integration, frontend (knowledge base + mgmt), backend (APIs); clear separation",
      "Deployed at building materials client exhibition hall (Changhong Decoration \u2014 Apple/Huawei store fit-outs); still in use"
    ],
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
    coverImage: "/projects/broadcast-control/main.png",
    images: [
      { src: "/projects/broadcast-control/main.png", caption: "Broadcast Control Platform" },
    ],
    gradient: "from-purple-500 to-indigo-600",
    icon: "Radio",
    tech: [
      "Java", "Kotlin", "Android SDK", "MQTT", "HTTP/REST", "WebSocket",
    ],
    results:
      "Unified ad delivery for heterogeneous public screens, efficient remote campaign management",
    keyMetrics: [
      { label: "Team Size", value: "9" },
      { label: "Delivery", value: "2 months" },
      { label: "Distribution", value: "MQTT broadcast" },
      { label: "Screen Types", value: "3 scenarios" },
    ],
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
    interviewQA: [
      "Peak 1000-1500 concurrent connections; main challenge was message burst when broadcasting to all devices simultaneously — solved by staggering broadcasts with random delays",
      "Three bottlenecks: MQTT broker fan-out latency, backend API burst from status callbacks (solved with Redis + async), lower-end Android devices struggling with MQTT + media playback",
      "Admin Console for internal ops (device mgmt, billing), Customer Portal for advertisers (upload, campaigns, balance) — different user groups, cleaner permissions, independent deployment",
      "Device didn't replay missed content — synced current state on reconnect, skipped expired campaigns. Business decision: advertisers want current, not historical",
      "2-week sprints; first 2 weeks architecture/foundation, then parallelized with shared OpenAPI spec; daily coordination and blocker removal across 9-person team",
      "Single 15-min daily standup; cross-team deps tracked on shared board; resolved Android-backend MQTT format alignment in first week with joint design session",
      "QoS 1 for campaign tasks (at least once, idempotent client); QoS 0 for heartbeat/status to reduce overhead; QoS 2 was overkill",
      "MQTT broker queued messages during disconnects; persistent session flag remembered subscriptions; HTTP API sync on reconnect for longer offline periods",
      "Before: days of travel for physical USB updates across 100+ screens; After: publish to 1000+ screens in minutes; ~80% effort reduction, real-time reactiveness",
      "Very low technical skill customers — store managers, marketing staff; simple pairing code mechanism; upload-select-publish workflow; minimal touch required"
    ],
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
    coverImage: "/projects/chinese-herbal-recognition/herb.png",
    images: [
      { src: "/projects/chinese-herbal-recognition/herb.png", caption: "Herbal Recognition" },
      { src: "/projects/chinese-herbal-recognition/lose.png", caption: "Classification Result" },
    ],
    gradient: "from-green-500 to-emerald-600",
    icon: "Leaf",
    tech: [
      "Python", "TypeScript", "YOLOv4", "ResNet", "MobileNetV3", "EfficientNet",
      "FastAPI", "Vue.js", "Element Plus", "MySQL", "Docker", "GPU Training",
    ],
    results:
      "Full-loop annotation-to-inference pipeline, reusable for multiple classification domains",
    keyMetrics: [
      { label: "Models", value: "YOLOv4/ResNet/MobileNet" },
      { label: "Workflow", value: "End-to-end" },
      { label: "Release Gates", value: "Automated" },
      { label: "Extensible", value: "Multi-domain" },
    ],
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
    interviewQA: [
      "API contracts via FastAPI Swagger/OpenAPI with Pydantic models; handoff document explaining data flow; model serving API contract was most critical for frontend team",
      "MobileNetV3 best tradeoff for 20-class small dataset; YOLOv4 designed for detection not classification; EfficientNet overfitted more with limited data",
      "Data augmentation (crops, flips, color jitter), transfer learning from ImageNet, early stopping on validation loss; some overfitting inevitable with 50 images/class",
      "Thresholds proposed from benchmarking and literature, validated against actual results; Top-1 ≥ 0.85 achievable (best: 0.89 train, 0.79-0.82 val); worst-class recall ≥ 0.70 most important",
      "Business priority shift — platform served its proof-of-concept purpose; worked technically but no ongoing business sponsorship for maintenance",
      "Designing abstraction layers flexible enough for different domains but not too abstract to be unusable; dynamic categories + generic annotation tools + configurable training",
      "Workflow: owner uploads → publishes task → annotators label → reviewer approves/rejects; multi-annotator consistency for critical datasets; dispute resolution for disagreements"
    ],
    featured: false,
  },
  {
    slug: "device-maintenance-prediction",
    title: "Device Maintenance Prediction",
    company: "Chunxiao Technology",
    period: "2023",
    role: "AI Algorithm Developer",
    summary:
      "Experimental predictive maintenance exploration using factory-provided textile equipment records. Applied Spark MLlib Random Forest on historical maintenance logs — limited data constrained accuracy, but gained hands-on experience with Spark MLlib ecosystem, feature engineering pipelines, and industrial data modeling. Did not progress to production deployment.",
    coverImage: "",
    images: [],
    gradient: "from-red-500 to-orange-500",
    icon: "Wrench",
    tech: [
      "Python", "Spark MLlib", "Random Forest", "Feature Engineering",
      "Regression Models", "Statistical Analysis",
    ],
    results:
      "Experimental — accuracy limited by data volume; primary value was learning Spark MLlib ecosystem and industrial feature engineering",
    keyMetrics: [
      { label: "Approach", value: "Random Forest" },
      { label: "Features", value: "3 categories" },
      { label: "Status", value: "Experimental" },
      { label: "Value", value: "Learning" },
    ],
    problem:
      "Explore whether factory maintenance records can support data-driven predictive maintenance scheduling for textile equipment.",
    solution:
      "Spark MLlib Random Forest pipeline: factory maintenance logs → feature engineering (intervals, fault frequency, usage intensity) → aging trend modeling → maintenance window prediction.",
    highlights: [
      "Designed predictive maintenance workflow using factory-provided textile equipment maintenance records",
      "Implemented Spark MLlib Random Forest on limited real-world industrial dataset",
      "Built feature engineering pipeline: maintenance intervals, fault frequency, usage intensity",
      "Gained hands-on experience with Spark MLlib ecosystem and industrial data challenges",
    ],
    lessons:
      "Industrial data is messier and sparser than research datasets; predictive accuracy is heavily constrained by data volume and quality; Spark MLlib pipelines provide solid foundation for scaling when more data becomes available.",
    interviewQA: [
      "Manufacturing equipment包括电机、水泵、传送带等，不同类型设备需要不同的特征工程",
      "Missing data通过插值和填充处理，工业数据比研究数据集更稀疏更混乱",
      "Features: time-since-maintenance、failure frequency、usage intensity、age、seasonal patterns",
      "Time-based cross-validation模拟真实预测场景，避免数据泄露",
    ],
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
    coverImage: "/projects/banknote-paper-mill/kettle-etl-workflow.png",
    images: [
      { src: "/projects/banknote-paper-mill/kettle-etl-workflow.png", caption: "Kettle ETL Workflow" },
      { src: "/projects/banknote-paper-mill/kettle-version-info.png", caption: "Kettle Version Info" },
    ],
    gradient: "from-stone-500 to-neutral-600",
    icon: "Shield",
    tech: [
      "Java", "Air-gapped Workflow", "Data Format Analysis",
      "Secure Manufacturing Integration", "Offline Deployment Packaging",
    ],
    results:
      "Delivered integration under strict secrecy, managed air-gapped deployment with controlled release artifacts",
    keyMetrics: [
      { label: "Environment", value: "Air-gapped" },
      { label: "Access Lead Time", value: "~1 week" },
      { label: "Internet", value: "None on-site" },
      { label: "Deployment", value: "Offline artifacts" },
    ],
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
    interviewQA: [
      "Devices used proprietary protocols, not standard Modbus — each manufacturer had its own data frame format at 9600/115200 baud, requiring per-device documentation study",
      "Modular parser approach: each device type had its own parser module, gateway routed raw bytes to appropriate parser by device address, normalized to standard format",
      "Gateway was industrial embedded Linux box with multiple RS232/RS485 serial ports and Ethernet, running custom software; 2 gateways covered ~12 devices of 7-8 types",
      "30-second interval was practical: manufacturing tests happen every few minutes, not continuously; frequent enough to capture new results, infrequent enough to avoid waste",
      "FineBI selected over Power BI for fully on-premise deployment (air-gapped), lower licensing cost, and easier procurement for Chinese state-owned enterprise",
      "Data from production management, quality control, equipment monitoring, inventory — each with different DB types and schemas, requiring custom Kettle ETL transformations",
      "Formal application through customer security department ~1 week in advance, stating purpose and personnel; on-site: designated areas only, no phones, no unscanned USBs",
      "No remote access possible — collect diagnostics before visits, prepare offline scripts on-site, bring logs back for analysis; slow but disciplined cycle",
      "Document everything before switching projects; modular work (deployment, hardware, data sync) was self-contained enough to pick up without deep prior context",
      "UHF interference solved physically: adjusted antenna placement, scanning angle, power calibration; accepted lower read rates for thick wire patterns, designed retry/fallback"
    ],
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
    keyMetrics: [
      { label: "Serial Protocols", value: "RS232/RS485" },
      { label: "Hardware Interlock", value: "GPIO" },
      { label: "Stack", value: "Delphi" },
      { label: "Duration", value: "2 years" },
    ],
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
    interviewQA: [
      "Windows Forms — straightforward desktop app, quick to develop, data binding, customer's Windows-based IT infrastructure",
      "RS232 serial port communication with electronic scale; C# System.IO.Ports.SerialPort class; parsed continuous stream for stable weight reading",
      "Customer had existing invoicing API; called from C# application after weighing; fallback mode for local invoice generation if API unavailable",
      "Configurable thresholds — overweight, underweight, rate-of-change; simultaneous alerts: audible alarm, visual warning, optional external hardware (flashing lights)",
      "Stabilization algorithm: multiple readings over 2-3 second window, calculate variance; if within limits use average; timeout after 10 seconds flags error"
    ],
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
    coverImage: "/projects/patent-search/list.png",
    images: [
      { src: "/projects/patent-search/list.png", caption: "Patent List View" },
      { src: "/projects/patent-search/bar1.png", caption: "Bar Chart Analysis 1" },
      { src: "/projects/patent-search/bar2.png", caption: "Bar Chart Analysis 2" },
      { src: "/projects/patent-search/bar3.png", caption: "Bar Chart Analysis 3" },
      { src: "/projects/patent-search/line1.png", caption: "Trend Line 1" },
      { src: "/projects/patent-search/line2.png", caption: "Trend Line 2" },
      { src: "/projects/patent-search/pi1.png", caption: "Pie Chart Distribution" },
      { src: "/projects/patent-search/other.png", caption: "Other Analysis" },
    ],
    gradient: "from-slate-500 to-gray-600",
    icon: "Search",
    tech: [
      "C#", ".NET Framework 2.0", "Windows Forms", "SQL Server 2008",
      "Lucene.NET 2.9", "EPPlus", "ADO.NET", "SQLite",
    ],
    results:
      "10,000+ patents managed, <2s search response, 50+ daily users",
    keyMetrics: [
      { label: "Patents Managed", value: "10,000+" },
      { label: "Search Speed", value: "<2s" },
      { label: "Daily Users", value: "50+" },
      { label: "Platform", value: ".NET 2.0" },
    ],
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
    interviewQA: [
      "Hardest challenge: designing data schema and search architecture as junior dev; Lucene.NET docs sparse; spent time understanding inverted indexes and Chinese text analyzers",
      "Used Chinese analyzer for Lucene.NET — dictionary-based tokenization for word segmentation; without it, search only at character level producing too many irrelevant results",
      "Batch processing from existing Excel spreadsheets using EPPlus; built validation, duplicate detection, batch insert; could process thousands of records in single operation",
      "SQL Server handled concurrent access through transactions; Lucene.NET IndexReader thread-safe for reads; writes (rare batch imports) used IndexWriter locking",
      "Would use Elasticsearch (better Chinese, distributed), web UI (any device), real-time indexing, proper ORM instead of raw ADO.NET, cloud deployment"
    ],
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
    coverImage: "/projects/school-attendance/pass1.png",
    images: [
      { src: "/projects/school-attendance/pass1.png", caption: "Attendance Recognition 1" },
      { src: "/projects/school-attendance/pass2.png", caption: "Attendance Recognition 2" },
      { src: "/projects/school-attendance/pass3.png", caption: "Attendance Recognition 3" },
    ],
    gradient: "from-teal-500 to-cyan-600",
    icon: "GraduationCap",
    tech: [
      "Java", "Kotlin", "Python", "OpenCV", "Face Recognition", "Liveness Detection",
      "Android SDK", "Spring Cloud", "JPush", "MySQL", "Redis", "MQTT",
    ],
    results:
      "3+ schools deployed, <1s recognition, 99%+ accuracy, real-time parent notifications",
    keyMetrics: [
      { label: "Recognition", value: "<1s" },
      { label: "Accuracy", value: "99%+" },
      { label: "Schools", value: "3+" },
      { label: "Notifications", value: "Real-time" },
    ],
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
    interviewQA: [
      "ArcSoft on-device for two reasons: network reliability (schools have unstable internet) and speed (cloud round-trip adds 500ms-1s; local SDK: 1-2s total for 500 students in 15min)",
      "Similar students handled via ArcSoft confidence thresholds; secondary check if below threshold; manual teacher override; school uniforms and age differences helped distinguish",
      "ArcSoft built-in liveness: texture analysis + depth estimation from 2D camera; detected photos, screen replays, basic masks; sufficient for school gate risk level",
      "Forgiving design: fixed mount height/angle for student height range; preview screen for self-adjustment; quality warnings for blurry/dark/bright; manual fallback for edge cases",
      "Both local and cloud: templates on device for offline comparison; synced from cloud for centralized management; updates pushed on registration changes"
    ],
    featured: false,
  },
  {
    slug: "visual-gateway",
    title: "Visual Gateway / Breaker Control",
    company: "Chunxiao Technology",
    period: "2018 – 2023",
    role: "Android Developer / Gateway Control Engineer",
    summary:
      "Gateway-centric breaker control platform: non-networked circuit breakers connect via RS232 serial bus to Android gateway. Telemetry collection, remote open/close control, local alerting, and cloud reporting for multi-site monitoring.",
    coverImage: "/projects/visual-gateway/gateway.png",
    images: [
      { src: "/projects/visual-gateway/gateway.png", caption: "Gateway Hardware" },
      { src: "/projects/visual-gateway/structure.png", caption: "System Structure" },
      { src: "/projects/visual-gateway/switch-controler.png", caption: "Switch Controller" },
    ],
    gradient: "from-violet-600 to-indigo-500",
    icon: "Network",
    tech: [
      "Java", "Kotlin", "Android SDK", "SerialPort API", "Modbus RTU",
      "RS232", "MQTT", "InfluxDB", "MySQL", "Vue.js", "ECharts", "WebSocket",
    ],
    results:
      "1:N gateway-to-breaker control, real-time telemetry, 24/7 operation, multi-site deployment",
    keyMetrics: [
      { label: "Gateway Ratio", value: "1:N" },
      { label: "Uptime", value: "24/7" },
      { label: "Protocol", value: "Modbus RTU" },
      { label: "Deployment", value: "Multi-site" },
    ],
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
    interviewQA: [
      "Android chosen for existing ecosystem — in-house expertise, mature framework (SQLite, Services, OTA); embedded Linux requires more custom work; used commercial industrial boards with serial ports, 24/7 design",
      "Polling 70 devices: ~10-20ms per device at 9600 baud; full cycle ~1-1.5s; optimized with 4 serial ports for parallel polling (~200-300ms); priority polling for critical breakers",
      "Edge alerting: local rule engine evaluates telemetry against thresholds continuously; anomaly → immediate alarm + admin warning + optional trip command; no cloud round-trip needed",
      "On crash/restart: re-initialize serial, resume polling; last known states in SQLite; compare current vs last known, flag changes; thresholds synced from cloud; breakers maintain physical state independently",
      "Loosely coupled via MQTT: gateway publishes telemetry topics, subscribes to command topics; standardized JSON format; neither side knows other's internals; independent development and deployment"
    ],
    featured: false,
  },

  {
    slug: "android-performance-optimization",
    title: "Android Performance Optimization",
    company: "Chunxiao Technology",
    period: "2016 – 2024",
    role: "Android Performance Engineer",
    summary:
      "Led Android performance optimization across IM client and Smart Gateway apps over 8 years. Six optimization domains: memory (LeakCanary, Heap Dump, OOM prevention), CPU (hotspot analysis, thread scheduling), UI fluency (RecyclerView, Jank reduction), cold-start, APK size (200MB+ down to 80-90MB, 55% reduction via R8/ProGuard), and stability (OOM/ANR/Crash governance). Built data-driven profiling workflows.",
    coverImage: "",
    images: [],
    gradient: "from-green-600 to-emerald-500",
    icon: "Gauge",
    tech: [
      "Kotlin", "Java", "C++", "Android Profiler", "LeakCanary",
      "System Trace", "APK Analyzer", "R8", "ProGuard", "Heap Dump",
    ],
    results:
      "APK 200MB+ → 80-90MB (55% reduction), cold-start ~1.5s → ~800ms (47% improvement), 8+ apps covered, systematic optimization across 6 domains",
    keyMetrics: [
      { label: "APK Size", value: "200MB→80MB" },
      { label: "Cold Start", value: "1.5s→800ms" },
      { label: "Apps Covered", value: "8+" },
      { label: "Startup Improvement", value: "~47%" },
    ],
    problem:
      "Enterprise Android apps suffered from sluggish cold-start, memory bloat/OOM crashes, ANR freezes, bloated APK (200MB+), and poor scrolling fluency across diverse device models.",
    solution:
      "Systematic multi-year optimization covering 6 domains: memory profiling (LeakCanary/Heap Dump), CPU hotspot analysis, RecyclerView jank reduction, cold-start lazy init, APK size via R8/ProGuard/resource shrinking, and ongoing stability governance.",
    highlights: [
      "Reduced APK from 200MB+ to 80-90MB (55%+); most effective: stripping unused x86/x86_64 SO libs from map/audio/video SDKs, plus multi-MB image compression",
      "Resolved OOM crashes via memory snapshots, LeakCanary log-driven root-cause analysis (most leaks: thread holding/concurrency and Handler retaining Context), Heap Dump reference chains, bitmap optimization",
      "Eliminated ANR scenarios through main thread offloading, background thread scheduling, and third-party IM/SDK heartbeat tuning (Huanxin/JPush)",
      "Improved RecyclerView fluency via CPU trace frame-drop analysis — distinguishing data-loading jank from refresh-triggered jank, reducing unnecessary refresh frequency",
      "Applied cold-start optimization (lazy init, async SDK loading) reducing launch time from ~1.5s to ~800ms",
      "Negotiated optimization boundaries with product team (image quality vs. APK size, refresh frequency vs. real-time feel)",
    ],
    lessons:
      "Performance optimization is a continuous iterative engineering practice combining data analysis, tool diagnostics, and business context — not a one-time fix. Systematic governance across all domains yields cumulative stability gains.",
    featured: false,
  },
  {
    slug: "android-hotfix-framework",
    title: "Android Hotfix Framework",
    company: "Chunxiao Technology Co., Ltd.",
    period: "2017 – 2023",
    role: "Android Framework Developer",
    summary:
      "In-house Android hotfix framework supporting dex patching and resource hotfix on Android 5+. Native .so patching was not supported. After years of practice, led the decision to retire the system in favor of staged rollout + feature flags, achieving simpler architecture and lower maintenance costs.",
    coverImage: "",
    images: [],
    gradient: "from-blue-600 to-cyan-500",
    icon: "Wrench",
    tech: ["Kotlin", "Java", "C++", "NDK/JNI", "ClassLoader", "Dex Manipulation", "Canary Deployment"],
    results: "Sub-minute patch deployment for emergency fixes; ultimately retired after demonstrating that staged rollout + feature flags provided better ROI",
    keyMetrics: [
      { label: "Patch Delivery", value: "Sub-minute" },
      { label: "Resolution Time", value: "Weeks→Hours" },
      { label: "Rollout", value: "Canary + Rollback" },
      { label: "Android Support", value: "5+" },
    ],
    problem:
      "Full app store releases for critical bugs took weeks to reach users. The team needed a way to deploy emergency fixes without going through the entire release cycle.",
    solution:
      "Built a class-loader based hotfix framework supporting dex replacement and resource patching. Native .so libraries could not be hot-patched — those bugs still required full APK updates. After encountering significant technical limitations (version coupling, ROM compatibility, Crash Loop risks) and escalating maintenance costs (independent patch lifecycle, expanded QA matrix, continuous platform adaptation), led the evaluation that resulted in retiring the system.",
    architecture:
      "ClassLoader hooking for dex patching → Resource loader hooking for UI patches → Patch management SDK with auto-download, verification, and apply-on-next-launch. Replacement: full APK upgrade + staged rollout + Feature Flag + Remote Config + CI/CD.",
    highlights: [
      "Designed class-loader based hotfix framework supporting dex patch deployment without app restart on Android 5+",
      "Built patch generation toolchain automating dex diff, signature verification, and canary rollout with rollback",
      "Achieved sub-minute patch deployment, reducing critical bug resolution from weeks to hours",
      "Implemented resource hotfix using resource loader hooking for UI and assets patches",
      "Led the technical evaluation and phase-out, driving migration to staged rollout + feature flags",
    ],
    lessons:
      "Deep understanding of Android Runtime, ClassLoader, Dex loading, ART, JNI, and Method Hooking internals. More importantly, learned that technical decisions must evaluate long-term maintenance cost, engineering complexity, team collaboration efficiency, and business value — not just technical feasibility. The team followed the typical evolution: AndFix → Tinker → retire Hot Fix → full upgrade + staged rollout.",
    interviewQA: [
      "AndFix replaces individual methods at native level by swapping method pointers in ART/Dalvik runtime — cannot add new components because AndroidManifest is baked into APK at build time",
      "Tinker generates dex diff and merges patches at runtime — more powerful but heavier; AndFix is surgical but limited to method replacement",
      "Decision based on accumulated data: growing maintenance cost, expanding QA test matrix (base × patch × Android version × vendor ROM), and server-side bugs that client patches couldn't fix",
      "Typical patch workflow: fix → dex diff → code review → QA against exact base APK → canary rollout (5% → 20% → 100%) → device download/verify/apply on restart → rollback if issues",
      "MIUI/EMUI aggressive battery optimization killed app process during patch application; custom permissions blocked patch download service; relied on user feedback and crash logs for troubleshooting",
      "Android 5.0 Dalvik→ART runtime change broke AndFix hooking mechanisms; each major version required re-validation and sometimes rewriting hooking code",
      "Staged rollout: 1% → monitor 24-48h → 5% → 20% → 100%; stopped if crash rate spiked; strategy varied by change severity",
      "Evaluate hotfix need by: release frequency (weekly = probably not needed), bug severity (critical crashes might justify), and maintenance cost vs value",
      "Hotfix still valuable for: security vulnerabilities being exploited, long release cycles (banking/enterprise), mission-critical apps; not worth it for most consumer apps with fast CI/CD"
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): ProjectData[] {
  return projects.filter((p) => p.featured);
}

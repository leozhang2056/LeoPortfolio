export const siteConfig = {
  name: "Leo Zhang",
  title: "Senior Software Engineer | Android · AI · Full Stack",
  tagline: "10+ years shipping production software across Android, Java backends, and AI",
  description:
    "Full-stack software engineer with 10+ years shipping production software across Android, modern Java backends, and AI integration. Master of Computer and Information Sciences from Auckland University of Technology, First Class Honours. Specialized in industrial IoT, enterprise messaging platforms, and applied computer vision.",
  email: "leozhang2056@gmail.com",
  phone: "+64 27 385 0794",
  github: "https://github.com/leozhang2056",
  linkedin: "https://www.linkedin.com/in/leo-zhang-305626280/",
  location: "Auckland, New Zealand",
  visa: "Post-Study Work Visa — Open full-time work for any employer",
};

export const skills = [
  {
    category: "Mobile Development",
    items: [
      "Kotlin",
      "Java",
      "Android SDK",
      "Jetpack Compose",
      "MVVM",
      "Coroutines & Flow",
      "Hilt",
      "NDK/JNI",
      "Clean Architecture",
      "Flutter",
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "PyTorch",
      "OpenCV",
      "YOLO",
      "Diffusion Models",
      "Computer Vision",
      "LLM Fine-tuning",
      "RAG",
      "Prompt Engineering",
      "LoRA",
      "ComfyUI",
    ],
  },
  {
    category: "Backend Development",
    items: [
      "Spring Cloud",
      "Java",
      "Python",
      "Kotlin",
      "REST APIs",
      "Microservices",
      "Event-Driven Architecture",
      "MySQL",
      "Redis",
      "Node.js",
    ],
  },
  {
    category: "Frontend & IoT",
    items: [
      "Vue.js",
      "React",
      "TypeScript",
      "HTML/CSS",
      "RFID",
      "UART/Serial",
      "MQTT",
      "Raspberry Pi",
      "Embedded Linux",
      "TCP/UDP Networking",
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      "Docker",
      "Jenkins",
      "GitHub Actions",
      "GitLab CI/CD",
      "Kubernetes",
      "Nginx",
      "CentOS/Ubuntu",
      "Azure",
      "Aliyun Cloud",
      "CI/CD Pipeline Design",
    ],
  },
];

export const featuredProjects = [
  {
    title: "ChatClothes",
    description:
      "Multimodal AI virtual try-on system combining diffusion models, YOLO12n-LC garment classification, and local LLM control. Master's thesis completed 6 months early. Published at IVCNZ 2025.",
    tags: ["Diffusion Models", "YOLO", "Computer Vision", "LLM", "Raspberry Pi"],
    slug: "chatclothes",
    metrics: "FID 28.5 | 87% user success | <10s Pi latency",
  },
  {
    title: "Smart Factory System",
    description:
      "Industrial IoT smart manufacturing platform deployed across 10+ factory sites. Spring Cloud microservices + Android shop-floor apps + Vue.js portals. 30%+ production efficiency gain.",
    tags: ["Spring Cloud", "IoT", "Android", "RFID", "Docker"],
    slug: "smart-factory",
    metrics: "10+ sites | 30%+ efficiency | 6-person team",
  },
  {
    title: "Enterprise Messaging Platform",
    description:
      "Android-led enterprise IM serving 5,000 DAU with sub-200ms latency and 500K+ daily messages. NDK TCP/UDP transport, Spring Cloud microservices, migrated from legacy C++ eliminating 90%+ defects.",
    tags: ["Android NDK", "Spring Cloud", "Real-time", "TCP/UDP", "Redis"],
    slug: "enterprise-messaging",
    metrics: "5K DAU | <200ms latency | 500K+ msgs/day",
  },
  {
    title: "IoT Device Management Platform",
    description:
      "Fleet-scale IoT platform for smart switches and gateways. Android device discovery and control, gateway firmware, Spring Cloud APIs and monitoring. 7-year product line.",
    tags: ["IoT", "Embedded Linux", "MQTT", "Zigbee", "Gateway"],
    slug: "iot-solutions",
    metrics: "7-year product | Fleet-scale | Smart switches & gateways",
  },
];

export const resumeVariants = [
  {
    role: "Android Developer",
    focus: "Kotlin, Jetpack Compose, MVVM, Hilt, NDK, Android SDK",
    highlights: [
      "10+ Android apps shipped — enterprise IM, smart factory, field inspection",
      "NDK TCP/UDP transport for sub-200ms real-time messaging",
      "Reduced OOM crashes by 65% through memory profiling & crash telemetry",
    ],
  },
  {
    role: "Backend / Full-Stack Engineer",
    focus: "Spring Cloud, Java, Microservices, MySQL, Redis, Docker",
    highlights: [
      "Architected smart factory platform: 10+ sites, 30%+ efficiency gain",
      "Built enterprise IM backend: 5K DAU, 500K+ msgs/day, <200ms latency",
      "Spring Cloud microservices + event-driven architecture (Kafka, ActiveMQ)",
    ],
  },
  {
    role: "AI Engineer",
    focus: "PyTorch, OpenCV, YOLO, Diffusion Models, LLM, Computer Vision",
    highlights: [
      "ChatClothes virtual try-on — Master's thesis, IVCNZ 2025 publication",
      "Lightweight YOLO12n-LC: 94.2% accuracy, 8x smaller model",
      "LoRA fine-tuning, RAG pipelines, on-device Raspberry Pi deployment",
    ],
  },
];

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/android", label: "Android" },
  { href: "/ai", label: "AI" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

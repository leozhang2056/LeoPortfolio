export const siteConfig = {
  name: "Leo Zhang",
  title: "Software Engineer",
  tagline: "Building AI systems, mobile apps, and industrial IoT platforms",
  description:
    "Full-stack software engineer with 10+ years shipping production software across Android, Java backends, and AI integration. Master of Computer and Information Sciences from Auckland University of Technology, First Class Honours.",
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
    ],
  },
  {
    category: "IoT & Hardware",
    items: [
      "RFID",
      "UART/Serial",
      "MQTT",
      "Raspberry Pi",
      "Embedded Linux",
      "TCP/UDP Networking",
      "Zigbee",
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
    ],
  },
];

export const featuredProjects = [
  {
    title: "ChatClothes",
    description:
      "Multimodal AI virtual try-on combining diffusion models, YOLO12n-LC classification, and local LLM control. Master's thesis completed 6 months early. Published at IVCNZ 2025.",
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
];

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/chat", label: "Chat" },
];

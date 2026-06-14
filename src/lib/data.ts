export const siteConfig = {
  name: "Leo Zhang",
  title: "I build systems that need to work — and keep working.",
  description:
    "I've spent over a decade building software that has to run reliably in messy real-world conditions — factory floors with no internet, messaging systems serving thousands of users, and AI models that need to actually deploy. Not just prototype. Actually ship.",
  email: "leozhang2056@gmail.com",
  phone: "+64 27 385 0794",
  github: "https://github.com/leozhang2056",
  linkedin: "https://www.linkedin.com/in/leo-zhang-305626280/",
  facebook: "https://www.facebook.com/share/1HGioRCAco/",
  location: "Auckland, New Zealand",
  visa: "Post-Study Work Visa — Open full-time work for any employer",
};

export const skills = [
  {
    category: "Mobile Systems",
    statement:
      "Android apps where structure and performance matter more than feature volume. I focus on architecture that survives team turnover.",
    items: ["Kotlin", "Jetpack Compose", "MVVM", "NDK/JNI", "Coroutines & Flow"],
  },
  {
    category: "AI & Vision",
    statement:
      "Deployable AI — models that run on real hardware, not just notebooks. From diffusion models on Raspberry Pi to classification in production.",
    items: ["PyTorch", "YOLO", "LoRA", "OpenCV", "Diffusion Models"],
  },
  {
    category: "Backend & APIs",
    statement:
      "Enterprise backends for manufacturing and messaging, where uptime and release rhythm matter more than clever abstractions.",
    items: ["Spring Cloud", "MySQL", "Redis", "Kafka", "REST APIs"],
  },
  {
    category: "IoT & Hardware",
    statement:
      "Systems that bridge software and physical devices — factory floors, gateways, sensors. Built for environments where you can't just push a hotfix.",
    items: ["RFID", "MQTT", "UART/Serial", "Raspberry Pi", "Embedded Linux"],
  },
  {
    category: "DevOps & Delivery",
    statement:
      "CI/CD pipelines and infrastructure that let small teams ship confidently. Docker, Jenkins, and the boring tools that actually work.",
    items: ["Docker", "Jenkins", "GitHub Actions", "Kubernetes", "Linux"],
  },
];

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/knowledge", label: "Knowledge" },
  { href: "/chat", label: "Chat" },
];

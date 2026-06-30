export const siteConfig = {
  name: "Leo Zhang",
  title: "Software engineer focused on building products that scale.",
  description:
    "I've spent more than ten years shipping production software across mobile, enterprise platforms, IoT devices, and AI systems—leading teams, integrating hardware, and delivering solutions from concept to production.",
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
      "10 years of Android — from NDK streaming cores to offline field apps. I build for the device, not the demo.",
    items: ["Kotlin", "Java", "NDK/JNI", "Compose", "MVVM", "UART/GPIO"],
  },
  {
    category: "AI & Vision",
    statement:
      "Deployable AI — models that run on real hardware, not just notebooks. Diffusion on Raspberry Pi, classification at the edge, LLM agents with Dify.",
    items: ["PyTorch", "YOLO", "LoRA", "Diffusion", "DeepSeek", "OpenCV"],
  },
  {
    category: "Backend & APIs",
    statement:
      "Enterprise backends for factory automation and messaging — Spring Cloud, event-driven design, MySQL at millions of rows. Built for uptime, not resumes.",
    items: ["Spring Cloud", "MySQL", "Redis", "Kafka", "ActiveMQ", "REST"],
  },
  {
    category: "IoT & Hardware",
    statement:
      "Systems that bridge software and physical devices — scales, locks, conveyors, gateways. Serial protocols, GPIO, RS485. Environments where you can't push a hotfix.",
    items: ["MQTT", "RS232/485", "RFID", "GPIO", "Modbus", "Raspberry Pi"],
  },
  {
    category: "DevOps & Delivery",
    statement:
      "CI/CD pipelines that keep a small team shipping. Docker, Jenkins, GitLab — boring tools that work. Cloud migration and repatriation when the math says so.",
    items: ["Docker", "Jenkins", "GitLab", "Nginx", "Linux", "CI/CD"],
  },
];

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/knowledge", label: "Knowledge" },
  { href: "/chat", label: "Chat" },
];
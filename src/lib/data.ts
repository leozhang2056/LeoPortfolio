export const siteConfig = {
  name: "Leo",
  title: "Software Engineer",
  tagline: "Building robust software for Android, AI, and Enterprise",
  description:
    "Software Engineer with 10+ years of experience in Android development, AI engineering, Industrial IoT systems, and Enterprise software. Passionate about clean architecture, scalable systems, and modern engineering practices.",
  email: "hello@leo.dev",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "Available for remote opportunities",
};

export const skills = [
  {
    category: "Mobile Development",
    items: [
      "Kotlin",
      "Java",
      "Jetpack Compose",
      "MVVM",
      "Clean Architecture",
      "Hilt/Dagger",
      "Room",
      "Coroutines & Flow",
      "Retrofit",
      "React Native",
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "OpenAI API",
      "LangChain",
      "Spring AI",
      "Computer Vision",
      "YOLO",
      "Diffusion Models",
      "LLM Integration",
      "RAG",
      "Prompt Engineering",
      "Multimodal Systems",
    ],
  },
  {
    category: "Backend Development",
    items: [
      "Spring Boot",
      "Java",
      "Kotlin",
      "Python",
      "REST APIs",
      "Microservices",
      "PostgreSQL",
      "Redis",
      "Maven/Gradle",
      "Clean Architecture",
    ],
  },
  {
    category: "Frontend Development",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Query",
      "Responsive Design",
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Azure",
      "AWS",
      "Vercel",
      "Linux",
      "Prometheus",
      "Grafana",
    ],
  },
];

export const featuredProjects = [
  {
    title: "ChatClothes",
    description:
      "Master thesis project. Multimodal AI system combining computer vision and LLMs for fashion recommendation.",
    tags: ["Diffusion Models", "YOLO", "LLM", "Computer Vision"],
    slug: "chatclothes",
  },
  {
    title: "Manufacturing Execution System",
    description:
      "Enterprise MES platform for factory production management with real-time monitoring and analytics.",
    tags: ["Spring Boot", "React", "PostgreSQL", "Industrial IoT"],
    slug: "manufacturing-execution-system",
  },
  {
    title: "Industrial IoT Platform",
    description:
      "Scalable IoT platform for factory automation with device management, data collection, and real-time dashboards.",
    tags: ["IoT", "MQTT", "Spring Boot", "Time Series DB"],
    slug: "industrial-iot-platform",
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

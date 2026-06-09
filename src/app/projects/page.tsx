import type { LucideIcon } from "lucide-react";
import {
  Layers,
  Sparkles,
  Factory,
  MessageSquare,
  Cpu,
  Video,
  MapPin,
  Users,
  BookOpen,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Project {
  title: string;
  icon: LucideIcon;
  company: string;
  period: string;
  problem: string;
  solution: string;
  architecture?: string;
  tech: string[];
  results: string;
  lessons: string;
}

const projects: Project[] = [
  {
    title: "ChatClothes",
    icon: Sparkles,
    company: "AUT",
    period: "2024–2025",
    problem:
      "Fashion e-commerce lacks interactive, multimodal try-on experiences",
    solution:
      "Multimodal AI VTON combining diffusion generation (OOTDiffusion+LoRA), YOLO12n-LC classification, and DeepSeek LLM conversational control",
    architecture:
      "Python AI pipeline (PyTorch/ComfyUI) \u2192 FastAPI backend \u2192 PWA Android frontend \u2192 Raspberry Pi 5 edge deployment",
    tech: [
      "Python",
      "PyTorch",
      "YOLO",
      "Diffusion Models",
      "LoRA",
      "ComfyUI",
      "FastAPI",
      "Raspberry Pi",
      "DeepSeek",
    ],
    results:
      "FID 28.5 (19%\u2193), 94.2% classification accuracy, <10s Pi latency, 87% user success",
    lessons:
      "Model compression for edge deployment is critical; multimodal alignment needs iterative tuning",
  },
  {
    title: "Smart Factory Platform",
    icon: Factory,
    company: "Chunxiao Technology",
    period: "2018–2024",
    problem:
      "Garment factories lack real-time production visibility and coordination",
    solution:
      "Full IoT platform integrating RFID, electronic scales, conveyors \u2014 Spring Cloud microservices, Android shop-floor terminals, Vue.js dashboards",
    architecture:
      "Android app + Vue.js web \u2192 Nginx \u2192 Spring Cloud (Production/Inventory/Device) \u2192 MySQL/Redis/MongoDB \u2192 IoT hardware (RFID, scales, conveyors)",
    tech: [
      "Spring Cloud",
      "Android",
      "Vue.js",
      "RFID",
      "MySQL",
      "Redis",
      "Docker",
      "Jenkins",
      "ActiveMQ",
      "Kafka",
    ],
    results:
      "10+ factory sites, 30%+ efficiency improvement, hundreds of daily workers",
    lessons:
      "Event-driven architecture critical for factory coordination; field-led prioritization beats big design upfront",
  },
  {
    title: "Enterprise Messaging Platform",
    icon: MessageSquare,
    company: "Chunxiao Technology",
    period: "2014–2024",
    problem:
      "Internal enterprise communication needs reliable, low-latency messaging",
    solution:
      "Android-led cross-platform IM with NDK TCP/UDP transport, Spring Cloud backend, 5 subsystems",
    architecture:
      "Android NDK (TCP/UDP) + Web + PC \u2192 Nginx \u2192 Spring Cloud Message Gateway \u2192 Core Services \u2192 MySQL/Redis/FastDFS",
    tech: [
      "Kotlin",
      "Java",
      "NDK",
      "Spring Cloud",
      "Node.js",
      "MySQL",
      "Redis",
      "FastDFS",
      "WebSocket",
    ],
    results:
      "5,000 DAU, <200ms latency, 500K+ msgs/day, 90%+ defect reduction",
    lessons:
      "NDK TCP/UDP path essential for sub-200ms; cloud migration (C++\u2192Easemob) eliminated chronic instability",
  },
  {
    title: "IoT Device Management Platform",
    icon: Cpu,
    company: "Chunxiao Technology",
    period: "2016–2023",
    problem:
      "Smart home/industrial devices need discovery, binding, and remote management",
    solution:
      "Android app + embedded gateway firmware + Spring Cloud backend for smart switches and gateways",
    architecture:
      "Android app \u2192 REST/WebSocket \u2192 Spring Cloud \u2192 MQTT \u2192 Zigbee/WiFi \u2192 IoT Devices",
    tech: [
      "Android SDK",
      "Embedded Linux",
      "Zigbee",
      "WiFi",
      "MQTT",
      "Spring Cloud",
      "Vue.js",
    ],
    results: "7-year product line, multiple device types shipped",
    lessons:
      "Gateway firmware needs robust offline/online transition; MQTT chosen over HTTP for constrained devices",
  },
  {
    title: "Live Streaming Commerce",
    icon: Video,
    company: "Chunxiao Technology",
    period: "2015–2018",
    problem:
      "Brands need integrated live selling platform with streaming + e-commerce",
    solution:
      "Full-stack streaming platform: Android client (C++ core), ASP.NET web admin, WebSocket chat",
    architecture:
      "Android NDK \u2192 RTMP/WebRTC \u2192 .NET + Node.js backend \u2192 SQL Server/Redis \u2192 HLS delivery",
    tech: [
      "Java",
      "Kotlin",
      "C++",
      "C#",
      "ASP.NET",
      "Node.js",
      "WebRTC",
      "RTMP",
      "HLS",
      "FFmpeg",
      "IIS",
    ],
    results: "1000+ peak concurrent viewers, 3-year production run",
    lessons:
      "Multi-bitrate streaming critical for diverse network conditions; .NET+Node.js hybrid served well",
  },
  {
    title: "Forest Patrol GIS",
    icon: MapPin,
    company: "Chunxiao Technology",
    period: "2021–2022",
    problem:
      "Forest rangers in no-signal areas need reliable patrol logging",
    solution:
      "Offline-first Android GIS app with offline maps, GPS tracking, incident reporting, deferred sync",
    tech: ["Java", "Kotlin", "Android SDK", "SQLite", "GPS", "Offline Maps"],
    results: "Deployed for forestry department, reliable zero-connectivity operation",
    lessons:
      "Offline-first design patterns critical for field apps; local SQLite with smart sync protocol",
  },
  {
    title: "Visit Booking & Access Management",
    icon: Users,
    company: "Chunxiao Technology",
    period: "2020–2022",
    problem:
      "High-security facilities need controlled, auditable visitation",
    solution:
      "Multi-terminal platform: admin booking, face recognition terminals, visitor WeChat mini-program, WebRTC sessions",
    tech: [
      "Spring Cloud",
      "Android",
      "WeChat Mini Program",
      "WebRTC",
      "Face Recognition",
      "MySQL",
      "Redis",
    ],
    results:
      "99.5% face recognition accuracy, <1s verification, 30% efficiency gain",
    lessons:
      "Face recognition for access control needs liveness detection for security",
  },
  {
    title: "Picture Book Locker",
    icon: BookOpen,
    company: "Chunxiao Technology",
    period: "2020–2023",
    problem:
      "Schools need 24/7 self-service library system",
    solution:
      "Smart locker with Android control cabinet (locks, UV, sensors) + borrower Android app + face/QR auth",
    tech: [
      "Java",
      "Kotlin",
      "Android SDK",
      "Face Recognition",
      "ZXing",
      "ARM Board",
      "UART/RS485",
      "GSM",
    ],
    results: "<3s borrowing, multiple schools, 0% book loss rate",
    lessons:
      "Hardware integration requires robust fail-safe; UV disinfection timing critical",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <Layers className="h-7 w-7 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Selected work demonstrating architecture, problem-solving, and
          engineering expertise.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <div className="flex items-center gap-2.5">
                <project.icon className="h-5 w-5 text-primary shrink-0" />
                <CardTitle>{project.title}</CardTitle>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {project.company} &middot; {project.period}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Problem
                </span>
                <p className="text-sm mt-1">{project.problem}</p>
              </div>

              <div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Solution
                </span>
                <p className="text-sm mt-1">{project.solution}</p>
              </div>

              {project.architecture && (
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Architecture
                  </span>
                  <p className="text-sm mt-1">{project.architecture}</p>
                </div>
              )}

              {project.results && (
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Results
                  </span>
                  <p className="text-sm mt-1">{project.results}</p>
                </div>
              )}

              <Separator />

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="border-l-2 border-primary/30 pl-3">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  What I Learned
                </span>
                <p className="text-sm mt-1 italic text-muted-foreground">
                  {project.lessons}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

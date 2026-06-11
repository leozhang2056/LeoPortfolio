"use client";

import { useState } from "react";
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
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  icon: LucideIcon;
  company: string;
  period: string;
  image: string;
  summary: string;
  problem: string;
  solution: string;
  architecture?: string;
  tech: string[];
  results: string;
  lessons: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "ChatClothes",
    icon: Sparkles,
    company: "Auckland University of Technology",
    period: "Nov 2024 → Apr 2025",
    image: "/projects/chatclothes.jpg",
    summary:
      "Master's thesis: multimodal AI virtual try-on combining OOTDiffusion+LoRA generation, YOLO12n-LC classification, and DeepSeek LLM conversational control. Completed 6 months early. Published at IVCNZ 2025.",
    problem:
      "Fashion e-commerce lacks interactive, multimodal try-on experiences that work on edge devices",
    solution:
      "Multimodal AI VTON: OOTDiffusion with LoRA fine-tuning for pose-aligned generation, YOLO12n-LC lightweight classifier (5MB, 8x smaller), DeepSeek LLM + RAG for natural language to structured prompts",
    architecture:
      "Python AI pipeline (PyTorch/ComfyUI/Dify) → FastAPI backend → PWA Android frontend → Raspberry Pi 5 edge deployment",
    tech: [
      "Python",
      "PyTorch",
      "OOTDiffusion",
      "LoRA",
      "YOLO12n-LC",
      "ComfyUI",
      "Dify",
      "DeepSeek",
      "FastAPI",
      "Raspberry Pi 5",
    ],
    results:
      "FID 28.5 (19%↑), 75% hand artifact reduction, 94.2% accuracy, <10s Pi latency, 87% user success (50 users)",
    lessons:
      "Model compression for edge deployment is critical; multimodal alignment needs iterative tuning; LoRA fine-tuning achieves significant quality gains without modifying the backbone",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Smart Factory Platform",
    icon: Factory,
    company: "Chunxiao Technology",
    period: "2018–2024",
    image: "/projects/smart-factory.jpg",
    summary:
      "Full-stack IoT smart manufacturing platform for garment factories. Spring Cloud microservices + Android shop-floor terminals + Vue.js dashboards. Deployed across 5+ manufacturing bases (10+ factory sites), led 6-person team.",
    problem:
      "Garment factories lack real-time production visibility — electronic scales need manual reading, production data entry is error-prone, and cross-site coordination is slow",
    solution:
      "Full IoT platform: local serial-port service for auto weight capture via WebSocket, RFID-based production tracking, Spring Cloud microservices (Production/Inventory/Device), Android shop-floor terminals, Vue.js BI dashboards",
    architecture:
      "Android app + Vue.js web → Nginx → Spring Cloud (MyBatis) → MySQL/Redis/MongoDB → IoT hardware (RFID, scales, conveyors via RS232/RS485)",
    tech: [
      "Java",
      "Spring Cloud",
      "MyBatis",
      "Android",
      "Vue.js",
      "RFID",
      "MySQL",
      "Redis",
      "MongoDB",
      "Docker",
      "Jenkins",
      "ActiveMQ",
      "Kafka",
    ],
    results:
      "10+ factory sites, 30%+ efficiency gain, 6-person team, hundreds of daily workers, Jenkins CI/CD rollout",
    lessons:
      "Event-driven architecture critical for factory coordination; field-led prioritization beats big design upfront; staged cloud migration (local → cloud MySQL with read replicas) balances delivery speed and performance",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Enterprise Messaging Platform",
    icon: MessageSquare,
    company: "Chunxiao Technology",
    period: "2014–2024",
    image: "/projects/enterprise-messaging.jpg",
    summary:
      "Android-led enterprise IM evolving from standalone tool to multi-platform system (Android/Web/PC). 5,000 DAU, sub-200ms latency, 500K+ daily messages across 5 subsystems. Migrated from legacy C++ to cloud IM, eliminating 90%+ defects. 10-year lifecycle.",
    problem:
      "Enterprise needs reliable low-latency messaging across Android/Web/PC, with unified identity, file storage, and subsystem integration (attendance, approvals, asset management)",
    solution:
      "Cross-platform IM: NDK TCP/UDP transport for sub-200ms delivery, Spring Cloud message gateway, FastDFS distributed file storage, Easemob cloud IM migration (eliminated 90%+ defects), JPush backup push channel for manufacturer ROM differences",
    architecture:
      "Android NDK (TCP/UDP) + Web + PC → Nginx → Spring Cloud Message Gateway → Core Services → MySQL/Redis/FastDFS → Easemob/JPush",
    tech: [
      "Kotlin",
      "Java",
      "C/C++",
      "NDK",
      "Spring Cloud",
      "Node.js",
      "MySQL",
      "Redis",
      "FastDFS",
      "WebSocket",
      "Easemob",
      "JPush",
    ],
    results:
      "5,000 DAU, <200ms latency, 500K+ msgs/day, 90%+ defect reduction, <2% downtime over 10 years",
    lessons:
      "NDK TCP/UDP path essential for sub-200ms at scale; cloud migration (C++ → Easemob) eliminated chronic instability; manufacturer ROM push differences need layered backup channels",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "IoT Device Management Platform",
    icon: Cpu,
    company: "Chunxiao Technology",
    period: "2016–2023",
    image: "/projects/iot-device.jpg",
    summary:
      "IoT device management platform for smart switches and gateways. Android app for device discovery/binding/control, embedded Linux gateway firmware handling Zigbee/WiFi protocols, Spring Cloud backend for registration, grouping, and remote monitoring.",
    problem:
      "Smart home/industrial devices with heterogeneous protocols (Zigbee/WiFi/proprietary) need unified discovery, binding, and remote management",
    solution:
      "Android app + embedded gateway firmware + Spring Cloud backend. Gateway handles protocol translation (Zigbee/WiFi → MQTT), supports local/offline behavior with auto-sync on reconnect",
    architecture:
      "Android app → REST/WebSocket → Spring Cloud → MQTT → Gateway (Embedded Linux) → Zigbee/WiFi → IoT Devices",
    tech: [
      "Java",
      "Kotlin",
      "Android SDK",
      "Embedded Linux",
      "Zigbee",
      "WiFi",
      "MQTT",
      "UART/Serial",
      "GPIO",
      "Spring Cloud",
      "Vue.js",
    ],
    results: "7-year product line, multiple device types shipped",
    lessons:
      "Gateway firmware needs robust offline/online transition; MQTT chosen over HTTP for constrained devices",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Live Streaming Commerce",
    icon: Video,
    company: "Chunxiao Technology",
    period: "2015–2018",
    image: "/projects/live-streaming.jpg",
    summary:
      "Full-stack live streaming commerce platform: Android client with custom C++ streaming core, ASP.NET web admin, real-time WebSocket chat. Multi-bitrate adaptive streaming (360p–1080p), 1000+ peak concurrent viewers, 8-person team, 3-year product cycle.",
    problem:
      "Brands need an integrated live selling platform combining real-time streaming with in-stream e-commerce and chat interaction",
    solution:
      "Hybrid multi-language architecture: .NET (business logic) + Node.js (real-time push) + C++ (media processing). Android NDK streaming core with RTMP ingest, HLS/M3U8 adaptive delivery, and WebRTC low-latency mode. WebSocket/Socket.IO for real-time chat and live interactions",
    architecture:
      "Android NDK (C++ core) → RTMP/WebRTC → .NET + Node.js backend → SQL Server/Redis/MongoDB → HLS (M3U8) delivery",
    tech: [
      "C#",
      "ASP.NET",
      "Java",
      "Kotlin",
      "C++",
      "NDK",
      "Python",
      "Lua",
      "Node.js",
      "WebRTC",
      "RTMP",
      "HLS",
      "FFmpeg",
      "WebSocket",
    ],
    results:
      "1000+ peak concurrent viewers, 99.5% streaming uptime, multi-bitrate 360p–1080p, 3-year production run",
    lessons:
      "Multi-bitrate adaptive streaming critical for diverse network conditions (3G/4G/WiFi); .NET+Node.js+C++ hybrid architecture lets each layer play to its strengths; Socket.IO simplifies room management for live interactions",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    title: "Forest Patrol GIS",
    icon: MapPin,
    company: "Chunxiao Technology",
    period: "2021–2022",
    image: "/projects/forest-patrol.jpg",
    summary:
      "Offline-first Android GIS app for forest rangers working in zero-signal areas. Offline map tiles, GPS trajectory recording, GIS layer annotation, and fire/pest/incident reporting with deferred sync when connectivity returns.",
    problem:
      "Forest rangers patrol remote areas with zero cellular signal — traditional online apps cannot work, and patrol data must be reliably logged",
    solution:
      "Offline-first architecture: pre-loaded offline map tiles, local SQLite for all data persistence, GPS trajectory recording stored locally, GIS annotation layers for marking incidents. Smart sync protocol uploads all data when network returns",
    tech: ["Java", "Kotlin", "Android SDK", "SQLite", "GPS", "Offline Maps", "GIS Layers"],
    results:
      "Deployed for forestry department, reliable zero-connectivity operation, full data sync on reconnect",
    lessons:
      "Offline-first design patterns are essential for field apps; local SQLite with smart sync protocol prevents data loss; UX must guide users clearly about online/offline status",
    gradient: "from-green-600 to-lime-500",
  },
  {
    title: "Visit Booking & Access Management",
    icon: Users,
    company: "Chunxiao Technology",
    period: "2020–2022",
    image: "/projects/visit-booking.jpg",
    summary:
      "Multi-terminal visitation platform for high-security scenarios (prisons, hospital ICU/NICU). Admin booking system, face recognition terminals with liveness detection, visitor WeChat mini-program, and WebRTC audio-video sessions. Deployed across multiple hospital departments.",
    problem:
      "High-security facilities (prisons, hospital ICU) need controlled, auditable visitation with identity verification and pandemic-safe contactless options",
    solution:
      "Multi-terminal platform: online booking + approval + time slot quota management, face recognition access control with liveness detection, WebRTC remote audio-video visitation with full recording/audit, WeChat mini-program for visitors, HIS system integration",
    tech: [
      "Java",
      "Kotlin",
      "Spring Cloud",
      "Android",
      "WeChat Mini Program",
      "WebRTC",
      "Face Recognition",
      "Liveness Detection",
      "MySQL",
      "Redis",
      "SMS Gateway",
      "HIS Interface",
    ],
    results:
      "99.5% face recognition accuracy, <1s verification, 30% efficiency gain, deployed in ICU/NICU/infectious disease",
    lessons:
      "Face recognition for access control needs liveness detection; pandemic contactless visit requires robust WebRTC + audit trail; HIS integration is key for hospital workflows",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Picture Book Locker",
    icon: BookOpen,
    company: "Chunxiao Technology",
    period: "2020–2023",
    image: "/projects/picture-locker.jpg",
    summary:
      "24/7 smart self-service library cabinet for schools. Android control cabinet drives electromagnetic locks, UV-C disinfection, and sensors via UART/RS485. User app supports face/QR auth for <3s borrowing. Zero book loss across multiple school deployments.",
    problem:
      "Schools need 24/7 self-service book borrowing when libraries are closed, with hygienic handling and robust hardware",
    solution:
      "Smart locker cabinet: Android host controlling electromagnetic locks (sub-second via UART/RS485), UV-C auto-disinfection on return, door sensors, LED indicators. User Android app with face recognition + ZXing QR auth. Hardware fail-safe design for power/network outages",
    tech: [
      "Java",
      "Kotlin",
      "Android SDK",
      "Face Recognition",
      "ZXing",
      "ARM Board",
      "UART/RS485",
      "GPIO",
      "Electromagnetic Locks",
      "UV-C",
      "MQTT",
      "Spring Cloud",
    ],
    results:
      "24/7 unattended operation, <3s borrow/return, multiple schools, 0% book loss rate",
    lessons:
      "Hardware integration demands robust fail-safes for every component; UV disinfection timing must be precise; splitting scope early when inheriting legacy code saves the project",
    gradient: "from-sky-500 to-blue-500",
  },
];

function ProjectImage({
  project,
}: {
  project: Pick<Project, "image" | "title" | "icon" | "gradient">;
}) {
  const [imgError, setImgError] = useState(false);
  const Icon = project.icon;

  if (imgError) {
    return (
      <div
        className={cn(
          "w-full h-full min-h-[200px] bg-gradient-to-br flex flex-col items-center justify-center gap-3",
          project.gradient
        )}
      >
        <Icon className="h-12 w-12 text-white/80" />
        <span className="text-white/70 text-sm font-medium">
          {project.title}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover"
      onError={() => setImgError(true)}
    />
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = project.icon;

  return (
    <div
      id={project.title.toLowerCase().replace(/\s+/g, "-")}
      className="group rounded-xl border border-border/50 bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Main row: image left + info right */}
      <div className="flex flex-col md:flex-row">
        {/* Left: Image */}
        <div className="md:w-[280px] lg:w-[320px] shrink-0 overflow-hidden">
          <div className="relative w-full h-[200px] md:h-full md:min-h-[240px]">
            <ProjectImage project={project} />
            {/* Overlay badge */}
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
                <Icon className="h-3.5 w-3.5" />
                {project.period}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex-1 flex flex-col p-5 md:p-6">
          {/* Header */}
          <div className="mb-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {project.company}
                </p>
              </div>
            </div>
          </div>

          {/* Summary — always visible */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {project.summary}
          </p>

          {/* Tech tags — always visible */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.slice(0, expanded ? undefined : 5).map((t) => (
              <Badge key={t} variant="secondary" className="text-xs">
                {t}
              </Badge>
            ))}
            {!expanded && project.tech.length > 5 && (
              <Badge variant="outline" className="text-xs">
                +{project.tech.length - 5}
              </Badge>
            )}
          </div>

          {/* Results highlight */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
            <span className="line-clamp-1">{project.results}</span>
          </div>

          {/* Expand / Collapse */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-auto flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer"
          >
            {expanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Show less
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                View details
              </>
            )}
          </button>
        </div>
      </div>

      {/* Expanded details */}
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-in-out",
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border/50 px-5 md:px-6 py-5 md:py-6 bg-muted/30">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-4">
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
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Results
                  </span>
                  <p className="text-sm mt-1">{project.results}</p>
                </div>
                <div className="border-l-2 border-primary/30 pl-3">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    What I Learned
                  </span>
                  <p className="text-sm mt-1 italic text-muted-foreground">
                    {project.lessons}
                  </p>
                </div>
                {/* All tech tags in expanded view */}
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                    Full Tech Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
          engineering expertise across AI, IoT, mobile, and backend systems.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

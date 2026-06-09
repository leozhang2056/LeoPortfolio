import type { LucideIcon } from "lucide-react";
import { Layers, Lightbulb, Cpu, Factory, Briefcase, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Project {
  title: string;
  icon: LucideIcon;
  problem: string;
  solution: string;
  architecture: string;
  tech: string[];
  lessons: string;
}

const projects: Project[] = [
  {
    title: "ChatClothes",
    icon: Lightbulb,
    problem:
      "Fashion retailers struggle to provide personalized recommendations across modalities",
    solution:
      "Multimodal AI system combining diffusion models with LLM for text+image fashion guidance",
    architecture:
      "Microservices with Python AI services + React frontend",
    tech: ["Diffusion Models", "YOLO", "LangChain", "Python", "React"],
    lessons:
      "Balancing model accuracy with response time; importance of data preprocessing pipeline",
  },
  {
    title: "Manufacturing Execution System",
    icon: Factory,
    problem:
      "Legacy factory systems lack real-time visibility and integration",
    solution:
      "Modern MES platform with real-time production tracking, quality management, and analytics",
    architecture:
      "Spring Boot microservices + React SPA + PostgreSQL + MQTT",
    tech: ["Spring Boot", "React", "PostgreSQL", "MQTT", "Docker", "Kubernetes"],
    lessons:
      "Domain-Driven Design critical for complex manufacturing domain; event-driven architecture enables real-time features",
  },
  {
    title: "Industrial IoT Platform",
    icon: Cpu,
    problem:
      "Factory equipment data is siloed and inaccessible for analytics",
    solution:
      "Scalable IoT platform for device management, data collection, and visualization",
    architecture:
      "Edge computing + cloud services with MQTT protocol, time-series database",
    tech: ["MQTT", "InfluxDB", "Spring Boot", "React", "Docker"],
    lessons:
      "Edge computing reduces latency and bandwidth costs; importance of protocol selection",
  },
  {
    title: "Android Enterprise Applications",
    icon: Smartphone,
    problem:
      "Field workers need reliable offline mobile access to enterprise systems",
    solution:
      "Suite of offline-first Android applications with sync capabilities",
    architecture:
      "MVVM + Clean Architecture with offline-first data layer",
    tech: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Retrofit"],
    lessons:
      "Offline-first requires careful conflict resolution; Compose improves development velocity",
  },
  {
    title: "AI Career Tools",
    icon: Briefcase,
    problem:
      "Job seekers lack data-driven career guidance",
    solution:
      "AI-powered resume analysis, job matching, and interview preparation tools",
    architecture:
      "Spring Boot backend + OpenAI API integration + rate-limited API gateway",
    tech: ["Spring Boot", "OpenAI", "LangChain4j", "PostgreSQL", "Next.js"],
    lessons:
      "Prompt engineering significantly impacts output quality; cost management for AI API calls",
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

              <div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Architecture
                </span>
                <p className="text-sm mt-1">{project.architecture}</p>
              </div>

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
                  Lessons Learned
                </span>
                <p className="text-sm mt-1 text-muted-foreground">
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

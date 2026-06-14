"use client";

import { useState } from "react";
import Link from "next/link";
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
  Wallet,
  Zap,
  Bot,
  Radio,
  Leaf,
  Wrench,
  Shield,
  Scale,
  Search,
  Building2,
  GraduationCap,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { projects, type ProjectData } from "@/lib/projects";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Factory,
  MessageSquare,
  Cpu,
  Video,
  MapPin,
  Users,
  BookOpen,
  Wallet,
  Zap,
  Bot,
  Radio,
  Leaf,
  Wrench,
  Shield,
  Scale,
  Search,
  Building2,
  GraduationCap,
  Layers,
};

function ProjectImage({
  project,
}: {
  project: Pick<ProjectData, "coverImage" | "title" | "gradient">;
}) {
  const [imgError, setImgError] = useState(false);

  if (!project.coverImage || imgError) {
    return (
      <div
        className={cn(
          "w-full h-full min-h-[200px] bg-gradient-to-br flex flex-col items-center justify-center gap-3",
          project.gradient
        )}
      >
        <span className="text-white/70 text-sm font-medium text-center px-4">
          {project.title}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={project.coverImage}
      alt={project.title}
      className="w-full h-full object-cover"
      onError={() => setImgError(true)}
    />
  );
}

function ProjectCard({ project }: { project: ProjectData }) {
  const Icon = iconMap[project.icon] || Layers;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-xl border border-border/50 bg-card overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row">
        {/* Left: Image */}
        <div className="md:w-[280px] lg:w-[320px] shrink-0 overflow-hidden">
          <div className="relative w-full h-[200px] md:h-[220px]">
            <ProjectImage project={project} />
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex-1 flex flex-col p-5 md:p-6">
          {/* Header */}
          <div className="mb-3">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {project.company} · {project.role}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0 mt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted text-xs font-medium whitespace-nowrap">
                  <Icon className="h-3.5 w-3.5" />
                  {project.period}
                </span>
                <ArrowRight className="h-5 w-5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>

          {/* Summary */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
            {project.summary}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.slice(0, 5).map((t) => (
              <Badge key={t} variant="secondary" className="text-xs">
                {t}
              </Badge>
            ))}
            {project.tech.length > 5 && (
              <Badge variant="outline" className="text-xs">
                +{project.tech.length - 5}
              </Badge>
            )}
          </div>

          {/* Results highlight */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
            <span className="line-clamp-1">{project.results}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function getEndYear(period: string): number {
  const years = period.match(/\d{4}/g);
  return years ? parseInt(years[years.length - 1]) : 0;
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
          19 projects across a decade of production delivery. Each one solved a
          specific problem under specific constraints.
        </p>
      </div>

      <div className="space-y-6">
        {[...projects]
          .sort((a, b) => {
            const aHasImg = a.coverImage ? 1 : 0;
            const bHasImg = b.coverImage ? 1 : 0;
            if (aHasImg !== bHasImg) return bHasImg - aHasImg;
            return getEndYear(b.period) - getEndYear(a.period);
          })
          .map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
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
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, getProjectBySlug } from "@/lib/projects";
import { ImageGallery } from "@/components/projects/image-gallery";

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

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const Icon = iconMap[project.icon] || Layers;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      {/* Back link */}
      <Button
        variant="ghost"
        size="sm"
        render={<Link href="/projects" />}
        nativeButton={false}
        className="mb-8 -ml-2"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Button>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {project.title}
            </h1>
            <p className="text-muted-foreground">
              {project.company} · {project.period}
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          Role: {project.role}
        </p>
      </div>

      {/* Image Gallery */}
      <div className="mb-10">
        <ImageGallery
          images={project.images}
          coverImage={project.coverImage}
          title={project.title}
          gradient={project.gradient}
        />
      </div>

      {/* Summary */}
      <section className="mb-10">
        <p className="text-lg leading-relaxed text-foreground/90">
          {project.summary}
        </p>
      </section>

      {/* Key Metrics */}
      <section className="mb-10">
        <div className="rounded-lg border border-border/50 bg-muted/30 p-4 flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 shrink-0" />
          <p className="text-sm font-medium">{project.results}</p>
        </div>
      </section>

      {/* Problem / Solution / Architecture */}
      {(project.problem || project.solution || project.architecture) && (
        <section className="mb-10 space-y-6">
          {project.problem && (
            <div>
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Problem
              </h2>
              <p className="text-sm leading-relaxed">{project.problem}</p>
            </div>
          )}
          {project.solution && (
            <div>
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Solution
              </h2>
              <p className="text-sm leading-relaxed">{project.solution}</p>
            </div>
          )}
          {project.architecture && (
            <div>
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Architecture
              </h2>
              <p className="text-sm leading-relaxed font-mono bg-muted/50 rounded-md p-3">
                {project.architecture}
              </p>
            </div>
          )}
        </section>
      )}

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Key Highlights
          </h2>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="text-primary mt-1 shrink-0">▸</span>
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Tech Stack */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="text-xs">
              {t}
            </Badge>
          ))}
        </div>
      </section>

      {/* Lessons Learned */}
      {project.lessons && (
        <section className="mb-10">
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            What I Learned
          </h2>
          <blockquote className="border-l-2 border-primary/30 pl-4 text-sm italic text-muted-foreground leading-relaxed">
            {project.lessons}
          </blockquote>
        </section>
      )}

      {/* Navigation between projects */}
      <div className="border-t border-border/50 pt-8 mt-12">
        <ProjectNavigation currentSlug={project.slug} />
      </div>
    </div>
  );
}

function ProjectNavigation({ currentSlug }: { currentSlug: string }) {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="flex justify-between gap-4">
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          className="group flex flex-col gap-1 text-left p-3 rounded-lg hover:bg-muted/50 transition-colors max-w-[45%]"
        >
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <ArrowLeft className="h-3 w-3" /> Previous
          </span>
          <span className="text-sm font-medium group-hover:text-primary transition-colors truncate">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="group flex flex-col gap-1 text-right p-3 rounded-lg hover:bg-muted/50 transition-colors max-w-[45%] ml-auto"
        >
          <span className="text-xs text-muted-foreground">
            Next →
          </span>
          <span className="text-sm font-medium group-hover:text-primary transition-colors truncate">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}

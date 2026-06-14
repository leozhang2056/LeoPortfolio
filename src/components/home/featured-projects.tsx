"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/lib/projects";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { StaggerContainer } from "@/components/ui/stagger-container";

const tagColors = [
  "bg-blue-100 text-blue-700 border-blue-200",
  "bg-purple-100 text-purple-700 border-purple-200",
  "bg-green-100 text-green-700 border-green-200",
  "bg-orange-100 text-orange-700 border-orange-200",
  "bg-pink-100 text-pink-700 border-pink-200",
];

const cardAccents = [
  "from-blue-500 to-cyan-400",
  "from-purple-500 to-pink-400",
  "from-green-500 to-emerald-400",
];

function FeaturedImage({ src, title, gradient }: { src: string; title: string; gradient: string }) {
  const [imgError, setImgError] = useState(false);

  if (!src || imgError) {
    return (
      <div className={`w-full h-40 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <span className="text-white/80 text-sm font-medium">{title}</span>
      </div>
    );
  }

  return (
    <motion.div className="w-full h-40 overflow-hidden" whileHover={{ scale: 1 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img
        src={src}
        alt={title}
        className="w-full h-40 object-cover"
        onError={() => setImgError(true)}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </motion.div>
  );
}

export function FeaturedProjectsSection() {
  const featured = getFeaturedProjects();

  return (
    <section className="container mx-auto max-w-6xl px-4 py-20 border-t">
      <ScrollReveal className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight relative inline-block">
            Selected Work
            <motion.div
              className="h-[3px] bg-primary rounded-full mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </h2>
          <p className="mt-3 text-muted-foreground">
            Each project taught me something about building systems under real constraints
          </p>
        </div>
        <Button variant="ghost" render={<Link href="/projects" />} nativeButton={false} className="hidden sm:flex">
          View All <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </ScrollReveal>

      <StaggerContainer staggerDelay={0.12} className="grid gap-6 md:grid-cols-3">
        {featured.map((project, idx) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Card className="h-full hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-shadow duration-300 overflow-hidden p-0 relative">
                {/* Top accent bar */}
                <div className={`h-[3px] bg-gradient-to-r ${cardAccents[idx % cardAccents.length]}`} />

                {/* Cover image */}
                <FeaturedImage
                  src={project.coverImage}
                  title={project.title}
                  gradient={project.gradient}
                />

                <CardHeader className="pb-2">
                  <CardTitle className="group-hover:text-primary transition-colors text-base">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-xs line-clamp-3">
                    {project.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((tag, i) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className={`text-xs border ${tagColors[(idx * 3 + i) % tagColors.length]}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground border-t pt-3">
                    <TrendingUp className="h-3.5 w-3.5 text-green-500" />
                    <span className="line-clamp-1 font-medium">{project.results}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </Link>
        ))}
      </StaggerContainer>

      <div className="mt-6 text-center sm:hidden">
        <Button variant="ghost" render={<Link href="/projects" />} nativeButton={false}>
          View All Projects <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/lib/data";

const tagColors = [
  "bg-blue-100 text-blue-700 border-blue-200",
  "bg-purple-100 text-purple-700 border-purple-200",
  "bg-green-100 text-green-700 border-green-200",
  "bg-orange-100 text-orange-700 border-orange-200",
  "bg-pink-100 text-pink-700 border-pink-200",
];

export function FeaturedProjectsSection() {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-20 border-t">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-2 text-muted-foreground">
            Selected work demonstrating breadth across mobile, backend, and AI
          </p>
        </div>
        <Button variant="ghost" render={<Link href="/projects" />} className="hidden sm:flex">
          View All <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, idx) => (
          <Link key={project.slug} href={`/projects#${project.slug}`} className="group">
            <Card className="h-full transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={`text-xs border ${tagColors[(idx * 3 + i) % tagColors.length]}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                {project.metrics && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground border-t pt-3">
                    <TrendingUp className="h-3.5 w-3.5 text-green-500" />
                    {project.metrics}
                  </div>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mt-6 text-center sm:hidden">
        <Button variant="ghost" render={<Link href="/projects" />}>
          View All Projects <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}

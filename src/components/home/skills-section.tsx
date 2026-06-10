import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Brain, Server, Globe, Container, Code2 } from "lucide-react";
import { skills } from "@/lib/data";

const categoryIcons: Record<string, typeof Smartphone> = {
  "Mobile Development": Smartphone,
  "AI & Machine Learning": Brain,
  "Backend Development": Server,
  "Frontend & IoT": Globe,
  "DevOps & Cloud": Container,
};

export function SkillsSection() {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
        <p className="mt-2 text-muted-foreground">
          10+ years of hands-on engineering across the full stack
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          const Icon = categoryIcons[skill.category] || Code2;
          return (
            <Card key={skill.category} className="group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-base">{skill.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <Badge key={item} variant="secondary" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

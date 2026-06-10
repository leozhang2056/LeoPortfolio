import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Brain, Server, Globe, Container, Code2 } from "lucide-react";
import { skills } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "Mobile Development": "from-blue-500 to-cyan-400",
  "AI & Machine Learning": "from-purple-500 to-pink-400",
  "Backend Development": "from-green-500 to-emerald-400",
  "IoT & Hardware": "from-orange-500 to-amber-400",
  "DevOps & Cloud": "from-red-500 to-rose-400",
};

const categoryIcons: Record<string, typeof Smartphone> = {
  "Mobile Development": Smartphone,
  "AI & Machine Learning": Brain,
  "Backend Development": Server,
  "Frontend & IoT": Globe,
  "IoT & Hardware": Globe,
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
          const colorClass = categoryColors[skill.category] || "from-gray-500 to-gray-400";
          return (
            <Card key={skill.category} className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-sm`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <CardTitle className="text-base">{skill.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <Badge key={item} variant="secondary" className="text-xs hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
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

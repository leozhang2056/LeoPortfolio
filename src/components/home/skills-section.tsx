"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Brain, Server, Globe, Container, Code2 } from "lucide-react";
import { skills } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { StaggerContainer } from "@/components/ui/stagger-container";

const categoryColors: Record<string, string> = {
  "Mobile Systems": "from-blue-500 to-cyan-400",
  "AI & Vision": "from-purple-500 to-pink-400",
  "Backend & APIs": "from-green-500 to-emerald-400",
  "IoT & Hardware": "from-orange-500 to-amber-400",
  "DevOps & Delivery": "from-red-500 to-rose-400",
};

const categoryIcons: Record<string, typeof Smartphone> = {
  "Mobile Systems": Smartphone,
  "AI & Vision": Brain,
  "Backend & APIs": Server,
  "IoT & Hardware": Globe,
  "DevOps & Delivery": Container,
};

export function SkillsSection() {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-20">
      <ScrollReveal className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight relative inline-block">
          What I Build
          <motion.div
            className="h-[3px] bg-primary rounded-full mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </h2>
        <p className="mt-3 text-muted-foreground">
          Capability areas shaped by a decade of production delivery
        </p>
      </ScrollReveal>

      <StaggerContainer staggerDelay={0.08} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          const Icon = categoryIcons[skill.category] || Code2;
          const colorClass = categoryColors[skill.category] || "from-gray-500 to-gray-400";
          return (
            <motion.div
              key={skill.category}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Card className="group h-full hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <motion.div
                      className={`flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-sm`}
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </motion.div>
                    <CardTitle className="text-base">{skill.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Statement — the headline, not the tools */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.statement}
                  </p>
                  {/* Tools — evidence, smaller and secondary */}
                  <motion.div
                    className="flex flex-wrap gap-1.5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.03,
                          delayChildren: 0.2,
                        },
                      },
                    }}
                  >
                    {skill.items.map((item) => (
                      <motion.div
                        key={item}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.3 },
                          },
                        }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                        >
                          {item}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </StaggerContainer>
    </section>
  );
}

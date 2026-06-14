"use client";

import { motion } from "motion/react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { StaggerContainer } from "@/components/ui/stagger-container";
import { AnimatedCounter } from "@/components/ui/animated-counter";

interface HighlightItem {
  counter: { value: number; prefix?: string; suffix?: string; formatFn?: (n: number) => string };
  label: string;
  color: string;
  bgColor: string;
}

const highlights: HighlightItem[] = [
  {
    counter: { value: 19, suffix: "" },
    label: "projects across 6 domains — factory, messaging, IoT, mobile, AI, web",
    color: "text-blue-500",
    bgColor: "bg-blue-500",
  },
  {
    counter: { value: 1, suffix: "st", prefix: "" },
    label: "Class Honours — Master's completed 6 months early, published research",
    color: "text-purple-500",
    bgColor: "bg-purple-500",
  },
  {
    counter: { value: 5, suffix: "+" },
    label: "factory sites — smart manufacturing platform running in production",
    color: "text-green-500",
    bgColor: "bg-green-500",
  },
  {
    counter: { value: 5000, formatFn: (n: number) => n.toLocaleString() },
    label: "daily users — messaging platform, <200ms latency, 10-year uptime",
    color: "text-orange-500",
    bgColor: "bg-orange-500",
  },
  {
    counter: { value: 90, suffix: "%" },
    label: "defect reduction — legacy C++ to cloud IM migration, zero downtime",
    color: "text-pink-500",
    bgColor: "bg-pink-500",
  },
];

export function AboutSection() {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left — text */}
        <ScrollReveal direction="left">
          <h2 className="text-3xl font-bold tracking-tight relative">
            About Me
            <motion.div
              className="h-[3px] bg-primary rounded-full mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            I started my career building streaming infrastructure for a small
            IoT company in China. Over the next decade, the systems I worked on
            kept getting more complex — from media servers to factory automation
            platforms, from enterprise messaging to AI research.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            What I learned across all of it: the hard part is rarely the code
            itself. It&apos;s figuring out where a system will fail, designing for
            that failure, and building something a team can actually maintain
            after you leave. I&apos;ve applied that thinking to 19 projects across
            six different domains — and it&apos;s the skill I value most.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I recently completed a Master&apos;s at AUT in Auckland, where I built
            an AI virtual try-on system and published at IVCNZ 2025. Now I&apos;m
            looking for a team that values engineering judgment over keyword
            matching — someone who needs systems that work under real constraints.
          </p>
        </ScrollReveal>

        {/* Right — highlight cards */}
        <StaggerContainer staggerDelay={0.1} direction="right">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 p-4 rounded-xl border bg-card hover:shadow-md transition-shadow overflow-hidden relative"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Left accent bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${h.bgColor} rounded-l-xl`} />

              {/* Animated counter */}
              <div className={`flex-shrink-0 min-w-[3.5rem] text-right`}>
                <AnimatedCounter
                  value={h.counter.value}
                  prefix={h.counter.prefix}
                  suffix={h.counter.suffix}
                  formatFn={h.counter.formatFn}
                  className={`text-2xl font-bold ${h.color} tabular-nums`}
                />
              </div>

              {/* Label */}
              <p className="text-sm text-muted-foreground pt-1">{h.label}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

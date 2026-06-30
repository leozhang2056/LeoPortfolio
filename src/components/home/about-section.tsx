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
    counter: { value: 21, suffix: "" },
    label: "projects shipped — factory MES, enterprise IM, IoT, mobile GIS, AI research",
    color: "text-blue-500",
    bgColor: "bg-blue-500",
  },
  {
    counter: { value: 1, suffix: "st", prefix: "" },
    label: "Class Honours — Master's at AUT, thesis completed 6 months early, published at IVCNZ 2025",
    color: "text-purple-500",
    bgColor: "bg-purple-500",
  },
  {
    counter: { value: 5, suffix: "+" },
    label: "factory sites — smart manufacturing platform serving hundreds of workers daily",
    color: "text-green-500",
    bgColor: "bg-green-500",
  },
  {
    counter: { value: 5000, formatFn: (n: number) => n.toLocaleString() },
    label: "daily active users — enterprise messaging, <200ms latency, <2% downtime over 10 years",
    color: "text-orange-500",
    bgColor: "bg-orange-500",
  },
  {
    counter: { value: 90, suffix: "%" },
    label: "defect elimination — legacy C++ IM to cloud migration, zero-downtime cutover",
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
            I started my career writing C++ streaming cores and ASP.NET admin
            backends for a small IoT start-up in China. Over the next decade,
            the systems grew with the company — from live-streaming chat rooms
            to factory automation, from enterprise messaging to AI research.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every project taught me the same lesson: the hard part isn't writing
            code — it's making sure it keeps working when the network drops, the
            database outgrows the server, or the only person who understands it
            leaves. I've designed for those failures across 21 projects in 6
            domains — factory MES, enterprise IM, IoT gateways, mobile field
            apps, live streaming, and applied AI.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I recently completed a Master's at AUT in Auckland with First Class
            Honours, building a multimodal AI virtual try-on system and publishing
            at IVCNZ 2025. Now I'm looking for a team that values systems that
            actually work under real constraints — not just on a whiteboard.
          </p>
        </ScrollReveal>

        {/* Right — highlight cards */}
        <StaggerContainer staggerDelay={0.1} direction="right" className="mt-20">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 p-4 rounded-xl border bg-card hover:shadow-md transition-shadow overflow-hidden relative mb-1.5"
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

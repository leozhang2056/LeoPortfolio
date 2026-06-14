"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

/* ------------------------------------------------------------------ */
/*  Animated name (kinetic typography)                                 */
/* ------------------------------------------------------------------ */
function AnimatedName({ name }: { name: string }) {
  const words = name.split(" ");
  return (
    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.1]">
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.25em]">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              className="inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15 + (wi * word.length + ci) * 0.03,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-purple-50/50 to-pink-50/30 animate-gradient-shift dark:from-blue-950/30 dark:via-purple-950/20 dark:to-pink-950/10" />
      {/* Grid overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24 relative" style={{ zIndex: 2 }}>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left column — text content */}
          <div className="md:col-span-2">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-6 dark:bg-green-950/30 dark:border-green-800 dark:text-green-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Open to opportunities
            </motion.div>

            <AnimatedName name={siteConfig.name} />

            <motion.p
              className="mt-4 text-xl font-medium text-primary sm:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {siteConfig.title}
            </motion.p>

            <motion.p
              className="mt-6 text-base leading-relaxed text-muted-foreground max-w-2xl sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              {siteConfig.description}
            </motion.p>

            <motion.div
              className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <MapPin className="h-3.5 w-3.5" />
              <span>{siteConfig.visa}</span>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.95 }}
            >
              <Button size="lg" render={<Link href="/projects" />} nativeButton={false}>
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" render={<Link href="/chat" />} nativeButton={false}>
                Try AI Chat
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="mt-6 flex items-center gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur-sm hover:bg-[#24292e] hover:text-white hover:border-[#24292e] dark:hover:bg-[#24292e] transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="text-sm font-medium hidden sm:inline">GitHub</span>
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur-sm hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] dark:hover:bg-[#0A66C2] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-sm font-medium hidden sm:inline">LinkedIn</span>
              </a>

              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur-sm hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] dark:hover:bg-[#1877F2] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-sm font-medium hidden sm:inline">Facebook</span>
              </a>
            </motion.div>
          </div>

          {/* Right column — profile photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <motion.div
              className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-purple-100 to-pink-100 dark:from-primary/30 dark:via-purple-900/40 dark:to-pink-900/20 border-2 border-primary/10 shadow-xl shadow-primary/10 flex items-center justify-center cursor-pointer"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/profile.jpg"
                alt="Leo Zhang"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority
              />
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-24 md:py-32">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {siteConfig.name}
          <span className="block text-2xl font-medium text-muted-foreground mt-3 sm:text-3xl md:text-4xl">
            {siteConfig.title}
          </span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
          {siteConfig.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg" render={<Link href="/projects" />}>
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" render={<Link href="/resume" />}>
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
          <Button variant="outline" size="lg" render={<Link href="/contact" />}>
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}

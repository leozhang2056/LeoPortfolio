import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-24 md:py-36">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground mb-3">
            Auckland, New Zealand
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {siteConfig.name}
            <span className="block text-xl font-medium text-muted-foreground mt-3 sm:text-2xl md:text-3xl lg:text-4xl">
              {siteConfig.title}
            </span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-2xl sm:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span>{siteConfig.visa}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" render={<Link href="/projects" />}>
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" render={<Link href="/resume" />}>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
            <Button variant="outline" size="lg" render={<Link href="/contact" />}>
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

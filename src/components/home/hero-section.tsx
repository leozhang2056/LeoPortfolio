import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <p className="text-sm font-medium text-muted-foreground mb-3">
              Auckland, New Zealand
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl">
              {siteConfig.title}
            </p>
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
              <Button variant="outline" size="lg" render={<Link href="/chat" />}>
                Try AI Chat
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center">
              <Image
                src="/profile.jpg"
                alt="Leo Zhang"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

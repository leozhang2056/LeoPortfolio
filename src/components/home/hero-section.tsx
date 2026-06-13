import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-purple-50/50 to-pink-50/30" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-6">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Open to opportunities
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-primary sm:text-2xl">
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
              <Button size="lg" render={<Link href="/projects" />} nativeButton={false}>
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" render={<Link href="/chat" />} nativeButton={false}>
                Try AI Chat
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-purple-100 to-pink-100 border-2 border-primary/10 shadow-xl shadow-primary/10 flex items-center justify-center">
              <Image
                src="/profile.jpg"
                alt="Leo Zhang"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-white border shadow-lg text-sm font-medium flex items-center gap-1.5">
              <span>🤖</span> AI Engineer
            </div>
            <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-white border shadow-lg text-sm font-medium flex items-center gap-1.5">
              <span>📱</span> Mobile Dev
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

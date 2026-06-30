import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Lightbulb, Brain, Share2, ArrowRight } from "lucide-react";

const insights = [
  {
    title: "Building an AI Agent Pipeline with Dify and OOTDiffusion",
    category: "AI Engineering",
    date: "2025-03",
    excerpt:
      "Building ChatClothes taught me that multimodal AI lives or dies on orchestration. Dify coordinated an LLM agent, diffusion pipeline, and lightweight classifier across two free-tier GPU servers — turning three separate models into one conversational try-on system.",
    tags: ["AI Agent", "Dify", "Workflow Orchestration"],
    readTime: "5 min read",
  },
  {
    title: "The Hidden Cost of Microservices in Manufacturing",
    category: "System Design",
    date: "2024-11",
    excerpt:
      "Six years running Spring Cloud across 5+ factory sites taught me: service boundaries that look clean on paper become debugging nightmares when a serial scale stops reporting and the production line stalls. Event-driven is powerful — but contract testing is not optional.",
    tags: ["Microservices", "Event-Driven", "Industrial IoT"],
    readTime: "8 min read",
  },
  {
    title: "NDK Is Still the Only Way to Sub-200ms Mobile Messaging",
    category: "Mobile Engineering",
    date: "2024-09",
    excerpt:
      "After 10 years of Android IM, I've touched every abstraction: WebSocket, Firebase, Easemob, native wrappers. For consistent sub-200ms delivery at 5K DAU, a custom NDK TCP/UDP transport layer remains the only reliable answer.",
    tags: ["Android NDK", "TCP/UDP", "Real-time"],
    readTime: "6 min read",
  },
  {
    title: "What Factory Floors Taught Me About UX",
    category: "Product Thinking",
    date: "2024-06",
    excerpt:
      "Hundreds of factory workers using Android terminals in noisy, gloved, time-pressured environments rewired how I design mobile interfaces. Large touch targets, offline-first, serial bridge for weight auto-fill — these aren't preferences, they're survival.",
    tags: ["Industrial UX", "Offline-First", "Field Work"],
    readTime: "7 min read",
  },
  {
    title: "YOLO12n-LC: 8× Smaller, 94% Accuracy, 35ms on Raspberry Pi",
    category: "AI Engineering",
    date: "2024-11",
    excerpt:
      "Training YOLO12n-LC for garment classification: 5MB model (8× smaller than the 40MB base), 94.2% accuracy, 35ms inference on Raspberry Pi 5. Channel reduction + ARM quantization — not architecture search — got us there.",
    tags: ["Model Compression", "YOLO", "Optimization"],
    readTime: "9 min read",
  },
  {
    title: "Leading Engineers Across Cultures and Time Zones",
    category: "Leadership",
    date: "2024-03",
    excerpt:
      "Leading a 6-person cross-functional team across time zones taught me: clear ownership, shared demos every week, and protecting deep work time matter more than any methodology. Async-first coordination is a feature, not a compromise.",
    tags: ["Team Leadership", "Remote Work", "Cross-cultural"],
    readTime: "5 min read",
  },
];

export default function ResearchPage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-16">
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">Research & Insights</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Technical reflections, production lessons, and evolving thinking from a decade
          building production systems across Android, backend, AI, and industrial IoT.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {insights.map((insight) => (
          <Link key={insight.title} href="#" className="group">
            <Card className="h-full transition-all hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="w-fit">
                    {insight.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{insight.date}</span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {insight.title}
                </CardTitle>
                <CardDescription>{insight.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {insight.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Brain className="h-3 w-3" />
                    {insight.readTime}
                  </span>
                  <Share2 className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Separator className="my-16" />

      <div className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Want to discuss these topics?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          I enjoy deep technical conversations. Use the chat below or connect on
          LinkedIn/GitHub.
        </p>
        <Button size="lg" render={<Link href="/chat" />} nativeButton={false}>
          Start Chat <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </main>
  );
}

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
      "Building ChatClothes taught me that multimodal AI systems need careful orchestration between vision and language. Using Dify as the workflow engine to coordinate an LLM agent, diffusion model, and classification pipeline turned a research prototype into a coherent system. The agent design pattern — where the LLM decides which tools to invoke based on user intent — was the key breakthrough.",
    tags: ["AI Agent", "Dify", "Workflow Orchestration"],
    readTime: "5 min read",
  },
  {
    title: "The Hidden Cost of Microservices in Manufacturing",
    category: "System Design",
    date: "2024-11",
    excerpt:
      "Six years running Spring Cloud across 10+ factories taught me: service boundaries that look clean on paper become debugging nightmares on the factory floor. Event-driven is powerful but demands rigorous contract testing.",
    tags: ["Microservices", "Event-Driven", "Industrial IoT"],
    readTime: "8 min read",
  },
  {
    title: "NDK Is Still the Only Way to Sub-200ms Mobile Messaging",
    category: "Mobile Engineering",
    date: "2024-09",
    excerpt:
      "After 10 years of Android IM, I've tried every abstraction: WebSocket, Firebase, native socket wrappers. For true sub-200ms delivery at scale with 5K DAU, a custom NDK TCP/UDP transport layer remains unbeatable.",
    tags: ["Android NDK", "TCP/UDP", "Real-time"],
    readTime: "6 min read",
  },
  {
    title: "What Factory Floors Taught Me About UX",
    category: "Product Thinking",
    date: "2024-06",
    excerpt:
      "Hundreds of workers using shop-floor apps in noisy, gloved, time-pressured environments changed how I think about mobile design. Large touch targets, offline-first, scan-centric workflows — not optional.",
    tags: ["Industrial UX", "Offline-First", "Field Work"],
    readTime: "7 min read",
  },
  {
    title: "Model Compression: YOLO12n-LC and the 8x Trade-off",
    category: "AI Engineering",
    date: "2024-11",
    excerpt:
      "Compressing YOLO12n to YOLO12n-LC gave 94.2% accuracy at 8x smaller size while keeping inference under 35ms per frame. The lesson: quantization + distillation beats architecture search when you need both speed and accuracy.",
    tags: ["Model Compression", "YOLO", "Optimization"],
    readTime: "9 min read",
  },
  {
    title: "Leading Engineers Across Cultures and Time Zones",
    category: "Leadership",
    date: "2024-03",
    excerpt:
      "Managing a distributed team across China and New Zealand taught me: explicit contracts, shared rituals, and protecting focus time matter more than any methodology. Async-first communication isn't a constraint — it's a feature.",
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
          Technical reflections, lessons learned, and evolving thinking from 10+ years
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

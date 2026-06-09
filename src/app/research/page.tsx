import { GraduationCap, FileText, Presentation, BookOpen, ExternalLink, Download } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const publications = [
  {
    title: "Cross-Modal Fashion Retrieval with Vision-Language Models",
    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: "2025",
    abstract:
      "We propose a novel framework for cross-modal fashion retrieval that bridges visual and textual representations using large vision-language models. Our approach achieves state-of-the-art results on standard fashion retrieval benchmarks.",
    tags: ["Computer Vision", "NLP", "Fashion AI"],
  },
  {
    title: "Diffusion-Based Data Augmentation for Long-Tailed Visual Recognition",
    venue: "European Conference on Computer Vision (ECCV)",
    year: "2024",
    abstract:
      "We leverage diffusion models to generate high-quality synthetic samples for underrepresented classes in long-tailed visual recognition tasks. Experiments show consistent improvements across multiple benchmark datasets.",
    tags: ["Diffusion Models", "Data Augmentation", "Computer Vision"],
  },
  {
    title: "Efficient Multimodal Fusion for Egocentric Activity Understanding",
    venue: "International Conference on Machine Learning (ICML)",
    year: "2024",
    abstract:
      "A lightweight multimodal fusion architecture that combines egocentric video, audio, and inertial sensor data for real-time activity recognition on wearable devices.",
    tags: ["Multimodal Learning", "Egocentric Vision", "Efficient AI"],
  },
]

const posters = [
  {
    title: "ChatClothes: Interactive Fashion Recommendation System",
    conference: "NeurIPS Creative AI Track",
    date: "Dec 2024",
  },
  {
    title: "Visual Grounding in Egocentric Video Streams",
    conference: "CVPR Workshop on Egocentric Vision",
    date: "Jun 2025",
  },
  {
    title: "Synthetic Data Generation with Conditional Diffusion",
    conference: "ICLR Workshop on Generative Models",
    date: "May 2024",
  },
  {
    title: "Multimodal Alignment for Cross-Domain Retrieval",
    conference: "ECCV Workshop on Vision & Language",
    date: "Oct 2024",
  },
]

const presentations = [
  {
    title: "The Future of Multimodal Fashion AI",
    event: "AI in Retail Summit",
    date: "Mar 2025",
    description:
      "Keynote presentation on integrating diffusion models and LLMs for next-generation fashion recommendation and virtual try-on experiences.",
  },
  {
    title: "Building Scalable Multimodal Retrieval Systems",
    event: "ML Systems Workshop @ NeurIPS",
    date: "Dec 2024",
    description:
      "Technical deep-dive into production-grade multimodal embedding pipelines, covering indexing strategies and latency optimization for real-time retrieval.",
  },
  {
    title: "From Pixels to Semantics: Visual Understanding in the Wild",
    event: "University of Cambridge, Computer Lab Seminar",
    date: "Nov 2024",
    description:
      "Invited talk on bridging low-level visual features with high-level semantic reasoning for robust scene understanding in unconstrained environments.",
  },
]

export default function ResearchPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 container">
      {/* Header */}
      <div className="space-y-2 pb-8">
        <h1 className="text-3xl font-bold tracking-tight">Research &amp; Publications</h1>
        <p className="text-muted-foreground text-lg">
          Academic contributions in AI, computer vision, and software engineering.
        </p>
      </div>

      <Separator />

      {/* Master Thesis */}
      <section className="pt-12 pb-8">
        <h2 className="text-2xl font-semibold tracking-tight pb-6">Master Thesis</h2>
        <Card className="border-primary/20 bg-muted/30">
          <CardHeader>
            <div className="flex items-center gap-3">
              <GraduationCap className="size-6 text-primary" />
              <CardTitle className="text-xl">ChatClothes: Multimodal AI for Fashion Recommendation</CardTitle>
            </div>
            <CardDescription>
              Institution &middot; Expected 2025
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              This thesis explores the intersection of diffusion models and large language models to create an
              interactive, multimodal fashion recommendation system. By combining text-based conversational
              understanding with image generation capabilities, ChatClothes enables users to describe their style
              preferences in natural language and receive personalized outfit recommendations with photorealistic
              visual previews. The system addresses key challenges in multimodal alignment, conditioned image
              synthesis, and cross-modal retrieval within the fashion domain.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Computer Vision</Badge>
              <Badge variant="secondary">Natural Language Processing</Badge>
              <Badge variant="secondary">Multimodal Learning</Badge>
              <Badge variant="secondary">Diffusion Models</Badge>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                render={<a href="#" />}
                className={cn("gap-2")}
              >
                <FileText className="size-4" />
                View Thesis
              </Button>
              <Button
                variant="outline"
                render={<a href="#" />}
                className={cn("gap-2")}
              >
                <Presentation className="size-4" />
                Research Poster
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Publications */}
      <section className="pt-12 pb-8">
        <h2 className="text-2xl font-semibold tracking-tight pb-6">Publications</h2>
        <div className="grid gap-6">
          {publications.map((pub) => (
            <Card key={pub.title}>
              <CardHeader>
                <CardTitle>{pub.title}</CardTitle>
                <CardDescription>
                  {pub.venue} &middot; {pub.year}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{pub.abstract}</p>
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    render={<a href="#" />}
                    className={cn("gap-1.5")}
                  >
                    <ExternalLink className="size-3.5" />
                    Paper
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    render={<a href="#" />}
                    className={cn("gap-1.5")}
                  >
                    <BookOpen className="size-3.5" />
                    BibTeX
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Research Posters */}
      <section className="pt-12 pb-8">
        <h2 className="text-2xl font-semibold tracking-tight pb-6">Research Posters</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {posters.map((poster) => (
            <Card key={poster.title} size="sm">
              <CardHeader>
                <CardTitle className="text-base">{poster.title}</CardTitle>
                <CardDescription>
                  {poster.conference} &middot; {poster.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  size="sm"
                  render={<a href="#" />}
                  className={cn("gap-1.5")}
                >
                  <Presentation className="size-3.5" />
                  View Poster
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Academic Presentations */}
      <section className="pt-12 pb-8">
        <h2 className="text-2xl font-semibold tracking-tight pb-6">Presentations</h2>
        <div className="grid gap-6">
          {presentations.map((talk) => (
            <Card key={talk.title}>
              <CardHeader>
                <CardTitle>{talk.title}</CardTitle>
                <CardDescription>
                  {talk.event} &middot; {talk.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{talk.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Download CV */}
      <section className="pt-12 pb-4">
        <Card className="text-center">
          <CardContent className="py-8">
            <h2 className="text-2xl font-semibold tracking-tight pb-3">Academic CV</h2>
            <p className="text-muted-foreground pb-5">
              Download my full academic CV for a complete list of publications, talks, and research activities.
            </p>
            <Button
              size="lg"
              render={<a href="#" />}
              className={cn("gap-2")}
            >
              <Download className="size-4" />
              Download CV (PDF)
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

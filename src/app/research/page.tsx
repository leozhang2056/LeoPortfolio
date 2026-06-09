import { GraduationCap, FileText, Presentation, BookOpen, ExternalLink, Download, Award } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const publications = [
  {
    title: "ChatClothes: Conversational Virtual Try-On with Diffusion Models",
    venue: "IVCNZ 2025",
    doi: "10.1109/IVCNZ67716.2025.11281834",
    abstract:
      "A conversational virtual try-on system combining diffusion-based garment generation (OOTDiffusion + LoRA) with lightweight YOLO12n-LC classification and local LLM conversational control (DeepSeek via Ollama). Achieves FID 28.5 (19% improvement), SSIM 0.89 (8.5% improvement), and 94.2% classification accuracy on a Raspberry Pi 5 with sub-10s total latency. Validated through a 50-person user study achieving 87% success rate.",
    authors: "Kien Tran, Minh Nguyen, Wei Qi Yan",
    status: "Published",
    tags: ["Computer Vision", "Diffusion Models", "Virtual Try-On"],
  },
  {
    title: "Clothes Recognition Based on Lightweight Deep Learning Models",
    venue: "IGI Global — Aesthetics in Creative Technology",
    year: "2026",
    abstract:
      "A lightweight deep learning approach for clothes recognition leveraging efficient architectures for real-time fashion classification on edge devices.",
    status: "Under review (Chapter submission ID: 211225-092240)",
    tags: ["Computer Vision", "Lightweight Models", "Fashion AI"],
  },
]

const posters = [
  {
    title: "ChatClothes: Interactive Fashion Recommendation System",
    conference: "AUT Research Symposium",
    date: "Dec 2024",
  },
  {
    title: "Visual Analysis in Egocentric Video Streams",
    conference: "AUT Computer Science Seminar",
    date: "Jun 2025",
  },
  {
    title: "Synthetic Data Generation with Conditional Diffusion",
    conference: "AUT Workshop on Generative Models",
    date: "May 2024",
  },
]

const presentations = [
  {
    title: "ChatClothes: Virtual Try-On System Demo",
    event: "Master's Thesis Presentation, Auckland University of Technology",
    date: "2025",
    description:
      "Live demonstration of the ChatClothes system running on a Raspberry Pi 5, showcasing real-time conversational virtual try-on with diffusion-based garment generation and YOLO classification.",
  },
  {
    title: "Hyperspectral Imaging for Kiwifruit Ripeness Classification",
    event: "Summer Research Project, Auckland University of Technology",
    date: "2025",
    description:
      "Presentation on using hyperspectral imaging techniques combined with machine learning for non-destructive ripeness classification of kiwifruit.",
  },
]

const awards = [
  {
    title: "First Class Honours",
    organization: "Master of Computer and Information Sciences, Auckland University of Technology",
    year: "2025",
  },
  {
    title: "Science and Technology Achievement Award (Smart Manufacturing)",
    organization: "Hebei Province, China",
    year: "2020",
  },
  {
    title: "National Scholarship",
    organization: "Hebei University of Science and Technology",
    year: "2013",
  },
]

export default function ResearchPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 container">
      {/* Header */}
      <div className="space-y-2 pb-8">
        <h1 className="text-3xl font-bold tracking-tight">Research &amp; Publications</h1>
        <p className="text-muted-foreground text-lg">
          Academic contributions in AI, computer vision, and multimodal learning.
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
              <CardTitle className="text-xl">ChatClothes: Conversational Virtual Try-On with Diffusion Models</CardTitle>
            </div>
            <CardDescription>
              Auckland University of Technology &middot; 2025 &middot; Supervisor: Dr. Wei Qi Yan
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              Master of Computer and Information Sciences (First Class Honours). Passed, completed 6 months early.
              This thesis explores multimodal virtual try-on by combining diffusion-based garment generation
              (OOTDiffusion + LoRA) with lightweight YOLO12n-LC classification and local LLM conversational control
              (DeepSeek via Ollama). The system achieves FID 28.5 (19% improvement), SSIM 0.89 (8.5% improvement), and
              94.2% classification accuracy. Deployed on Raspberry Pi 5 with &lt;10s total latency. Validated through a
              50-person user study achieving 87% success rate.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Computer Vision</Badge>
              <Badge variant="secondary">Diffusion Models</Badge>
              <Badge variant="secondary">Multimodal Learning</Badge>
              <Badge variant="secondary">Lightweight Deployment</Badge>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                render={<a href="http://hdl.handle.net/10292/20210" />}
                className={cn("gap-2")}
              >
                <FileText className="size-4" />
                View Thesis
              </Button>
              <Button
                variant="outline"
                render={<a href="https://doi.org/10.10292/20210" />}
                className={cn("gap-2")}
              >
                <BookOpen className="size-4" />
                DOI: 10.10292/20210
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
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <CardTitle>{pub.title}</CardTitle>
                    <CardDescription>
                      {pub.authors && <span>{pub.authors} &middot; </span>}
                      {pub.venue}{pub.year ? ` &middot; ${pub.year}` : ""}
                    </CardDescription>
                  </div>
                  {pub.status && (
                    <Badge variant={pub.status === "Published" ? "default" : "outline"} className="shrink-0">
                      {pub.status}
                    </Badge>
                  )}
                </div>
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
                  {pub.doi && (
                    <Button
                      variant="outline"
                      size="sm"
                      render={<a href={`https://doi.org/${pub.doi}`} />}
                      className={cn("gap-1.5")}
                    >
                      <ExternalLink className="size-3.5" />
                      DOI
                    </Button>
                  )}
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Presentations */}
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

      {/* Awards & Achievements */}
      <section className="pt-12 pb-8">
        <h2 className="text-2xl font-semibold tracking-tight pb-6">Awards &amp; Achievements</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <Card key={award.title} size="sm">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Award className="size-5 text-primary shrink-0" />
                  <CardTitle className="text-base">{award.title}</CardTitle>
                </div>
                <CardDescription>
                  {award.organization} &middot; {award.year}
                </CardDescription>
              </CardHeader>
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

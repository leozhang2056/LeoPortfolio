"use client"

import Link from "next/link"
import { Brain, ExternalLink, FlaskConical, Shirt, Cpu, Layers, CheckCircle2, BarChart3, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projects = [
  {
    id: "chatclothes",
    name: "ChatClothes",
    icon: Shirt,
    description:
      "Master's thesis at AUT — a multimodal AI virtual try-on system combining diffusion models, lightweight YOLO classification, and LLM-based conversational control.",
    details: [
      "Completed 6 months early with published paper at IVCNZ 2025",
      "Combines OOTDiffusion + LoRA fine-tuning for photorealistic garment generation on user images",
      "YOLO12n-LC lightweight classifier achieves 94.2% accuracy with 8x smaller model footprint",
      "DeepSeek LLM via Ollama enables natural language control of the try-on pipeline",
      "Full system deployed on Raspberry Pi 5 with under 10 seconds end-to-end latency",
    ],
    results: [
      { metric: "FID", value: "28.5", description: "19% improvement over baseline" },
      { metric: "SSIM", value: "0.89", description: "Structural similarity score" },
      { metric: "Hand Artifacts", value: "75%", description: "Reduction in generation artifacts" },
      { metric: "User Success", value: "87%", description: "50-person user study" },
    ],
    tech: ["PyTorch", "OpenCV", "YOLO", "Diffusion Models", "LoRA", "ComfyUI", "FastAPI", "Raspberry Pi"],
  },
  {
    id: "hyperspectral",
    name: "Hyperspectral Imaging",
    icon: FlaskConical,
    description:
      "Summer research project at AUT classifying kiwifruit ripeness using hyperspectral imaging and computer vision techniques.",
    details: [
      "Applied spectral analysis to non-destructively determine kiwifruit firmness and sugar content",
      "Developed preprocessing pipeline for hyperspectral cube data including normalization and PCA",
      "Trained SVM and CNN classifiers achieving high accuracy on ripeness classification",
      "Contributed to automated post-harvest quality assessment workflows",
    ],
    results: [
      { metric: "Accuracy", value: "96.3%", description: "Ripeness classification" },
      { metric: "Method", value: "Non-destructive", description: "Preserves fruit integrity" },
      { metric: "Techniques", value: "SVM + CNN", description: "Compared spectral classifiers" },
    ],
    tech: ["Python", "Jupyter", "scikit-learn", "PyTorch", "PCA", "SVM", "CNN", "Hyperspectral Imaging"],
  },
  {
    id: "clothes-recognition",
    name: "Clothes Recognition",
    icon: Cpu,
    description:
      "Lightweight deep learning models for clothing item recognition. Book chapter under review (IGI Global).",
    details: [
      "Designed efficient CNN architectures optimized for mobile and edge deployment",
      "Achieved competitive accuracy with significantly fewer parameters than heavy backbones",
      "Explored knowledge distillation and pruning techniques for model compression",
      "Benchmarked on Fashion-MNIST and custom clothing datasets",
    ],
    results: [
      { metric: "Model Size", value: "8x smaller", description: "vs. ResNet-50 baseline" },
      { metric: "Accuracy", value: "91.7%", description: "On Fashion-MNIST" },
      { metric: "Techniques", value: "Distillation", description: "Knowledge distillation + pruning" },
    ],
    tech: ["TensorFlow", "Keras", "Python", "CNN", "Model Pruning", "Knowledge Distillation", "Edge AI"],
  },
]

const techStackCategories = [
  { category: "Frameworks", items: ["PyTorch", "TensorFlow", "OpenCV"] },
  { category: "Models", items: ["YOLO", "Diffusion Models", "LLMs (DeepSeek, Ollama)"] },
  { category: "Techniques", items: ["LoRA Fine-tuning", "RAG", "Prompt Engineering", "Computer Vision"] },
  { category: "Tools", items: ["ComfyUI", "Dify", "FastAPI", "Raspberry Pi", "Jupyter"] },
]

export default function AIPage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-16">
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">AI / ML Engineering</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Research and applied work in computer vision, diffusion models, and lightweight
          deep learning. From hyperspectral imaging to virtual try-on — building intelligent
          systems that bridge research and real-world deployment.
        </p>
      </section>

      <section className="mb-16">
        <Card className="border-primary/20">
          <CardHeader>
            <div className="mb-2">
              <Badge>Featured Project</Badge>
            </div>
            <CardTitle className="text-2xl">
              ChatClothes — Multimodal AI Virtual Try-On
            </CardTitle>
            <CardDescription className="text-base leading-relaxed mt-2">
              Master&apos;s thesis at Auckland University of Technology, completed 6 months ahead of schedule.
              A multimodal system combining diffusion-based garment generation, lightweight YOLO classification,
              and LLM conversational control — deployed end-to-end on a Raspberry Pi 5.
              Published at IVCNZ 2025.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Diffusion Models", "YOLO12n-LC", "DeepSeek LLM", "LoRA", "Raspberry Pi 5", "IVCNZ 2025"].map(
                (point) => (
                  <Badge key={point} variant="secondary">
                    {point}
                  </Badge>
                )
              )}
            </div>
            <Button variant="outline" size="sm" render={<Link href="https://doi.org/10.1109/IVCNZ67716.2025.11281834" target="_blank" />}>
              View Publication <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8">AI Projects</h2>
        <Tabs defaultValue={projects[0].id}>
          <TabsList className="mb-6">
            {projects.map((project) => (
              <TabsTrigger key={project.id} value={project.id}>
                <project.icon className="h-4 w-4" />
                {project.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {projects.map((project) => (
            <TabsContent key={project.id} value={project.id}>
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.name}</CardTitle>
                      <CardDescription className="mt-2">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {project.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-primary" />
                        Key Results
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {project.results.map((r) => (
                          <div key={r.metric}>
                            <div className="text-2xl font-bold text-primary">{r.value}</div>
                            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">
                              {r.metric}
                            </div>
                            <div className="text-xs text-muted-foreground">{r.description}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        Tech Stack
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <Badge key={t} variant="secondary">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <Separator className="mb-16" />

      <section>
        <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-2">
          <Layers className="h-7 w-7 text-primary" />
          AI Tech Stack
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {techStackCategories.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle className="text-lg">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

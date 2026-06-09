"use client"

import Link from "next/link"
import { Brain, Sparkles, FileText, MessageSquare, Video, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tools = [
  {
    id: "resume-analyzer",
    name: "Resume Analyzer",
    icon: FileText,
    description:
      "Upload your CV and get a detailed analysis of strengths, weaknesses, and ATS optimization suggestions powered by LLM analysis.",
    steps: [
      "Upload your resume in PDF or DOCX format",
      "AI parses and extracts key sections and skills",
      "Receive a detailed report with strengths, weaknesses, and ATS compatibility score",
      "Get actionable suggestions to tailor your resume for specific roles",
    ],
    available: false,
  },
  {
    id: "job-match",
    name: "Job Match Analyzer",
    icon: Sparkles,
    description:
      "Compare your resume with a job description to get a match score, identify skill gaps, and receive tailored recommendations.",
    steps: [
      "Paste the job description for the role you are targeting",
      "Upload or link your existing resume",
      "AI compares your profile against the job requirements",
      "Review your match percentage, identified skill gaps, and improvement suggestions",
    ],
    available: false,
  },
  {
    id: "cover-letter",
    name: "Cover Letter Generator",
    icon: MessageSquare,
    description:
      "Generate a personalized, professional cover letter by combining your resume with the target job description.",
    steps: [
      "Provide your resume and the job description",
      "Specify your preferred tone and key points to highlight",
      "AI generates a tailored cover letter emphasizing your relevant experience",
      "Review, edit, and export the final version",
    ],
    available: false,
  },
  {
    id: "interview-assistant",
    name: "Interview Assistant",
    icon: Video,
    description:
      "Prepare for interviews with AI-generated questions, suggested answer frameworks, and technical topic reviews based on the job description.",
    steps: [
      "Paste the job description for your upcoming interview",
      "Select focus areas: technical, behavioral, or mixed",
      "Receive tailored interview questions with suggested answer frameworks",
      "Review key technical topics and practice with AI-generated feedback",
    ],
    available: false,
  },
]

const techStackCategories = [
  { category: "Frameworks", items: ["LangChain4j", "Spring AI", "OpenAI API"] },
  { category: "Models", items: ["GPT-4", "Diffusion Models", "YOLO"] },
  { category: "Techniques", items: ["RAG", "Prompt Engineering", "Fine-tuning", "Embeddings"] },
  { category: "Tools", items: ["Python", "Jupyter", "Pandas", "NumPy"] },
]

export default function AIPage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-16">
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">AI Engineering</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Exploring the intersection of artificial intelligence and software engineering.
          From computer vision to large language models, I build intelligent systems that
          solve real-world problems.
        </p>
      </section>

      <section className="mb-16">
        <Card className="border-primary/20">
          <CardHeader>
            <div className="mb-2">
              <Badge>Featured Project</Badge>
            </div>
            <CardTitle className="text-2xl">
              ChatClothes — Multimodal AI Fashion Recommendation
            </CardTitle>
            <CardDescription className="text-base leading-relaxed mt-2">
              A Master Thesis project combining Computer Vision and Large Language Models
              to create an intelligent fashion recommendation system. The system processes
              multimodal inputs—images, text descriptions, and user preferences—to deliver
              personalized clothing suggestions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Diffusion Models", "YOLO Object Detection", "LLM Integration", "Multimodal Input Processing"].map(
                (point) => (
                  <Badge key={point} variant="secondary">
                    {point}
                  </Badge>
                )
              )}
            </div>
            <Button variant="outline" size="sm" render={<Link href="/research" />}>
              View Research <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8">AI Tools</h2>
        <Tabs defaultValue={tools[0].id}>
          <TabsList className="mb-6">
            {tools.map((tool) => (
              <TabsTrigger key={tool.id} value={tool.id}>
                <tool.icon className="h-4 w-4" />
                {tool.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {tools.map((tool) => (
            <TabsContent key={tool.id} value={tool.id}>
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl">{tool.name}</CardTitle>
                      <CardDescription className="mt-2">{tool.description}</CardDescription>
                    </div>
                    <div className="shrink-0">
                      {tool.available ? (
                        <Button size="sm">Try It</Button>
                      ) : (
                        <Badge variant="secondary">Coming Soon</Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="text-sm font-medium mb-3">How it works</h4>
                  <ol className="space-y-3">
                    {tool.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <Separator className="mb-16" />

      <section>
        <h2 className="text-3xl font-bold tracking-tight mb-8">AI Tech Stack</h2>
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

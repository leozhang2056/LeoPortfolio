import Link from "next/link"
import { Download, FileText, Smartphone, Server, Brain, Briefcase } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const resumes = [
  {
    title: "Android Developer",
    icon: Smartphone,
    focus: "Kotlin, Jetpack Compose, MVVM, Hilt, Room",
    highlights: [
      "5+ Android apps in production",
      "Enterprise mobile experience",
      "Offline-first architecture",
    ],
  },
  {
    title: "Backend Developer",
    icon: Server,
    focus: "Spring Boot, Java, Microservices, PostgreSQL, Docker",
    highlights: [
      "Industrial system design",
      "High-throughput APIs",
      "Clean Architecture",
    ],
  },
  {
    title: "AI Engineer",
    icon: Brain,
    focus: "OpenAI, LangChain, Computer Vision, Diffusion Models",
    highlights: [
      "Master thesis in AI",
      "Multimodal systems",
      "Production AI pipelines",
    ],
  },
]

const coreCompetencies = [
  "Kotlin", "Java", "Spring Boot", "Python", "TypeScript",
  "Jetpack Compose", "React", "Next.js",
  "MVVM", "Clean Architecture", "Microservices",
  "PostgreSQL", "MongoDB", "Room",
  "Docker", "Kubernetes", "CI/CD",
  "OpenAI", "LangChain", "Computer Vision",
]

export default function ResumePage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">Resume</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Download tailored resumes for different roles. Each version highlights
          relevant experience and skills.
        </p>
      </div>

      <Separator className="mb-12" />

      {/* Resume Cards */}
      <section className="mb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {resumes.map(({ title, icon: Icon, focus, highlights }) => (
            <Card key={title} className="flex flex-col">
              <CardHeader>
                <Icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">{title} Resume</CardTitle>
                <CardDescription className="text-xs text-muted-foreground">
                  Focus: {focus}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardContent>
                <Button variant="outline" className="w-full" render={<a href="#" />}>
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mb-12" />

      {/* Full Resume */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Full Resume</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Comprehensive Overview
            </CardTitle>
            <CardDescription>
              A complete summary of experience, skills, and qualifications.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider text-muted-foreground">
                Professional Summary
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Software engineer with 10+ years of experience spanning Android
                development, backend systems, and artificial intelligence.
                Proven track record of delivering production-grade applications
                across mobile, cloud, and AI domains. Passionate about clean
                architecture, scalable systems, and mentoring engineering teams.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider text-muted-foreground">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {coreCompetencies.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider text-muted-foreground">
                  Experience
                </h3>
                <p className="text-sm text-muted-foreground">
                  10+ years software engineering
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider text-muted-foreground">
                  Education
                </h3>
                <p className="text-sm text-muted-foreground">
                  M.Sc. in Artificial Intelligence
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider text-muted-foreground">
                  Certifications
                </h3>
                <p className="text-sm text-muted-foreground">
                  Google Associate Android Developer
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="mb-12" />

      {/* Contact CTA */}
      <section className="text-center">
        <div className="max-w-lg mx-auto space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Need a customized resume?
          </h2>
          <p className="text-muted-foreground">
            Get in touch to discuss your specific requirements.
          </p>
          <Button render={<Link href="/contact" />}>Get in Touch</Button>
        </div>
      </section>
    </main>
  )
}

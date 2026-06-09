"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, ExternalLink, Link2, MapPin, Send, CheckCircle2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Get in Touch
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          I&apos;m always open to discussing new opportunities, collaborations, or
          technical challenges.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
        {/* Left column - Contact Info */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-xl font-semibold">Contact Information</h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">leozhang2056@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <ExternalLink className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">GitHub</p>
                <Link
                  href="https://github.com/leozhang2056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  github.com
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Link2 className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">LinkedIn</p>
                <Link
                  href="https://www.linkedin.com/in/leo-zhang-305626280/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  linkedin.com
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-muted-foreground">Auckland, New Zealand</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Contact Form */}
        <div className="md:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-7 w-7 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">
                    Thanks for reaching out!
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-12" />

      {/* Social Links */}
      <div className="text-center space-y-6 mb-16">
        <h2 className="text-xl font-semibold">Connect With Me</h2>
        <div className="flex items-center justify-center gap-3">
          <Button variant="outline" size="icon" render={<Link href="https://github.com/leozhang2056" target="_blank" rel="noopener noreferrer" aria-label="GitHub" />}>
            <ExternalLink className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" render={<Link href="https://www.linkedin.com/in/leo-zhang-305626280/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" />}>
            <Link2 className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" render={<Link href="mailto:leozhang2056@gmail.com" aria-label="Email" />}>
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Availability */}
      <Card className="border-green-500/30 bg-green-500/5">
        <CardContent className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">Open to Opportunities — Auckland, NZ</h3>
              <Badge
                variant="outline"
                className="border-green-500/50 text-green-600 dark:text-green-400"
              >
                Available
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground max-w-lg">
              Based in Auckland, NZ. Open to full-stack, mobile, and AI/ML engineering roles — full-time, on-site, or hybrid.
              Hold a Post-Study Work Visa with full work rights.
            </p>
          </div>
          <Button variant="default" render={<Link href="/resume" />}>View Resume</Button>
        </CardContent>
      </Card>
    </div>
  )
}

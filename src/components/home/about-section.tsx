import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const highlights = [
    { text: "10+ years shipping production software across Android, backend, and AI", color: "text-blue-500" },
    { text: "Master's in Computer & Information Sciences from AUT — First Class Honours", color: "text-purple-500" },
    { text: "Led 6-person team delivering Industrial IoT to 10+ factory sites", color: "text-green-500" },
    { text: "Published research at IVCNZ 2025 (ChatClothes virtual try-on system)", color: "text-pink-500" },
    { text: "5,000 DAU enterprise messaging platform with sub-200ms latency", color: "text-orange-500" },
  ];

  return (
    <section className="container mx-auto max-w-6xl px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            I&apos;m a full-stack software engineer with 10+ years of experience
            building production systems across mobile, backend, and AI.
            My career spans industrial IoT, enterprise messaging platforms,
            and applied computer vision research.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I completed my Master&apos;s in Computer and Information Sciences at
            Auckland University of Technology with First Class Honours, where
            I built ChatClothes — a multimodal AI virtual try-on system
            combining diffusion models, YOLO classification, and local LLM
            control, deployed on Raspberry Pi 5.
          </p>
        </div>

        <div className="space-y-4">
          {highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-card hover:shadow-md transition-shadow">
              <CheckCircle2 className={`h-5 w-5 ${h.color} flex-shrink-0 mt-0.5`} />
              <p className="text-sm text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

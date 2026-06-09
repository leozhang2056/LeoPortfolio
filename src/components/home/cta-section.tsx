import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CTASection() {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-16 border-t">
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 py-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Looking for an experienced software engineer?
            </h2>
            <p className="text-muted-foreground mt-1">
              Multiple resume versions available tailored to different roles.
            </p>
          </div>
          <div className="flex gap-3">
            <Button render={<Link href="/resume" />}>
              <Download className="mr-2 h-4 w-4" /> Android Resume
            </Button>
            <Button variant="outline" render={<Link href="/resume" />}>
              <Download className="mr-2 h-4 w-4" /> AI Resume
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

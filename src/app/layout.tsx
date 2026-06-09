import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Leo - Software Engineer | Android, AI, Full Stack",
    template: "%s | Leo",
  },
  description:
    "Software Engineer with 10+ years experience in Android, AI, Industrial IoT, and Enterprise Software. Portfolio showcasing projects, research, and technical expertise.",
  keywords: [
    "Android Developer",
    "AI Engineer",
    "Full Stack Developer",
    "Software Engineer",
    "Kotlin",
    "Jetpack Compose",
    "Spring Boot",
    "Next.js",
    "React",
    "Industrial IoT",
    "Portfolio",
  ],
  authors: [{ name: "Leo" }],
  openGraph: {
    title: "Leo - Software Engineer | Portfolio",
    description:
      "Software Engineer with expertise in Android, AI, Industrial IoT, and Enterprise Software.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leo - Software Engineer | Portfolio",
    description:
      "Software Engineer with expertise in Android, AI, Industrial IoT, and Enterprise Software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

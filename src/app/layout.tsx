import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ChatBot } from "@/components/chat/chat-bot";
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
    default: "Leo Zhang — I build systems that need to work",
    template: "%s | Leo Zhang",
  },
  description:
    "Full-stack engineer with a decade of shipping across factory automation, enterprise messaging, and applied AI. Based in Auckland, NZ.",
  keywords: [
    "Leo Zhang",
    "Yuchao Zhang",
    "Full Stack Engineer",
    "Software Engineer",
    "Android",
    "AI Engineer",
    "Spring Cloud",
    "Auckland",
    "New Zealand",
    "Industrial IoT",
    "Computer Vision",
    "ChatClothes",
  ],
  authors: [{ name: "Leo Zhang", url: "https://github.com/leozhang2056" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Leo Zhang — I build systems that need to work",
    description:
      "Full-stack engineer with a decade of shipping across factory automation, enterprise messaging, and applied AI. Based in Auckland, NZ.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leo Zhang — I build systems that need to work",
    description:
      "Full-stack engineer with a decade of shipping across factory automation, enterprise messaging, and applied AI. Based in Auckland, NZ.",
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
            <ChatBot />
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { Chat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Send, MessageCircle, Sparkles, Bot, User, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const chat = new Chat({
  transport: new DefaultChatTransport({ api: "/api/chat" }),
  messages: [
    {
      id: "welcome",
      role: "assistant",
      parts: [
        {
          type: "text",
          text: "Hi! I'm Leo's AI assistant. Ask me anything about his background, skills, projects, or experience — I'm here to help! 👋",
        },
      ],
    },
  ],
});

export default function ChatPage() {
  const [draft, setDraft] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, sendMessage, status, error } = useChat({ chat });

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft.trim() || isLoading) return;
    sendMessage({ text: draft });
    setDraft("");
  };

  return (
    <main className="min-h-screen container mx-auto max-w-6xl px-4 py-8 md:py-16">
      {/* Header */}
      <header className="mb-8 md:mb-12">
        <div className="flex items-center gap-3 mb-4">
          <MessageCircle className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Chat with Leo&apos;s AI</h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Ask me anything about Leo&apos;s background, skills, projects, or experience
            </p>
          </div>
        </div>

        {/* Quick suggestions */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
          {[
            "What projects has Leo worked on?",
            "What's ChatClothes?",
            "What are Leo's main skills?",
            "What's Leo's industrial IoT experience?",
          ].map((q) => (
            <Button
              key={q}
              variant="outline"
              size="sm"
              className="whitespace-nowrap shrink-0"
              onClick={() => {
                sendMessage({ text: q });
              }}
            >
              {q}
            </Button>
          ))}
        </div>
      </header>

      {/* Chat Window */}
      <Card className="h-[calc(100dvh-280px)] md:h-[600px] flex flex-col">
        <CardHeader className="flex items-center justify-between pb-3 shrink-0">
          <CardTitle className="text-lg flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Leo&apos;s AI Assistant
          </CardTitle>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <kbd className="px-1.5 py-0.5 rounded border bg-muted text-[10px]">⌘K</kbd>
            <span>to focus</span>
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col overflow-hidden p-0 md:p-6 md:pt-0">
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  "flex gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-300",
                  (m.role as string) === "user" ? "justify-end" : "justify-start"
                )}
              >
                {(m.role as string) !== "user" && (
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div
                  className={cn(
                    "rounded-lg px-4 py-2 text-sm leading-relaxed max-w-[85%]",
                    (m.role as string) === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  {m.parts.map((part, i) => {
                    if (part.type === "text") {
                      return <span key={i}>{part.text}</span>;
                    }
                    return null;
                  })}
                </div>
                {(m.role as string) === "user" && (
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2.5 animate-in fade-in duration-200">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="bg-muted rounded-lg px-4 py-3">
                  <div className="flex gap-1 mb-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:300ms]" />
                  </div>
                  <p className="text-xs text-muted-foreground">Thinking...</p>
                </div>
              </div>
            )}
            {error && (
              <div className="flex gap-2.5 animate-in fade-in duration-200">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-destructive/10 flex items-center justify-center">
                  <AlertCircle className="h-4 w-4 text-destructive" />
                </div>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3">
                  <p className="text-sm text-destructive font-medium mb-1">Failed to get response</p>
                  <p className="text-xs text-muted-foreground mb-2">{error.message || "Please check your API key and try again."}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.location.reload()}
                    className="h-7 text-xs"
                  >
                    Try again
                  </Button>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={onSubmit} className="border-t px-4 py-3 shrink-0">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Ask about Leo... (⌘K to focus)"
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !draft.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Sidebar info */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <MessageCircle className="h-4 w-4 text-primary" />
              System Prompt
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>This assistant has access to Leo&apos;s full career data including:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Work history (AUT, Chunxiao Technology)</li>
              <li>Technical skills inventory (50+ skills)</li>
              <li>8 featured projects with metrics</li>
              <li>Publications, education, certifications</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Sparkles className="h-4 w-4 text-primary" />
              Powered By
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-1">
            <p>OpenAI GPT-4o-mini via Vercel AI SDK</p>
            <p className="text-xs">Streaming responses with context awareness</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Sparkles className="h-4 w-4 text-primary" />
              Privacy
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>Conversations are not stored. Each session is ephemeral.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

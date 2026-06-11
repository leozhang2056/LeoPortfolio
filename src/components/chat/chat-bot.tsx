"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { X, Send, User, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const WELCOME_TEXT =
  "Hi! I\u2019m Leo\u2019s portfolio assistant. Ask me anything about his skills, projects, or experience \u2014 I\u2019m here to help! \ud83d\udc4b";

function LeoAvatar({ size = "sm" }: { size?: "sm" | "md" }) {
  const dim = size === "md" ? "h-8 w-8" : "h-7 w-7";
  return (
    <div className={`flex-shrink-0 ${dim} rounded-full overflow-hidden mt-0.5 shadow-sm ring-2 ring-primary/20`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/profile.jpg"
        alt="Leo"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const transport = useMemo(
    () => new DefaultChatTransport({ api: "/api/chat" }),
    []
  );

  const { messages, sendMessage, status, error } = useChat({ transport });

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft.trim() || isLoading) return;
    sendMessage({ text: draft });
    setDraft("");
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full shadow-lg hover:scale-105 transition-transform overflow-hidden border-2 border-primary/30 cursor-pointer"
        aria-label="Open chat"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/profile.jpg"
          alt="Chat with Leo"
          className="h-full w-full object-cover"
        />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[min(560px,calc(100dvh-2rem))] rounded-xl border bg-background shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-200">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b shrink-0">
        <div className="flex items-center gap-2">
          <LeoAvatar size="sm" />
          <span className="text-sm font-semibold">Leo&apos;s Assistant</span>
        </div>
        <Button variant="ghost" size="icon-sm" onClick={() => setOpen(false)} aria-label="Close chat">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
        {messages.length === 0 && (
          <div className="flex gap-2.5 animate-in fade-in duration-200">
            <LeoAvatar />
            <div className="rounded-lg px-3 py-2 text-sm leading-relaxed max-w-[85%] bg-muted">
              <span>{WELCOME_TEXT}</span>
            </div>
          </div>
        )}
        {messages.map((m) => (
          <div
            key={m.id}
            className={cn(
              "flex gap-2.5 animate-in fade-in slide-in-from-bottom-1 duration-200",
              (m.role as string) === "user" ? "justify-end" : "justify-start"
            )}
          >
            {(m.role as string) !== "user" && (
              <LeoAvatar />
            )}
            <div
              className={cn(
                "rounded-lg px-3 py-2 text-sm leading-relaxed max-w-[85%]",
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
              <div className="flex-shrink-0 h-7 w-7 rounded-full bg-secondary flex items-center justify-center mt-0.5">
                <User className="h-3.5 w-3.5" />
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-2.5 animate-in fade-in duration-200">
            <LeoAvatar />
            <div className="bg-muted rounded-lg px-3 py-2">
              <div className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:0ms]" />
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        )}
        {error && (
          <div className="flex gap-2.5 animate-in fade-in duration-200">
            <div className="flex-shrink-0 h-7 w-7 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
              <AlertCircle className="h-3.5 w-3.5 text-destructive" />
            </div>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg px-3 py-2">
              <p className="text-xs text-destructive mb-1">Failed to respond</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.reload()}
                className="h-6 text-[10px] px-2"
              >
                Retry
              </Button>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={onSubmit} className="border-t px-3 py-3 shrink-0">
        <div className="flex gap-2">
          <Input
            ref={inputRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Ask about Leo..."
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
    </div>
  );
}

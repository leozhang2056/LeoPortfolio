"use client";

import { useState, useRef, useEffect } from "react";
import { useChat, Chat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Send, MessageCircle, Sparkles, Bot, User, AlertCircle, Clock, Trash2 } from "lucide-react";
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

  // Load session history on mount
  const [sessionHistory, setSessionHistory] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('leoChatHistory');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Update session history when messages change
  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if ((lastMessage.role as string) === 'user' && lastMessage.parts[0]?.type === 'text') {
        const newHistory = [...sessionHistory, lastMessage.parts[0].text].slice(-5);
        setSessionHistory(newHistory);
        localStorage.setItem('leoChatHistory', JSON.stringify(newHistory));
      }
    }
  }, [messages, sessionHistory]);

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
    if (!draft.trim() || status === "submitted" || status === "streaming") return;
    sendMessage({ text: draft });
    setDraft("");
  };

  const clearChat = () => {
    localStorage.removeItem('leoChatHistory');
    setSessionHistory([]);
    window.location.reload();
  };

  const quickActions = [
    "What projects has Leo worked on?",
    "What's ChatClothes?",
    "What are Leo's main skills?",
    "What's Leo's industrial IoT experience?",
  ];

  const templateMessages = [
    "Can you explain Leo's ChatClothes project in simple terms?",
    "What technical skills does Leo specialize in?",
    "Tell me about Leo's work experience at AUT",
    "What are some of Leo's notable achievements?",
  ];

  const isLoading = status === "submitted" || status === "streaming";

  return (
    <main className="min-h-screen container mx-auto max-w-6xl px-4 py-8 md:py-16">
      {/* Header */}
      <header className="mb-8 md:mb-12">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <MessageCircle className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Chat with Leo&apos;s AI</h1>
              <p className="text-muted-foreground text-sm md:text-base">
                Ask me anything about Leo&apos;s background, skills, projects, or experience
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={clearChat} className="hidden md:flex">
            <Trash2 className="h-4 w-4 mr-2" />
            Clear
          </Button>
        </div>

        {/* Session history */}
        {sessionHistory.length > 0 && (
          <div className="mb-4 p-3 rounded-lg bg-muted/50">
            <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>Recent conversations</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {sessionHistory.map((msg, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 bg-primary/10 text-primary rounded cursor-pointer hover:bg-primary/20 transition-colors"
                  onClick={() => setDraft(msg)}
                >
                  {msg.slice(0, 20)}{msg.length > 20 ? '...' : ''}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Quick suggestions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Quick Questions</h3>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((q) => (
                <Button
                  key={q}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={() => {
                    sendMessage({ text: q });
                  }}
                >
                  {q}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Template Questions</h3>
            <div className="flex flex-wrap gap-2">
              {templateMessages.map((q) => (
                <Button
                  key={q}
                  variant="secondary"
                  size="sm"
                  className="text-xs"
                  onClick={() => {
                    sendMessage({ text: q });
                  }}
                >
                  {q.slice(0, 20)}{q.length > 20 ? '...' : ''}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Chat Window */}
      <Card className="h-[calc(100dvh-280px)] md:h-[600px] flex flex-col">
        <CardHeader className="flex items-center justify-between pb-3 shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Leo&apos;s AI Assistant</CardTitle>
            {status === "streaming" && (
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-bounce [animation-delay:0ms]" />
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-bounce [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-bounce [animation-delay:300ms]" />
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <kbd className="px-1.5 py-0.5 rounded border bg-muted text-[10px]">⌘K</kbd>
            <span>focus</span>
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
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-sm">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                )}
                <div
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm leading-relaxed max-w-[85%] shadow-sm",
                    (m.role as string) === "user"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                      : "bg-muted border border-border/50"
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
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-sm">
                    <User className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2.5 animate-in fade-in duration-200">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-sm">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="bg-muted rounded-lg px-4 py-3 border border-border/50">
                  <div className="flex gap-1 mb-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/40 animate-bounce [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/40 animate-bounce [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/40 animate-bounce [animation-delay:300ms]" />
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    Thinking...
                  </p>
                </div>
              </div>
            )}
            {error && (
              <div className="flex gap-2.5 animate-in fade-in duration-200">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-destructive/20 flex items-center justify-center">
                  <AlertCircle className="h-4 w-4 text-destructive" />
                </div>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3">
                  <p className="text-sm text-destructive font-medium mb-1">Connection error</p>
                  <p className="text-xs text-muted-foreground mb-2">{error.message || "Failed to connect to AI service"}</p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        clearChat();
                      }}
                      className="h-7 text-xs"
                    >
                      Clear & Retry
                    </Button>
                  </div>
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
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Sidebar info */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <MessageCircle className="h-4 w-4 text-primary" />
              System Knowledge
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>AI has access to Leo&apos;s complete profile:</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>10+ years experience</li>
              <li>50+ technical skills</li>
              <li>8 major projects</li>
              <li>Research publications</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Sparkles className="h-4 w-4 text-primary" />
              Model Info
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-1">
            <p className="font-medium text-primary">GLM-4.5-Flash</p>
            <p className="text-xs">Local newapi service</p>
            <p className="text-xs">Streaming responses</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Clock className="h-4 w-4 text-primary" />
              Session Features
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-1">
            <p>✅ Conversation history</p>
            <p>✅ Quick templates</p>
            <p>✅ Keyboard shortcuts</p>
            <p>✅ Auto-scroll</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

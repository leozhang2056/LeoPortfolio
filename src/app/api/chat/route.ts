import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { LEO_SYSTEM_PROMPT } from "@/lib/chat-prompt";

export const maxDuration = 30;

/**
 * Extract plain text from a UI message's parts array.
 * Filters out reasoning, step-start, tool calls, etc.
 */
function extractText(parts: { type: string; text?: string }[]): string {
  return parts
    .filter((p) => p.type === "text" && p.text)
    .map((p) => p.text!)
    .join("");
}

/**
 * Convert UI messages to clean OpenAI-compatible format.
 * Strips reasoning parts, tool calls, and other unsupported content.
 */
function toOpenAIMessages(
  messages: { role: string; parts: { type: string; text?: string }[] }[]
) {
  const result: { role: "user" | "assistant" | "system"; content: string }[] = [];

  for (const msg of messages) {
    if (msg.role !== "user" && msg.role !== "assistant") continue;

    const text = extractText(msg.parts);
    if (!text) continue;

    // Merge consecutive assistant messages
    if (
      msg.role === "assistant" &&
      result.length > 0 &&
      result[result.length - 1].role === "assistant"
    ) {
      result[result.length - 1].content += "\n" + text;
    } else {
      result.push({ role: msg.role, content: text });
    }
  }

  return result;
}

export async function POST(req: Request) {
  const { messages } = await req.json();

  const newapi = createOpenAI({
    baseURL: "http://192.168.1.128:3001/v1",
    apiKey: "sk-YQKYXv5uIQF8H3xJfvIvUHMC74ZBoNh68OkyCH3ze0plefGO",
  });

  const cleanMessages = toOpenAIMessages(messages);

  const result = streamText({
    model: newapi("free-chat"),
    system: LEO_SYSTEM_PROMPT,
    messages: cleanMessages,
  });

  return result.toUIMessageStreamResponse();
}

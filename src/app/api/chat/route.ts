import { streamText, convertToModelMessages } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { LEO_SYSTEM_PROMPT } from "@/lib/chat-prompt";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const newapi = createOpenAI({
    baseURL: "http://192.168.1.128:3001/v1",
    apiKey: "sk-YQKYXv5uIQF8H3xJfvIvUHMC74ZBoNh68OkyCH3ze0plefGO",
  });

  const result = streamText({
    model: newapi("free-chat"),
    system: LEO_SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}

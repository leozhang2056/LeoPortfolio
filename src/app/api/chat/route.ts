import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { LEO_SYSTEM_PROMPT } from "@/lib/chat-prompt";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system: LEO_SYSTEM_PROMPT,
    messages,
  });

  return result.toTextStreamResponse();
}

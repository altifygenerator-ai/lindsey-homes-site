import { NextResponse } from "next/server";
import { lindseyChatInstructions } from "@/data/chat-knowledge";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function cleanMessages(value: unknown): ChatMessage[] {
  if (!Array.isArray(value)) return [];

  return value
    .filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === "object")
    .map((item) => ({
      role: item.role === "assistant" ? "assistant" as const : "user" as const,
      content: String(item.content || "").trim().slice(0, 1600),
    }))
    .filter((item) => item.content.length > 0)
    .slice(-10);
}

function extractResponseText(payload: any) {
  if (typeof payload?.output_text === "string" && payload.output_text.trim()) {
    return payload.output_text.trim();
  }

  const text: string[] = [];
  for (const item of payload?.output || []) {
    if (item?.type !== "message") continue;
    for (const part of item?.content || []) {
      if ((part?.type === "output_text" || part?.type === "text") && typeof part?.text === "string") {
        text.push(part.text);
      }
    }
  }

  return text.join("\n").trim();
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const messages = cleanMessages(body.messages);
  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return NextResponse.json({ message: "A visitor message is required." }, { status: 400 });
  }

  const totalCharacters = messages.reduce((sum, item) => sum + item.content.length, 0);
  if (totalCharacters > 9000) {
    return NextResponse.json({ message: "This conversation is too long. Please start a new chat." }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ message: "The website assistant is not configured yet." }, { status: 503 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_CHAT_MODEL || "gpt-5.6-luna",
        instructions: lindseyChatInstructions,
        input: messages,
        max_output_tokens: 450,
        store: false,
      }),
      signal: controller.signal,
    });

    const payload = await response.json();

    if (!response.ok) {
      console.error("Lindsey chat API error", response.status, payload?.error?.type || "unknown");
      return NextResponse.json({ message: "The assistant is temporarily unavailable." }, { status: 502 });
    }

    const answer = extractResponseText(payload);
    if (!answer) {
      return NextResponse.json({ message: "The assistant did not return a response." }, { status: 502 });
    }

    return NextResponse.json({ answer });
  } catch (error) {
    const aborted = error instanceof Error && error.name === "AbortError";
    return NextResponse.json(
      { message: aborted ? "The assistant took too long to respond." : "The assistant is temporarily unavailable." },
      { status: 502 }
    );
  } finally {
    clearTimeout(timeout);
  }
}

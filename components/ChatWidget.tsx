"use client";

import Link from "next/link";
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const greeting: Message = {
  role: "assistant",
  content: "Hi. I’m the Lindsey Homes AI assistant. I can help with custom homes, The Reserve, service area, and getting in touch with Whitney.",
};

const starters = [
  "Tell me about The Reserve",
  "Do you build on my land?",
  "What areas do you serve?",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([greeting]);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = window.sessionStorage.getItem("lindsey-chat-v1");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length) setMessages(parsed.slice(-12));
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      window.sessionStorage.setItem("lindsey-chat-v1", JSON.stringify(messages.slice(-12)));
    } catch {}
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending]);

  useEffect(() => {
    if (open) window.setTimeout(() => inputRef.current?.focus(), 120);
  }, [open]);

  async function sendMessage(text: string) {
    const content = text.trim();
    if (!content || sending) return;

    const userMessage: Message = { role: "user", content: content.slice(0, 1200) };
    const nextMessages = [...messages, userMessage].slice(-10);

    setMessages(nextMessages);
    setDraft("");
    setSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const result = await response.json();

      if (!response.ok || !result?.answer) {
        throw new Error(result?.message || "Chat unavailable.");
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: String(result.answer),
      };

      setMessages((current) => [...current, assistantMessage].slice(-12));
    } catch {
      const fallbackMessage: Message = {
        role: "assistant",
        content: "I’m having trouble answering right now. You can still text or call Whitney directly, or send your project details through the contact form.",
      };

      setMessages((current) => [...current, fallbackMessage].slice(-12));
    } finally {
      setSending(false);
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    void sendMessage(draft);
  }

  function onKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (draft.trim()) void sendMessage(draft);
    }
  }

  function resetChat() {
    setMessages([greeting]);
    setDraft("");
    try {
      window.sessionStorage.removeItem("lindsey-chat-v1");
    } catch {}
  }

  return (
    <div className={`lh-chat ${open ? "is-open" : ""}`}>
      {open ? (
        <section className="lh-chat-panel" role="dialog" aria-label="Lindsey Homes AI assistant">
          <header className="lh-chat-header">
            <div>
              <strong>Lindsey Homes</strong>
              <span>AI concierge · 24/7</span>
            </div>
            <div className="lh-chat-header-actions">
              <button type="button" onClick={resetChat}>New chat</button>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
            </div>
          </header>

          <div className="lh-chat-messages" ref={scrollRef} aria-live="polite">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`lh-chat-message lh-chat-message--${message.role}`}>
                {message.content}
              </div>
            ))}

            {messages.length === 1 ? (
              <div className="lh-chat-starters">
                {starters.map((starter) => (
                  <button key={starter} type="button" onClick={() => void sendMessage(starter)}>
                    {starter}
                  </button>
                ))}
              </div>
            ) : null}

            {sending ? <div className="lh-chat-message lh-chat-message--assistant lh-chat-typing">Thinking…</div> : null}
          </div>

          <div className="lh-chat-handoff">
            <a href={site.smsHref}>Text Whitney</a>
            <a href={site.phoneHref}>Call</a>
            <Link href="/contact" onClick={() => setOpen(false)}>Send project details</Link>
          </div>

          <form className="lh-chat-form" onSubmit={submit}>
            <textarea
              ref={inputRef}
              value={draft}
              onChange={(event) => setDraft(event.target.value.slice(0, 1200))}
              onKeyDown={onKeyDown}
              rows={1}
              placeholder="Ask about Lindsey Homes…"
              aria-label="Message Lindsey Homes AI assistant"
              disabled={sending}
            />
            <button type="submit" disabled={sending || !draft.trim()} aria-label="Send message">Send</button>
          </form>

          <p className="lh-chat-note">AI assistant. For project-specific details, Whitney can confirm the answer.</p>
        </section>
      ) : null}

      <button
        className="lh-chat-launcher"
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close Lindsey Homes chat" : "Open Lindsey Homes chat"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "×" : <><span>Ask</span><strong>LH</strong></>}
      </button>
    </div>
  );
}

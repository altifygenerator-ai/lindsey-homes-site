"use client";

import Link from "next/link";
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";
import { site } from "@/data/site";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const greeting: Message = {
  role: "assistant",
  content: "Hi, welcome to Lindsey Homes. I can help with building in North Texas, walk you through The Reserve, or help you figure out the next step for your project. What are you working on?",
};

const starters = [
  "I already own land",
  "Tell me about The Reserve",
  "I’m planning a custom home",
];

export function ChatWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([greeting]);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);
  const [leadSending, setLeadSending] = useState(false);
  const [leadStatus, setLeadStatus] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = window.sessionStorage.getItem("lindsey-chat-v1");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length) setMessages(parsed.slice(-18));
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      window.sessionStorage.setItem("lindsey-chat-v1", JSON.stringify(messages.slice(-18)));
    } catch {}
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending]);

  useEffect(() => {
    if (open && !leadOpen) window.setTimeout(() => inputRef.current?.focus(), 120);
  }, [open, leadOpen]);

  async function sendMessage(text: string) {
    const content = text.trim();
    if (!content || sending) return;

    const userMessage: Message = { role: "user", content: content.slice(0, 1200) };
    const nextMessages = [...messages, userMessage].slice(-18);

    setMessages(nextMessages);
    setDraft("");
    setSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages, page: pathname }),
      });
      const result = await response.json();

      if (!response.ok || !result?.answer) {
        throw new Error(result?.message || "Chat unavailable.");
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: String(result.answer),
      };

      setMessages((current) => [...current, assistantMessage].slice(-18));
    } catch {
      const fallbackMessage: Message = {
        role: "assistant",
        content: "I’m having trouble answering right now. You can still have Whitney follow up, text or call her directly, or send the full project form.",
      };

      setMessages((current) => [...current, fallbackMessage].slice(-18));
    } finally {
      setSending(false);
    }
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (leadSending) return;

    setLeadSending(true);
    setLeadStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const transcript = messages
      .slice(-12)
      .map((message) => (message.role === "user" ? "Visitor: " : "Concierge: ") + message.content)
      .join("\n\n");

    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      location: String(formData.get("location") || ""),
      contactConsent: formData.get("contactConsent") === "yes" ? "yes" : "",
      source: "Website concierge",
      page: pathname,
      project: "Recent website concierge conversation:\n\n" + transcript,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result?.message || "We could not send your details.");

      form.reset();
      track("Concierge Lead Submitted", { page: pathname || "/" });
      setLeadStatus("Sent. Whitney has your details and the recent conversation context.");
    } catch (error) {
      const message = error instanceof Error ? error.message : "We could not send your details.";
      setLeadStatus(message + " You can still text or call Whitney directly.");
    } finally {
      setLeadSending(false);
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
    setLeadOpen(false);
    setLeadStatus("");
    try {
      window.sessionStorage.removeItem("lindsey-chat-v1");
    } catch {}
  }

  return (
    <div className={"lh-chat" + (open ? " is-open" : "")}>
      {open ? (
        <section className="lh-chat-panel" role="dialog" aria-label="Lindsey Homes project concierge">
          <header className="lh-chat-header">
            <div>
              <strong>Lindsey Homes</strong>
              <span>Project concierge · Available anytime</span>
            </div>
            <div className="lh-chat-header-actions">
              <button type="button" onClick={resetChat}>New chat</button>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
            </div>
          </header>

          <div className="lh-chat-messages" ref={scrollRef} aria-live="polite">
            {messages.map((message, index) => (
              <div key={message.role + "-" + index} className={"lh-chat-message lh-chat-message--" + message.role}>
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

            {sending ? <div className="lh-chat-message lh-chat-message--assistant lh-chat-typing">One moment…</div> : null}
          </div>

          <div className="lh-chat-contact-area">
            {leadOpen ? (
              <form className="lh-chat-lead" onSubmit={submitLead}>
                <div className="lh-chat-lead-head">
                  <div>
                    <strong>Have Whitney follow up</strong>
                    <span>Send your contact details along with the recent conversation.</span>
                  </div>
                  <button type="button" onClick={() => { setLeadOpen(false); setLeadStatus(""); }} aria-label="Close follow-up form">×</button>
                </div>

                <div className="lh-chat-lead-grid">
                  <label>
                    <span>Name</span>
                    <input name="name" autoComplete="name" maxLength={100} required />
                  </label>
                  <label>
                    <span>Phone</span>
                    <input name="phone" type="tel" autoComplete="tel" maxLength={40} required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input name="email" type="email" autoComplete="email" maxLength={160} required />
                  </label>
                  <label>
                    <span>Build location</span>
                    <input name="location" maxLength={180} placeholder="City or property area" />
                  </label>
                </div>

                <label className="lh-chat-lead-consent">
                  <input type="checkbox" name="contactConsent" value="yes" required />
                  <span>I agree that Lindsey Homes may contact me about this inquiry by phone, email, or text.</span>
                </label>

                <button className="lh-chat-lead-submit" type="submit" disabled={leadSending}>
                  {leadSending ? "Sending…" : "Send to Whitney"}
                </button>

                {leadStatus ? <p className="lh-chat-lead-status" role="status">{leadStatus}</p> : null}
              </form>
            ) : (
              <div className="lh-chat-handoff">
                <button className="lh-chat-followup-trigger" type="button" onClick={() => { setLeadOpen(true); setLeadStatus(""); }}>
                  Whitney follow up
                </button>
                <a href={site.smsHref}>Text</a>
                <a href={site.phoneHref}>Call</a>
                <Link href="/contact" onClick={() => setOpen(false)}>Full project form</Link>
              </div>
            )}
          </div>

          <form className="lh-chat-form" onSubmit={submit}>
            <textarea
              ref={inputRef}
              value={draft}
              onChange={(event) => setDraft(event.target.value.slice(0, 1200))}
              onKeyDown={onKeyDown}
              rows={1}
              placeholder="Ask about your project…"
              aria-label="Message Lindsey Homes project concierge"
              disabled={sending}
            />
            <button type="submit" disabled={sending || !draft.trim()} aria-label="Send message">Send</button>
          </form>

          <p className="lh-chat-note">Questions about your project, The Reserve, or building in North Texas.</p>
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

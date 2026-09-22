"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

export function ContactChoice({ label = "Contact" }: { label?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button className="hero-contact-trigger" type="button" onClick={() => setOpen(true)}>
        {label}
      </button>

      {open ? (
        <div className="contact-choice-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
          <div
            className="contact-choice"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-choice-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="contact-choice-close" type="button" onClick={() => setOpen(false)} aria-label="Close">
              ×
            </button>
            <span>Connect with Lindsey Homes</span>
            <h2 id="contact-choice-title">How would you like to reach us?</h2>
            <div className="contact-choice-actions">
              <a href={site.phoneHref}>
                <small>Call</small>
                <strong>{site.phone}</strong>
              </a>
              <a href={`sms:+18178212476`}>
                <small>Text</small>
                <strong>Send a message</strong>
              </a>
              <Link href="/contact">
                <small>Project details</small>
                <strong>Send an inquiry</strong>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

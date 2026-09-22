"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

export function HeroContactMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="hero-contact-menu" ref={wrapRef}>
      <button
        type="button"
        className="hero-contact-trigger"
        aria-expanded={open}
        aria-controls="hero-contact-options"
        onClick={() => setOpen((value) => !value)}
      >
        Schedule your consultation
      </button>

      <div
        id="hero-contact-options"
        className={`hero-contact-options ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <p>How would you like to connect?</p>
        <a href={site.phoneHref} onClick={() => setOpen(false)}>
          <span>Call</span>
          <small>{site.phone}</small>
        </a>
        <a href={site.smsHref} onClick={() => setOpen(false)}>
          <span>Text</span>
          <small>Open your messaging app</small>
        </a>
        <Link href="/contact" onClick={() => setOpen(false)}>
          <span>Send project details</span>
          <small>Use the contact form</small>
        </Link>
      </div>
    </div>
  );
}

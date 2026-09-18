"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";

const links = [
  ["Custom Homes", "/custom-homes"],
  ["Residences", "/floor-plans"],
  ["Design", "/inspiration"],
  ["Approach", "/about"],
  ["Contact", "/contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="masthead-meta shell">
        <span>Dallas–Fort Worth</span>
        <span>Custom Homes &amp; Private Estates</span>
      </div>

      <div className="masthead-main shell">
        <Link className="brand-panel" href="/" aria-label="Lindsey Homes home">
          <Image src={site.logo} alt="Lindsey Homes" width={150} height={150} priority />
        </Link>

        <nav id="primary-navigation" className={`primary-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </nav>

        <div className="masthead-contact">
          <Link href="/contact">Start a conversation</Link>
          <a href={site.phoneHref}>{site.phone}</a>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

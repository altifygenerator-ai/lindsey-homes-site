"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/data/site";

const links = [
  ["Custom Homes", "/custom-homes"],
  ["Residences", "/floor-plans"],
  ["Design", "/inspiration"],
  ["Approach", "/about"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const home = pathname === "/";

  return (
    <header className={`site-header ${home ? "site-header--hero" : ""}`}>
      <div className="masthead-main shell">
        <Link className="brand-panel" href="/" aria-label="Lindsey Homes home">
          <Image src={site.logo} alt="Lindsey Homes" width={260} height={167} priority />
        </Link>

        <nav id="primary-navigation" className={`primary-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </nav>

        <Link className="masthead-contact-button" href="/contact">Contact</Link>

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

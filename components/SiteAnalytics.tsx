"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

function getLocation(element: Element) {
  if (element.closest(".contact-choice")) return "consultation_dialog";
  if (element.closest(".lh-chat")) return "concierge";
  if (element.closest(".home-hero")) return "hero";
  if (element.closest(".reserve-feature")) return "reserve";
  if (element.closest(".contact-page")) return "contact_page";
  if (element.closest(".home-lead")) return "home_lead";
  if (element.closest(".site-header")) return "header";
  if (element.closest(".site-footer")) return "footer";
  return "site";
}

export function SiteAnalytics() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const action = target.closest("a, button");
      if (!action) return;

      const location = getLocation(action);

      if (action.matches(".hero-contact-trigger")) {
        track("Consultation CTA", { location });
      }

      if (action.matches(".reserve-preview")) {
        track("Reserve Explore", { location });
      }

      if (
        action.matches(".lh-chat-launcher") &&
        action.getAttribute("aria-expanded") === "false"
      ) {
        track("Concierge Open", { location });
      }

      if (action.matches(".lh-chat-followup-trigger")) {
        track("Concierge Follow-up Open", { location });
      }

      if (!(action instanceof HTMLAnchorElement)) return;

      const href = action.getAttribute("href") || "";

      if (href.startsWith("tel:")) {
        track("Contact Click", { method: "phone", location });
      } else if (href.startsWith("sms:")) {
        track("Contact Click", { method: "text", location });
      } else if (href.startsWith("mailto:")) {
        track("Contact Click", { method: "email", location });
      } else if (href === "/contact") {
        track("Contact CTA", { location });
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

"use client";

import { useState } from "react";
import { getReferralUrl, type ReferralMember } from "@/data/referrals";

export function ReferralCardGrid({ members }: { members: ReferralMember[] }) {
  const [copied, setCopied] = useState("");

  async function copyLink(code: string) {
    const url = getReferralUrl(code);
    try {
      await navigator.clipboard.writeText(url);
      setCopied(code);
      window.setTimeout(() => setCopied(""), 1600);
    } catch {
      setCopied("");
    }
  }

  return (
    <div className="referral-card-grid">
      {members.map((member) => {
        const referralUrl = getReferralUrl(member.code);

        return (
          <article className="referral-work-card" key={member.code}>
            <div className="referral-work-card__head">
              <div>
                <span>{member.placeholder ? "Placeholder" : "Team referral"}</span>
                <h2>{member.name}</h2>
                <p>{member.role}</p>
              </div>
              <code>{member.code}</code>
            </div>

            <div className="business-card-preview">
              <div className="business-card-preview__face">
                <span>Business card front</span>
                <strong>{member.name}</strong>
                <small>{member.role}</small>
                <em>Final card artwork goes here</em>
              </div>
              <div className="business-card-preview__face business-card-preview__face--back">
                <span>Business card back</span>
                <div className="qr-placeholder" aria-label="QR code placeholder">
                  <i />
                  <i />
                  <i />
                  <b>QR</b>
                </div>
                <em>Referral QR goes here</em>
              </div>
            </div>

            <div className="referral-link-box">
              <span>Card / QR destination</span>
              <a href={referralUrl} target="_blank" rel="noopener noreferrer">
                {referralUrl}
              </a>
            </div>

            <div className="referral-card-actions">
              <button type="button" onClick={() => copyLink(member.code)}>
                {copied === member.code ? "Copied" : "Copy referral link"}
              </button>
              <a href={referralUrl} target="_blank" rel="noopener noreferrer">
                Test link ↗
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}

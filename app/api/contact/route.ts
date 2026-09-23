import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number) {
  return String(value || "").trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 100);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160);
  const location = clean(body.location, 180);
  const propertyStatus = clean(body.propertyStatus, 100);
  const timeline = clean(body.timeline, 100);
  const project = clean(body.project, 6000);
  const consent = clean(body.contactConsent, 10);
  const source = clean(body.source, 80) || "Website inquiry form";
  const page = clean(body.page, 180);

  if (!name || !phone || !email || consent !== "yes") {
    return NextResponse.json({ message: "Please include your name, phone number, email, and contact consent." }, { status: 400 });
  }
  if (!emailPattern.test(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL || "whitney@lindseyhomesllc.com";
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    return NextResponse.json({ message: "Online form delivery is not available right now." }, { status: 503 });
  }

  const receivedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });

  const text = [
    "NEW LINDSEY HOMES LEAD",
    "",
    `Source: ${source}`,
    page ? `Page: ${page}` : "",
    `Received: ${receivedAt}`,
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Build location: ${location || "Not provided"}`,
    `Property status: ${propertyStatus || "Not provided"}`,
    `Preferred timing: ${timeline || "Not provided"}`,
    "",
    "Project details / conversation context:",
    project || "Not provided",
    "",
    "Reply to this email to reply directly to the lead.",
  ].filter(Boolean).join("\n");

  const subject = ["New Lindsey Homes lead", source, location, name].filter(Boolean).join(" — ");

  try {
    const leadResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!leadResponse.ok) {
      const errorText = await leadResponse.text().catch(() => "");
      console.error("Lindsey lead alert failed", leadResponse.status, errorText.slice(0, 500));
      return NextResponse.json({ message: "The form could not be delivered right now." }, { status: 502 });
    }

    const firstName = name.split(/\s+/)[0] || name;
    const acknowledgement = [
      `Hi ${firstName},`,
      "",
      "Thanks for reaching out to Lindsey Homes. We received your project information and Whitney will review it directly.",
      location ? `We noted the project location as ${location}.` : "",
      "",
      "If there is anything else you want us to know, just reply to this email.",
      "",
      "Lindsey Homes",
      "817-821-2476",
    ].filter(Boolean).join("\n");

    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [email],
          reply_to: to,
          subject: "We received your Lindsey Homes inquiry",
          text: acknowledgement,
        }),
      });
    } catch {
      console.error("Lindsey acknowledgement email failed");
    }
  } catch {
    return NextResponse.json({ message: "The form could not be delivered right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

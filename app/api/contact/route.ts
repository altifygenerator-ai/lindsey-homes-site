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
  const project = clean(body.project, 3000);
  const consent = clean(body.contactConsent, 10);

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

  const text = [
    "New Lindsey Homes residential inquiry",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Build location: ${location || "Not provided"}`,
    `Property status: ${propertyStatus || "Not provided"}`,
    `Preferred timing: ${timeline || "Not provided"}`,
    "",
    "Project details:",
    project || "Not provided",
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New Lindsey Homes inquiry — ${name}`,
        text,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ message: "The form could not be delivered right now." }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ message: "The form could not be delivered right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

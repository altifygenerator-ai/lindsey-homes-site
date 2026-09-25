import { NextResponse } from "next/server";

function clean(value: unknown, max: number) {
  return String(value || "").trim().slice(0, max);
}

function digits(value: string) {
  return value.replace(/\D/g, "");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const name = clean(body.name, 100);
  const phone = clean(body.phone, 40);
  const consent = body.consent === true;

  if (!name || !phone || !consent) {
    return NextResponse.json(
      { message: "Name, mobile number, and SMS consent are required." },
      { status: 400 }
    );
  }

  const configuredRecipient = process.env.LEAD_TO_PHONE || "+18178212476";
  const submittedDigits = digits(phone);
  const configuredDigits = digits(configuredRecipient);

  if (submittedDigits !== configuredDigits) {
    return NextResponse.json(
      { message: "This opt-in page is only for the designated Lindsey Homes lead-alert recipient." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.LEAD_TO_EMAIL || "whitney@lindseyhomesllc.com";

  if (!apiKey || !from) {
    console.error("SMS opt-in receipt email configuration missing", {
      RESEND_API_KEY: Boolean(apiKey),
      RESEND_FROM_EMAIL: Boolean(from),
    });
    return NextResponse.json(
      { message: "The consent receipt could not be recorded right now." },
      { status: 503 }
    );
  }

  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  });

  const text = [
    "LINDSEY HOMES SMS LEAD ALERT OPT-IN RECEIPT",
    "",
    `Recipient: ${name}`,
    `Mobile: ${phone}`,
    `Submitted: ${submittedAt}`,
    "",
    "Consent language accepted:",
    "I agree to receive Lindsey Homes internal website lead alerts by SMS at the mobile number above. Message frequency varies based on website inquiry activity. Message and data rates may apply. Reply STOP to opt out or HELP for help.",
    "",
    "This opt-in is for the designated Lindsey Homes sales recipient only.",
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
        subject: "Lindsey Homes SMS lead-alert opt-in confirmation",
        text,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      console.error("SMS opt-in receipt email failed", response.status, errorText.slice(0, 500));
      return NextResponse.json(
        { message: "The consent receipt could not be recorded right now." },
        { status: 502 }
      );
    }
  } catch {
    return NextResponse.json(
      { message: "The consent receipt could not be recorded right now." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

import { NextResponse } from "next/server";
import { getReferralMember } from "@/data/referrals";

export async function GET(
  request: Request,
  context: { params: Promise<{ code: string }> },
) {
  const { code } = await context.params;
  const member = getReferralMember(code);

  if (!member) {
    return NextResponse.redirect(new URL("/contact#inquiry", request.url));
  }

  return NextResponse.redirect(
    new URL(`/contact?ref=${encodeURIComponent(member.code)}#inquiry`, request.url),
  );
}

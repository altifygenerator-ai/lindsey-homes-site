import { NextResponse } from "next/server";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function clean(value: unknown, max: number) { return String(value || "").trim().slice(0, max); }
async function sendLeadPush(input: { name: string; phone: string; email: string; location: string; source: string; project: string; }) {
  const token = process.env.PUSHOVER_APP_TOKEN;
  const user = process.env.PUSHOVER_USER_KEY;
  const device = process.env.PUSHOVER_DEVICE;

  if (!token || !user) return;

  const summary = input.project.replace(/\s+/g, " ").trim().slice(0, 500);
  const message = [
    `${input.name} · ${input.phone}`,
    input.email,
    input.location ? `Build location: ${input.location}` : "",
    `Source: ${input.source}`,
    summary ? `Details: ${summary}` : "",
  ].filter(Boolean).join("\n").slice(0, 1024);

  const form = new URLSearchParams({
    token,
    user,
    title: "New Lindsey Homes Lead",
    message,
    priority: "0",
  });

  if (device) form.set("device", device);

  const response = await fetch("https://api.pushover.net/1/messages.json", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form.toString(),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    console.error("Lindsey Pushover lead alert failed", response.status, errorText.slice(0, 500));
  }
}
export async function POST(request: Request) {
  let body: Record<string, unknown>; try{body=await request.json();}catch{return NextResponse.json({message:"Invalid request."},{status:400});}
  if(clean(body.website,200)) return NextResponse.json({ok:true});
  const name=clean(body.name,100),phone=clean(body.phone,40),email=clean(body.email,160),location=clean(body.location,180),propertyStatus=clean(body.propertyStatus,100),timeline=clean(body.timeline,100),project=clean(body.project,6000),consent=clean(body.contactConsent,10),source=clean(body.source,80)||"Website inquiry form",page=clean(body.page,180);
  if(!name||!phone||!email||consent!=="yes") return NextResponse.json({message:"Please include your name, phone number, email, and contact consent."},{status:400});
  if(!emailPattern.test(email)) return NextResponse.json({message:"Please enter a valid email address."},{status:400});
  const apiKey=process.env.RESEND_API_KEY,to=process.env.LEAD_TO_EMAIL||"whitney@lindseyhomesllc.com",from=process.env.RESEND_FROM_EMAIL;
  if(!apiKey||!from){console.error("Lindsey contact email configuration missing",{RESEND_API_KEY:Boolean(apiKey),RESEND_FROM_EMAIL:Boolean(from),LEAD_TO_EMAIL:Boolean(process.env.LEAD_TO_EMAIL)});return NextResponse.json({message:"Online form delivery is not available right now."},{status:503});}
  const receivedAt=new Date().toLocaleString("en-US",{timeZone:"America/Chicago",month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"});
  const text=["NEW LINDSEY HOMES LEAD","",`Source: ${source}`,page?`Page: ${page}`:"",`Received: ${receivedAt}`,"",`Name: ${name}`,`Phone: ${phone}`,`Email: ${email}`,`Build location: ${location||"Not provided"}`,`Property status: ${propertyStatus||"Not provided"}`,`Preferred timing: ${timeline||"Not provided"}`,"","Project details / conversation context:",project||"Not provided","","Reply to this email to reply directly to the lead."].filter(Boolean).join("\n");
  const subject=["New Lindsey Homes lead",source,location,name].filter(Boolean).join(" — ");
  try{
    const leadResponse=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${apiKey}`,"Content-Type":"application/json"},body:JSON.stringify({from,to:[to],reply_to:email,subject,text})});
    if(!leadResponse.ok){const errorText=await leadResponse.text().catch(()=>"");console.error("Lindsey lead alert failed",leadResponse.status,errorText.slice(0,500));return NextResponse.json({message:"The form could not be delivered right now."},{status:502});}
    try{await sendLeadPush({name,phone,email,location,source,project});}catch(error){console.error("Lindsey Pushover lead alert exception",error);}
    const firstName=name.split(/\s+/)[0]||name; const acknowledgement=[`Hi ${firstName},`,"","Thanks for reaching out to Lindsey Homes. We received your project information and Whitney will review it directly.",location?`We noted the project location as ${location}.`:"","","If there is anything else you want us to know, just reply to this email.","","Lindsey Homes","817-821-2476"].filter(Boolean).join("\n");
    try{await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${apiKey}`,"Content-Type":"application/json"},body:JSON.stringify({from,to:[email],reply_to:to,subject:"We received your Lindsey Homes inquiry",text:acknowledgement})});}catch{console.error("Lindsey acknowledgement email failed");}
  }catch{return NextResponse.json({message:"The form could not be delivered right now."},{status:502});}
  return NextResponse.json({ok:true});
}

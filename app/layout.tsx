import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./gallery.css";
import "./chat-widget.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: "Lindsey Homes | Luxury Custom Homes in Dallas–Fort Worth",
    template: "%s | Lindsey Homes",
  },
  description: "Lindsey Homes builds luxury custom residences and private estate homes across Dallas–Fort Worth.",
  openGraph: {
    title: "Lindsey Homes | Luxury Custom Homes in Dallas–Fort Worth",
    description: "Luxury custom residences and private estate homes across Dallas–Fort Worth.",
    type: "website",
    images: [site.logo],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lindsey Homes | Luxury Custom Homes in Dallas–Fort Worth",
    description: "Luxury custom residences and private estate homes across Dallas–Fort Worth.",
    images: [site.logo],
  },
  icons: {
    icon: site.logo,
    apple: site.logo,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#061321",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    url: site.siteUrl,
    telephone: site.phone,
    email: site.email,
    areaServed: "Dallas–Fort Worth, Texas",
    description: "Luxury custom residential home builder serving Dallas–Fort Worth, Texas.",
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ChatWidget />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}

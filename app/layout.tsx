import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./gallery.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: "Lindsey Homes | Luxury Custom Homes in Dallas–Fort Worth",
    template: "%s | Lindsey Homes",
  },
  description: "Lindsey Homes builds custom residences and private estate homes across Dallas–Fort Worth, from thoughtfully designed custom homes to multi-million-dollar estate properties.",
  openGraph: {
    title: "Lindsey Homes | Luxury Custom Homes in Dallas–Fort Worth",
    description: "Custom residences and private estate homes across Dallas–Fort Worth.",
    type: "website",
    images: [site.logo],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lindsey Homes | Luxury Custom Homes in Dallas–Fort Worth",
    description: "Custom residences and private estate homes across Dallas–Fort Worth.",
    images: [site.logo],
  },
  icons: {
    icon: "/brand/lindsey-homes-mark.png",
    apple: "/brand/lindsey-homes-mark.png",
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
    description: "Custom residential home builder serving Dallas–Fort Worth, Texas.",
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}

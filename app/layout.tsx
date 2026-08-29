import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: "Lindsey Homes | Luxury Custom Homes in North Texas",
    template: "%s | Lindsey Homes",
  },
  description: "Lindsey Homes builds fully custom residences, private estate homes, and build-to-suit residential projects across North Texas.",
  openGraph: {
    title: "Lindsey Homes | Luxury Custom Homes in North Texas",
    description: "Custom residences, private estate homes, and build-to-suit projects across North Texas.",
    type: "website",
    images: [site.logo],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lindsey Homes | Luxury Custom Homes in North Texas",
    description: "Custom residences, private estate homes, and build-to-suit projects across North Texas.",
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
    areaServed: "North Texas",
    description: "Custom residential home builder serving North Texas.",
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

import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "./gallery.css";
import "./residence-series.css";
import "./chat-widget.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { SiteAnalytics } from "@/components/SiteAnalytics";
import { site } from "@/data/site";

const defaultDescription =
  "Lindsey Homes designs and builds custom homes, private estates, and build-on-your-land residences across Dallas–Fort Worth and North Texas.";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  applicationName: "Lindsey Homes",
  title: {
    default: "Lindsey Homes | Custom Home Builder in Dallas–Fort Worth",
    template: "%s | Lindsey Homes",
  },
  description: defaultDescription,
  keywords: [
    "Dallas custom home builder",
    "Fort Worth custom home builder",
    "DFW custom homes",
    "North Texas custom homes",
    "private estate builder",
    "build on your land DFW",
    "luxury home builder Dallas Fort Worth",
  ],
  creator: "Lindsey Homes LLC",
  publisher: "Lindsey Homes LLC",
  category: "Custom Home Building",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Lindsey Homes | Custom Home Builder in Dallas–Fort Worth",
    description: defaultDescription,
    type: "website",
    locale: "en_US",
    siteName: "Lindsey Homes",
    images: [
      {
        url: "/video/dallas-skyline-hero-poster.jpg",
        alt: "Dallas–Fort Worth skyline at dusk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lindsey Homes | Custom Home Builder in Dallas–Fort Worth",
    description: defaultDescription,
    images: ["/video/dallas-skyline-hero-poster.jpg"],
  },
  icons: {
    icon: site.logo,
    apple: site.logo,
  },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Dallas–Fort Worth",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#061321",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["HomeAndConstructionBusiness", "Organization"],
        "@id": `${site.siteUrl}/#business`,
        name: site.name,
        url: site.siteUrl,
        logo: `${site.siteUrl}${site.logo}`,
        telephone: site.phone,
        email: site.email,
        description: defaultDescription,
        areaServed: [
          { "@type": "Place", name: "Dallas–Fort Worth, Texas" },
          { "@type": "Place", name: "North Texas" },
        ],
        serviceType: [
          "Custom home building",
          "Private estate home building",
          "Build-on-your-land home building",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.siteUrl}/#website`,
        url: site.siteUrl,
        name: "Lindsey Homes",
        publisher: { "@id": `${site.siteUrl}/#business` },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ChatWidget />
        <SiteAnalytics />
        <Analytics />
        <SpeedInsights />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}

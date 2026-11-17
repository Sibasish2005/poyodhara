import type { Metadata, Viewport } from "next";
import "./globals.css";
import WhatsAppButton from "./components/whatappButton";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b5a8e",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.poyodhara.in"),
  title: {
    default: "Poyodhara | Best Water Bottled Business in Agartala, Tripura - 20L Jars & Bottles",
    template: "%s | Poyodhara - Best Water Bottled Business in Agartala, Tripura",
  },
  description:
    "Looking for the best water bottled business in Agartala, Tripura? Poyodhara delivers premium packaged drinking water bottles (500ml, 1L, 2L), 20L water jars, and tap containers across Agartala. Bottling facility at West Pilak, South Tripura with fast doorstep delivery.",
  keywords: [
    "best water bottled business in agartala tripura",
    "best water bottle business in agartala",
    "packaged drinking water agartala",
    "20l water jar delivery agartala",
    "mineral water supplier tripura",
    "drinking water bottle wholesale agartala",
    "water bottle supplier near me agartala",
    "poyodhara drinking water",
    "office water delivery agartala",
    "bulk water bottles for events agartala",
    "water jar supply santirbazar jolaibari",
    "packaged drinking water tripura",
  ],
  authors: [{ name: "Poyodhara" }],
  creator: "Poyodhara",
  publisher: "Poyodhara",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://www.poyodhara.in",
  },
  openGraph: {
    title: "Best Water Bottled Business in Agartala, Tripura | Poyodhara",
    description:
      "Poyodhara is the trusted packaged drinking water bottle and 20L water jar supplier in Agartala, Tripura. Fast doorstep delivery for homes, offices, and events.",
    url: "https://www.poyodhara.in",
    siteName: "Poyodhara Drinking Water",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Poyodhara - Best Water Bottled Business in Agartala, Tripura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Water Bottled Business in Agartala, Tripura | Poyodhara",
    description:
      "Packaged drinking water bottles (500ml, 1L, 2L) and 20L water jars delivered across Agartala. Unit at West Pilak, South Tripura.",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-TR",
    "geo.placename": "Agartala, Tripura, India",
    "geo.position": "23.8315;91.2868",
    ICBM: "23.8315, 91.2868",
    "format-detection": "telephone=yes, address=yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        {/* Master JSON-LD LocalBusiness Schema for Search Engines & AEO Bots */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "WholesaleStore"],
              "@id": "https://www.poyodhara.in/#organization",
              name: "Poyodhara - Best Water Bottled Business in Agartala, Tripura",
              alternateName: "Poyodhara Drinking Water",
              url: "https://www.poyodhara.in",
              logo: "https://www.poyodhara.in/logo.webp",
              image: "https://www.poyodhara.in/logo.webp",
              telephone: "+919366834064",
              email: "contact@poyodhara.com",
              priceRange: "₹10 - ₹150",
              description:
                "Poyodhara is the leading packaged drinking water bottled business and 20L water jar supplier serving Agartala and West Tripura, with bottling facility in South Tripura.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "West Pilak, Jolaibari, near Pilak H.S. School",
                addressLocality: "Santirbazar",
                addressRegion: "South Tripura, Tripura",
                postalCode: "799144",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 23.2,
                longitude: 91.6,
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Agartala",
                  sameAs: "https://en.wikipedia.org/wiki/Agartala",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "West Tripura",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "South Tripura",
                },
                {
                  "@type": "State",
                  name: "Tripura",
                  sameAs: "https://en.wikipedia.org/wiki/Tripura",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Drinking Water Supply Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "20L Drinking Water Jar Delivery",
                      description: "Doorstep delivery of 20L drinking water jars for homes and offices in Agartala.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Packaged Drinking Water Bottle Supply",
                      description: "Carton and retail supply of packaged drinking water bottles (500ml, 1L, 2L) for conferences, events, and travel in Agartala, Tripura.",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden font-sans bg-slate-50 text-slate-800">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

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
  metadataBase: new URL("https://poyodhara.com"),
  title: {
    default: "Poyodhara - Packaged Drinking Water & 20L Water Jar Supply in Agartala, Tripura",
    template: "%s | Poyodhara Water Supply",
  },
  description:
    "Poyodhara supplies packaged drinking water in 20L jars, 20L tap containers, and 500ml–2L bottles across Agartala. Bottling and packaging unit located at West Pilak, Jolaibari, Santirbazar, South Tripura.",
  keywords: [
    "poyodhara",
    "packaged drinking water agartala",
    "20l water jar delivery agartala",
    "drinking water supplier tripura",
    "water supplier agartala",
    "water jar supply south tripura",
    "packaged water santirbazar jolaibari",
    "water bottle carton agartala",
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
    canonical: "https://poyodhara.com",
  },
  openGraph: {
    title: "Poyodhara - Packaged Drinking Water Supply in Agartala, Tripura",
    description:
      "20L drinking water jars, 20L tap containers, and packaged water bottles delivered across Agartala. Facility at West Pilak, Jolaibari, South Tripura.",
    url: "https://poyodhara.com",
    siteName: "Poyodhara",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Poyodhara Drinking Water Supply",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poyodhara - Packaged Drinking Water Supply in Agartala",
    description:
      "20L drinking water jars and packaged bottles delivered in Agartala. Unit at West Pilak, Jolaibari, South Tripura.",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "IN-TR",
    "geo.placename": "Tripura, India",
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
      <body className="min-h-full flex flex-col overflow-x-hidden font-sans bg-slate-50 text-slate-800">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/whatappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b5a8e",
};

export const metadata: Metadata = {
  title: "Poyodhara - Premium Drinking Water",
  description:
    "Poyodhara delivers pure, premium drinking water in multiple sizes — 500ml, 1L, 2L bottles and 20L jars & containers. Fresh water delivered to your doorstep.",
  keywords: [
    "Poyodhara",
    "drinking water",
    "mineral water",
    "water delivery",
    "20L water jar",
    "water bottle",
    "premium water",
    "pure water",
  ],
  openGraph: {
    title: "Poyodhara - Premium Drinking Water",
    description:
      "Pure, refreshing water delivered to your doorstep. Available in 500ml, 1L, 2L bottles and 20L jars.",
    type: "website",
    siteName: "Poyodhara",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
        <WhatsAppButton/>
      </body>
    </html>
  );
}

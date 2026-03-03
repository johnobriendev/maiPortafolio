import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://yoursite.com" // TODO: set NEXT_PUBLIC_SITE_URL env var in Vercel
  ),
  title: {
    default: "Mailen Ichochea",
    template: "%s | Mailen Ichochea",
  },
  description:
    "Beauty, lifestyle, and self-care content creator. Watch my latest videos and get in touch for collaborations.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yoursite.com", // TODO: Update with real URL once domain is set
    siteName: "Mailen Ichochea",
  },
  twitter: {
    card: "summary_large_image",
    // creator: "@handle", // TODO: Add Twitter/X handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.variable} font-sans antialiased bg-brand-cream`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

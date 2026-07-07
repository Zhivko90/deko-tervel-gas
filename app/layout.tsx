import type { Metadata } from "next";
import { Oswald, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/data";

const oswald = Oswald({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${business.name} — ${business.tagline}`,
  description: business.intro,
  openGraph: {
    title: `${business.name} — ${business.tagline}`,
    description: business.intro,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg" className={`${oswald.variable} ${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

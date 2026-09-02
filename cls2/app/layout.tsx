import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display, Cinzel } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "CustomListingSite 2.0 | Self-Optimizing Single-Property Luxury Engine | MattyJacks LLC",
  description: "The world's first self-optimizing single-property real estate platform. Next.js 15 edge performance, Bayesian multi-armed bandit optimization, Microsoft Clarity-style mouse tracking, Google Antigravity cloud harness, and full New Hampshire RSA 507-H privacy compliance.",
  keywords: [
    "single property website",
    "luxury real estate",
    "self-optimizing real estate website",
    "77 Example Road Chester NH",
    "MattyJacks LLC",
    "real estate marketing",
    "multi armed bandit real estate"
  ],
  authors: [{ name: "MattyJacks LLC", url: "https://mattyjacks.com" }],
  openGraph: {
    title: "CustomListingSite 2.0 | Self-Optimizing Luxury Real Estate Engine",
    description: "Experience 77 Example Road, Chester NH with 360° Street View, CAD blueprints, and self-learning conversion science.",
    url: "https://customlistingsite.com",
    siteName: "CustomListingSite 2.0",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "77 Example Road, Chester NH 03036"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap"
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap"
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} ${playfair.variable} ${cinzel.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

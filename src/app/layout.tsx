import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Explore DFW | Discover Dallas-Fort Worth",
  description: "Your curated guide to the best restaurants, attractions, events, and hidden gems across the Dallas-Fort Worth metroplex.",
  keywords: ["Dallas", "Fort Worth", "DFW", "things to do", "restaurants", "attractions", "events", "Texas"],
  openGraph: {
    title: "Explore DFW | Discover Dallas-Fort Worth",
    description: "Your curated guide to the best of Dallas-Fort Worth",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-cream-50 text-ink-900 antialiased">
        {children}
      </body>
    </html>
  );
}

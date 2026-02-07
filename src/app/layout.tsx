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
  title: {
    default: "Explore DFW | Discover Dallas-Fort Worth",
    template: "%s | Explore DFW",
  },
  description: "Your curated guide to the best restaurants, attractions, events, and hidden gems across the Dallas-Fort Worth metroplex. Discover BBQ, Tex-Mex, museums, nightlife, and more.",
  keywords: ["Dallas", "Fort Worth", "DFW", "things to do", "restaurants", "attractions", "events", "Texas", "Deep Ellum", "Bishop Arts", "Uptown", "BBQ", "Tex-Mex"],
  authors: [{ name: "Explore DFW" }],
  creator: "Explore DFW",
  metadataBase: new URL("https://dfw-directory.vercel.app"),
  openGraph: {
    title: "Explore DFW | Discover Dallas-Fort Worth",
    description: "Your curated guide to the best of Dallas-Fort Worth. 500+ restaurants, 200+ things to do, 15 neighborhoods.",
    type: "website",
    locale: "en_US",
    siteName: "Explore DFW",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore DFW | Discover Dallas-Fort Worth",
    description: "Your curated guide to the best of Dallas-Fort Worth",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-cream-50 text-ink-900 antialiased">
        {children}
      </body>
    </html>
  );
}

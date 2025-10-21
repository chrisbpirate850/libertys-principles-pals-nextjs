import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://libertysprinciplespals.com'),
  title: {
    default: "Liberty's Principles Pals - Civics Education for Children",
    template: "%s | Liberty's Principles Pals"
  },
  description: "A magical children's book series that teaches timeless principles of freedom through fun stories and lovable characters. Perfect for ages 2-10, homeschool families, and civic education.",
  keywords: ["children's books", "civics education", "homeschool", "freedom principles", "character education", "patriotic education", "American values", "kids books", "founding principles", "liberty education"],
  authors: [{ name: "Christopher J. Bradley" }],
  creator: "Christopher J. Bradley",
  publisher: "Liberty's Principles Media",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://libertysprinciplespals.com',
    siteName: "Liberty's Principles Pals",
    title: "Liberty's Principles Pals - Civics Education for Children",
    description: "Teaching timeless principles of freedom through magical garden adventures for ages 2-10",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Liberty's Principles Pals",
    description: "Teaching freedom's principles through magical stories",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${nunito.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/customcursor";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  style: ["normal", "italic"], 
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://royalmedicare.vercel.app"),  // 👈 add this
  title: "Royal Medicare — Senior Care & Elderly",
  description: "...",
  openGraph: {
    title: "Royal Medicare — Compassionate Elderly Care in Ikorodu, Lagos",
    description: "Round-the-clock nursing and personal care for seniors in Ikorodu, Lagos.",
    url: "https://royalmedicare.vercel.app",
    siteName: "Royal Medicare",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/logos/meta.jpg",  // this now works because metadataBase fills in the rest
        width: 1200,
        height: 630,
        alt: "Royal Medicare — Compassionate Elderly Care",
        type: "image/jpeg",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en" className={`${jakarta.variable} ${lora.variable}`}>
    <body className="font-sans antialiased bg-white">
      <CustomCursor />
      {children}
    </body>
  </html>
  );
}
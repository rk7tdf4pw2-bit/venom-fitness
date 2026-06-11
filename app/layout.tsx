import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Venom Fitness Club | Premium Fitness, Wellness ve AI Fitness Coach",
  description:
    "Venom Fitness Club; 1200 m² premium fitness alanı, reformer pilates, sauna, buhar odası, temiz havlu hizmeti ve yakında AI Fitness Coach ayrıcalığı sunar.",
  keywords: [
    "Venom Fitness Club",
    "premium fitness",
    "reformer pilates",
    "sauna",
    "buhar odası",
    "AI Fitness Coach",
    "Van fitness",
    "kişisel antrenör"
  ],
  openGraph: {
    title: "Venom Fitness Club",
    description:
      "Premium Fitness + Wellness + AI Fitness Coach deneyimini 1200 m² lüks antrenman ortamında yaşayın.",
    type: "website",
    locale: "tr_TR"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${barlowCondensed.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}

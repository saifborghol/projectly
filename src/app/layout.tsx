import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Projectly",
  description: "A modern UI project with Aceternity and Next.js",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "Projectly",
  },
  twitter: {
    creator: "@yourhandle",
    site: "@yourhandle",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} font-sans antialiased bg-black text-white`}
      >
        <Background />
        {children}
      </body>
    </html>
  );
}

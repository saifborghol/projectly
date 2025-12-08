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
  title: "Projecly - AI Integration & Intelligent Digital Solutions",
  description: "Projecly is a next-gen IT agency delivering AI integration, intelligent automation, chatbots, data governance, cloud infrastructure, and 24/7 support. We turn complexity into intelligent growth through cutting-edge technology solutions.",
  keywords: [
    "AI Integration",
    "Intelligent Solutions",
    "Chatbots",
    "Autonomous Agents",
    "Data Governance",
    "Digital Transformation",
    "Cloud Infrastructure",
    "IT Agency",
    "Automation",
    "Machine Learning",
    "Digital Platforms",
    "Product Engineering",
    "IT Consulting",
    "24/7 Support"
  ],
  authors: [{ name: "Projecly Team" }],
  creator: "Projecly",
  publisher: "Projecly",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.projectly.com/",
    siteName: "Projecly",
    title: "Projecly - AI Integration & Intelligent Digital Solutions",
    description: "Next-generation IT agency specializing in AI integration, intelligent automation, chatbots, data governance, and cloud infrastructure. We empower teams with cutting-edge technology solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Projecly - AI Integration & Intelligent Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projecly - AI Integration & Intelligent Digital Solutions",
    description: "Next-gen IT agency delivering AI integration, automation, chatbots, data governance & cloud infrastructure. Turn complexity into intelligent growth.",
    creator: "@projectly",
    site: "@projectly",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.projectly.com/",
  },
  category: "Technology",
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

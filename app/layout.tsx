import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kiso.dev"),
  title: {
    default: "Kiso | Minimalism Redefined",
    template: "%s | Kiso",
  },
  description: "Minimalism in its purest form - Kiso brings simplicity to life",
  keywords: ["minimalism", "design", "development", "portfolio"],
  authors: [{ name: "Kiso" }],
  creator: "Kiso",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kiso.dev",
    title: "Kiso | Minimalism Redefined",
    description:
      "Minimalism in its purest form - Kiso brings simplicity to life",
    siteName: "Kiso",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiso | Minimalism Redefined",
    description:
      "Minimalism in its purest form - Kiso brings simplicity to life",
    creator: "@kiso",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
    // other verification tokens as needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

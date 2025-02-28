import type { Metadata } from "next";
import Link from "next/link";
import MainLayout from "@/components/main-layout";
import ThemeToggle from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Kiso | Minimalism Redefined",
  description: "Minimalism in its purest form - Kiso brings simplicity to life",
  openGraph: {
    title: "Kiso | Minimalism Redefined",
    description:
      "Minimalism in its purest form - Kiso brings simplicity to life",
    images: [
      {
        url: "https://kiso.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Kiso - Minimalism Redefined",
      },
    ],
  },
};

export default function Home() {
  return (
    <MainLayout showHeader={false}>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
        <div className="fixed top-8 right-8">
          <ThemeToggle />
        </div>

        <nav className="flex space-x-8 mb-16">
          <Link
            href="/works"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            works
          </Link>
          <Link
            href="/uses"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            uses
          </Link>
          <Link
            href="/posts"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            posts
          </Link>
        </nav>

        <div className="relative mb-8">
          <div className="w-24 h-24 rounded-full border border-muted flex items-center justify-center glow">
            <div className="w-16 h-16 rounded-full bg-muted"></div>
          </div>
        </div>

        <h1 className="text-6xl font-light mb-6 text-foreground">Kiso</h1>
        <p className="text-muted-foreground max-w-md mb-12">
          Minimalism is not about having less.
          <br />
          It&apos;s about making room for what matters.
        </p>

        <Link
          href="/explore"
          className="border border-muted px-8 py-3 hover:bg-foreground/10 transition-colors text-foreground"
        >
          EXPLORE
        </Link>
      </div>
    </MainLayout>
  );
}

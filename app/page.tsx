import Logo from "@/components/circle-logo";
import ThemeToggle from "@/components/theme-toggle";
import type { Metadata } from "next";
import Link from "next/link";

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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 bg-white dark:bg-black">
      {/* 상단 네비게이션과 테마 토글을 포함하는 헤더 */}
      <header className="fixed top-0 w-full px-4 sm:px-8 py-4 sm:py-8 flex justify-between items-center">
        {/* 네비게이션 - 중앙 정렬 */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-8 text-sm tracking-wide text-black/70 dark:text-white/70">
          <Link
            href="/works"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            works
          </Link>
          <span className="text-black/30 dark:text-white/30">·</span>
          <Link
            href="/uses"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            uses
          </Link>
          <span className="text-black/30 dark:text-white/30">·</span>
          <Link
            href="/posts"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            posts
          </Link>
        </nav>

        {/* 테마 토글 - 오른쪽 정렬 */}
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </header>

      <main className="w-full max-w-[90vw] sm:max-w-2xl space-y-12 sm:space-y-20 text-center mt-16 sm:mt-20">
        <div className="flex flex-col items-center gap-8 sm:gap-12">
          <Logo />
          <h1 className="text-5xl sm:text-7xl font-extralight tracking-tight text-black dark:text-white">
            Ki<span className="font-light">so</span>
          </h1>
        </div>

        <p className="text-lg sm:text-xl text-black/70 dark:text-white/70 font-extralight tracking-wide max-w-lg mx-auto">
          Minimalism is not about having less.
          <br />
          It&apos;s about making room for more of what matters.
        </p>

        <div className="pt-4">
          <Link
            href="mailto:contact@kiso.dev"
            className="group relative inline-block"
          >
            {/* 네온 효과 배경 */}
            <div className="absolute -inset-3 rounded-lg bg-black/20 dark:bg-white/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* 버튼 */}
            <span
              className="relative inline-block px-12 py-4 text-sm tracking-widest bg-black text-white dark:bg-white dark:text-black
              shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)]
              group-hover:shadow-[0_0_30px_rgba(0,0,0,0.4)] dark:group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]
              transition-all"
            >
              EXPLORE
            </span>
          </Link>
        </div>
      </main>

      <footer className="absolute bottom-4 sm:bottom-8 flex flex-col items-center gap-4 text-sm text-black/50 dark:text-white/50">
        <div>© {new Date().getFullYear()} Kiso. All rights reserved.</div>
      </footer>
    </div>
  );
}

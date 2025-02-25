import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white dark:bg-black">
      {/* 상단 네비게이션 */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 flex items-center gap-8 text-sm tracking-wide text-black/70 dark:text-white/70">
        <a
          href="/works"
          className="hover:text-black dark:hover:text-white transition-colors"
        >
          works
        </a>
        <span className="text-black/30 dark:text-white/30">·</span>
        <a
          href="/uses"
          className="hover:text-black dark:hover:text-white transition-colors"
        >
          uses
        </a>
      </nav>

      <ThemeToggle />

      <main className="max-w-2xl w-full space-y-20 text-center">
        <div className="flex flex-col items-center gap-12">
          <Logo />
          <h1 className="text-7xl font-extralight tracking-tight text-black dark:text-white">
            Ki<span className="font-light">so</span>
          </h1>
        </div>

        <p className="text-xl text-black/70 dark:text-white/70 font-extralight tracking-wide max-w-lg mx-auto">
          Minimalism is not about having less.
          <br />
          It&apos;s about making room for more of what matters.
        </p>

        <div className="pt-4">
          <a href="#contact" className="group relative inline-block">
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
          </a>
        </div>
      </main>

      <footer className="absolute bottom-8 flex flex-col items-center gap-4 text-sm text-black/50 dark:text-white/50">
        <a
          href="mailto:contact@kiso.dev"
          className="hover:text-black dark:hover:text-white transition-colors tracking-wide"
        >
          contact@kiso.dev
        </a>
        <div>© {new Date().getFullYear()} Kiso. All rights reserved.</div>
      </footer>
    </div>
  );
}

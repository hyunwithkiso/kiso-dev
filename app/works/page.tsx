import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works",
  description: "Projects and works",
  openGraph: {
    title: "Works | Kiso",
    description: "Projects and works",
    images: [
      {
        url: "https://kiso.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Kiso - Works",
      },
    ],
  },
};

export default function Works() {
  const works = [
    {
      title: "Project One",
      description: "A minimal approach to digital design",
      year: "2024",
      link: "#",
    },
    {
      title: "Project Two",
      description: "Simplicity in motion",
      year: "2023",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col p-8 bg-white dark:bg-black">
      {/* 헤더 */}
      <header className="fixed top-8 left-8">
        <Link
          href="/"
          className="text-sm tracking-wide text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
        >
          ← back
        </Link>
      </header>

      <main className="max-w-2xl mx-auto w-full pt-32">
        <h1 className="text-3xl font-extralight mb-16 text-black dark:text-white">
          Selected Works
        </h1>

        <div className="space-y-16">
          {works.map((work, index) => (
            <Link key={index} href={work.link} className="group block">
              <article className="space-y-4">
                <div className="aspect-[16/9] bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden">
                  {/* 프로젝트 썸네일 이미지가 들어갈 자리 */}
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-xl font-light text-black dark:text-white group-hover:text-black/70 dark:group-hover:text-white/70 transition-colors">
                    {work.title}
                  </h2>
                  <span className="text-sm text-black/50 dark:text-white/50">
                    {work.year}
                  </span>
                </div>
                <p className="text-black/70 dark:text-white/70 font-light">
                  {work.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description: "Tools and technologies I use for my work and daily life",
  openGraph: {
    title: "Uses | Kiso",
    description: "Tools and technologies I use for my work and daily life",
    images: [
      {
        url: "https://kiso.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Kiso - Tools and Technologies",
      },
    ],
  },
};

export default function Uses() {
  const categories = [
    {
      title: "Workspace",
      items: [
        {
          name: 'MacBook Pro 14"',
          description: "M3 Max, 36GB RAM",
        },
        {
          name: "Studio Display",
          description: "27-inch 5K Retina display",
        },
      ],
    },
    {
      title: "Development",
      items: [
        {
          name: "Cursor",
          description: "My primary code editor",
        },
        {
          name: "iTerm2",
          description: "Terminal emulator",
        },
      ],
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
          Uses
        </h1>

        <div className="space-y-16">
          {categories.map((category, index) => (
            <section key={index} className="space-y-8">
              <h2 className="text-xl font-light text-black dark:text-white">
                {category.title}
              </h2>

              <div className="space-y-8">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group space-y-2">
                    <h3 className="text-lg text-black/90 dark:text-white/90 font-light">
                      {item.name}
                    </h3>
                    <p className="text-black/70 dark:text-white/70 font-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

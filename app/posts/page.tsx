import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "Thoughts on minimalism, design, and development",
  openGraph: {
    title: "Posts | Kiso",
    description: "Thoughts on minimalism, design, and development",
    images: [
      {
        url: "https://kiso.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Kiso - Blog Posts",
      },
    ],
  },
};

type Post = {
  id: string;
  title: string;
  date: string;
  description: string;
};

// 임시 데이터 (실제로는 DB나 CMS에서 가져올 것)
async function getPosts(): Promise<Post[]> {
  return [
    {
      id: "minimalism-in-code",
      title: "Minimalism in Code",
      date: "2024-02-25",
      description:
        "How to write cleaner, more maintainable code through minimalist principles",
    },
    {
      id: "design-systems",
      title: "Building Design Systems",
      date: "2024-02-20",
      description:
        "A systematic approach to creating consistent, scalable design systems",
    },
  ];
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen flex flex-col p-8 bg-background">
      {/* 헤더 */}
      <header className="fixed top-8 left-8">
        <Link
          href="/"
          className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
        >
          ← back
        </Link>
      </header>

      <main className="max-w-2xl mx-auto w-full pt-32">
        <h1 className="text-3xl font-extralight mb-16 text-foreground">
          Posts
        </h1>

        <div className="space-y-16">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/post/${post.id}`}>
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-xl font-light text-foreground group-hover:text-muted-foreground transition-colors">
                      {post.title}
                    </h2>
                    <time className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <p className="text-muted-foreground font-light">
                    {post.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

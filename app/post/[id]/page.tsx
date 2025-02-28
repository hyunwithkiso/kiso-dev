import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

type Post = {
  id: string;
  title: string;
  date: string;
  description: string;
  content: string;
};

async function getPost(id: string): Promise<Post | null> {
  const posts = {
    "minimalism-in-code": {
      id: "minimalism-in-code",
      title: "Minimalism in Code",
      date: "2024-02-25",
      description:
        "How to write cleaner, more maintainable code through minimalist principles",
      content: "Content will be here...",
    },
    "design-systems": {
      id: "design-systems",
      title: "Building Design Systems",
      date: "2024-02-20",
      description:
        "A systematic approach to creating consistent, scalable design systems",
      content: "Content will be here...",
    },
  };

  return posts[id as keyof typeof posts] || null;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const slug = (await params).id;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | Kiso`,
      description: post.description,
      images: [
        {
          url: `https://kiso.dev/og-post-${post.id}.png`,
          width: 1200,
          height: 630,
          alt: `Kiso - ${post.title}`,
        },
      ],
    },
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const slug = (await params).id;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col p-8 bg-background">
      {/* 헤더 */}
      <header className="fixed top-8 left-8">
        <Link
          href="/posts"
          className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
        >
          ← back to posts
        </Link>
      </header>

      <main className="max-w-2xl mx-auto w-full pt-32">
        <article className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-extralight text-foreground">
              {post.title}
            </h1>
            <time className="block text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </header>

          <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none">
            {post.content}
          </div>
        </article>
      </main>
    </div>
  );
}

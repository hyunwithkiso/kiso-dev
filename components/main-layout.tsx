import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  currentPath?: string;
}

export default function MainLayout({
  children,
  showHeader = true,
  showFooter = true,
  currentPath = "",
}: MainLayoutProps) {
  const isActive = (path: string) => currentPath === path;

  return (
    <div className="min-h-screen p-6 flex flex-col">
      {showHeader && (
        <header className="py-6 mb-12 flex justify-between items-center border-b border-zinc-800">
          <Link href="/" className="text-xl font-light">
            Kiso
          </Link>
          <nav className="flex space-x-8">
            <Link
              href="/explore"
              className={`text-sm ${
                isActive("/explore") ? "text-white" : "text-zinc-400"
              } hover:text-white transition-colors`}
            >
              Explore
            </Link>
            <Link
              href="/posts"
              className={`text-sm ${
                isActive("/posts") ? "text-white" : "text-zinc-400"
              } hover:text-white transition-colors`}
            >
              Posts
            </Link>
            <Link
              href="/members"
              className={`text-sm ${
                isActive("/members") ? "text-white" : "text-zinc-400"
              } hover:text-white transition-colors`}
            >
              Members
            </Link>
          </nav>
          <Button variant="outline" className="border-zinc-700 text-sm">
            Sign In
          </Button>
        </header>
      )}

      <main className="flex-1">{children}</main>

      {showFooter && (
        <footer className="py-8 mt-16 border-t border-zinc-800 text-center text-xs text-zinc-500">
          <div className="max-w-4xl mx-auto">
            <p>© 2025 Kiso. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

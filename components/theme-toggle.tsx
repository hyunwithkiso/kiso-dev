"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        localStorage.theme === "dark" ||
        (!localStorage.theme &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      } else {
        setTheme("light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 right-8 w-10 h-10 flex items-center justify-center dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors rounded-full"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
          strokeWidth={1}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.314 11.252A7.29 7.29 0 0 1 13.5 11.812c-4.039 0-7.312-3.273-7.312-7.312 0-.998.2-1.948.561-2.814A7.315 7.315 0 0 0 2.25 8.437C2.25 12.476 5.523 15.75 9.562 15.75a7.315 7.315 0 0 0 6.752-4.498Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
          strokeWidth={1}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 2.25v1.688M13.773 4.29l-1.193 1.193M15.75 9h-1.688m-.29 4.773l-1.193-1.193M9 14.062V15.75m-3.58-3.17-1.193 1.193M3.938 9H2.25m3.17-3.58L4.227 4.227M11.812 9a2.812 2.812 0 1 1-5.624 0 2.812 2.812 0 0 1 5.624 0Z"
          />
        </svg>
      )}
    </button>
  );
}

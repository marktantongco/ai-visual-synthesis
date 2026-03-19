"use client";

import { useState, useEffect, useCallback } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

type Theme = "light" | "dark" | "system";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Get system preference
  const getSystemTheme = useCallback((): "light" | "dark" => {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }, []);

  // Apply theme to document
  const applyTheme = useCallback((newTheme: Theme) => {
    const effectiveTheme = newTheme === "system" ? getSystemTheme() : newTheme;
    
    const root = document.documentElement;
    
    if (effectiveTheme === "dark") {
      root.classList.add("dark");
      root.style.setProperty("--bg-primary", "#0D0D0D");
      root.style.setProperty("--bg-secondary", "#1A1A1A");
      root.style.setProperty("--text-primary", "#F5F5F0");
      root.style.setProperty("--text-secondary", "#999999");
      document.body.style.background = "#0D0D0D";
      document.body.style.color = "#F5F5F0";
    } else {
      root.classList.remove("dark");
      root.style.setProperty("--bg-primary", "#F5F5F0");
      root.style.setProperty("--bg-secondary", "#EBEBE0");
      root.style.setProperty("--text-primary", "#0D0D0D");
      root.style.setProperty("--text-secondary", "#666666");
      document.body.style.background = "#F5F5F0";
      document.body.style.color = "#0D0D0D";
    }
  }, [getSystemTheme]);

  // Initialize theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("avs-theme") as Theme | null;
    const initialTheme = saved || "light";
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [applyTheme, theme]);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("avs-theme", newTheme);
    applyTheme(newTheme);
  };

  if (!mounted) return null;

  const themes: { id: Theme; label: string; icon: React.ReactNode }[] = [
    { id: "light", label: "Light", icon: <Sun className="w-4 h-4" /> },
    { id: "dark", label: "Dark", icon: <Moon className="w-4 h-4" /> },
    { id: "system", label: "System", icon: <Monitor className="w-4 h-4" /> }
  ];

  return (
    <div className="flex items-center gap-0 p-1 bg-brutal-gray/10 border-2 border-brutal-black">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => changeTheme(t.id)}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
            theme === t.id
              ? "bg-brutal-yellow text-brutal-black"
              : "text-brutal-gray hover:text-brutal-black"
          }`}
          title={t.label}
        >
          {t.icon}
          <span className="hidden sm:inline">{t.label}</span>
        </button>
      ))}
    </div>
  );
}

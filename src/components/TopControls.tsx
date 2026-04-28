import { Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Language } from "@/lib/translations";

interface TopControlsProps {
  lang: Language;
  setLang: (lang: Language) => void;
  hideTheme?: boolean;
}

export function TopControls({ lang, setLang, hideTheme }: TopControlsProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2">
      {/* Language Toggle */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLang(lang === "en" ? "pl" : "en")}
        className="rounded-full bg-background/50 backdrop-blur-md border border-border shadow-sm hover:bg-accent transition-all font-semibold min-w-[60px]"
      >
        <Languages className="w-4 h-4 mr-2 opacity-70" />
        {lang === "en" ? "PL" : "EN"}
      </Button>

      {/* Theme Toggle */}
      {!hideTheme && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full bg-background/50 backdrop-blur-md border border-border shadow-sm hover:bg-accent transition-all"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      )}
    </div>
  );
}

import { Link } from "wouter";
import { Menu, X, Code2, Moon, Sun, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const toggleLang = () => setLang(lang === "ar" ? "en" : "ar");

  const links = [
    { name: t("nav.home"), href: "#hero" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
            <Code2 className="w-6 h-6 text-primary" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            {t("logo.dev")}<span className="text-primary">{t("logo.web")}</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-2 border-l border-border/50 pl-4 rtl:border-l-0 rtl:border-r rtl:pr-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={toggleLang} className="gap-2 font-bold">
              <Globe className="w-4 h-4" />
              {lang === "ar" ? "EN" : "AR"}
            </Button>
            <Button 
              className="rounded-full font-bold"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t("nav.start")}
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <button
            className="p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-foreground py-2 border-b border-border/50"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {link.name}
            </a>
          ))}
          <Button variant="outline" onClick={toggleLang} className="w-full gap-2">
            <Globe className="w-4 h-4" />
            {lang === "ar" ? "English" : "العربية"}
          </Button>
          <Button 
            className="w-full rounded-full font-bold"
            onClick={() => {
              setIsOpen(false);
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t("nav.start")}
          </Button>
        </div>
      )}
    </nav>
  );
}

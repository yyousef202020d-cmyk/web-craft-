import { Link, useLocation } from "wouter";
import { Menu, X, Code2, Moon, Sun, Globe, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const { lang, setLang, t } = useLanguage();
  const [location] = useLocation();

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (location !== "/") {
      window.location.href = "/" + href;
      return;
    }
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer flex-shrink-0">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
            <Code2 className="w-6 h-6 text-primary" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:inline-block">
            {t("logo.dev")}<span className="text-primary">{t("logo.web")}</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <div className="flex items-center gap-4 lg:gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-2 border-l border-border/50 pl-4 rtl:border-l-0 rtl:border-r rtl:pr-4">
            {/* Pricing Button - Desktop */}
            <Link href="/pricing">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-4 lg:px-6 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold flex-shrink-0 flex items-center gap-2 overflow-hidden group mx-2 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
              >
                <motion.div
                  animate={{ 
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <Sparkles className="absolute top-1 right-1 w-2 h-2 text-yellow-400 animate-pulse" />
                  <Sparkles className="absolute bottom-1 left-2 w-2 h-2 text-yellow-500 animate-pulse delay-75" />
                </motion.div>
                <span className="relative z-10">{t("nav.pricing")}</span>
              </motion.button>
            </Link>

            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={toggleLang} className="gap-2 font-bold min-w-[60px]">
              <Globe className="w-4 h-4" />
              {lang === "ar" ? "EN" : "AR"}
            </Button>
            <Button 
              className="rounded-full font-bold px-6"
              onClick={() => {
                if (location !== "/") {
                  window.location.href = "/#contact";
                  return;
                }
                setIsOpen(false);
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t("nav.start")}
            </Button>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Pricing Button - Mobile (Always Visible) */}
          <Link href="/pricing">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold flex items-center gap-1 overflow-hidden group"
            >
              <Sparkles className="w-3 h-3 text-yellow-400 animate-pulse" />
              <span className="relative z-10">{t("nav.pricing")}</span>
            </motion.button>
          </Link>

          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full w-9 h-9">
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
          <button
            className="p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-4 overflow-hidden"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-foreground py-4 border-b border-border/50"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="outline" onClick={toggleLang} className="w-full gap-2">
              <Globe className="w-4 h-4" />
              {lang === "ar" ? "English" : "العربية"}
            </Button>
            <Button 
              className="w-full rounded-full font-bold h-14"
              onClick={() => {
                setIsOpen(false);
                if (location !== "/") {
                  window.location.href = "/#contact";
                  return;
                }
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t("nav.start")}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

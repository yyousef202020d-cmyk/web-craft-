import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown, Home } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Link } from "wouter";

export default function Pricing() {
  const { t, lang } = useLanguage();

  const plan = {
    name: t("pricing.professional"),
    price: lang === "ar" ? "1749" : "49",
    icon: Crown,
    features: lang === "ar" ? ["حتى 5 صفحات", "لوحة تحكم بسيطة", "تحسين محركات البحث SEO", "دعم فني لمدة 3 أشهر", "تعديلات غير محدودة"] : ["Up to 5 Pages", "Simple Dashboard", "SEO Optimization", "3 Months Technical Support", "Unlimited Revisions"],
    recommended: true
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-8">
               <Link href="/">
                <Button variant="ghost" className="rounded-full gap-2 text-primary hover:bg-primary/10">
                  <Home className="w-4 h-4" />
                  {t("pricing.back")}
                </Button>
               </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              {t("pricing.title")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("pricing.subtitle")}
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              <Card className="relative h-full border-2 border-primary shadow-[0_0_30px_rgba(139,92,246,0.2)] bg-primary/5 transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  {t("pricing.best")}
                </div>
                
                <CardHeader className="text-center pt-10">
                  <div className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center mb-6 bg-primary text-white">
                    <plan.icon className="w-10 h-10" />
                  </div>
                  <CardTitle className="text-3xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-lg text-muted-foreground font-medium me-1">
                      {t("pricing.fixed")}
                    </span>
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground text-xl">{lang === "ar" ? "ج.م" : "$"}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8 pt-6 pb-10">
                  <ul className="space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full h-14 rounded-xl font-bold text-xl bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all hover:scale-[1.02]"
                    onClick={() => {
                      window.location.href = "/#contact";
                    }}
                  >
                    {t("pricing.cta")}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Rocket, Crown, Star, Laptop, Briefcase, FileText, Home } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Link } from "wouter";

export default function Pricing() {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<"web" | "portfolio" | "store" | "cv">("web");

  const pricingData = {
    web: [
      {
        name: lang === "ar" ? "الاحترافي" : "Professional",
        price: lang === "ar" ? "749" : "20",
        icon: Crown,
        features: lang === "ar" 
          ? ["تصميم عصري متجاوب", "ربط مباشر بالواتساب", "سرعة تحميل فائقة", "تجهيز محركات البحث SEO", "حماية وتأمين الموقع"] 
          : ["Modern Responsive Design", "Direct WhatsApp Integration", "Ultra-fast Loading Speed", "Basic SEO Preparation", "Site Security & Protection"],
        recommended: true
      }
    ],
    portfolio: [
      {
        name: lang === "ar" ? "المبدع" : "Creative",
        price: lang === "ar" ? "499" : "25",
        icon: Crown,
        features: lang === "ar" 
          ? ["معرض أعمال تفاعلي", "قسم للشهادات والتقييمات", "أنيميشن احترافي للعناصر", "صفحة 'من أنا' إبداعية", "ربط كلي بمنصات التواصل"] 
          : ["Interactive Project Gallery", "Testimonials Section", "Professional Animations", "Creative 'About' Page", "Full Social Integration"],
        recommended: true
      }
    ],
    store: [
      {
        name: lang === "ar" ? "متجر البراند" : "Brand Store",
        price: lang === "ar" ? "999" : "39",
        icon: Crown,
        features: lang === "ar" 
          ? ["متجر سريع وسهل الاستخدام", "نظام سلة مشتريات ذكي", "لوحة تحكم لإدارة المنتجات", "تتبع الطلبات عبر الواتساب", "عرض مميز للمنتجات والخصومات"] 
          : ["Fast User-friendly Store", "Smart Shopping Cart", "Product Admin Dashboard", "WhatsApp Order Tracking", "Featured Products Display"],
        recommended: true
      }
    ],
    cv: [
      {
        name: lang === "ar" ? "المتميز" : "Premium",
        price: lang === "ar" ? "249" : "10",
        icon: Crown,
        features: lang === "ar" 
          ? ["رابط ويب دائم باسمك", "تصميم احترافي بصفحة واحدة", "تحميل السيرة الذاتية PDF", "كود QR للمشاركة السريعة", "دعم اللغتين العربية والإنجليزية"] 
          : ["Permanent Web Link", "Professional 1-Page Layout", "Download as PDF", "QR Code for Sharing", "Bilingual Support (AR/EN)"],
        recommended: true
      }
    ]
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
              {lang === "ar" ? "خطط الأسعار" : "Pricing Plans"}
            </h1>
          </motion.div>

          {/* Service Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { id: "web", icon: Laptop, label: t("pricing.nav.web") },
              { id: "portfolio", icon: Briefcase, label: t("pricing.nav.portfolio") },
              { id: "store", icon: Rocket, label: t("pricing.nav.store") },
              { id: "cv", icon: FileText, label: t("pricing.nav.cv") },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === tab.id 
                  ? "bg-primary text-white shadow-lg scale-105" 
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className={`grid grid-cols-1 gap-8 ${
                pricingData[activeTab].length === 1 ? "max-w-md mx-auto" : "md:grid-cols-3"
              }`}
            >
              {pricingData[activeTab].map((plan, index) => (
                <Card key={index} className={`relative h-full border-2 transition-all duration-300 hover:scale-105 ${
                  plan.recommended ? "border-primary shadow-[0_0_30px_rgba(139,92,246,0.2)] bg-primary/5" : "border-border hover:border-primary/50"
                }`}>
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      {lang === "ar" ? "الأكثر طلباً" : "Most Popular"}
                    </div>
                  )}
                  
                  <CardHeader className="text-center pt-8">
                    <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-4 ${
                      plan.recommended ? "bg-primary text-white" : "bg-primary/10 text-primary"
                    }`}>
                      <plan.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="mt-4 flex items-baseline justify-center gap-1">
                      <span className="text-lg text-muted-foreground font-medium me-1">
                        {lang === "ar" ? "تبدأ من" : "From"}
                      </span>
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">{lang === "ar" ? "ج.م" : "$"}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6 pt-6">
                    <ul className="space-y-4">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full h-12 rounded-xl font-bold text-lg bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                      onClick={() => {
                        window.location.href = "/#contact";
                      }}
                    >
                      {lang === "ar" ? "ابدأ الآن" : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

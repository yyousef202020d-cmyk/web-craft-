import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Rocket, Crown, Star, Laptop, Briefcase, FileText, Home } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Link } from "wouter";

export default function Pricing() {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<"web" | "portfolio" | "cv">("web");

  const pricingData = {
    web: [
      {
        name: lang === "ar" ? "المصغر" : "Starter",
        price: lang === "ar" ? "1500" : "40",
        icon: Rocket,
        features: lang === "ar" ? ["صفحة واحدة احترافية", "تصميم متجاوب بالكامل", "ربط وسائل التواصل", "دعم فني لمدة شهر"] : ["One Professional Page", "Fully Responsive Design", "Social Media Integration", "1 Month Technical Support"],
        recommended: false
      },
      {
        name: lang === "ar" ? "الاحترافي" : "Professional",
        price: lang === "ar" ? "3500" : "90",
        icon: Crown,
        features: lang === "ar" ? ["حتى 5 صفحات", "لوحة تحكم بسيطة", "تحسين محركات البحث SEO", "دعم فني لمدة 3 أشهر", "تعديلات غير محدودة"] : ["Up to 5 Pages", "Simple Dashboard", "SEO Optimization", "3 Months Technical Support", "Unlimited Revisions"],
        recommended: true
      },
      {
        name: lang === "ar" ? "المتكامل" : "Enterprise",
        price: lang === "ar" ? "7500+" : "200+",
        icon: Star,
        features: lang === "ar" ? ["موقع متكامل / متجر", "نظام إدارة محتوى متقدم", "ربط بوابات دفع", "دعم فني لمدة سنة", "تدريب على الاستخدام"] : ["Full Website / Store", "Advanced CMS", "Payment Gateway Integration", "1 Year Technical Support", "User Training"],
        recommended: false
      }
    ],
    portfolio: [
      {
        name: lang === "ar" ? "الشخصي" : "Personal",
        price: lang === "ar" ? "1200" : "30",
        icon: Rocket,
        features: lang === "ar" ? ["صفحة تعريفية واحدة", "معرض صور للمشاريع", "روابط تواصل اجتماعي", "تصميم عصري"] : ["Single Bio Page", "Project Gallery", "Social Links", "Modern Design"],
        recommended: false
      },
      {
        name: lang === "ar" ? "المبدع" : "Creative",
        price: lang === "ar" ? "2500" : "65",
        icon: Crown,
        features: lang === "ar" ? ["تصميم مخصص بالكامل", "نظام تصفية للمشاريع", "أنيميشن متقدم", "دعم فني شهرين"] : ["Fully Custom Design", "Project Filtering", "Advanced Animations", "2 Months Support"],
        recommended: true
      },
      {
        name: lang === "ar" ? "الخبير" : "Expert",
        price: lang === "ar" ? "4500" : "115",
        icon: Star,
        features: lang === "ar" ? ["دومين مجاني لسنة", "كتابة محتوى احترافية", "تحسين محركات البحث", "تعديلات مدى الحياة"] : ["Free Domain 1 Year", "Pro Content Writing", "SEO Optimization", "Lifetime Edits"],
        recommended: false
      }
    ],
    cv: [
      {
        name: lang === "ar" ? "الأساسي" : "Basic",
        price: lang === "ar" ? "500" : "15",
        icon: Rocket,
        features: lang === "ar" ? ["سيرة ذاتية صفحة واحدة", "رابط QR مخصص", "تنزيل بصيغة PDF", "تنسيق احترافي"] : ["1-Page Interactive CV", "Custom QR Link", "PDF Download", "Professional Layout"],
        recommended: false
      },
      {
        name: lang === "ar" ? "المتميز" : "Premium",
        price: lang === "ar" ? "1000" : "25",
        icon: Crown,
        features: lang === "ar" ? ["رابط ويب خاص", "دعم لغتين", "أنيميشن للعناصر", "تعديلات لمدة سنة"] : ["Live Web Link", "Bilingual Support", "Element Animations", "1 Year Updates"],
        recommended: true
      },
      {
        name: lang === "ar" ? "الذهبي" : "Gold",
        price: lang === "ar" ? "1800" : "45",
        icon: Star,
        features: lang === "ar" ? ["فيديو تعريفي مدمج", "تتبع زيارات الـ CV", "تحليل كلمات مفتاحية", "دعم VIP"] : ["Integrated Intro Video", "Visit Tracking", "Keyword Analysis", "VIP Support"],
        recommended: false
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
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
                      className={`w-full h-12 rounded-xl font-bold text-lg ${
                        plan.recommended ? "bg-primary hover:bg-primary/90 text-white" : "bg-secondary hover:bg-secondary/80"
                      }`}
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

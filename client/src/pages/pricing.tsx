import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Rocket, Crown, Star } from "lucide-react";
import Navbar from "@/components/ui/navbar";

export default function Pricing() {
  const { t, lang } = useLanguage();

  const plans = [
    {
      name: lang === "ar" ? "المصغر" : "Starter",
      price: lang === "ar" ? "1500" : "40",
      icon: Rocket,
      features: lang === "ar" ? [
        "صفحة واحدة احترافية",
        "تصميم متجاوب بالكامل",
        "ربط وسائل التواصل",
        "دعم فني لمدة شهر",
      ] : [
        "One Professional Page",
        "Fully Responsive Design",
        "Social Media Integration",
        "1 Month Technical Support",
      ],
      recommended: false
    },
    {
      name: lang === "ar" ? "الاحترافي" : "Professional",
      price: lang === "ar" ? "3500" : "90",
      icon: Crown,
      features: lang === "ar" ? [
        "حتى 5 صفحات",
        "لوحة تحكم بسيطة",
        "تحسين محركات البحث SEO",
        "دعم فني لمدة 3 أشهر",
        "تعديلات غير محدودة"
      ] : [
        "Up to 5 Pages",
        "Simple Dashboard",
        "SEO Optimization",
        "3 Months Technical Support",
        "Unlimited Revisions"
      ],
      recommended: true
    },
    {
      name: lang === "ar" ? "المتكامل" : "Enterprise",
      price: lang === "ar" ? "7500+" : "200+",
      icon: Star,
      features: lang === "ar" ? [
        "موقع متكامل / متجر",
        "نظام إدارة محتوى متقدم",
        "ربط بوابات دفع",
        "دعم فني لمدة سنة",
        "تدريب على الاستخدام"
      ] : [
        "Full Website / Store",
        "Advanced CMS",
        "Payment Gateway Integration",
        "1 Year Technical Support",
        "User Training"
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              {lang === "ar" ? "خطط الأسعار" : "Pricing Plans"}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {lang === "ar" 
                ? "اختر الخطة المناسبة لمشروعك وابدأ رحلة النجاح الرقمي معنا اليوم."
                : "Choose the right plan for your project and start your digital success journey with us today."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`relative h-full border-2 transition-all duration-300 hover:scale-105 ${
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
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-muted-foreground text-sm md:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full h-12 rounded-xl font-bold text-lg ${
                        plan.recommended ? "bg-primary hover:bg-primary/90 text-white" : "bg-secondary hover:bg-secondary/80"
                      }`}
                      onClick={() => window.location.href = `https://wa.me/2010182902970?text=${encodeURIComponent(
                        lang === "ar" 
                          ? `مرحباً ويب كرافت، أود الاستفسار عن خطة ${plan.name}`
                          : `Hello Web Craft, I'd like to inquire about the ${plan.name} plan`
                      )}`}
                    >
                      {lang === "ar" ? "ابدأ الآن" : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

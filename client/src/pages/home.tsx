import { Navbar } from "@/components/ui/navbar";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Laptop, 
  FileText, 
  Briefcase, 
  ArrowLeft, 
  CheckCircle2, 
  Code2
} from "lucide-react";
import heroBg from "@assets/generated_images/abstract_dark_tech_background_with_neon_gradients.png";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useState, useEffect } from "react";

import { Toaster, toast } from "sonner";
import { MessageCircle, Globe2, Rocket, ShieldCheck, Target, Instagram } from "lucide-react";

export default function Home() {
  const { lang, t } = useLanguage();

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const performScroll = () => {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "auto" // Use "auto" for more reliable immediate jumps
            });
          };

          // Execute multiple times to catch layout shifts
          performScroll();
          const timers = [100, 300, 600, 1000, 2000].map(ms => setTimeout(performScroll, ms));
          
          return () => timers.forEach(clearTimeout);
        }
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    window.addEventListener('load', handleHashScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
      window.removeEventListener('load', handleHashScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 overflow-x-hidden">
      <Navbar />
      <Toaster position="top-center" expand={false} richColors />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/201208552424"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#8b5cf6] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-110 transition-transform active:scale-95 group animate-bounce-slow"
        aria-label="Contact on WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-[#8b5cf6] animate-ping opacity-20" />
        <MessageCircle className="w-8 h-8 text-white relative z-10" />
        <span className="absolute -top-12 right-0 bg-white text-[#8b5cf6] px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          {lang === 'ar' ? 'تواصل معنا' : 'Chat with us'}
        </span>
      </a>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-40 dark:opacity-40 opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="container relative z-10 px-6 text-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-12 mt-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium">{t("hero.badge")}</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-8 leading-[1.3] px-2 py-2">
              {t("hero.title1")} <br />
              <span className="text-gradient inline-block py-1">{t("hero.title2")}</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed px-4">
              {t("hero.desc")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg" 
                className="rounded-full text-lg h-16 px-10 w-full sm:w-auto glow shadow-xl hover:scale-105 transition-transform"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    const offset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
              >
                {t("hero.cta1")}
                <ArrowLeft className={`mr-2 h-6 w-6 transition-transform ${lang === 'en' ? 'rotate-180' : 'rotate-0'}`} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full text-lg h-16 px-10 w-full sm:w-auto bg-background/50 backdrop-blur-md border-white/10 hover:bg-white/5 shadow-lg"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const offset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
              >
                {t("hero.cta2")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-muted/20 relative border-y border-border/50">
        <div className="container px-6 mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">{t("services.title")}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("services.desc")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            <ServiceCard 
              icon={Laptop}
              title={t("services.web.title")}
              description={t("services.web.desc")}
            />
            <ServiceCard 
              icon={Briefcase}
              title={t("services.portfolio.title")}
              description={t("services.portfolio.desc")}
            />
            <ServiceCard 
              icon={Rocket}
              title={t("services.store.title")}
              description={t("services.store.desc")}
            />
            <ServiceCard 
              icon={FileText}
              title={t("services.cv.title")}
              description={t("services.cv.desc")}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-background overflow-hidden relative">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-display mb-8 md:mb-10 leading-tight">{t("why.title")}</h2>
              <div className="space-y-6 md:space-y-8">
                {[
                  t("why.item1"),
                  t("why.item2"),
                  t("why.item3"),
                  t("why.item4"),
                  t("why.item5")
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 md:gap-5"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <span className="text-lg md:text-xl font-medium leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-border bg-muted/20 flex items-center justify-center group shadow-2xl"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="relative text-center p-8 md:p-12 border border-white/10 bg-background/40 backdrop-blur-xl rounded-2xl max-w-xs transform group-hover:scale-110 transition-transform duration-700">
                 <div className="text-5xl md:text-6xl font-bold text-primary mb-2 md:mb-4">+500</div>
                 <div className="text-base md:text-xl text-muted-foreground uppercase tracking-widest font-bold">{t("why.stats")}</div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 md:py-40 relative overflow-hidden">
        <div className="container px-6 mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 md:mb-32"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display mb-8 leading-tight">{t("benefits.title")}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("benefits.desc")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe2, key: "item1" },
              { icon: ShieldCheck, key: "item2" },
              { icon: Rocket, key: "item3" },
              { icon: Target, key: "item4" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[2rem] bg-muted/20 border border-border/50 hover:border-primary/50 transition-all group hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t(`benefits.${benefit.key}.title`)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(`benefits.${benefit.key}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="container px-6 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">{t("faq.title")}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("faq.desc")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <AccordionItem 
                  key={item} 
                  value={`item-${item}`} 
                  className="bg-muted/30 border border-border/50 rounded-2xl px-6 data-[state=open]:bg-primary/5 data-[state=open]:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-lg md:text-xl font-bold py-6 hover:no-underline text-start text-foreground">
                    {t(`faq.q${item}`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pb-6">
                    {t(`faq.a${item}`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-muted/10">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container px-6 mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-display mb-6 md:mb-8">{t("contact.title")}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("contact.desc")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50 bg-card/60 backdrop-blur-md shadow-2xl overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
              <CardContent className="p-6 sm:p-10 md:p-16">
                <form 
                  action="https://formsubmit.co/hebaomarmm@gmail.com" 
                  method="POST" 
                  className="space-y-8 md:space-y-10"
                >
                  <input type="hidden" name="_subject" value="New Contact Form Submission from Web Craft" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="box" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <div className="space-y-4">
                      <label className="text-sm font-bold uppercase tracking-wider opacity-60 px-2 block">{t("contact.name")}</label>
                      <Input name="name" required placeholder={lang === 'ar' ? 'أدخل اسمك' : 'Enter your name'} className="bg-background/50 border-border h-14 md:h-16 text-lg md:text-xl px-6 md:px-8 rounded-xl md:rounded-2xl focus:ring-primary shadow-sm" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-sm font-bold uppercase tracking-wider opacity-60 px-2 block">{t("contact.email")}</label>
                      <Input 
                        name="contact"
                        required 
                        placeholder={t("contact.placeholder.email")}
                        className="bg-background/50 border-border h-14 md:h-16 text-lg md:text-xl px-6 md:px-8 rounded-xl md:rounded-2xl focus:ring-primary shadow-sm" 
                        onBlur={(e) => {
                          const val = e.target.value;
                          const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val);
                          const isPhone = /^[0-9+]{8,15}$/.test(val.replace(/\s/g, ''));
                          if (val && !isEmail && !isPhone) {
                            e.target.setCustomValidity(lang === 'ar' ? 'يرجى إدخال بريد إلكتروني صحيح أو رقم هاتف' : 'Please enter a valid email or phone number');
                          } else {
                            e.target.setCustomValidity('');
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-sm font-bold uppercase tracking-wider opacity-60 px-2 block">{t("contact.message")}</label>
                    <Textarea name="message" required placeholder={lang === 'ar' ? 'تفاصيل مشروعك...' : 'Project details...'} className="bg-background/50 border-border min-h-[180px] md:min-h-[220px] text-lg md:text-xl p-6 md:p-8 rounded-xl md:rounded-2xl resize-none focus:ring-primary shadow-sm" />
                  </div>
                  <Button type="submit" size="lg" className="w-full h-16 md:h-20 text-xl md:text-2xl font-bold rounded-xl md:rounded-2xl glow transition-all hover:scale-[1.01] active:scale-[0.98] shadow-xl disabled:opacity-70">
                    {t("contact.send")}
                  </Button>
                  
                  <div className="mt-8 text-center">
                    <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                      {t("contact.note")}
                    </p>
                    <div className="flex justify-center gap-4">
                      <a href="https://www.instagram.com/webcraft.t.t?igsh=MXIyaDgzY3Ixcm9uMw==" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted/30 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all hover:scale-110 rounded-full" aria-label="Instagram">
                        <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                      </a>
                      <a href="https://www.tiktok.com/@web.craft60?_r=1&_t=ZS-94IaGHOan8X" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted/30 hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all hover:scale-110 rounded-full" aria-label="TikTok">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
                          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                        </svg>
                      </a>
                      <a href="https://wa.me/201208552424" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted/30 hover:bg-[#25D366]/20 text-muted-foreground hover:text-[#25D366] transition-all hover:scale-110 rounded-full" aria-label="WhatsApp">
                        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                      </a>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 border-t border-border bg-background">
        <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 max-w-7xl">
          <div className="flex items-center gap-3">
            <Code2 className="w-6 h-6 md:w-8 h-8 text-primary" />
            <span className="font-bold text-xl md:text-2xl tracking-tight">{t("logo.dev")} {t("logo.web")}</span>
          </div>
          <p className="text-base md:text-lg text-muted-foreground text-center md:text-right">
            © 2026 {t("footer.rights")}
          </p>
          <div className="flex gap-4 md:gap-8">
            <a href="https://www.instagram.com/webcraft.t.t?igsh=MXIyaDgzY3Ixcm9uMw==" target="_blank" rel="noopener noreferrer" className="p-2 md:p-3 text-muted-foreground hover:text-primary transition-all hover:scale-125 bg-muted/20 rounded-full" aria-label="Instagram"><Instagram className="w-6 h-6 md:w-7 h-7" /></a>
            <a href="https://www.tiktok.com/@web.craft60?_r=1&_t=ZS-94IaGHOan8X" target="_blank" rel="noopener noreferrer" className="p-2 md:p-3 text-muted-foreground hover:text-[#000000] dark:hover:text-white transition-all hover:scale-125 bg-muted/20 rounded-full" aria-label="TikTok">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-6 h-6 md:w-7 h-7"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <a href="https://wa.me/201208552424" target="_blank" rel="noopener noreferrer" className="p-2 md:p-3 text-muted-foreground hover:text-[#25D366] transition-all hover:scale-125 bg-muted/20 rounded-full" aria-label="WhatsApp"><MessageCircle className="w-6 h-6 md:w-7 h-7" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

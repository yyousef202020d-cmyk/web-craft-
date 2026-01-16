import { Navbar } from "@/components/ui/navbar";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Laptop, 
  FileText, 
  Briefcase, 
  ArrowLeft, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Twitter,
  Code2
} from "lucide-react";
import heroBg from "@assets/generated_images/abstract_dark_tech_background_with_neon_gradients.png";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 overflow-hidden">
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

            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-8 leading-[1.2] md:leading-[1.2] px-2">
              {t("hero.title1")} <br />
              <span className="text-gradient">{t("hero.title2")}</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed px-4">
              {t("hero.desc")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg" 
                className="rounded-full text-lg h-16 px-10 w-full sm:w-auto glow shadow-xl hover:scale-105 transition-transform"
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t("hero.cta1")}
                <ArrowLeft className={`mr-2 h-6 w-6 transition-transform ${lang === 'en' ? 'rotate-180' : 'rotate-0'}`} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full text-lg h-16 px-10 w-full sm:w-auto bg-background/50 backdrop-blur-md border-white/10 hover:bg-white/5 shadow-lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t("hero.cta2")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-muted/20 relative border-y border-border/50">
        <div className="container px-6 mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">{t("services.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("services.desc")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
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
              icon={FileText}
              title={t("services.cv.title")}
              description={t("services.cv.desc")}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-background overflow-hidden relative">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <h2 className="text-3xl md:text-6xl font-bold font-display mb-10 leading-tight">{t("why.title")}</h2>
              <div className="space-y-8">
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
                    className="flex items-start gap-5"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xl font-medium leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-3xl overflow-hidden border border-border bg-muted/20 flex items-center justify-center group shadow-2xl"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="relative text-center p-12 border border-white/10 bg-background/40 backdrop-blur-xl rounded-2xl max-w-xs transform group-hover:scale-110 transition-transform duration-700">
                 <div className="text-6xl font-bold text-primary mb-4">+500</div>
                 <div className="text-xl text-muted-foreground uppercase tracking-widest font-bold">{t("why.stats")}</div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden bg-muted/10">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container px-6 mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-8">{t("contact.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("contact.desc")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50 bg-card/60 backdrop-blur-md shadow-2xl overflow-hidden rounded-[2rem]">
              <CardContent className="p-10 md:p-16">
                <form className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                      <label className="text-sm font-bold uppercase tracking-wider opacity-60 px-2 block">{t("contact.name")}</label>
                      <Input placeholder={lang === 'ar' ? 'أدخل اسمك' : 'Enter your name'} className="bg-background/50 border-border h-16 text-xl px-8 rounded-2xl focus:ring-primary shadow-sm" />
                    </div>
                    <div className="space-y-6">
                      <label className="text-sm font-bold uppercase tracking-wider opacity-60 px-2 block">{t("contact.email")}</label>
                      <Input placeholder="example@email.com" type="email" className="bg-background/50 border-border h-16 text-xl px-8 rounded-2xl focus:ring-primary shadow-sm" />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <label className="text-sm font-bold uppercase tracking-wider opacity-60 px-2 block">{t("contact.message")}</label>
                    <Textarea placeholder={lang === 'ar' ? 'تفاصيل مشروعك...' : 'Project details...'} className="bg-background/50 border-border min-h-[220px] text-xl p-8 rounded-2xl resize-none focus:ring-primary shadow-sm" />
                  </div>
                  <Button size="lg" className="w-full h-20 text-2xl font-bold rounded-2xl glow transition-all hover:scale-[1.01] active:scale-[0.98] shadow-xl">
                    {t("contact.send")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border bg-background">
        <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl">
          <div className="flex items-center gap-3">
            <Code2 className="w-8 h-8 text-primary" />
            <span className="font-bold text-2xl tracking-tight">{t("logo.dev")} {t("logo.web")}</span>
          </div>
          <p className="text-lg text-muted-foreground text-center md:text-right">
            © 2024 {t("footer.rights")}
          </p>
          <div className="flex gap-8">
            <a href="#" className="p-3 text-muted-foreground hover:text-primary transition-all hover:scale-125 bg-muted/20 rounded-full"><Github className="w-7 h-7" /></a>
            <a href="#" className="p-3 text-muted-foreground hover:text-primary transition-all hover:scale-125 bg-muted/20 rounded-full"><Linkedin className="w-7 h-7" /></a>
            <a href="#" className="p-3 text-muted-foreground hover:text-primary transition-all hover:scale-125 bg-muted/20 rounded-full"><Twitter className="w-7 h-7" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

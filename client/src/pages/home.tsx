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
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-40 dark:opacity-40 opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium">{t("hero.badge")}</span>
            </motion.div>

            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-6 leading-tight">
              {t("hero.title1")} <br />
              <span className="text-gradient">{t("hero.title2")}</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed px-4">
              {t("hero.desc")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="rounded-full text-lg h-14 px-8 w-full sm:w-auto glow"
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t("hero.cta1")}
                <ArrowLeft className={`mr-2 h-5 w-5 transition-transform ${lang === 'en' ? 'rotate-180' : 'rotate-0'}`} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full text-lg h-14 px-8 w-full sm:w-auto bg-background/50 backdrop-blur-xs border-white/10 hover:bg-white/5"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t("hero.cta2")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/20 relative">
        <div className="container px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">{t("services.title")}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t("services.desc")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Why Choose Me */}
      <section className="py-24 border-y border-border/50 bg-background overflow-hidden">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 leading-tight">{t("why.title")}</h2>
              <div className="space-y-6">
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
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg font-medium leading-tight">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[450px] rounded-3xl overflow-hidden border border-border bg-muted/20 flex items-center justify-center group shadow-2xl"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="relative text-center p-12 border border-white/10 bg-background/40 backdrop-blur-xl rounded-2xl max-w-xs transform group-hover:scale-110 transition-transform duration-700">
                 <div className="text-5xl font-bold text-primary mb-4">+50</div>
                 <div className="text-lg text-muted-foreground uppercase tracking-widest font-bold">{t("why.stats")}</div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container px-6 mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">{t("contact.title")}</h2>
            <p className="text-xl text-muted-foreground">
              {t("contact.desc")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold uppercase tracking-wider opacity-70">{t("contact.name")}</label>
                      <Input placeholder={lang === 'ar' ? 'أدخل اسمك' : 'Enter your name'} className="bg-background/50 border-border h-14 text-lg px-6 rounded-2xl" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold uppercase tracking-wider opacity-70">{t("contact.email")}</label>
                      <Input placeholder="example@email.com" type="email" className="bg-background/50 border-border h-14 text-lg px-6 rounded-2xl" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-wider opacity-70">{t("contact.message")}</label>
                    <Textarea placeholder={lang === 'ar' ? 'تفاصيل مشروعك...' : 'Project details...'} className="bg-background/50 border-border min-h-[180px] text-lg p-6 rounded-2xl resize-none" />
                  </div>
                  <Button size="lg" className="w-full h-16 text-xl font-bold rounded-2xl glow transition-all hover:scale-[1.02] active:scale-[0.98]">
                    {t("contact.send")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-background">
        <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl">{t("logo.dev")} {t("logo.web")}</span>
          </div>
          <p className="text-lg text-muted-foreground text-center md:text-right">
            © 2024 {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            <a href="#" className="p-2 text-muted-foreground hover:text-primary transition-colors hover:scale-110"><Github className="w-6 h-6" /></a>
            <a href="#" className="p-2 text-muted-foreground hover:text-primary transition-colors hover:scale-110"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="p-2 text-muted-foreground hover:text-primary transition-colors hover:scale-110"><Twitter className="w-6 h-6" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

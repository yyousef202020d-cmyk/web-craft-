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

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

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
              <span className="text-sm font-medium">متاح للعمل الحر | Available for Freelance</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-6 leading-tight">
              نحول أفكارك إلى <br />
              <span className="text-gradient">واقع رقمي مذهل</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              بناء واجهات عصرية، سريعة، وجذابة. نساعدك في الظهور بأفضل شكل على الإنترنت من خلال تصاميم فريدة وأداء استثنائي.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="rounded-full text-lg h-14 px-8 w-full sm:w-auto glow"
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                تصفح خدماتي
                <ArrowLeft className="mr-2 h-5 w-5 rtl:rotate-0 ltr:rotate-180" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full text-lg h-14 px-8 w-full sm:w-auto bg-background/50 backdrop-blur-xs border-white/10 hover:bg-white/5"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                تواصل معي
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
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">خدماتي المميزة</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              أقدم مجموعة متكاملة من الخدمات الرقمية لمساعدتك في الظهور بأفضل شكل على الإنترنت.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard 
              icon={Laptop}
              title="تصميم وتطوير المواقع"
              description="مواقع عصرية متجاوبة مع جميع الشاشات، سريعة التحميل، ومصممة بأحدث التقنيات لتعكس هويتك أو علامتك التجارية."
            />
            <ServiceCard 
              icon={Briefcase}
              title="معرض الأعمال (Portfolio)"
              description="مساحة خاصة لاستعراض مشاريعك وإنجازاتك بطريقة احترافية تجذب العملاء وأصحاب العمل."
            />
            <ServiceCard 
              icon={FileText}
              title="سيرة ذاتية تفاعلية (CV)"
              description="سيرة ذاتية رقمية تفاعلية تميزك عن الآخرين وتبرز مهاراتك بشكل عصري وجذاب."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-24 border-y border-border/50 bg-background">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">لماذا تختارني؟</h2>
              <div className="space-y-6">
                {[
                  "تصاميم عصرية وجذابة تلفت الانتباه",
                  "أكواد نظيفة وسريعة الأداء",
                  "توافق كامل مع جميع الأجهزة (Mobile Responsive)",
                  "تسليم في الموعد المحدد",
                  "دعم فني وتعديلات مرنة"
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden border border-border bg-muted/20 flex items-center justify-center group"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="relative text-center p-8 border border-border bg-background/50 backdrop-blur-md rounded-xl max-w-xs transform group-hover:scale-105 transition-transform duration-500">
                 <div className="text-4xl font-bold text-primary mb-2">+50</div>
                 <div className="text-sm text-muted-foreground uppercase tracking-wider">مشروع مكتمل</div>
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">لنبدأ العمل معاً</h2>
            <p className="text-muted-foreground">
              هل لديك فكرة مشروع؟ تواصل معي وسأساعدك في تحويلها إلى واقع.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">الاسم</label>
                      <Input placeholder="أدخل اسمك" className="bg-background/50 border-border h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">البريد الإلكتروني</label>
                      <Input placeholder="example@email.com" type="email" className="bg-background/50 border-border h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">الرسالة</label>
                    <Textarea placeholder="تفاصيل مشروعك..." className="bg-background/50 border-border min-h-[150px] resize-none" />
                  </div>
                  <Button size="lg" className="w-full h-12 text-lg font-bold rounded-xl glow transition-all active:scale-[0.98]">
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background">
        <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="font-bold">مطور ويب</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © 2024 جميع الحقوق محفوظة. صمم بكل ❤️
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

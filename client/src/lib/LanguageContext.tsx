import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    "nav.home": "الرئيسية",
    "nav.services": "خدماتنا",
    "nav.contact": "تواصل معنا",
    "nav.pricing": "الأسعار",
    "nav.start": "ابدأ مشروعك",
    "hero.badge": "متاحون للعمل الحر",
    "hero.title1": "نحول أفكارك إلى",
    "hero.title2": "واقع رقمي مذهل",
    "hero.desc": "بناء واجهات عصرية، سريعة، وجذابة. نساعدك في الظهور بأفضل شكل على الإنترنت من خلال تصاميم فريدة وأداء استثنائي.",
    "hero.cta1": "تصفح خدماتنا",
    "hero.cta2": "تواصل معنا",
    "services.title": "خدماتنا المميزة",
    "services.desc": "نقدم مجموعة متكاملة من الخدمات الرقمية لمساعدتك في الظهور بأفضل شكل على الإنترنت.",
    "services.web.title": "تصميم وتطوير المواقع",
    "services.web.desc": "مواقع عصرية متجاوبة مع جميع الشاشات، سريعة التحميل، ومصممة بأحدث التقنيات لتعكس هويتك أو علامتك التجارية.",
    "services.portfolio.title": "معرض الأعمال (Portfolio)",
    "services.portfolio.desc": "مساحة خاصة لاستعراض مشاريعك وإنجازاتك بطريقة احترافية تجذب العملاء وأصحاب العمل.",
    "services.store.title": "متجر إلكتروني",
    "services.store.desc": "أطلق علامتك التجارية عبر الإنترنت بمتجر متكامل لبيع منتجاتك وزيادة مبيعاتك.",
    "services.cv.title": "سيرة ذاتية تفاعلية (CV)",
    "services.cv.desc": "سيرة ذاتية رقمية تفاعلية تميزكم عن الآخرين وتبرز مهاراتكم بشكل عصري وجذاب.",
    "why.title": "لماذا تختارنا؟",
    "why.item1": "تصاميم عصرية وجذابة تلفت الانتباه",
    "why.item2": "أكواد نظيفة وسريعة الأداء",
    "why.item3": "توافق كامل مع جميع الأجهزة (Mobile Responsive)",
    "why.item4": "تسليم في الموعد المحدد",
    "why.item5": "دعم فني وتعديلات مرنة",
    "why.stats": "مشروع مكتمل",
    "benefits.title": "لماذا تحتاج إلى موقع إلكتروني أو معرض أعمال؟",
    "benefits.desc": "في العصر الرقمي الحالي، موقعك هو واجهتك الأولى أمام العالم والمحرك الأساسي لنمو أعمالك.",
    "benefits.item1.title": "التواجد على مدار الساعة",
    "benefits.item1.desc": "موقعك يعمل كفريق مبيعات لا ينام، يعرض خدماتك ويستقبل العملاء في أي وقت ومن أي مكان.",
    "benefits.item2.title": "بناء الثقة والمصداقية",
    "benefits.item2.desc": "المواقع الاحترافية تعطي انطباعاً بالجدية والاحترافية، مما يسهل على العملاء الوثوق بـ خدماتك.",
    "benefits.item3.title": "الوصول لجمهور أكبر",
    "benefits.item3.desc": "تخطى الحدود الجغرافية وافتح أبواباً لعملاء جدد لم تكن لتصل إليهم بالطرق التقليدية.",
    "benefits.item4.title": "التميز عن المنافسين",
    "benefits.item4.desc": "امتلاك موقع مبتكر يجعلك متقدماً بخطوات عن منافسيك الذين لا يزالون يعتمدون على الطرق القديمة.",
    "contact.title": "لنبدأ العمل معاً",
    "contact.desc": "هل لديك فكرة مشروع؟ تواصل معنا وسنساعدك في تحويلها إلى واقع.",
    "contact.name": "الاسم",
    "contact.email": "البريد الإلكتروني أو رقم الهاتف",
    "contact.message": "الرسالة",
    "contact.send": "إرسال الرسالة",
    "contact.success": "تم إرسال الرسالة بنجاح! سيتم الرد عليك خلال دقائق ✨",
    "contact.placeholder.email": "البريد أو رقم الهاتف",
    "footer.rights": "جميع الحقوق محفوظة.",
    "logo.dev": "ويب",
    "logo.web": "كرافت",
    "pricing.nav.web": "مواقع",
    "pricing.nav.portfolio": "بورتفوليو",
    "pricing.nav.store": "متجر",
    "pricing.nav.cv": "سيفي",
    "pricing.back": "العودة للرئيسية"
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Our Services",
    "nav.contact": "Contact Us",
    "nav.pricing": "Pricing",
    "nav.start": "Start Project",
    "hero.badge": "Available for Freelance",
    "hero.title1": "Turning your ideas into",
    "hero.title2": "Stunning Digital Reality",
    "hero.desc": "Building modern, fast, and attractive interfaces. We help you look your best online through unique designs and exceptional performance.",
    "hero.cta1": "Browse Our Services",
    "hero.cta2": "Contact Us",
    "services.title": "Our Featured Services",
    "services.desc": "Offering a complete range of digital services to help you stand out online.",
    "services.web.title": "Web Development",
    "services.web.desc": "Modern responsive websites for all screens, fast loading, designed with latest tech to reflect your identity.",
    "services.portfolio.title": "Portfolio Design",
    "services.portfolio.desc": "A dedicated space to showcase your projects and achievements professionally to attract clients.",
    "services.store.title": "E-commerce Store",
    "services.store.desc": "Launch your brand online with a fully functional store to sell your products and grow your business.",
    "services.cv.title": "Interactive CV",
    "services.cv.desc": "A digital interactive resume that sets you apart and highlights your skills modernly.",
    "why.title": "Why Choose Us?",
    "why.item1": "Modern and attractive designs that grab attention",
    "why.item2": "Clean code and fast performance",
    "why.item3": "Full compatibility with all devices (Mobile Responsive)",
    "why.item4": "On-time delivery",
    "why.item5": "Flexible technical support and adjustments",
    "why.stats": "Completed Projects",
    "benefits.title": "Why do you need a website or portfolio?",
    "benefits.desc": "In today's digital age, your website is your first interface to the world and the main driver for your business growth.",
    "benefits.item1.title": "24/7 Presence",
    "benefits.item1.desc": "Your website works as a sales team that never sleeps, showcasing your services and receiving clients anytime, anywhere.",
    "benefits.item2.title": "Build Trust & Credibility",
    "benefits.item2.desc": "Professional websites give an impression of seriousness and professionalism, making it easier for clients to trust your services.",
    "benefits.item3.title": "Reach a Global Audience",
    "benefits.item3.desc": "Go beyond geographical boundaries and open doors to new customers you wouldn't reach through traditional methods.",
    "benefits.item4.title": "Stand Out from Competitors",
    "benefits.item4.desc": "Having an innovative website keeps you steps ahead of competitors who still rely on old methods.",
    "contact.title": "Let's Work Together",
    "contact.desc": "Have a project idea? Contact us and we'll help turn it into reality.",
    "contact.name": "Name",
    "contact.email": "Email or Phone Number",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.success": "Message sent successfully! We will reply within minutes ✨",
    "contact.placeholder.email": "Email or Phone",
    "footer.rights": "All rights reserved.",
    "logo.dev": "Web",
    "logo.web": "Craft",
    "pricing.nav.web": "Websites",
    "pricing.nav.portfolio": "Portfolios",
    "pricing.nav.store": "Store",
    "pricing.nav.cv": "CV",
    "pricing.back": "Back to Home"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => (localStorage.getItem("lang") as Language) || "ar");

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const setLang = (newLang: Language) => setLangState(newLang);

  const t = (key: string) => {
    return translations[lang][key as keyof typeof translations['ar']] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}

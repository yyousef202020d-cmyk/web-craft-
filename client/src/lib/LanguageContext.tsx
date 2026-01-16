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
    "nav.portfolio": "أعمالنا",
    "nav.contact": "تواصل معنا",
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
    "services.cv.title": "سيرة ذاتية تفاعلية (CV)",
    "services.cv.desc": "سيرة ذاتية رقمية تفاعلية تميزكم عن الآخرين وتبرز مهاراتكم بشكل عصري وجذاب.",
    "why.title": "لماذا تختاروننا؟",
    "why.item1": "تصاميم عصرية وجذابة تلفت الانتباه",
    "why.item2": "أكواد نظيفة وسريعة الأداء",
    "why.item3": "توافق كامل مع جميع الأجهزة (Mobile Responsive)",
    "why.item4": "تسليم في الموعد المحدد",
    "why.item5": "دعم فني وتعديلات مرنة",
    "why.stats": "مشروع مكتمل",
    "contact.title": "لنبدأ العمل معاً",
    "contact.desc": "هل لديك فكرة مشروع؟ تواصل معنا وسنساعدك في تحويلها إلى واقع.",
    "contact.name": "الاسم",
    "contact.email": "البريد الإلكتروني",
    "contact.message": "الرسالة",
    "contact.send": "إرسال الرسالة",
    "footer.rights": "جميع الحقوق محفوظة. صمم بكل ❤️",
    "logo.dev": "بيكسل",
    "logo.web": "مود"
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Our Services",
    "nav.portfolio": "Our Portfolio",
    "nav.contact": "Contact Us",
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
    "services.cv.title": "Interactive CV",
    "services.cv.desc": "A digital interactive resume that sets you apart and highlights your skills modernly.",
    "why.title": "Why Choose Us?",
    "why.item1": "Modern and attractive designs that grab attention",
    "why.item2": "Clean code and fast performance",
    "why.item3": "Full compatibility with all devices (Mobile Responsive)",
    "why.item4": "On-time delivery",
    "why.item5": "Flexible technical support and adjustments",
    "why.stats": "Completed Projects",
    "contact.title": "Let's Work Together",
    "contact.desc": "Have a project idea? Contact us and we'll help turn it into reality.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "footer.rights": "All rights reserved. Crafted with ❤️",
    "logo.dev": "Pixel",
    "logo.web": "Mode"
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

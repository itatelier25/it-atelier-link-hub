import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, ExternalLink } from "lucide-react";
import itaLogo from "@/assets/ita-logo.png";

type Language = "en" | "ru";

interface LinkItem {
  en: string;
  ru: string;
  href: string;
  icon?: React.ReactNode;
}

const links: LinkItem[] = [
  {
    en: "Website",
    ru: "Сайт",
    href: "https://itatelier.world",
    icon: <ExternalLink className="w-5 h-5" />,
  },
  {
    en: "Telegram",
    ru: "Telegram",
    href: "https://t.me/@It_Atelier_en",
  },
  {
    en: "WhatsApp",
    ru: "WhatsApp",
    href: "https://wa.me/85566504612",
  },
  {
    en: "Instagram",
    ru: "Instagram",
    href: "https://instagram.com/it_._atelier",
  },
  {
    en: "Facebook",
    ru: "Facebook",
    href: "https://www.facebook.com/share/1GLXyLxbak/",
  },
  {
    en: "Email",
    ru: "Email",
    href: "mailto:it.atelier25@gmail.com",
    icon: <Mail className="w-5 h-5" />,
  },
];

const content = {
  en: {
    title: "IT-Atelier links",
    description: "All our contacts and social media in one place. Choose any channel that's convenient for you.",
    footer: "IT-Atelier · Automation, integrations and AI-assistants",
  },
  ru: {
    title: "Ссылки IT-Atelier",
    description: "Все наши контакты и социальные сети в одном месте. Выберите любой удобный для вас канал.",
    footer: "IT-Atelier · Автоматизация, интеграции и AI-ассистенты",
  },
};

const Index = () => {
  const [lang, setLang] = useState<Language>("en");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 flex gap-2">
        <button
          onClick={() => setLang("en")}
          className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
            lang === "en"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLang("ru")}
          className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
            lang === "ru"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          RU
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-20">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <img 
              src={itaLogo} 
              alt="IT-Atelier Logo" 
              className="w-48 h-48 md:w-56 md:h-56 object-contain"
            />
          </div>

          {/* Title */}
          <div className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-title">
              {content[lang].title}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-sm mx-auto">
              {content[lang].description}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3 pt-4">
            {links.map((link, index) => (
              <Button
                key={index}
                asChild
                className="w-full h-14 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all"
                size="lg"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  {link.icon}
                  <span>{link[lang]}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center">
        <p className="text-sm text-muted-foreground">
          {content[lang].footer}
        </p>
      </footer>
    </div>
  );
};

export default Index;

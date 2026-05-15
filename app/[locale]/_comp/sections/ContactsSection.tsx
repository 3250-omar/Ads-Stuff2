"use client";
import { Typography, Button, Space } from "antd";
import { SiWhatsapp, SiGmail, SiTelegram } from "react-icons/si";
import { ArrowRightOutlined, HeartFilled } from "@ant-design/icons";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const { Title, Paragraph } = Typography;

const GmailForm = dynamic(() => import("@/components/contacts/GmailContact"), {
  ssr: false,
});
const WhatsAppContact = dynamic(
  () => import("@/components/contacts/WhatsAppContact"),
  { ssr: false },
);
const TelegramContact = dynamic(
  () => import("@/components/contacts/TelegramContact"),
  { ssr: false },
);

export default function ContactsSection() {
  const t = useTranslations("Contacts");
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeForm, setActiveForm] = useState<"whatsapp" | "gmail" | "telegram">(
    "whatsapp"
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 py-24 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10" />
      
      <div
        ref={cardRef}
        className="max-w-6xl mx-auto glass-card rounded-[4rem] overflow-hidden shadow-2xl border border-white/5"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Content Side */}
          <div className="p-12 lg:p-20 flex flex-col justify-center text-left bg-gradient-to-br from-bg-card to-transparent">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 w-fit">
              <HeartFilled className="animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-wider">
                {t("primaryAction")}
              </span>
            </div>
            
            <Title className="text-5xl lg:text-6xl font-black! text-text-primary mb-6 leading-tight">
              {t("title")}
            </Title>
            
            <Paragraph className="text-lg text-text-secondary mb-12 max-w-md">
              {t("description")}
            </Paragraph>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <Button
                  type={activeForm === "whatsapp" ? "primary" : "default"}
                  size="large"
                  icon={<SiWhatsapp />}
                  onClick={() => setActiveForm("whatsapp")}
                  className={`h-14 px-8 rounded-2xl font-bold transition-all ${
                    activeForm === "whatsapp" ? "glow-primary" : "bg-white/5 border-white/10"
                  }`}
                >
                  {t("whatsapp")}
                </Button>
                <Button
                  type={activeForm === "gmail" ? "primary" : "default"}
                  size="large"
                  icon={<SiGmail />}
                  onClick={() => setActiveForm("gmail")}
                  className={`h-14 px-8 rounded-2xl font-bold transition-all ${
                    activeForm === "gmail" ? "glow-primary" : "bg-white/5 border-white/10"
                  }`}
                >
                  {t("gmail")}
                </Button>
              </div>
              
              <Button
                type="text"
                icon={<SiTelegram className="text-xl" />}
                onClick={() => setActiveForm("telegram")}
                className="w-fit text-text-secondary hover:text-primary! flex items-center gap-2 p-0"
              >
                <span>{t("telegram")}</span>
                <ArrowRightOutlined className="text-xs" />
              </Button>
            </div>
          </div>

          {/* Right Form Side */}
          <div className="bg-bg-elevated/30 p-8 lg:p-12 flex items-center justify-center border-l border-white/5">
            <div key={activeForm} className="w-full max-w-md animate-fade-in-up">
              {activeForm === "whatsapp" && <WhatsAppContact />}
              {activeForm === "gmail" && <GmailForm />}
              {activeForm === "telegram" && <TelegramContact />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

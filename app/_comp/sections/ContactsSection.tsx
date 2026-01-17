"use client";
import { Typography, Divider } from "antd";
import TabsComp from "@/components/TabsComp";
import { HeartFilled } from "@ant-design/icons";
import { SiGmail, SiWhatsapp, SiTelegram } from "react-icons/si";
import GmailForm from "@/components/contacts/GmailContact";
import WhatsAppContact from "@/components/contacts/WhatsAppContact";
import TelegramContact from "@/components/contacts/TelegramContact";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { Title } = Typography;

export default function ContactsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const contactTabsItems = [
    {
      title: "Gmail",
      icon: SiGmail,
      value: "gmail",
      content: <GmailForm />,
    },
    {
      title: "WhatsApp",
      icon: SiWhatsapp,
      value: "whatsapp",
      content: <WhatsAppContact />,
    },
    {
      title: "Telegram",
      icon: SiTelegram,
      value: "telegram",
      content: <TelegramContact />,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contacts"
      className="w-full px-4 py-20 gradient-section rounded-[3rem]"
    >
      <div ref={contentRef} className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-4 justify-center">
          <Title level={2} className="section-title">
            Let's Work Together
          </Title>
          <HeartFilled className="animate-pulse text-5xl text-primary animate-float" />
        </div>
        <Divider className="border-primary/30 w-1/4 min-w-[100px]" />
        <TabsComp tabs={contactTabsItems} className="w-full max-w-4xl" />
      </div>
    </section>
  );
}

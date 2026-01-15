"use client";
import { Typography, Divider } from "antd";
import TabsComp from "@/components/TabsComp";
import { HeartFilled } from "@ant-design/icons";
import { SiGmail, SiWhatsapp, SiTelegram } from "react-icons/si";
import GmailForm from "@/components/contacts/GmailContact";
import WhatsAppContact from "@/components/contacts/WhatsAppContact";
import TelegramContact from "@/components/contacts/TelegramContact";

const { Title } = Typography;

export default function ContactsSection() {
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

  return (
    <section id="contacts" className="w-full px-4 py-16">
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-4 justify-center">
          <Title level={2} className="!text-primary !font-black !text-5xl !m-0">
            Keep in Touch With Us
          </Title>
          <HeartFilled className="animate-pulse text-5xl text-primary" />
        </div>
        <Divider className="border-primary/30 w-1/4 min-w-[100px]" />
        <TabsComp tabs={contactTabsItems} className="w-full max-w-4xl" />
      </div>
    </section>
  );
}

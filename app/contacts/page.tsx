"use client";

import TabsComp from "@/components/TabsComp";
import { HeartIcon } from "lucide-react";
import { SiGmail } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { SiTelegram } from "react-icons/si";
import GmailForm from "./_comp/GmailContact";
import WhatsAppContact from "./_comp/WhatsAppContact";
import TelegramContact from "./_comp/TelegramContact";

export default function Contacts() {
  const TabsItems = [
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
    <div className="flex items-start gap-4 justify-between max-sm:flex-col ">
      <div className="flex items-center gap-2">
        <p className="text-4xl font-bold text-primary max-sm:text-center max-sm:text-3xl">
          Keep in touch With us
        </p>
        <HeartIcon
          fill="#6B9071"
          stroke={undefined}
          className="animate-pulse size-12"
        />
      </div>
      <TabsComp tabs={TabsItems} className="w-1/2 max-sm:w-full" />
    </div>
  );
}

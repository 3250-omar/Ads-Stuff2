"use client";

import { useGetSocialMedia } from "@/app/api/query";
import getSocialMedia from "@/constants/getSocialMedia";
import {
  FacebookFilled,
  InstagramOutlined,
  LinkedinFilled,
  TwitterOutlined,
  SendOutlined,
  MailOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Button, Space, Typography, Divider, Spin } from "antd";
import Link from "next/link";
import { useState } from "react";

const { Title, Text } = Typography;

import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const currentYear = new Date().getFullYear();
  // const { socialmedia: socialMedia, loading } = useGetSocialMedia();
  const { socialMedia, loading } = useGetSocialMedia();

  const quickLinks = [
    { name: t("home"), href: "#home" },
    { name: t("projects"), href: "#projects" },
    { name: t("contact"), href: "#contacts" },
  ];

  return (
    <footer className="w-full bg-bg-primary text-text-primary mb-0! py-16 px-8 relative overflow-hidden border-t border-white/5">
      {/* Decorative Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <div className="space-y-4">
              <Title level={2} className="text-primary! m-0! font-black! text-4xl tracking-tighter">
                Ads & Stuff
              </Title>
              <Text className="text-text-secondary text-lg font-medium opacity-80">{t("tagline")}</Text>
            </div>
            <Text className="text-text-secondary/60 max-w-xs leading-relaxed">{t("description")}</Text>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6 items-center">
            <Text
              strong
              className="text-primary! text-lg! uppercase tracking-widest font-black"
            >
              {t("quickLinks")}
            </Text>
            <div className="flex flex-col gap-3 items-center">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-text-secondary hover:text-primary transition-all duration-300 text-lg"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-6 items-center md:items-end">
            <Button
              type="primary"
              size="large"
              icon={<SendOutlined />}
              onClick={() => setShowMessage(!showMessage)}
              className="flex items-center h-auto py-5 px-12 rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-primary/30 text-xl font-bold bg-primary border-none"
            >
              {showMessage ? t("close") : t("getInTouch")}
            </Button>

            {showMessage && (
              <div className="animate-fade-in-up">
                <Space orientation="horizontal" size="middle">
                  <Button
                    icon={<MailOutlined />}
                    size="large"
                    onClick={() => {
                      window.open(
                        "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ziad@adsstaff.com",
                      );
                    }}
                    className="h-14 px-8 rounded-xl border border-white/10 bg-bg-card/40 text-text-primary hover:border-primary hover:text-primary transition-all font-bold"
                  >
                    {t("email")}
                  </Button>
                  <Button
                    icon={<WhatsAppOutlined />}
                    size="large"
                    onClick={() => {
                      window.open(
                        `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`,
                      );
                    }}
                    className="h-14 px-8 rounded-xl border border-white/10 bg-bg-card/40 text-text-primary hover:border-primary hover:text-primary transition-all font-bold"
                  >
                    {t("whatsApp")}
                  </Button>
                </Space>
              </div>
            )}
          </div>
        </div>

        <Divider className="border-white/5 my-12!" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Social Icons */}
          <Spin spinning={loading}>
            <div className="flex items-center gap-6">
              {socialMedia?.map((item: any) => {
                const { icon: SocialIcon, bgHover } = getSocialMedia({
                  name: item.name.toLowerCase(),
                });
                return (
                  <Link
                    key={item.id}
                    href={item.social_media_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-14 h-14 rounded-2xl border border-white/10 text-text-primary! text-2xl hover:border-primary hover:text-primary! hover:scale-110 hover:shadow-[0_0_20px_rgba(74,107,80,0.4)] transition-all duration-500 ${bgHover}`}
                  >
                    <SocialIcon />
                  </Link>
                );
              })}
            </div>
          </Spin>

          {/* Copyright */}
          <Text className="text-text-secondary/40 text-sm font-medium tracking-wide">
            &copy; {currentYear} Ads & Stuff. {t("copyright")}
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

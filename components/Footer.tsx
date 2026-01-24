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

const Footer = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const currentYear = new Date().getFullYear();
  // const { socialmedia: socialMedia, loading } = useGetSocialMedia();
  const { socialMedia, loading } = useGetSocialMedia();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contacts" },
  ];

  return (
    <footer className="w-full bg-linear-to-br from-schemaWhite/20 via-white to-secondary/10 mb-0! py-16 px-8 relative overflow-hidden border-t border-gray-100">
      {/* Decorative Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <div className="space-y-2">
              <Title level={2} className="text-primary! m-0! font-black!">
                Ads & Stuff
              </Title>
              <Text className="text-gray-500 text-lg">
                It's Not Just Ads — It's The Whole Stuff
              </Text>
            </div>
            <Text className="text-gray-400 max-w-xs">
              We craft compelling brand stories, stunning visuals, and
              result-driven advertising campaigns.
            </Text>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 items-center">
            <Text
              strong
              className="text-primary! text-lg! uppercase tracking-widest"
            >
              Quick Links
            </Text>
            <div className="flex flex-col gap-2 items-center">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-primary transition-colors text-base"
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
              className="flex items-center h-auto py-4 px-10 rounded-2xl hover:scale-105 transition-all shadow-xl shadow-primary/20 text-lg font-semibold"
              style={{ backgroundColor: "#6B9071" }}
            >
              {showMessage ? "Close" : "Get In Touch"}
            </Button>

            {showMessage && (
              <Space orientation="horizontal" size="middle">
                <Button
                  icon={<MailOutlined />}
                  size="large"
                  onClick={() => {
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ziad@adsstaff.com",
                    );
                  }}
                  className="rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-medium"
                >
                  Email
                </Button>
                <Button
                  icon={<WhatsAppOutlined />}
                  size="large"
                  onClick={() => {
                    window.open(
                      `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`,
                    );
                  }}
                  className="rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-medium"
                >
                  WhatsApp
                </Button>
              </Space>
            )}
          </div>
        </div>

        <Divider className="border-gray-200 my-10!" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <Spin spinning={loading}>
            <div className="flex items-center gap-4">
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
                    className={`flex items-center justify-center w-12 h-12 rounded-full border-2 text-black! border-gray-100 text-xl hover:border-transparent hover:text-white! hover:scale-110 hover:shadow-lg transition-all ${bgHover}`}
                  >
                    <SocialIcon />
                  </Link>
                );
              })}
            </div>
          </Spin>

          {/* Copyright */}
          <Text className="text-gray-400 text-sm">
            &copy; {currentYear} Ads & Stuff. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import {
  FacebookFilled,
  InstagramOutlined,
  LinkedinFilled,
  TwitterOutlined,
  SendOutlined,
  MailOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import Link from "next/link";
import { useState } from "react";

const { Title, Text } = Typography;

const Footer = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const currentYear = new Date().getFullYear();

  const socialMedia = [
    {
      id: 1,
      name: "Facebook",
      icon: <FacebookFilled />,
      color: "#1877F2",
      link: "https://www.facebook.com/",
    },
    {
      id: 2,
      name: "Instagram",
      icon: <InstagramOutlined />,
      color: "#E4405F",
      link: "https://www.instagram.com/",
    },
    {
      id: 3,
      name: "Twitter",
      icon: <TwitterOutlined />,
      color: "#1DA1F2",
      link: "https://www.twitter.com/",
    },
    {
      id: 4,
      name: "LinkedIn",
      icon: <LinkedinFilled />,
      color: "#0A66C2",
      link: "https://www.linkedin.com/",
    },
  ];

  return (
    <footer className="w-full bg-[#AEC3B0] !mb-0 p-8">
      <div className="mx-auto max-w-7xl flex items-center justify-between max-sm:flex-col-reverse max-sm:gap-8">
        <div className="flex flex-col gap-6 max-sm:text-center items-center sm:items-start">
          <Title level={3} style={{ color: "#6B9071", margin: 0 }}>
            With Ads&Staff You will never be on the shelf
          </Title>

          <div className="space-y-4">
            <Text strong style={{ fontSize: "1.1rem" }}>
              Follow us on
            </Text>
            <div className="flex items-center gap-4 justify-center sm:justify-start">
              {socialMedia.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center border-2 rounded-xl border-[#6B9071] p-2 hover:bg-[#E3EED4] hover:scale-110 transition-all text-xl"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <Text>&copy; {currentYear} Ads&Staff | All rights reserved</Text>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <Button
            type="primary"
            size="large"
            icon={<SendOutlined />}
            onClick={() => setShowMessage(!showMessage)}
            className="flex items-center h-auto py-3 px-6 rounded-xl hover:scale-105 transition-transform"
            style={{ backgroundColor: "#6B9071" }}
          >
            {showMessage ? "Close Quick Message" : "Quick Message"}
          </Button>

          {showMessage && (
            <Space orientation="horizontal" size="middle">
              <Button
                icon={<MailOutlined />}
                onClick={() => {
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ziad@adsstaff.com"
                  );
                }}
                className="rounded-xl border-primary text-primary hover:bg-schemaWhite"
              >
                Email
              </Button>
              <Button
                icon={<WhatsAppOutlined />}
                onClick={() => {
                  window.open("https://wa.me/201111111111");
                }}
                className="rounded-xl border-primary text-primary hover:bg-schemaWhite"
              >
                Whatsapp
              </Button>
            </Space>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

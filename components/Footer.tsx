"use client";

import {
  Facebook,
  InstagramIcon,
  LinkedinIcon,
  LucideIcon,
  Send,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const Footer = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const currentYear = new Date().getFullYear();
  const socialMedia: {
    id: number;
    name: string;
    icon: LucideIcon;
    iconColor: string;
    link: string;
  }[] = [
    {
      id: 1,
      name: "Facebook",
      icon: Facebook,
      iconColor: "text-blue-500",
      link: "https://www.facebook.com/",
    },
    {
      id: 2,
      name: "Instagram",
      icon: InstagramIcon,
      iconColor: "text-pink-500",
      link: "https://www.instagram.com/",
    },
    {
      id: 3,
      name: "Twitter",
      icon: TwitterIcon,
      iconColor: "text-blue-500",
      link: "https://www.twitter.com/",
    },
    {
      id: 4,
      name: "LinkedIn",
      icon: LinkedinIcon,
      iconColor: "text-blue-500",
      link: "https://www.linkedin.com/",
    },
  ];
  return (
    <footer className="w-full bg-secondary !mb-0 !p-4">
      <div className="mx-auto max-w-7xl flex items-center  justify-between max-sm:flex-col-reverse max-sm:gap-4">
        <div className="flex items-center justify-center flex-col gap-4 text-white max-sm:text-center">
          <h2 className="text-2xl font-bold text-primary">
            With Ads&Staff You will never be on the shelf
          </h2>
          <div className="text-center space-y-3">
            <p className="text-xl font-bold ">Follow us on</p>
            <div className="flex items-center gap-2">
              {socialMedia.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 rounded-2xl border-primary p-2 hover:bg-schemaWhite  hover:scale-110 transition-all"
                >
                  <item.icon className={item.iconColor} />
                </Link>
              ))}
            </div>
          </div>
          <div className="text-sm">
            &copy; {currentYear} Ads&Staff | All rights reserved
          </div>
        </div>
        <div className="flex items-center justify-center flex-col gap-4">
          <Button
            onClick={() => setShowMessage(!showMessage)}
            className="border-2 rounded-2xl border-primary p-2 hover:bg-schemaWhite hover:text-primary  hover:scale-110 transition-all flex items-center gap-2 group text-white"
          >
            <p>{showMessage ? "Close Quick Message " : "Quick Message"}</p>
            <Send className="  group-hover:size-10  transition-all" />
          </Button>
          {showMessage && (
            <div className="flex items-center justify-center flex-col gap-2 ">
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => {
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ziad@adsstaff.com"
                    );
                  }}
                  className="border-2 rounded-2xl border-primary p-2 hover:bg-schemaWhite hover:text-primary  hover:scale-110 transition-all flex items-center gap-2 group text-white"
                >
                  <p>Email</p>
                </Button>
                <Button
                  onClick={() => {
                    window.open("https://wa.me/201111111111");
                  }}
                  className="border-2 rounded-2xl border-primary p-2 hover:bg-schemaWhite hover:text-primary  hover:scale-110 transition-all flex items-center gap-2 group text-white"
                >
                  <p>Whatsapp</p>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

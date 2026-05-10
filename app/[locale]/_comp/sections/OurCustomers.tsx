"use client";

import { Button, Carousel, Divider, Spin, Tooltip, Typography } from "antd";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGetAllCustomers } from "@/app/api/query";
import { FacebookFilled, FacebookOutlined } from "@ant-design/icons";
import getSocialMedia from "@/constants/getSocialMedia";

gsap.registerPlugin(ScrollTrigger);

const { Title, Paragraph } = Typography;

const customerImages = [
  "/imgs/1.jpeg",
  "/imgs/2.jpeg",
  "/imgs/3.jpeg",
  "/imgs/4.jpeg",
  "/imgs/5.jpeg",
  "/imgs/1.jpeg",
  "/imgs/2.jpeg",
  "/imgs/3.jpeg",
];

import { useTranslations } from "next-intl";

export default function OurCustomers() {
  const t = useTranslations("Customers");
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { customers, loading } = useGetAllCustomers();
  console.log("🚀 ~ OurCustomers ~ customers:", customers);
  const getSocialMediaName = (url: string) => {
    if (url.includes("facebook")) {
      return "facebook";
    }
    if (url.includes("instagram")) {
      return "instagram";
    }
    if (url.includes("x")) {
      return "twitter";
    }
    if (url.includes("linkedin")) {
      return "linkedin";
    }
    if (url.includes("tiktok")) {
      return "tiktok";
    }
    return t("socialMedia");
  };
  useEffect(() => {
    if (loading || !titleRef.current || !carouselRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          // toggleActions: "play none none none",
          once: true,
        },
      });

      gsap.from(carouselRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [loading]);
  if (loading) {
    return (
      <div className="w-full h-[400px] animate-pulse bg-bg-card/50 rounded-[3rem]" />
    );
  }

  return (
    <section
      ref={sectionRef}
      className="space-y-12 py-20 gradient-section rounded-[3rem]"
    >
      <div ref={titleRef} className="flex flex-col items-center">
        <Title level={2} className="section-title max-sm:text-2xl!">
          {t("title")}
        </Title>
        <Divider className="border-primary/30 w-1/4 min-w-[100px] my-6" />
        <Paragraph className="text-xl text-text-secondary max-w-2xl text-center">
          {t("description")}
        </Paragraph>
      </div>

      <div ref={carouselRef} className="px-4 overflow-hidden">
        <div
          className="marquee-container relative flex overflow-hidden py-10"
          dir="ltr"
        >
          <div className="flex animate-marquee gap-10 whitespace-nowrap items-center">
            {[
              ...(customers || []),
              ...(customers || []),
              ...(customers || []),
              ...(customers || []),
            ].map((customer, i) => (
              <div key={`${customer.id}-${i}`} className="w-[200px] md:w-[250px] shrink-0">
                <Tooltip title={customer.name}>
                  <div className="px-4">
                    <div className="relative h-32 md:h-40 w-full rounded-2xl overflow-hidden bg-bg-card/40 backdrop-blur-md border border-white/5 transition-all duration-700 group hover:border-primary/30 hover:bg-bg-card/60">
                      <Image
                        src={customer.logo_url}
                        alt={`Our Partner ${customer.name}`}
                        fill
                        className="object-contain p-6 md:p-8 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 brightness-110"
                        sizes="(max-width: 768px) 200px, 250px"
                      />
                    </div>
                  </div>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

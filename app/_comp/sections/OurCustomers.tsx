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

export default function OurCustomers() {
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
    return "Social Media";
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
          toggleActions: "play reverse play reverse",
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
      <div className="w-full h-[500px] animate-pulse bg-gray-50/50 rounded-[3rem]" />
    );
  }

  return (
    <section
      ref={sectionRef}
      className="space-y-12 py-20 gradient-section rounded-[3rem]"
    >
      <div ref={titleRef} className="flex flex-col items-center">
        <Title level={2} className="section-title max-sm:text-2xl!">
          Our Trusted Partners
        </Title>
        <Divider className="border-primary/30 w-1/4 min-w-[100px] my-6" />
        <Paragraph className="text-xl text-gray-500 max-w-2xl text-center">
          We are proud to collaborate with leading brands and help them achieve
          extraordinary results.
        </Paragraph>
      </div>

      <div ref={carouselRef} className="px-4 overflow-hidden">
        <div className="marquee-container relative flex overflow-hidden py-4">
          <div className="flex animate-marquee gap-8 whitespace-nowrap">
            {[
              ...(customers || []),
              ...(customers || []),
              ...(customers || []),
              ...(customers || []),
            ].map((customer, i) => (
              <div key={`${customer.id}-${i}`} className="w-[300px] shrink-0 ">
                <Tooltip title={customer.name}>
                  <div className="px-4 space-y-2">
                    <div className="relative h-[280px] w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-white group">
                      <Image
                        src={customer.logo_url}
                        alt={`Our Partner ${customer.name}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-darkModePrimary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    {(() => {
                      const social = getSocialMedia({
                        name: getSocialMediaName(customer.account),
                      });
                      const IconComponent = social.icon;
                      return (
                        <Button
                          className="w-full"
                          type="link"
                          href={customer.account}
                          target="_blank"
                          icon={
                            <IconComponent style={{ fontSize: "1.5rem" }} />
                          }
                        />
                      );
                    })()}
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

"use client";

import { Card, Typography, Space } from "antd";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGetSocialMedia } from "@/app/api/query";
import getSocialMedia from "@/constants/getSocialMedia";
import Link from "next/link";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const { Title, Text, Paragraph } = Typography;

export default function BrandStory() {
  const t = useTranslations("Timeline");
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const { socialMedia, loading } = useGetSocialMedia();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      const cards = containerRef.current?.querySelectorAll(".bento-card");
      if (cards) {
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        // Hover Tilt Effect
        cards.forEach((card) => {
          card.addEventListener("mousemove", (e: any) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (clientX - left) / width - 0.5;
            const y = (clientY - top) / height - 0.5;

            gsap.to(card, {
              rotateY: x * 10,
              rotateX: -y * 10,
              transformPerspective: 1000,
              duration: 0.5,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              rotateY: 0,
              rotateX: 0,
              duration: 0.8,
              ease: "elastic.out(1, 0.5)",
            });
          });
        });
      }

      // Mouse Glow Follow
      const handleMouseMove = (e: MouseEvent) => {
        if (!glowRef.current) return;
        const { clientX, clientY } = e;
        const { left, top } = sectionRef.current?.getBoundingClientRect() || {
          left: 0,
          top: 0,
        };
        gsap.to(glowRef.current, {
          x: clientX - left,
          y: clientY - top,
          duration: 0.6,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    t("services.items.socialMedia"),
    t("services.items.graphicDesign"),
    t("services.items.mediaProduction"),
    t("services.items.mediaBuying"),
    t("services.items.videoEditing"),
    t("services.items.webDev"),
  ];

  return (
    <div
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-8 lg:px-16 overflow-hidden bg-bg-primary"
    >
      {/* Interactive Background Glow */}
      <div
        ref={glowRef}
        className="absolute w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] pointer-events-none z-0"
        style={{ left: "-300px", top: "-300px" }}
      />

      <div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        {/* Card 1: Who We Are (P1) */}
        <div className="bento-card md:col-span-8 group">
          <Card className="h-full glass-card border-white/10 rounded-[3rem] p-8 sm:p-12 transition-all duration-700 hover:border-primary/40 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
              <Title level={1} className="m-0! text-primary/20 select-none">
                01
              </Title>
            </div>
            <Space orientation="vertical" size="large" className="w-full">
              <Text className="text-primary uppercase tracking-[0.3em] text-xs font-bold block mb-2">
                Brand Essence
              </Text>
              <Title
                level={2}
                className="m-0! text-primary text-4xl sm:text-5xl font-black mb-6"
              >
                {t("whoWeAre.title")}
              </Title>
              <Paragraph className="text-text-secondary text-lg sm:text-2xl leading-relaxed m-0 opacity-80 group-hover:opacity-100 transition-opacity max-w-2xl">
                {t("whoWeAre.description")}
              </Paragraph>
            </Space>
          </Card>
        </div>

        {/* Card 2: Platforms (P3) */}
        <div className="bento-card md:col-span-4 group">
          <Card className="h-full glass-card border-white/10 rounded-[3rem] p-8 sm:p-12 flex flex-col justify-between transition-all duration-700 hover:border-primary/40 relative overflow-hidden shadow-2xl">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div>
              <Text className="text-primary uppercase tracking-[0.3em] text-xs font-bold block mb-4">
                Connect
              </Text>
              <Title level={3} className="m-0! text-text-primary mb-8 text-3xl">
                {t("platforms.title")}
              </Title>
            </div>
            <div className="flex flex-wrap gap-4 items-center mt-4 justify-center">
              {loading ? (
                <Text className="text-text-secondary italic">
                  {t("loading")}
                </Text>
              ) : (
                socialMedia?.map((item: any) => {
                  const { icon: SocialIcon, bgHover } = getSocialMedia({
                    name: item.name.toLowerCase(),
                  });
                  return (
                    <Link
                      key={item.id}
                      href={item.social_media_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-14 h-14 rounded-2xl border border-white/10 text-text-primary text-2xl bg-white/5 hover:border-transparent hover:text-white! hover:scale-125 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(74,107,80,0.5)] transition-all! duration-500! ${bgHover}`}
                    >
                      <SocialIcon />
                    </Link>
                  );
                })
              )}
            </div>
          </Card>
        </div>

        {/* Card 3: Services (P2) */}
        <div className="bento-card md:col-span-12 group">
          <Card className="h-full glass-card border-white/10 rounded-[3rem] p-8 sm:p-12 transition-all duration-700 hover:border-primary/40 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <Text className="text-primary uppercase tracking-[0.3em] text-xs font-bold block mb-2">
                  Expertise
                </Text>
                <Title level={2} className="m-0! text-text-primary text-4xl">
                  {t("services.title")}
                </Title>
              </div>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/40 to-transparent hidden sm:block mb-4 mx-8" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-primary/30 hover:bg-white/[0.08] transition-all duration-500 group/item hover:-translate-y-2 shadow-lg"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-white group-hover/item:shadow-[0_0_20px_rgba(74,107,80,0.6)] transition-all duration-500">
                    <span className="text-primary group-hover/item:text-white text-xl font-bold">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                  <Text className="text-text-primary text-xl font-semibold group-hover/item:translate-x-2 transition-transform duration-500">
                    {service}
                  </Text>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

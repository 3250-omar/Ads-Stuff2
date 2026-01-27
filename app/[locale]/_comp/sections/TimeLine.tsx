"use client";

import { Card, Badge, Typography, Space, Divider } from "antd";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { useGetSocialMedia } from "@/app/api/query";
import getSocialMedia from "@/constants/getSocialMedia";
import Link from "next/link";
import { useMemo } from "react";

gsap.registerPlugin(ScrollTrigger);

const { Title, Text, Paragraph } = Typography;

type TimelineItem = {
  title: string;
  date?: string;
  subtitle?: string;
  description?: string | React.ReactNode[];
  status?: string;
};

import { useTranslations } from "next-intl";

export default function Timeline() {
  const t = useTranslations("Timeline");
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const { socialMedia, loading } = useGetSocialMedia();

  const items: TimelineItem[] = useMemo(
    () => [
      {
        title: t("whoWeAre.title"),
        description: t("whoWeAre.description"),
      },
      {
        title: t("services.title"),
        description: [
          <div key="services" className="flex flex-wrap gap-2">
            {[
              t("services.items.socialMedia"),
              t("services.items.graphicDesign"),
              t("services.items.mediaProduction"),
              t("services.items.mediaBuying"),
              t("services.items.videoEditing"),
              t("services.items.webDev"),
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Text>•</Text>
                <Text>{item}</Text>
              </div>
            ))}
          </div>,
        ],
      },
      {
        title: t("platforms.title"),
        description: [
          loading ? (
            <div key="loading">{t("loading")}</div>
          ) : (
            <div key="socials" className="flex items-center gap-4 flex-wrap  ">
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
          ),
        ],
      },
    ],
    [socialMedia, loading, t],
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        const isLeft = index % 2 === 0;
        gsap.from(card, {
          x: isLeft ? -80 : 80,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [items]);

  return (
    <div ref={sectionRef} className="relative py-20 px-4 overflow-x-hidden">
      {/* Center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-primary/10 via-primary to-primary/10 -translate-x-1/2 hidden md:block rounded-full" />

      <div className="relative z-10 space-y-16">
        {items.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className={`flex flex-col md:flex-row items-center justify-between w-full ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline card */}
              <div className="w-full md:w-[45%]">
                <Card
                  variant="outlined"
                  className="shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl border border-gray-100 group hover:-translate-y-1 glass-card"
                  style={{ textAlign: isLeft ? "right" : "left" }}
                >
                  <div
                    className={`flex flex-col gap-3 ${
                      isLeft ? "items-end" : "items-start"
                    }`}
                  >
                    <Space
                      size="middle"
                      className={
                        (isLeft ? "flex-row-reverse" : "flex-row") +
                        " flex justify-center items-center w-full!"
                      }
                    >
                      <Title
                        level={3}
                        className="m-0! group-hover:text-primary transition-colors max-sm:text-xl!"
                      >
                        {item.title}
                      </Title>
                      {/* <Badge
                        count={item.date}
                        style={{
                          backgroundColor: "#AEC3B0",
                          color: "#0f2a1d",
                          fontWeight: "bold",
                          borderRadius: "1rem",
                          padding: "0 12px",
                        }}
                      /> */}
                    </Space>

                    {item.subtitle && (
                      <Text type="secondary" className="text-sm">
                        {item.subtitle}
                      </Text>
                    )}

                    {item.description &&
                    typeof item.description === "string" ? (
                      <Paragraph className="text-gray-600 leading-relaxed m-0 mt-2 ">
                        {item.description}
                      </Paragraph>
                    ) : (
                      <Space className="w-full! justify-center! mt-4!">
                        {item.description}
                      </Space>
                    )}

                    {item.status && (
                      <>
                        <Divider className="my-3 border-primary/20" />
                        <Badge
                          status="processing"
                          text={
                            <Text
                              strong
                              className="text-primary uppercase tracking-wider text-xs"
                            >
                              {item.status}
                            </Text>
                          }
                        />
                      </>
                    )}
                  </div>
                </Card>
              </div>

              {/* Timeline dot */}
              <div className="relative flex items-center justify-center w-12 h-12 my-4 md:my-0 z-20 max-sm:hidden">
                <div className="w-6 h-6 rounded-full bg-white border-4 border-primary shadow-lg animate-pulse-glow" />
              </div>

              {/* Empty space for the other side on desktop */}
              <div className="hidden md:block w-[45%]" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { Card, Badge, Typography, Space, Divider } from "antd";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { Title, Text, Paragraph } = Typography;

type TimelineItem = {
  title: string;
  date: string;
  subtitle?: string;
  description?: string;
  status?: string;
};

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

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
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [items]);

  return (
    <div ref={sectionRef} className="relative py-20 px-4">
      {/* Center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/10 via-primary to-primary/10 -translate-x-1/2 hidden md:block rounded-full" />

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
                      className={isLeft ? "flex-row-reverse" : "flex-row"}
                    >
                      <Title
                        level={4}
                        className="m-0! group-hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Title>
                      <Badge
                        count={item.date}
                        style={{
                          backgroundColor: "#AEC3B0",
                          color: "#0f2a1d",
                          fontWeight: "bold",
                          borderRadius: "1rem",
                          padding: "0 12px",
                        }}
                      />
                    </Space>

                    {item.subtitle && (
                      <Text type="secondary" className="text-sm">
                        {item.subtitle}
                      </Text>
                    )}

                    {item.description && (
                      <Paragraph className="text-gray-600 leading-relaxed m-0 mt-2">
                        {item.description}
                      </Paragraph>
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
              <div className="relative flex items-center justify-center w-12 h-12 my-4 md:my-0 z-20">
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

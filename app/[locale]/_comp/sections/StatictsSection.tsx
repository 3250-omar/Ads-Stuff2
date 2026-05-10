"use client";
import CountUp from "react-countup";
import { Typography } from "antd";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { Text } = Typography;
import { useTranslations } from "next-intl";

const StatictsSection = () => {
  const t = useTranslations("Statistics");
  const statistics = [
    { title: t("happyCustomers"), count: 99, suffix: "+" },
    { title: t("projectsCompleted"), count: 99, suffix: "+" },
  ];
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          // delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="gradient-section rounded-[3rem] border border-white/5 grid grid-cols-2 gap-8 w-full max-sm:grid-cols-1 max-md:grid-cols-2 p-10"
    >
      {statistics.map((statistic, index) => (
        <div
          key={statistic.title}
          ref={(el) => {
            if (el) cardsRef.current[index] = el;
          }}
          className="flex flex-col items-center justify-center gap-4 group transition-all duration-700 py-20 rounded-[2.5rem] bg-bg-card/40 backdrop-blur-xl border border-white/5 shadow-2xl hover:border-primary/40 hover:shadow-primary/10 hover:bg-bg-card/60"
        >
          <div className="text-6xl md:text-8xl font-black text-primary transition-all duration-500 max-sm:text-5xl group-hover:scale-110 drop-shadow-[0_0_20px_rgba(74,107,80,0.3)]">
            <CountUp end={statistic.count} duration={3} delay={0.2} />
            <span>{statistic.suffix}</span>
          </div>
          <Text className="text-xl md:text-2xl font-bold text-text-secondary group-hover:text-text-primary transition-colors duration-500 max-sm:text-lg tracking-wide uppercase">
            {statistic.title}
          </Text>
        </div>
      ))}
    </section>
  );
};

export default StatictsSection;

"use client";
import CountUp from "react-countup";
import { Typography } from "antd";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { Text } = Typography;
const statistics = [
  { title: "Happy Customers", count: 99, suffix: "+" },
  { title: "Projects Completed", count: 99, suffix: "+" },
  // { title: "Awards Won", count: 50, suffix: "" },
];

const StatictsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
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
      className="gradient-section rounded-[3rem] border border-secondary/30 grid grid-cols-2 gap-8 w-full max-sm:grid-cols-1 max-md:grid-cols-2 p-10"
    >
      {statistics.map((statistic, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) cardsRef.current[index] = el;
          }}
          className="flex flex-col items-center justify-center gap-3 group hover:bg-primary hover:-translate-y-3! hover:cursor-pointer transition-all duration-500  py-16 rounded-4xl bg-white shadow-lg hover:shadow-2xl hover:glow-primary"
        >
          <div className="text-6xl font-black text-primary group-hover:text-white transition-colors duration-300 max-sm:text-3xl ">
            <CountUp end={statistic.count} duration={3} delay={0.3} />
            <span>{statistic.suffix}</span>
          </div>
          <Text className="text-xl font-semibold text-gray-600 group-hover:text-white/90 transition-colors duration-300 max-sm:text-lg tracking-wide">
            {statistic.title}
          </Text>
        </div>
      ))}
    </section>
  );
};

export default StatictsSection;

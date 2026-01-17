"use client";
import { Button, Typography, Space } from "antd";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const { Title, Paragraph } = Typography;

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text from left
      gsap.from(textRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate image from right
      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      // Animate buttons from bottom
      gsap.from(buttonsRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="w-full grid grid-cols-2 gap-12 max-md:grid-cols-1 justify-center items-center relative min-h-[90vh] px-4 py-20"
    >
      <div
        ref={textRef}
        className="flex flex-col gap-8 text-left max-md:text-center items-center md:items-start"
      >
        <div className="space-y-2">
          <Title
            level={1}
            className="m-0! font-black! text-6xl! max-sm:text-4xl! max-md:text-5xl! text-darkModePrimary! leading-tight!"
          >
            It's Not Just Ads
          </Title>
          <Title
            level={1}
            className="m-0! font-black! text-6xl! max-sm:text-4xl! max-md:text-5xl! text-primary! leading-tight!"
          >
            It's The Whole Stuff
          </Title>
        </div>

        <Paragraph className="text-xl text-gray-500 max-w-lg max-md:mx-auto">
          We craft compelling brand stories, stunning visuals, and result-driven
          advertising campaigns that make your business unforgettable.
        </Paragraph>

        <div ref={buttonsRef}>
          <Space size="large" className="max-md:justify-center">
            <Button
              type="primary"
              size="large"
              className="px-10 h-14 rounded-2xl text-lg font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
              onClick={() => {
                const element = document.getElementById("get-started");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </Button>
            <Button
              size="large"
              className="px-10 h-14 rounded-2xl text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              onClick={() => {
                const element = document.getElementById("projects");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See Our Work
            </Button>
          </Space>
        </div>
      </div>

      <div ref={imageRef} className="w-full max-w-[550px] justify-self-center">
        <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border-4 border-white">
          <Image
            src="/imgs/1.jpeg"
            alt="Advertising Agency Hero"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-darkModePrimary/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}

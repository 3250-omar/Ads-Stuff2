"use client";
import { Button, Typography, Space } from "antd";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { Carousel } from "antd";
import Image from "next/image";

const { Title } = Typography;

const homeImages = [
  "/imgs/1.jpeg",
  "/imgs/2.jpeg",
  "/imgs/3.jpeg",
  "/imgs/4.jpeg",
  "/imgs/5.jpeg",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full grid grid-cols-2 gap-8 max-md:grid-cols-1 justify-center items-center relative min-h-[85vh] px-4"
    >
      <div className="flex flex-col gap-6 text-left max-md:text-center items-center md:items-start">
        <Title
          level={1}
          className="!font-bold !text-6xl max-sm:!text-3xl max-md:!text-4xl !text-primary !m-0"
        >
          We Create Stories That Matter{" "}
          <span className="block text-primary">
            <Typewriter
              words={["Ads", "Branding", "Social Media", "Content Marketing"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </Title>
        <Space size="large" className="max-md:justify-center">
          <Button
            type="primary"
            size="large"
            className="px-8 h-12 rounded-xl text-lg"
            onClick={() => {
              const element = document.getElementById("get-started");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started
          </Button>
          <Button
            size="large"
            className="px-8 h-12 rounded-xl text-lg border-primary text-primary hover:!text-primary hover:!border-primary"
            onClick={() => {
              const element = document.getElementById("projects");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See Our Work
          </Button>
        </Space>
      </div>

      <div className="w-full max-w-[600px] justify-self-center">
        <Carousel autoplay className="rounded-3xl overflow-hidden shadow-2xl">
          {homeImages.map((src, idx) => (
            <div key={idx} className="relative h-[450px] w-full">
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

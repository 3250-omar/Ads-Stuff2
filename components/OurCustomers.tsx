"use client";

import { Carousel, Divider, Typography } from "antd";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

const OurCustomers = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="space-y-12 py-20 gradient-section rounded-[3rem]"
    >
      <div ref={titleRef} className="flex flex-col items-center">
        <Title level={2} className="section-title">
          Our Trusted Partners
        </Title>
        <Divider className="border-primary/30 w-1/4 min-w-[100px] my-6" />
        <Paragraph className="text-xl text-gray-500 max-w-2xl text-center">
          We are proud to collaborate with leading brands and help them achieve
          extraordinary results.
        </Paragraph>
      </div>

      <div ref={carouselRef} className="px-4">
        <Carousel
          autoplay
          slidesToShow={4}
          dots={false}
          className="customer-carousel"
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
          ]}
          
        >
          {customerImages.map((src, index) => (
            <div key={index} className="px-4">
              <div className="relative h-[280px] w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-white group">
                <Image
                  src={src}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-darkModePrimary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default OurCustomers;

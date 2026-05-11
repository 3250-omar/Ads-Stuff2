"use client";
import { Button, Space, Spin } from "antd";
import { useEffect, useRef, useCallback, useState } from "react";
import ImageStack, { positionOrders } from "./imageStock";
import { useHeroMedia } from "@/app/api/query";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeroSection({
  initialImages,
}: {
  initialImages?: string[];
}) {
  const t = useTranslations("Hero");
  const [positionIndex, setPositionIndex] = useState(0);
  const {
    images,
    isLoading,
    imageIndices,
    nextImage,
    setImageIndices,
    setNextImage,
  } = useHeroMedia(initialImages);
  const [isSwappingImage, setIsSwappingImage] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const isVisibleRef = useRef(true);

  // Memoize scroll handlers
  const handleGetStartedClick = useCallback(() => {
    document
      .getElementById("get-started")
      ?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleSeeWorkClick = useCallback(() => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const animateSwap = useCallback(() => {
    if (!isVisibleRef.current) return;

    setPositionIndex((prev) => {
      const nextPosIndex = (prev + 1) % 3;
      const nextOrder = positionOrders[nextPosIndex];
      const cardGoingToBack = nextOrder.findIndex((pos) => pos === "left");

      // Set swapping state to trigger fade out/in
      setIsSwappingImage(cardGoingToBack);

      // Update image for the card going to back after a short delay (when it's fading out)
      setTimeout(() => {
        setImageIndices((prevIndices) => {
          const newIndices = [...prevIndices];
          newIndices[cardGoingToBack] = nextImage % images.length;
          return newIndices;
        });
        setNextImage((prevNext) => (prevNext + 1) % images.length);

        // Reset swapping state after image change
        setTimeout(() => setIsSwappingImage(null), 500);
      }, 400);

      return nextPosIndex;
    });
  }, [nextImage, images.length, setImageIndices, setNextImage]);

  // Initial entrance and animation interval
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const interval = setInterval(() => {
      animateSwap();
    }, 4000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [animateSwap]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20 px-4"
    >
      {/* Cinematic Background Media Grid */}
      <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 opacity-20 scale-105">
        {images
          .concat(images)
          .slice(0, 20)
          .map((img: string, i: number) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl transition-all duration-1000 ${
                isSwappingImage === i % 3
                  ? "opacity-40 scale-95"
                  : "opacity-100"
              }`}
            >
              <Image
                src={img || "/projectHasNoImages.webp"}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
      </div>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-bg-primary via-bg-primary/80 to-bg-primary" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-bg-primary)_100%)] opacity-60" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl w-full flex flex-col items-center text-center gap-10 animate-fade-in-up">
        <div className="space-y-4">
          <h1 className="m-0 font-black text-6xl md:text-8xl tracking-tighter text-text-primary leading-[0.9]">
            {t("title1")}
          </h1>
          <h1 className="m-0 font-black text-6xl md:text-8xl tracking-tighter text-primary leading-[0.9]">
            {t("title2")}
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl font-medium leading-relaxed">
          {t("description")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
          <Button
            type="primary"
            size="large"
            className="px-12 h-16 rounded-2xl text-xl font-bold shadow-2xl shadow-primary/40 hover:shadow-primary/60 hover:scale-105 transition-all duration-500 max-sm:px-6! max-sm:h-14! max-sm:text-lg!"
            onClick={handleGetStartedClick}
          >
            {t("getStarted")}
          </Button>
          <Button
            variant="outlined"
            size="large"
            className="px-12 h-16 rounded-2xl text-xl font-bold border-2 border-white/20 text-text-primary hover:border-primary hover:text-primary transition-all duration-500 max-sm:px-6! max-sm:h-14! max-sm:text-lg!"
            onClick={handleSeeWorkClick}
          >
            {t("seeWork")}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-30 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}

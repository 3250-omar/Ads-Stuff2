"use client";
import { Button, Space, Spin } from "antd";
import { useEffect, useRef, useCallback, useState } from "react";
import ImageStack, { positionOrders } from "./imageStock";
import { useHeroMedia } from "@/app/api/query";

export default function HeroSection({
  initialImages,
}: {
  initialImages?: string[];
}) {
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
  }, [nextImage]);

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
      className="w-full grid grid-cols-2 gap-12 max-md:grid-cols-1 justify-center items-center relative min-h-[90vh] px-4 py-20 overflow-x-hidden"
    >
      <div className="flex flex-col gap-8 text-left max-md:text-center items-center md:items-start animate-slide-in-left">
        <div className="space-y-2">
          <h1 className="m-0 font-black text-6xl max-sm:text-4xl max-md:text-5xl text-darkModePrimary leading-tight">
            {"It's"} Not Just Ads
          </h1>
          <h1 className="m-0 font-black text-6xl max-sm:text-4xl max-md:text-5xl text-primary leading-tight">
            {"It's"} The Whole Stuff
          </h1>
        </div>

        <p className="text-xl text-gray-500 max-w-lg max-md:mx-auto">
          We craft compelling brand stories, stunning visuals, and result-driven
          advertising campaigns that make your business unforgettable.
        </p>

        <div className="animate-fade-in-up [animation-delay:400ms]">
          <Space size="large" className="max-md:justify-center">
            <Button
              type="primary"
              size="large"
              className="px-10 h-14 rounded-2xl text-lg font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300 max-sm:px-4! max-sm:h-12 max-sm:text-sm!"
              onClick={handleGetStartedClick}
            >
              Get Started
            </Button>
            <Button
              size="large"
              className="px-10 h-14 rounded-2xl text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 max-sm:px-4 max-sm:h-12 max-sm:text-sm!"
              onClick={handleSeeWorkClick}
            >
              See Our Work
            </Button>
          </Space>
        </div>
      </div>

      <div className="w-full max-w-[700px] justify-self-center px-4 md:px-0 animate-slide-in-right [animation-delay:200ms]">
        <div className="relative h-[380px] sm:h-[450px] md:h-[520px] lg:h-[580px] w-full flex items-center justify-center">
          <ImageStack
            positionIndex={positionIndex}
            imageIndices={imageIndices}
            isSwappingImage={isSwappingImage}
            images={images}
          />
        </div>
      </div>
    </section>
  );
}

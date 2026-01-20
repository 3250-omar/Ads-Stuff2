"use client";
import { Button, Typography, Space } from "antd";
import Image from "next/image";
import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

const { Title, Paragraph } = Typography;

// All available images
const images = [
  "/imgs/1.jpeg",
  "/imgs/2.jpeg",
  "/imgs/3.jpeg",
  "/imgs/4.jpeg",
  "/imgs/5.jpeg",
];

// Position configurations for the three cards
const positions = {
  left: { x: -50, y: 30, rotation: -15, zIndex: 1, scale: 0.88 },
  center: { x: 0, y: 0, rotation: 0, zIndex: 3, scale: 1 },
  right: { x: 50, y: 30, rotation: 15, zIndex: 2, scale: 0.88 },
};

// Card positions order: [card0Position, card1Position, card2Position]
const positionOrders = [
  ["left", "center", "right"], // Initial: card0=left, card1=center, card2=right
  ["right", "left", "center"], // After 1st swap: card0=right, card1=left, card2=center
  ["center", "right", "left"], // After 2nd swap: card0=center, card1=right, card2=left
];

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageCardsRef = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isVisibleRef = useRef(true);

  // Track which images are displayed (indices into images array) - use ref to avoid re-renders
  const imageIndicesRef = useRef([0, 1, 2]);
  // Track current position configuration for swapping
  const positionIndexRef = useRef(0);
  // Track next image to show
  const nextImageRef = useRef(3);

  // Memoize scroll handlers to prevent recreation
  const handleGetStartedClick = useCallback(() => {
    const element = document.getElementById("get-started");
    element?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleSeeWorkClick = useCallback(() => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const animateSwap = useCallback(() => {
    const cards = imageCardsRef.current;
    if (cards.length < 3 || !isVisibleRef.current) return;

    // Move to next position configuration
    positionIndexRef.current = (positionIndexRef.current + 1) % 3;
    const currentOrder = positionOrders[positionIndexRef.current];

    // Find which card is going to the "left" (back) position - this card will get a new image
    const cardGoingToBack = currentOrder.findIndex((pos) => pos === "left");

    // Animate each card to its new position with smooth motion
    cards.forEach((card, index) => {
      const posKey = currentOrder[index] as keyof typeof positions;
      const pos = positions[posKey];

      // If this card is going to the back, fade it out, change image, then fade in
      if (index === cardGoingToBack) {
        // First animate to position with fade out
        gsap.to(card, {
          x: pos.x,
          y: pos.y,
          rotation: pos.rotation,
          zIndex: pos.zIndex,
          scale: pos.scale,
          opacity: 0.3,
          duration: 0.6,
          ease: "power2.inOut",
          force3D: true,
          onComplete: () => {
            // Change the image src directly on the DOM element
            const imgElement = card.querySelector("img");
            if (imgElement) {
              const newIndex = nextImageRef.current % images.length;
              imgElement.src = images[newIndex];
              imageIndicesRef.current[index] = newIndex;
              nextImageRef.current = (nextImageRef.current + 1) % images.length;
            }
            // Fade back in
            gsap.to(card, {
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
            });
          },
        });
      } else {
        // Normal smooth animation for other cards
        gsap.to(card, {
          x: pos.x,
          y: pos.y,
          rotation: pos.rotation,
          zIndex: pos.zIndex,
          scale: pos.scale,
          duration: 1.2,
          ease: "elastic.out(1, 0.75)",
          force3D: true,
        });
      }
    });
  }, []);

  // Initial entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text from left
      gsap.from(textRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        force3D: true,
      });

      // Animate image from right
      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        force3D: true,
      });

      // Animate buttons from bottom
      gsap.from(buttonsRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out",
        force3D: true,
      });

      // Initial card positions with staggered entrance
      const cards = imageCardsRef.current;
      if (cards.length >= 3) {
        gsap.from(cards[0], {
          x: -200,
          opacity: 0,
          rotation: -30,
          duration: 1,
          delay: 0.5,
          ease: "back.out(1.7)",
          force3D: true,
        });
        gsap.from(cards[1], {
          y: -200,
          opacity: 0,
          scale: 0.5,
          duration: 1,
          delay: 0.7,
          ease: "back.out(1.7)",
          force3D: true,
        });
        gsap.from(cards[2], {
          x: 200,
          opacity: 0,
          rotation: 30,
          duration: 1,
          delay: 0.9,
          ease: "back.out(1.7)",
          force3D: true,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  // Intersection Observer to pause animations when off-screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;

          // Clear existing interval
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }

          // Only start interval if visible
          if (entry.isIntersecting) {
            intervalRef.current = setInterval(() => {
              animateSwap();
            }, 3000);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [animateSwap]);

  return (
    <section
      ref={sectionRef}
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
              onClick={handleGetStartedClick}
            >
              Get Started
            </Button>
            <Button
              size="large"
              className="px-10 h-14 rounded-2xl text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              onClick={handleSeeWorkClick}
            >
              See Our Work
            </Button>
          </Space>
        </div>
      </div>

      <div
        ref={imageRef}
        className="w-full max-w-[700px] justify-self-center px-4 md:px-0"
      >
        <div className="relative h-[380px] sm:h-[450px] md:h-[520px] lg:h-[580px] w-full flex items-center justify-center">
          {/* Image Stack Container */}
          <div className="relative w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-[320px] sm:h-[380px] md:h-[440px] lg:h-[500px]">
            {/* Left Image (inclined) */}
            <div
              ref={(el) => {
                if (el) imageCardsRef.current[0] = el;
              }}
              className="absolute w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-[270px] sm:h-[320px] md:h-[370px] lg:h-[420px] rounded-3xl sm:rounded-4xl overflow-hidden shadow-xl sm:shadow-2xl shadow-primary/20 sm:shadow-primary/30 border-2 sm:border-3 md:border-4 border-white cursor-pointer transition-shadow hover:shadow-primary/40 sm:hover:shadow-primary/50"
              style={{
                left: "-50px",
                top: "30px",
                transform: "rotate(-15deg)",
                zIndex: 1,
                willChange: "transform, opacity",
              }}
            >
              <Image
                src={images[imageIndicesRef.current[0]]}
                alt="Portfolio Image 1"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, (max-width: 1024px) 300px, 340px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-darkModePrimary/40 to-transparent" />
            </div>

            {/* Center Image (main) */}
            <div
              ref={(el) => {
                if (el) imageCardsRef.current[1] = el;
              }}
              className="absolute w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-3xl sm:rounded-4xl overflow-hidden shadow-xl sm:shadow-2xl shadow-primary/30 sm:shadow-primary/40 border-2 sm:border-3 md:border-4 border-white cursor-pointer transition-shadow hover:shadow-primary/50 sm:hover:shadow-primary/60"
              style={{
                left: "50%",
                top: "0px",
                transform: "translateX(-50%) rotate(0deg)",
                zIndex: 3,
                willChange: "transform, opacity",
              }}
            >
              <Image
                src={images[imageIndicesRef.current[1]]}
                alt="Portfolio Image 2"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-darkModePrimary/30 to-transparent" />
            </div>

            {/* Right Image (inclined) */}
            <div
              ref={(el) => {
                if (el) imageCardsRef.current[2] = el;
              }}
              className="absolute w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-[270px] sm:h-[320px] md:h-[370px] lg:h-[420px] rounded-3xl sm:rounded-4xl overflow-hidden shadow-xl sm:shadow-2xl shadow-primary/20 sm:shadow-primary/30 border-2 sm:border-3 md:border-4 border-white cursor-pointer transition-shadow hover:shadow-primary/40 sm:hover:shadow-primary/50"
              style={{
                right: "-50px",
                top: "30px",
                transform: "rotate(15deg)",
                zIndex: 2,
                willChange: "transform, opacity",
              }}
            >
              <Image
                src={images[imageIndicesRef.current[2]] || ""}
                alt="Portfolio Image 3"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, (max-width: 1024px) 300px, 340px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-darkModePrimary/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

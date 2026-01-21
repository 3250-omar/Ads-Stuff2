"use client";
import { navItems } from "@/constants/routes";
import { Button } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.scrollY);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.key);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);

    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`flex justify-between items-center px-5 sticky top-0 z-50 h-[80px] transition-all duration-300 ${
        windowHeight >= 80
          ? "bg-white shadow-md justify-center"
          : "bg-transparent"
      }`}
    >
      <Button
        onClick={() => scrollToSection("#home")}
        className="h-auto! p-0! border-none! shadow-none! hover:bg-transparent! flex items-center"
        type="text"
      >
        <Image
          src="/Logo3G.png"
          alt="Logo"
          className="object-contain"
          width={110}
          height={50}
          style={{ width: "auto", height: "auto" }}
          priority
        />
      </Button>
      <div className="flex items-center gap-5 max-sm:hidden">
        <div className="flex items-center gap-6">
          {navItems.map((item: { key: string; href: string }) => (
            <Button
              onClick={() => scrollToSection(item.href)}
              key={item.key}
              className={`text-base transition-colors hover:text-primary! capitalize! ${
                activeSection === item.key
                  ? "text-primary! font-bold! border-primary!"
                  : "text-gray-600"
              }`}
              type="dashed"
            >
              {item.key}
            </Button>
          ))}
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[280px] rounded-full bg-primary/80 backdrop-blur-md text-white z-50 mx-auto p-3 hidden max-sm:block shadow-lg">
        <div className="flex items-center gap-2 justify-around">
          {navItems.map((item: { key: string; href: string }) => (
            <Button
              onClick={() => scrollToSection(item.href)}
              key={item.key}
              className={`transition-colors! text-sm! hover:text-black! capitalize! ${
                activeSection === item.key
                  ? "text-black! font-bold! bg-white/20! px-2! py-1! rounded-md!"
                  : "text-white!"
              }`}
              type="text"
            >
              {item.key}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

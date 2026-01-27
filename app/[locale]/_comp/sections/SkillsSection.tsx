"use client";

import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobelightroom,
  SiFigma,
  SiCanva,
  SiSketch,
  SiBlender,
  SiAdobepremierepro,
} from "react-icons/si";
import { FaPalette, FaFont, FaBrain } from "react-icons/fa";
import { Tooltip, Typography } from "antd";

const { Title } = Typography;

import { useTranslations } from "next-intl";

export default function SkillsSection() {
  const t = useTranslations("Skills");

  const skills = [
    {
      name: t("items.photoshop"),
      icon: <SiAdobephotoshop className="w-20 h-20 text-[#001E36]" />,
    },
    {
      name: t("items.illustrator"),
      icon: <SiAdobeillustrator className="w-20 h-20 text-[#330000]" />,
    },
    {
      name: t("items.afterEffects"),
      icon: <SiAdobeaftereffects className="w-20 h-20 text-[#00005C]" />,
    },
    {
      name: t("items.lightroom"),
      icon: <SiAdobelightroom className="w-20 h-20 text-[#001E36]" />,
    },
    {
      name: t("items.figma"),
      icon: <SiFigma className="w-20 h-20 text-[#A259FF]" />,
    },
    {
      name: t("items.canva"),
      icon: <SiCanva className="w-20 h-20 text-[#00C4CC]" />,
    },
    {
      name: t("items.sketch"),
      icon: <SiSketch className="w-20 h-20 text-[#F7B500]" />,
    },
    {
      name: t("items.blender"),
      icon: <SiBlender className="w-20 h-20 text-[#E87D0D]" />,
    },
    {
      name: t("items.premierePro"),
      icon: <SiAdobepremierepro className="w-20 h-20 text-[#00005C]" />,
    },
    {
      name: t("items.colorTheory"),
      icon: <FaPalette className="w-20 h-20 text-teal-500" />,
    },
    {
      name: t("items.typography"),
      icon: <FaFont className="w-20 h-20 text-rose-500" />,
    },
    {
      name: t("items.creativeThinking"),
      icon: <FaBrain className="w-20 h-20 text-fuchsia-500" />,
    },
  ];

  return (
    <section className="w-full py-20 flex flex-col gap-12 overflow-hidden bg-gray-50/30">
      <div className="container mx-auto px-4 text-center">
        <Title
          level={2}
          className="m-0! text-primary! font-black! text-5xl! max-sm:text-4xl!"
        >
          {t("title")}
        </Title>
      </div>

      <div
        className="relative flex overflow-hidden py-10 marquee-container"
        dir="ltr"
      >
        <div className="flex animate-marquee gap-10 px-5">
          {skills.map((skill, i) => (
            <div key={`${skill.name}-1-${i}`} className="shrink-0">
              <Tooltip title={skill.name} color="#6B9071" placement="top">
                <div className="flex items-center justify-center w-20 h-20 max-sm:w-16 max-sm:h-16 rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:scale-110 hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer text-4xl">
                  {skill.icon}
                </div>
              </Tooltip>
            </div>
          ))}
        </div>

        <div className="absolute top-10 left-0 flex animate-marquee gap-10 px-5 ml-[100%]">
          {skills.map((skill, i) => (
            <div key={`${skill.name}-2-${i}`} className="shrink-0">
              <Tooltip title={skill.name} color="#6B9071" placement="top">
                <div className="flex items-center justify-center w-20 h-20 max-sm:w-16 max-sm:h-16 rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:scale-110 hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer text-4xl">
                  {skill.icon}
                </div>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

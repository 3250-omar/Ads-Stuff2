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

const skills = [
  {
    name: "Adobe Photoshop",
    icon: <SiAdobephotoshop className="w-8 h-8 text-[#001E36]" />,
  },
  {
    name: "Adobe Illustrator",
    icon: <SiAdobeillustrator className="w-8 h-8 text-[#330000]" />,
  },
  {
    name: "Adobe After Effects",
    icon: <SiAdobeaftereffects className="w-8 h-8 text-[#00005C]" />,
  },
  {
    name: "Adobe Lightroom",
    icon: <SiAdobelightroom className="w-8 h-8 text-[#001E36]" />,
  },
  { name: "Figma", icon: <SiFigma className="w-8 h-8 text-[#A259FF]" /> },
  { name: "Canva", icon: <SiCanva className="w-8 h-8 text-[#00C4CC]" /> },
  { name: "Sketch", icon: <SiSketch className="w-8 h-8 text-[#F7B500]" /> },
  { name: "Blender", icon: <SiBlender className="w-8 h-8 text-[#E87D0D]" /> },
  {
    name: "Premiere Pro",
    icon: <SiAdobepremierepro className="w-8 h-8 text-[#00005C]" />,
  },
  {
    name: "Color Theory",
    icon: <FaPalette className="w-8 h-8 text-teal-500" />,
  },
  { name: "Typography", icon: <FaFont className="w-8 h-8 text-rose-500" /> },
  {
    name: "Creative Thinking",
    icon: <FaBrain className="w-8 h-8 text-fuchsia-500" />,
  },
];

export default function SkillsSection() {
  return (
    <section className="w-full py-32 flex justify-center items-center relative overflow-hidden">
      <div className="relative w-[350px] h-[350px] flex justify-center items-center">
        {/* Center text */}
        <Title
          level={2}
          className="!m-0 !text-primary !font-black !text-5xl max-sm:!text-4xl"
        >
          Skills
        </Title>

        {/* Rotating circle container */}
        <div className="absolute w-full h-full animate-spin-slow">
          {skills.map((skill, i) => {
            const angle = (i / skills.length) * 360;
            return (
              <div
                key={skill.name}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`,
                }}
              >
                <Tooltip title={skill.name} color="#6B9071" placement="top">
                  <div className="flex items-center justify-center w-16 h-16 max-sm:w-14 max-sm:h-14 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-50 hover:scale-125 hover:border-primary transition-all duration-500 cursor-pointer">
                    {skill.icon}
                  </div>
                </Tooltip>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
import ToolTipComp from "@/components/ui/ToolTipComp";

const skills = [
  {
    name: "Adobe Photoshop",
    icon: <SiAdobephotoshop className="w-8 h-8 text-blue-500" />,
  },
  {
    name: "Adobe Illustrator",
    icon: <SiAdobeillustrator className="w-8 h-8 text-orange-500" />,
  },
  {
    name: "Adobe After Effects",
    icon: <SiAdobeaftereffects className="w-8 h-8 text-purple-600" />,
  },
  {
    name: "Adobe Lightroom",
    icon: <SiAdobelightroom className="w-8 h-8 text-sky-600" />,
  },
  { name: "Figma", icon: <SiFigma className="w-8 h-8 text-pink-500" /> },
  { name: "Canva", icon: <SiCanva className="w-8 h-8 text-cyan-500" /> },
  { name: "Sketch", icon: <SiSketch className="w-8 h-8 text-yellow-500" /> },
  { name: "Blender", icon: <SiBlender className="w-8 h-8 text-orange-400" /> },
  {
    name: "Premiere Pro",
    icon: <SiAdobepremierepro className="w-8 h-8 text-indigo-600" />,
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
    <section className="w-full py-24 flex justify-center items-center  relative overflow-hidden">
      <div className="relative w-[300px] h-[300px] flex justify-center items-center">
        {/* Center text */}
        <h2 className="text-4xl font-bold text-primary max-sm:text-3xl">
          Skills
        </h2>

        {/* Rotating circle container */}
        <div className="absolute w-full h-full animate-spin-slow ">
          {skills.map((skill, i) => {
            const angle = (i / skills.length) * 360;
            return (
              <div
                key={skill.name}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `rotate(${angle}deg) translate(130px) rotate(-${angle}deg)`,
                }}
              >
                <div className="flex items-center justify-center w-16 h-16 max-sm:w-12 max-sm:h-12 rounded-full bg-white  shadow-lg shadow-primary/50 hover:scale-110 transition-all duration-300 hover:bg-schemaWhite">
                  <ToolTipComp trigger={skill.icon} title={skill.name} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

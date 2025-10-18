"use client";
import {
  GitGraphIcon,
  Move,
  Printer,
  ShoppingBag,
  Video,
  Webhook,
} from "lucide-react";
import Image from "next/image";

export const WhyDiffSection = () => {
  const benefits = [
    {
      title: "Motion Graphic",
      description: "Motion Graphic",
      Icon: Move,
    },
    {
      title: "Web Design",
      description: "Web Design",
      Icon: Webhook,
    },
    {
      title: "Video Production",
      description: "Video Production",
      Icon: Video,
    },
    {
      title: "Branding",
      description: "Branding",
      Icon: ShoppingBag,
    },
    {
      title: "Graphic Design",
      description: "Graphic Design",
      Icon: GitGraphIcon,
    },
    {
      title: "Print Design",
      description: "Print Design",
      Icon: Printer,
    },
  ];

  return (
    <section className="w-full flex justify-center items-center  min-h-[80vh] max-sm:flex-col-reverse gap-4">
      <Image
        src={"/imgs/1.jpeg"}
        alt="image"
        width={500}
        height={500}
        className="rounded-4xl"
      />
      <div className="flex flex-col gap-5 ">
        <h2 className="text-6xl font-bold text-primary">Why We Iconic !</h2>
        <h2 className="text-2xl font-semibold text-primary/60">
          We are a leading advertising agency with a passion for creating
          innovative and effective campaigns that drive results.
        </h2>
        <div className="grid grid-cols-2 gap-4 grid-rows-3 ">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex gap-2 items-center p-5 rounded-2xl justify-center hover:bg-primary hover:-translate-y-2 transition-all cursor-pointer hover:!text-secondary"
            >
              <benefit.Icon className="text-secondary" />
              <div className="flex flex-col justify-between ">
                <h2 className="text-2xl font-bold ">{benefit.title}</h2>
                <p className="font-semibold">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

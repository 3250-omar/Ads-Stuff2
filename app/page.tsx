"use client";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import CarouselComp from "@/components/ui/carouselComponet";
import StatictsSection from "@/components/StatictsSection";
import { Timeline } from "@/components/TimeLine";
import Link from "next/link";
// import { WhyDiffSection } from "@/components/WhyDiffSection";
const timelineItems = [
  {
    title: "Project Started",
    date: "Jan 2025",
    description: "Initial planning and setup of the repository.",
  },
  {
    title: "Design Phase",
    date: "Feb 2025",
    description: "UI/UX design and prototyping using Figma.",
    status: "In Progress",
  },
  {
    title: "Development",
    date: "Mar 2025",
    description: "Started implementing frontend and backend.",
  },
];
export default function Home() {
  return (
    <div className="flex flex-col items-center  min-h-screen text-center gap-10">
      {/* sloganArea */}
      <section className="w-full grid grid-cols-2 gap-4 max-md:grid-cols-1 justify-center items-center relative min-h-[85vh]">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-6xl text-primary ">
            We Create Stories That Matter{" "}
            <Typewriter
              words={["Ads", "Branding", "Social Media", "Content Marketing"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
          <div className="flex gap-5 justify-center items-center">
            <Button className="px-5 text-white " type="button" asChild>
              <Link href="#get-started">Get Started</Link>
            </Button>
            <Button
              className="px-5  bg-transparent border border-primary text-primary hover:text-white"
              type="button"
              asChild
            >
              <Link href="/projects">See Our Work</Link>
            </Button>
          </div>
        </div>
        <div>
          <CarouselComp
            items={[
              "/imgs/1.jpeg",
              "/imgs/2.jpeg",
              "/imgs/3.jpeg",
              "/imgs/4.jpeg",
              "/imgs/5.jpeg",
            ]}
            autoPlay
            cardClassName="rounded-xl"
          />
        </div>
      </section>
      {/* statictsArea */}
      <div id="get-started" className="w-full space-y-10">
        <StatictsSection />
        {/* <WhyDiffSection /> */}
        <Timeline items={timelineItems} />
      </div>
    </div>
  );
}

"use client";
import HeroSection from "./_comp/sections/HeroSection";
import dynamic from "next/dynamic";
import { Spin } from "antd";
import StatictsSection from "@/components/StatictsSection";
import ContactsSection from "./_comp/sections/ContactsSection";
import LazySection from "@/components/LazySection";

const Timeline = dynamic(() => import("@/components/TimeLine"), {
  ssr: false,
});
const OurCustomers = dynamic(() => import("@/components/OurCustomers"), {
  ssr: false,
});
const FeedBacks = dynamic(() => import("@/components/FeedBacks"), {
  ssr: false,
});
const ProjectsSection = dynamic(
  () => import("./_comp/sections/ProjectsSection"),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen text-center gap-10">
      <HeroSection />
      {/* Content Area */}
      <div id="get-started" className="w-full space-y-24 py-10">
        {/* <SkillsSection /> */}
        <StatictsSection />
        <LazySection minHeight={400}>
          <Timeline />
        </LazySection>
        <LazySection minHeight={400}>
          <ProjectsSection />
        </LazySection>
        <LazySection minHeight={400}>
          <OurCustomers />
        </LazySection>
        <LazySection minHeight={400}>
          <FeedBacks />
        </LazySection>
        <ContactsSection />
      </div>
    </div>
  );
}

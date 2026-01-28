"use client";
import HeroSection from "./sections/HeroSection";
import dynamic from "next/dynamic";
import LazySection from "@/components/LazySection";

const StatictsSection = dynamic(() => import("./sections/StatictsSection"), {
  ssr: true,
  loading: () => (
    <div className="w-full h-[200px] animate-pulse bg-gray-50/50 rounded-[3rem]" />
  ),
});

const Timeline = dynamic(() => import("./sections/TimeLine"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] animate-pulse bg-gray-50/50 rounded-[3rem]" />
  ),
});

const OurCustomers = dynamic(() => import("./sections/OurCustomers"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] animate-pulse bg-gray-50/50 rounded-[3rem]" />
  ),
});
const ArticlesSection = dynamic(() => import("./sections/ArticlesSection"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] animate-pulse bg-gray-50/50 rounded-[3rem]" />
  ),
});

const ProjectsSection = dynamic(() => import("./sections/ProjectsSection"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] animate-pulse bg-gray-50/50 rounded-[3rem]" />
  ),
});
const ContactsSection = dynamic(() => import("./sections/ContactsSection"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] animate-pulse bg-gray-50/50 rounded-[3rem]" />
  ),
});

export default function PageContent({
  initialHeroImages,
}: {
  initialHeroImages?: string[];
}) {
  return (
    <div className="flex flex-col items-center min-h-screen text-center gap-10">
      <HeroSection initialImages={initialHeroImages} />
      {/* Content Area */}
      <div id="get-started" className="w-full space-y-24 py-10">
        {/* <SkillsSection /> */}
        <StatictsSection />
        <LazySection minHeight={400}>
          <Timeline />
        </LazySection>
        <LazySection id="projects" minHeight={400}>
          <ProjectsSection />
        </LazySection>
        <LazySection minHeight={400}>
          <ArticlesSection />
        </LazySection>
        <LazySection minHeight={400}>
          <OurCustomers />
        </LazySection>
        <LazySection id="contacts" minHeight={400}>
          <ContactsSection />
        </LazySection>
      </div>
    </div>
  );
}

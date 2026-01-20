import StatictsSection from "@/components/StatictsSection";
import { Timeline } from "@/components/TimeLine";
import OurCustomers from "@/components/OurCustomers";
import FeedBacks from "@/components/FeedBacks";
import SkillsSection from "@/components/SkillsSection";
import HeroSection from "./_comp/sections/HeroSection";
import ProjectsSection from "./_comp/sections/ProjectsSection";
import ContactsSection from "./_comp/sections/ContactsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen text-center gap-10">
      <HeroSection />
      {/* Content Area */}
      <div id="get-started" className="w-full space-y-24 py-10">
        {/* <SkillsSection /> */}
        <StatictsSection />
        <Timeline />
        <ProjectsSection />
        <OurCustomers />
        <FeedBacks />
        <ContactsSection />
      </div>
    </div>
  );
}

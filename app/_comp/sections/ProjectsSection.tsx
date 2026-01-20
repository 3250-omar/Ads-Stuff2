"use client";
import { Typography, Divider } from "antd";
import TabsComp from "@/components/TabsComp";
import FinishedProjects from "@/components/projects/FinishedProjects";
import InProgressProjects from "@/components/projects/InProgressProjects";
import AllProjects from "@/components/projects/AllProjects";
import { projectsData } from "@/constants/projects";
import { useMemo } from "react";

const { Title, Paragraph } = Typography;

const ProjectsSection = () => {
  const projectTabsItems = useMemo(
    () => [
      {
        title: "All Projects",
        value: "all",
        content: <AllProjects projects={projectsData} />,
      },
      {
        title: "Finished",
        value: "finished",
        content: (
          <FinishedProjects
            finished={projectsData.filter(
              (project) => project.status === "finished",
            )}
          />
        ),
      },
      {
        title: "In Progress",
        value: "inProgress",
        content: (
          <InProgressProjects
            inProgress={projectsData.filter(
              (project) => project.status === "inprogress",
            )}
          />
        ),
      },
    ],
    [projectsData],
  );

  return (
    <section
      id="projects"
      className="w-full px-4 py-20 gradient-section rounded-[3rem]"
    >
      <div className="text-center mb-16 flex flex-col items-center">
        <Title level={2} className="section-title mb-4">
          Our Creative Impact
        </Title>
        <Divider className="border-primary/30 w-1/4 min-w-[100px] my-6" />
        <Paragraph className="text-xl text-gray-500 max-w-2xl text-center">
          Explore our portfolio of successful collaborations and innovative
          solutions that drive growth.
        </Paragraph>
      </div>
      <TabsComp tabs={projectTabsItems} />
    </section>
  );
};
export default ProjectsSection;

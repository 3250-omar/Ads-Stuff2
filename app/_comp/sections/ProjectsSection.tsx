"use client";
import { Typography, Divider } from "antd";
import TabsComp from "@/components/TabsComp";
import FinishedProjects from "@/components/projects/FinishedProjects";
import InProgressProjects from "@/components/projects/InProgressProjects";
import AllProjects from "@/components/projects/AllProjects";

const { Title } = Typography;

const projectsData = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/imgs/1.jpeg",
    link: "#",
    status: "finished",
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/imgs/2.jpeg",
    link: "#",
    status: "inprogress",
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/imgs/3.jpeg",
    link: "#",
    status: "finished",
  },
  {
    title: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/imgs/1.jpeg",
    link: "#",
    status: "inprogress",
  },
  {
    title: "Project 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/imgs/2.jpeg",
    link: "#",
    status: "inprogress",
  },
  {
    title: "Project 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/imgs/3.jpeg",
    link: "#",
    status: "finished",
  },
];

export default function ProjectsSection() {
  const projectTabsItems = [
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
            (project) => project.status === "finished"
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
            (project) => project.status === "inprogress"
          )}
        />
      ),
    },
  ];

  return (
    <section id="projects" className="w-full px-4 py-16">
      <div className="text-center mb-12">
        <Title
          level={2}
          className="!text-primary !font-black !text-5xl !m-0 mb-4"
        >
          Our Projects
        </Title>
        <Divider className="border-primary/30 w-1/4 min-w-[100px] mx-auto" />
      </div>
      <TabsComp tabs={projectTabsItems} />
    </section>
  );
}

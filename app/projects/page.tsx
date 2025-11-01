import FinishedProjects from "./_comp/FinishedProjects";
import InProgressProjects from "./_comp/InProgressProjects";
import AllProjects from "./_comp/AllProjects";
import TabsComp from "@/components/TabsComp";
import { getProjects } from "@/actions/projectActions";
export default async function Projects() {
  // const t = await getTranslations("Projects");
  const projects = [
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
  const tabsItems = [
    {
      title: "All Projects",
      value: "all",
      content: <AllProjects projects={projects} />,
    },
    {
      title: "Finished",
      value: "finished",
      content: (
        <FinishedProjects
          finished={projects.filter((project) => project.status === "finished")}
        />
      ),
    },
    {
      title: "In Progress",
      value: "inProgress",
      content: (
        <InProgressProjects
          inProgress={projects.filter(
            (project) => project.status === "inprogress"
          )}
        />
      ),
    },
  ];
  const projectsMany = await getProjects();
  console.log(
    "projectsMany",
    projectsMany.map((project) => project.title)
  );
  return (
    <div className="flex flex-col gap-4 ">
      <TabsComp tabs={tabsItems} />
    </div>
  );
}

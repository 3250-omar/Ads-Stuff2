"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FinishedProjects from "./_comp/FinishedProjects";
import InProgressProjects from "./_comp/InProgressProjects";
import AllProjects from "./_comp/AllProjects";
export default function Projects() {
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
  return (
    <div className="flex flex-col gap-4 ">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="sticky top-[50px] z-50">
          <TabsTrigger
            value="all"
            className=" data-[state=active]:!bg-primary data-[state=active]:!text-white"
          >
            All Projects
          </TabsTrigger>
          <TabsTrigger
            value="finished"
            className=" data-[state=active]:!bg-primary data-[state=active]:!text-white"
          >
            Finished
          </TabsTrigger>
          <TabsTrigger
            value="inProgress"
            className=" data-[state=active]:!bg-primary/50 data-[state=active]:!text-white "
          >
            In Progress
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          {/* <AccountForm /> */} <AllProjects projects={projects} />
        </TabsContent>
        <TabsContent value="finished">
          {/* <AccountForm /> */}{" "}
          <FinishedProjects
            finished={projects.filter(
              (project) => project.status === "finished"
            )}
          />
        </TabsContent>
        <TabsContent value="inProgress">
          {/* <PasswordForm /> */}{" "}
          <InProgressProjects
            inProgress={projects.filter(
              (project) => project.status === "inprogress"
            )}
          />
        </TabsContent>
      </Tabs>
      <div></div>
    </div>
  );
}

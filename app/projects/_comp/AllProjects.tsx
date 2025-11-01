import { Project } from "@/types";
import ProjectsSection from "./ProjectsSection";
import ProjectCard from "./ProjectCard";
const AllProjects = ({ projects }: { projects: any }) => {
  return (
    <ProjectsSection>
      {projects?.map((project: any, index: number) => (
        <ProjectCard project={project} key={index} />
      ))}
    </ProjectsSection>
  );
};

export default AllProjects;

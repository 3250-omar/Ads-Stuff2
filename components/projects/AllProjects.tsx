import { Project } from "@/types";
import ProjectsSection from "./ProjectsSection";
import ProjectCard from "./ProjectCard";
const AllProjects = ({ projects }: { projects: Project[] }) => {
  return (
    <ProjectsSection>
      {projects?.map((project: Project, index: number) => (
        <ProjectCard project={project} key={index} />
      ))}
    </ProjectsSection>
  );
};

export default AllProjects;

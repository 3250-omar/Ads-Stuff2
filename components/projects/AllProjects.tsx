import { Project } from "@/types";
import ProjectsGrid from "./ProjectsGrid";
import ProjectCard from "./ProjectCard";
const AllProjects = ({ projects }: { projects: Project[] }) => {
  return (
    <ProjectsGrid>
      {projects?.map((project: Project, index: number) => (
        <ProjectCard project={project} key={index} />
      ))}
    </ProjectsGrid>
  );
};

export default AllProjects;

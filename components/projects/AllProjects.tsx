import { Project } from "@/types";
import ProjectsGrid from "./ProjectsGrid";
import ProjectCard from "./ProjectCard";
const AllProjects = ({ projects }: { projects: Project[] }) => {

  return (
    <ProjectsGrid >
      {projects?.map((project: Project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </ProjectsGrid>
  );
};

export default AllProjects;

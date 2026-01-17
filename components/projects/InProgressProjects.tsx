import { Project } from "@/types";
import ProjectsGrid from "./ProjectsGrid";
import ProjectCard from "./ProjectCard";

const InProgressProjects = ({ inProgress }: { inProgress: Project[] }) => {
  return (
    <ProjectsGrid>
      {inProgress.map((item, index) => (
        <ProjectCard project={item} key={index} />
      ))}
    </ProjectsGrid>
  );
};

export default InProgressProjects;

import { Project } from "@/types";
import ProjectsGrid from "./ProjectsGrid";
import ProjectCard from "./ProjectCard";

const FinishedProjects = ({ finished }: { finished: Project[] }) => {
  return (
    <ProjectsGrid>
      {finished.map((item, index) => (
        <ProjectCard project={item} key={index} />
      ))}
    </ProjectsGrid>
  );
};

export default FinishedProjects;

import { Project } from "@/types";
import ProjectsSection from "./ProjectsSection";
import ProjectCard from "./ProjectCard";

const FinishedProjects = ({ finished }: { finished: Project[] }) => {
  return (
    <ProjectsSection>
      {finished.map((item, index) => (
        <ProjectCard project={item} key={index} />
      ))}
    </ProjectsSection>


  );
};

export default FinishedProjects;

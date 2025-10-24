import { Project } from "@/types";
import ProjectsSection from "./ProjectsSection";
import ProjectCard from "./ProjectCard";

const InProgressProjects = ({ inProgress }: { inProgress: Project[] }) => {
  return (
    <ProjectsSection>
      {inProgress.map((item, index) => (
        <ProjectCard project={item} key={index} />
      ))}
    </ProjectsSection>
  );
};

export default InProgressProjects;

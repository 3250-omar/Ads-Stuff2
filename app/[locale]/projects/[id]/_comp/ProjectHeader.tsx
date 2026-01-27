"use client";

import { Typography, Tag, Button } from "antd";
import { BehanceCircleFilled } from "@ant-design/icons";
import { Project } from "@/types";
import { getStatusColor } from "@/constants/getStatusColor";

const { Title, Paragraph } = Typography;

interface ProjectHeaderProps {
  project: Project;
  headerRef: React.RefObject<HTMLDivElement | null>;
}

const ProjectHeader = ({ project, headerRef }: ProjectHeaderProps) => {
  return (
    <div ref={headerRef} className="mb-12 space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <Tag
          color={getStatusColor(project.status)}
          className="rounded-full px-4 py-1 text-sm font-bold uppercase tracking-widest"
        >
          {project.status}
        </Tag>
      </div>
      <div className="flex items-center flex-wrap justify-between">
        <Title
          level={1}
          className="text-5xl! md:text-6xl! font-black! text-primary! mb-5! max-sm:text-3xl!"
        >
          {project.title}
        </Title>
        {project.behance_link ? (
          <Button
            type="link"
            icon={
              <BehanceCircleFilled
                style={{
                  fontSize: "2rem",
                  border: "none",
                }}
                href={project.behance_link}
                target="_blank"
              />
            }
          />
        ) : null}
      </div>

      <Paragraph className="text-xl text-gray-500 max-w-3xl leading-relaxed">
        {project.description}
      </Paragraph>
    </div>
  );
};

export default ProjectHeader;

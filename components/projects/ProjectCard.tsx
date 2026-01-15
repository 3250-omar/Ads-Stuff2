"use client";

import { Card, Tag, Typography } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";

const { Title, Paragraph, Text } = Typography;

const ProjectCard = ({ project }: { project: Project }) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "finished":
        return "#6B9071";
      case "inprogress":
        return "#AEC3B0";
      default:
        return "default";
    }
  };

  return (
    <Card
      hoverable
      className="rounded-3xl border-none shadow-md overflow-hidden group"
      styles={{ body: { padding: "24px" }, cover: { padding: "12px" } }}
      cover={
        <div className="relative w-full h-[220px] rounded-2xl overflow-hidden px-4 pt-4">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      }
    >
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start gap-2">
          <Title
            level={4}
            className="!m-0 group-hover:text-primary transition-colors"
          >
            {project.title}
          </Title>
          <Tag
            color={getStatusColor(project.status)}
            className="rounded-full border-none px-3 font-semibold uppercase text-[10px] tracking-widest"
          >
            {project.status}
          </Tag>
        </div>

        <Paragraph ellipsis={{ rows: 2 }} className="text-gray-500 m-0">
          {project.description}
        </Paragraph>

        <div className="flex justify-between items-center mt-2 group-hover:translate-x-1 transition-transform">
          <Link
            href={project.link}
            className="flex items-center gap-1 font-bold text-primary hover:text-primary/80"
          >
            <span>View Case Study</span>
            <LinkOutlined />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;

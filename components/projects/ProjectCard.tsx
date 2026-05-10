"use client";
import { Card, Tag, Typography } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { getStatusColor } from "@/constants/getStatusColor";

import { useTranslations } from "next-intl";

const { Title, Paragraph } = Typography;

const ProjectCard = ({ project }: { project: Project }) => {
  const t = useTranslations("Projects");
  const onlyImages = useMemo(
    () =>
      project.project_media?.filter(
        (media) =>
          !media.endsWith(".mp4") ||
          !media.endsWith(".webm") ||
          !media.endsWith(".mov"),
      ),
    [project.project_media],
  );

  return (
    <div className="group relative w-full overflow-hidden rounded-[2.5rem] bg-bg-card/40 backdrop-blur-xl border border-white/5 transition-all duration-700 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
      <div className="flex flex-col md:flex-row min-h-[400px]">
        {/* Project Image */}
        <div className="relative w-full md:w-1/2 h-[280px] md:h-auto overflow-hidden">
          <Image
            src={onlyImages?.[0] || "/projectHasNoImages.webp"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-bg-card/80 via-transparent to-transparent" />
        </div>

        {/* Project Details */}
        <div className="flex flex-col justify-center gap-6 p-8 md:p-12 lg:p-16 md:w-1/2 text-left">
          <div className="space-y-4">
            <Tag
              color={getStatusColor(project.status)}
              className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1 font-bold uppercase text-[10px] tracking-widest text-primary"
            >
              {project.status}
            </Tag>
            <Title
              level={2}
              className="m-0! text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-text-primary group-hover:text-primary transition-colors duration-500"
            >
              {project.title}
            </Title>
          </div>

          <Paragraph className="text-lg lg:text-xl text-text-secondary leading-relaxed m-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
            {project.description}
          </Paragraph>

          <div className="pt-4">
            <Link
              href={`/projects/${project.id}`}
              className="inline-flex items-center gap-3 text-lg font-bold text-primary group/link"
            >
              <span className="relative">
                {t("viewCaseStudy")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover/link:w-full" />
              </span>
              <LinkOutlined className="text-xl transition-transform duration-500 group-hover/link:translate-x-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-700" />
    </div>
  );
};

export default ProjectCard;

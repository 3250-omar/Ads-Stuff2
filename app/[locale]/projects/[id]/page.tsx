"use client";

import { useParams, useRouter } from "next/navigation";
import { Typography, Button, Spin } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGetProjects } from "@/app/api/query";
import { Project } from "@/types";

const { Title } = Typography;

import ProjectHeader from "./_comp/ProjectHeader";
import ProjectMediaGrid from "./_comp/ProjectMediaGrid";
import ProjectOverview from "./_comp/ProjectOverview";
import ProjectInfoSection from "./_comp/ProjectInfoSection";
import ProjectCTA from "./_comp/ProjectCTA";

import { useTranslations } from "next-intl";

const ProjectDetails = () => {
  const t = useTranslations("ProjectDetails");
  const { id } = useParams();
  const router = useRouter();
  const { loading, projects: singleProject } = useGetProjects({
    id: Number(id),
  });
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  const project: Project = singleProject?.[0];

  useEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(imageRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".detail-card", {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        delay: 0.5,
        ease: "power4.out",
        clearProps: "opacity",
      });
    });

    return () => ctx.revert();
  }, [project]);

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
        <Title level={2}>{t("projectNotFound")}</Title>
        <Button
          type="primary"
          icon={<ArrowLeftOutlined />}
          onClick={() => router.push("/")}
        >
          {t("goBackHome")}
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Back Button */}
        <Button
          type="link"
          icon={<ArrowLeftOutlined />}
          onClick={() => router.push("/#projects")}
          className="text-primary! hover:text-primary/80 mb-8 p-0 flex items-center gap-2 font-semibold"
        >
          {t("backToProjects")}
        </Button>

        {/* Header Section */}
        <ProjectHeader project={project} headerRef={headerRef} />

        {/* Media Grid */}
        <ProjectMediaGrid project={project} imageRef={imageRef} />

        {/* Content Section */}
        <div ref={contentRef} className="space-y-16">
          <ProjectOverview description={project.description} />
          <ProjectInfoSection project={project} />
          <ProjectCTA />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

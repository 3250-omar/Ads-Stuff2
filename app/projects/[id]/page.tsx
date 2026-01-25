"use client";

import { useParams, useRouter } from "next/navigation";
import { Typography, Button, Tag, Space, Divider, Row, Col, Spin } from "antd";
import {
  ArrowLeftOutlined,
  CheckCircleFilled,
  ThunderboltFilled,
  LineChartOutlined,
  BehanceCircleFilled,
} from "@ant-design/icons";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGetProjects } from "@/app/api/query";
import { Project } from "@/types";
import MediaComp from "./_comp/MediaComp";
import { getStatusColor } from "@/constants/getStatusColor";
import { FaBehanceSquare } from "react-icons/fa";

const { Title, Paragraph, Text } = Typography;

const ProjectDetails = () => {
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
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
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
        <Title level={2}>Project Not Found</Title>
        <Button
          type="primary"
          icon={<ArrowLeftOutlined />}
          onClick={() => router.push("/")}
        >
          Go Back Home
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
          onClick={() => router.push("/")}
          className="text-primary hover:text-primary/80 mb-8 p-0 flex items-center gap-2 font-semibold"
        >
          Back to Projects
        </Button>

        {/* Header Section */}
        <div ref={headerRef} className="mb-12 space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <Tag
              color={getStatusColor(project.status)}
              className="rounded-full px-4 py-1 text-sm font-bold uppercase tracking-widest"
            >
              {project.status}
            </Tag>
            {/* <Space size="middle" className="flex-wrap">
              {project.tags?.map((tag) => (
                <Text key={tag} className="text-gray-400 font-medium">
                  #{tag}
                </Text>
              ))}
            </Space> */}
          </div>
          <div className="flex items-center flex-wrap justify-between">
            <Title
              level={1}
              className="text-5xl! md:text-6xl! font-black! text-primary! mb-5!"
            >
              {project.title}
            </Title>
            {project.behance_link ? (
              <Button
                type="text"
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

        {/* Media Grid */}
        <div ref={imageRef} className="w-full mb-16">
          {project.project_media && project.project_media.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {project.project_media.map((media, index) => {
                // Create a masonry-style layout with varying heights
                const isFirst = index === 0;
                const isLarge = index % 5 === 0; // Every 5th item is large
                const isWide = index % 7 === 0; // Every 7th item spans 2 columns

                return (
                  <div
                    key={index}
                    className={`detail-card ${
                      isWide && index !== 0
                        ? "md:col-span-2 h-[300px] md:h-[400px]"
                        : isLarge && index !== 0
                          ? "h-[350px] md:h-[500px]"
                          : isFirst
                            ? "md:col-span-2 lg:col-span-2 h-[400px] md:h-[500px] lg:h-[600px]"
                            : "h-[300px] md:h-[350px]"
                    }`}
                  >
                    <MediaComp
                      media={media}
                      alt={`${project.title} - ${index + 1}`}
                      priority={index < 3}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center bg-gray-100 rounded-[3rem]">
              <p className="text-gray-400 text-lg">No media available</p>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div ref={contentRef} className="space-y-16">
          {/* Overview */}
          <div className="glass-card p-12 rounded-[3rem] detail-card">
            <Title level={2} className="text-primary! mb-6">
              Overview
            </Title>
            <Paragraph className="text-lg text-gray-600 leading-relaxed m-0">
              {project.description}
            </Paragraph>
          </div>

          {/* Details Grid */}
          <Row gutter={[32, 32]}>
            {/* Challenges */}
            <Col xs={24} lg={8}>
              <div className="glass-card p-8 h-full rounded-[2.5rem] detail-card border-t-4 border-amber-400">
                <Space orientation="vertical" size="large" className="w-full">
                  <div className="flex items-center gap-3">
                    <ThunderboltFilled className="text-amber-400 text-3xl" />
                    <Title level={3} className="m-0!">
                      The Challenges
                    </Title>
                  </div>
                  <ul className="space-y-4 m-0 p-0 list-none">
                    {project.project_challenges?.map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-600">
                        <span className="text-amber-400 font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Space>
              </div>
            </Col>

            {/* Solutions */}
            <Col xs={24} lg={8}>
              <div className="glass-card p-8 h-full rounded-[2.5rem] detail-card border-t-4 border-primary">
                <Space orientation="vertical" size="large" className="w-full">
                  <div className="flex items-center gap-3">
                    <CheckCircleFilled className="text-primary text-3xl" />
                    <Title level={3} className="m-0!">
                      The Solutions
                    </Title>
                  </div>
                  <ul className="space-y-4 m-0 p-0 list-none">
                    {project.solutions?.map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-600">
                        <span className="text-primary font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Space>
              </div>
            </Col>

            {/* Results */}
            <Col xs={24} lg={8}>
              <div className="glass-card p-8 h-full rounded-[2.5rem] detail-card border-t-4 border-secondary">
                <Space orientation="vertical" size="large" className="w-full">
                  <div className="flex items-center gap-3">
                    <LineChartOutlined className="text-secondary text-3xl" />
                    <Title level={3} className="m-0!">
                      The Results
                    </Title>
                  </div>
                  <ul className="space-y-4 m-0 p-0 list-none">
                    {project.project_results?.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-gray-600 font-medium"
                      >
                        <span className="text-secondary font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Space>
              </div>
            </Col>
          </Row>

          {/* Call to Action */}
          <div className="gradient-section p-12 rounded-[3rem] text-center detail-card">
            <Title level={2} className="text-primary! mb-4">
              Inspired by this project?
            </Title>
            <Paragraph className="text-lg text-gray-500 mb-8">
              Let's create something extraordinary together.
            </Paragraph>
            <Button
              type="primary"
              size="large"
              className="h-auto py-4 px-10 rounded-2xl text-lg font-bold shadow-xl shadow-primary/30"
              onClick={() => router.push("/#contacts")}
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

"use client";

import { projectsData } from "@/constants/projects";
import { useParams, useRouter } from "next/navigation";
import {
  Typography,
  Button,
  Tag,
  Space,
  Divider,
  Row,
  Col,
  Carousel,
} from "antd";
import {
  ArrowLeftOutlined,
  CheckCircleFilled,
  ThunderboltFilled,
  LineChartOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { useEffect, useRef, Suspense } from "react";
import gsap from "gsap";

const { Title, Paragraph, Text } = Typography;

const ProjectDetails = () => {
  const params = useParams();
  const router = useRouter();
  const project = projectsData.find((p) => p.id === params.id);

  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

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
              color="#6B9071"
              className="rounded-full px-4 py-1 text-sm font-bold uppercase tracking-widest border-none"
            >
              {project.status}
            </Tag>
            <Space size="middle" className="flex-wrap">
              {project.tags?.map((tag) => (
                <Text key={tag} className="text-gray-400 font-medium">
                  #{tag}
                </Text>
              ))}
            </Space>
          </div>
          <Title
            level={1}
            className="text-5xl! md:text-6xl! font-black! text-primary! mb-5!"
          >
            {project.title}
          </Title>
          <Paragraph className="text-xl text-gray-500 max-w-3xl leading-relaxed">
            {project.description}
          </Paragraph>
        </div>

        {/* Media Carousel */}
        <div
          ref={imageRef}
          className="relative w-full mb-16 shadow-2xl rounded-[3rem] overflow-hidden border-4 border-white group"
        >
          <Carousel
            arrows
            variableWidth={false}
            autoplay={false}
            dots={{ className: "custom-dots" }}
            prevArrow={
              <div className="flex! items-center justify-center z-20! left-6! w-12! h-12! rounded-full! bg-white/30! hover:bg-white/50! backdrop-blur-md! text-white! hover:text-primary! transition-all!">
                <LeftOutlined />
              </div>
            }
            nextArrow={
              <div className="flex! items-center justify-center z-20! right-6! w-12! h-12! rounded-full! bg-white/30! hover:bg-white/50! backdrop-blur-md! text-white! hover:text-primary! transition-all!">
                <RightOutlined />
              </div>
            }
          >
            {project.media && project.media.length > 0 ? (
              project.media.map((item, index) => (
                <div
                  key={index}
                  className="relative w-full h-[400px] md:h-[600px]"
                >
                  {item.type === "image" ? (
                    <Image
                      src={item.url}
                      alt={`${project.title} - ${index}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  ) : (
                    <video
                      src={item.url}
                      className="w-full h-full object-cover"
                      controls
                    />
                  )}
                </div>
              ))
            ) : (
              // Fallback to single featured image if no media array
              <div className="relative w-full h-[400px] md:h-[600px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </Carousel>
          <div className="absolute inset-0 bg-linear-to-t from-darkModePrimary/20 to-transparent pointer-events-none" />
        </div>

        {/* Content Section */}
        <div ref={contentRef} className="space-y-16">
          {/* Overview */}
          <div className="glass-card p-12 rounded-[3rem] detail-card">
            <Title level={2} className="text-primary! mb-6">
              Overview
            </Title>
            <Paragraph className="text-lg text-gray-600 leading-relaxed m-0">
              {project.fullDescription}
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
                    {project.challenges?.map((item, i) => (
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
                    {project.results?.map((item, i) => (
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

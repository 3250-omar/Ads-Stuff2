"use client";

import { Row, Col, Space, Typography } from "antd";
import {
  CheckCircleFilled,
  ThunderboltFilled,
  LineChartOutlined,
} from "@ant-design/icons";
import { Project } from "@/types";

const { Title } = Typography;

interface ProjectInfoSectionProps {
  project: Project;
}

const ProjectInfoSection = ({ project }: ProjectInfoSectionProps) => {
  return (
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
                <li key={i} className="flex gap-3 text-gray-600 font-medium">
                  <span className="text-secondary font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </Space>
        </div>
      </Col>
    </Row>
  );
};

export default ProjectInfoSection;

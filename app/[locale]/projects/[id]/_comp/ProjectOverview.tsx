"use client";

import { Typography } from "antd";

const { Title, Paragraph } = Typography;

interface ProjectOverviewProps {
  description?: string;
}

import { useTranslations } from "next-intl";

const ProjectOverview = ({ description }: ProjectOverviewProps) => {
  const t = useTranslations("ProjectDetails");
  return (
    <div className="glass-card p-12 rounded-[3rem] detail-card">
      <Title level={2} className="text-primary! mb-6">
        {t("overview")}
      </Title>
      <Paragraph className="text-lg text-gray-600 leading-relaxed m-0">
        {description}
      </Paragraph>
    </div>
  );
};

export default ProjectOverview;

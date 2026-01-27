"use client";

import { Typography, Button } from "antd";
import { useRouter } from "next/navigation";

const { Title, Paragraph } = Typography;

import { useTranslations } from "next-intl";

const ProjectCTA = () => {
  const t = useTranslations("ProjectDetails");
  const router = useRouter();

  return (
    <div className="gradient-section p-12 rounded-[3rem] text-center detail-card">
      <Title level={2} className="text-primary! mb-4">
        {t("inspired")}
      </Title>
      <Paragraph className="text-lg text-gray-500 mb-8">
        {t("extraordinary")}
      </Paragraph>
      <Button
        type="primary"
        size="large"
        className="h-auto py-4 px-10 rounded-2xl text-lg font-bold shadow-xl shadow-primary/30"
        onClick={() => router.push("/#contacts")}
      >
        {t("startProject")}
      </Button>
    </div>
  );
};

export default ProjectCTA;

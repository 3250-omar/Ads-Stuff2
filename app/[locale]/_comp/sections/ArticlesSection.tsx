"use client";
import { Typography, Divider, Button, Spin } from "antd";
import { useTranslations, useLocale } from "next-intl";
import { useGetArticles } from "@/app/api/query";
import ArticlesGrid from "@/components/articles/ArticlesGrid";
import ArticleCard from "@/components/articles/ArticleCard";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const ArticlesSection = () => {
  const t = useTranslations("Articles");
  const locale = useLocale();
  const { articles, loading } = useGetArticles({ limit: 3 });

  if (!articles?.length && !loading) return null;

  return (
    <section
      id="articles"
      className="w-full px-4 py-20 gradient-section rounded-[3rem]"
    >
      <div className="text-center mb-16 flex flex-col items-center">
        <Title level={2} className="section-title mb-4">
          {t("title")}
        </Title>
        <Divider className="border-primary/30 w-1/4 min-w-[100px] my-6" />
        <Paragraph className="text-xl text-gray-500 max-w-2xl text-center">
          {t("description")}
        </Paragraph>
      </div>

      <div className="flex flex-col gap-10">
        <Spin spinning={loading}>
          <ArticlesGrid>
            {articles?.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </ArticlesGrid>
        </Spin>

        <div className="flex justify-center">
          <Link href={`/${locale}/articles`}>
            <Button
              type="primary"
              size="large"
              className="h-14 px-10 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all"
              icon={<ArrowRightOutlined />}
            >
              {t("viewAll")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;

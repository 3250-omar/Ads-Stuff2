"use client";
import { Typography, Divider, Spin, Breadcrumb } from "antd";
import { useTranslations, useLocale } from "next-intl";
import { useGetArticles } from "@/app/api/query";
import ArticlesGrid from "@/components/articles/ArticlesGrid";
import ArticleCard from "@/components/articles/ArticleCard";
import Link from "next/link";
import { HomeOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const ArticlesPage = () => {
  const t = useTranslations("Articles");
  const tNav = useTranslations("Navigation");
  const locale = useLocale();
  const { articles, loading } = useGetArticles();

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <Breadcrumb
        className="mb-8"
        items={[
          {
            title: (
              <Link href={`/${locale}`} className="flex items-center gap-2">
                <HomeOutlined />
                <span>{tNav("home")}</span>
              </Link>
            ),
          },
          {
            title: tNav("articles"),
          },
        ]}
      />

      <div className="mb-16">
        <Title level={1} className="section-title mb-4">
          {t("title")}
        </Title>
        <Paragraph className="text-xl text-gray-500 max-w-3xl">
          {t("description")}
        </Paragraph>
      </div>

      <Divider className="border-primary/20 mb-16" />

      <Spin spinning={loading} size="large">
        {articles && articles.length > 0 ? (
          <ArticlesGrid>
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </ArticlesGrid>
        ) : (
          !loading && (
            <div className="text-center py-20 bg-gray-50/50 rounded-3xl border border-dashed border-gray-200">
              <Paragraph className="text-lg text-gray-400">
                {t("noArticles")}
              </Paragraph>
            </div>
          )
        )}
      </Spin>
    </div>
  );
};

export default ArticlesPage;

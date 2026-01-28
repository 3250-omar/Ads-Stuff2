"use client";

import { Article } from "@/types";
import {
  CalendarOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Typography, Breadcrumb, Tag, Divider } from "antd";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const { Title, Paragraph } = Typography;

interface ArticleContentProps {
  article: Article;
}

const ArticleContent = ({ article }: ArticleContentProps) => {
  const t = useTranslations("Articles");
  const tNav = useTranslations("Navigation");
  const locale = useLocale();

  return (
    <article className="min-h-screen pt-28 pb-20 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
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
            title: <Link href={`/${locale}/articles`}>{tNav("articles")}</Link>,
          },
          {
            title: article.title,
          },
        ]}
      />

      <header className="mb-12">
        <div className="flex flex-wrap gap-4 items-center mb-6 text-gray-500">
          <div className="flex items-center gap-2">
            <CalendarOutlined />
            <span>
              {new Date(article.published_at).toLocaleDateString(
                locale === "ar" ? "ar-EG" : "en-US",
              )}
            </span>
          </div>
          <Divider type="vertical" className="bg-gray-400" />
          <div className="flex items-center gap-2">
            <UserOutlined />
            <span>{article.author || "Ads & Stuff"}</span>
          </div>
        </div>

        <Title
          level={1}
          className="text-4xl md:text-5xl font-black mb-8 leading-tight"
        >
          {article.title}
        </Title>

        <div className="flex gap-2 mb-10">
          {article.tags?.map((tag: string) => (
            <Tag
              key={tag}
              color="primary"
              className="bg-primary text-white border-none rounded-full px-4 py-1"
            >
              {tag}
            </Tag>
          ))}
        </div>

        <div className="rounded-4xl overflow-hidden shadow-2xl mb-12">
          <img
            src={article.image_url}
            alt={article.title}
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>
      </header>

      <section className="prose prose-lg max-w-none prose-primary order-1">
        <div
          className="text-gray-700 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </section>

      <Divider className="my-16" />

      <div className="flex justify-between items-center">
        <Link href={`/${locale}/articles`}>
          <Paragraph className="text-primary font-bold hover:underline cursor-pointer flex items-center gap-2 m-0">
            {locale === "ar" ? "←" : "←"} {t("backToArticles")}
          </Paragraph>
        </Link>
      </div>
    </article>
  );
};

export default ArticleContent;

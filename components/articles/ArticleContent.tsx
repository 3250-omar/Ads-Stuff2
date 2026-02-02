"use client";

import { getTagColors } from "@/constants/getTagsColors";
import { Article } from "@/types";
import {
  CalendarOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Typography, Breadcrumb, Tag, Divider } from "antd";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const { Title, Paragraph } = Typography;

interface ArticleContentProps {
  article: Article;
}

const ArticleContent = ({ article }: ArticleContentProps) => {
  console.log("🚀 ~ ArticleContent ~ article:", article);
  const t = useTranslations("Articles");
  const tNav = useTranslations("Navigation");
  const locale = useLocale();
  const displayTitle =
    locale === "ar" ? article.title_ar || article.title_en : article.title_en;
  const displayContent =
    locale === "ar"
      ? article.content_ar || article.content_en
      : article.content_en;

  return (
    <article
      className="min-h-screen pt-28 pb-20 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
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
            title: displayTitle,
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
          <Divider orientation="vertical" className="bg-gray-400" />
          <div className="flex items-center gap-2">
            <UserOutlined />
            <span>{article.author || "Ads & Stuff"}</span>
          </div>
        </div>

        <Title
          level={1}
          className="text-4xl md:text-5xl font-black mb-8 leading-tight"
        >
          {displayTitle}
        </Title>

        <div className="flex gap-2 mb-10">
          {article.tags?.map((tag: string) => {
            const { bg, text } = getTagColors(tag);
            return (
              <Tag
                key={tag}
                color="primary"
                className="border-none rounded-full px-4 py-1"
                style={{ backgroundColor: bg, color: text }}
              >
                {t(tag.toLowerCase())}
              </Tag>
            );
          })}
        </div>

        <div className="rounded-4xl overflow-hidden shadow-2xl mb-12">
          <Image
            src={article.image_url}
            alt={displayTitle || "article content"}
            width={500}
            height={500}
            className="w-full h-auto object-cover max-h-[500px] "
          />
        </div>
      </header>

      <section className="prose prose-lg max-w-none prose-primary order-1">
        <div
          className="text-gray-700 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: displayContent! }}
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

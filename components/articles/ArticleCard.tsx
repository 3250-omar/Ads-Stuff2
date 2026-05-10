"use client";
import { Article } from "@/types";
import { Card, Typography, Tag, Button } from "antd";
import { ArrowRightOutlined, CalendarOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { memo } from "react";
import { getTagColors } from "@/constants/getTagsColors";

const { Title, Paragraph, Text } = Typography;

const ArticleCard = ({ article }: { article: Article }) => {
  console.log("🚀 ~ ArticleCard ~ article:", article);
  const t = useTranslations("Articles");
  const locale = useLocale();
  const { bg, text } = getTagColors(article.tags?.[0] || "Creative");
  console.log("🚀 ~ ArticleCard ~ bg:", bg);
  return (
    <Card
      hoverable
      className="glass-card overflow-hidden h-full flex flex-col border-none group"
      cover={
        <div className="relative h-48 overflow-hidden">
          <Image
            src={article.image_url}
            alt={"article image"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-4">
            <Tag
              color="primary"
              className={` font-medium uppercase text-[10px] tracking-wider`}
              style={{ backgroundColor: bg, color: text }}
            >
              {t((article.tags?.[0] || "advertising").toLowerCase())}
            </Tag>
          </div>
        </div>
      }
      styles={{
        body: {
          padding: "1.5rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <div className="flex items-center gap-2 mb-4 text-text-secondary text-sm opacity-70">
        <CalendarOutlined />
        <span>
          {new Date(article.published_at).toLocaleDateString(
            locale === "ar" ? "ar-EG" : "en-US",
          )}
        </span>
      </div>

      <Title
        level={4}
        className="group-hover:text-primary transition-colors line-clamp-2 min-h-14 mb-3 text-text-primary font-bold"
      >
        {locale === "ar" ? article.title_ar : article.title_en}
      </Title>

      <Paragraph className="text-text-secondary line-clamp-3 mb-6 flex-1 opacity-80">
        {locale === "ar" ? article.description_ar : article.description_en}
      </Paragraph>

      <Link href={`/${locale}/articles/${article.slug}`}>
        <Button
          type="link"
          icon={
            <ArrowRightOutlined
              className={`${locale === "ar" ? "rotate-180" : ""} group-hover/btn:translate-x-2 transition-transform duration-300`}
            />
          }
          className="p-0 text-primary font-bold flex items-center gap-2 group/btn h-auto hover:bg-transparent text-lg"
        >
          {t("readMore")}
        </Button>
      </Link>
    </Card>
  );
};

export default memo(ArticleCard);

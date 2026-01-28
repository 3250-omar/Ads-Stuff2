"use client";
import { Article } from "@/types";
import { Card, Typography, Tag, Button } from "antd";
import { ArrowRightOutlined, CalendarOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const { Title, Paragraph, Text } = Typography;

const ArticleCard = ({ article }: { article: Article }) => {
  const t = useTranslations("Articles");
  const locale = useLocale();

  return (
    <Card
      hoverable
      className="glass-card overflow-hidden h-full flex flex-col border-none group"
      cover={
        <div className="relative h-48 overflow-hidden">
          <img
            src={article.image_url}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-4">
            <Tag
              color="primary"
              className="bg-primary border-none text-white font-medium uppercase text-[10px] tracking-wider"
            >
              {article.tags?.[0] || "Creative"}
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
      <div className="flex items-center gap-2 mb-3 text-gray-500 text-sm">
        <CalendarOutlined />
        <span>
          {new Date(article.published_at).toLocaleDateString(
            locale === "ar" ? "ar-EG" : "en-US",
          )}
        </span>
      </div>

      <Title
        level={4}
        className="group-hover:text-primary transition-colors line-clamp-2 min-h-14 mb-2"
      >
        {article.title}
      </Title>

      <Paragraph className="text-gray-500 line-clamp-3 mb-6 flex-1">
        {article.description}
      </Paragraph>

      <Link href={`/${locale}/articles/${article.slug}`}>
        <Button
          type="link"
          icon={
            <ArrowRightOutlined
              className={locale === "ar" ? "rotate-180" : ""}
            />
          }
          className="p-0 text-primary font-semibold flex items-center gap-2 group/btn h-auto hover:bg-transparent"
        >
          {t("readMore")}
        </Button>
      </Link>
    </Card>
  );
};

export default ArticleCard;

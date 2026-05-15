"use client";

import { Typography, Spin } from "antd";
import { useGetAllFeedbacks } from "@/app/api/query";
import TestimonialCard from "@/components/feedbacks/TestimonialCard";
import { useTranslations } from "next-intl";

const { Title, Paragraph } = Typography;

export default function FeedBacks() {
  const t = useTranslations("Feedbacks");
  const { feedbacks, loading } = useGetAllFeedbacks();

  if (loading) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <section id="feedbacks" className="w-full py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 text-center mb-16">
        <Title level={2} className="section-title text-text-primary mb-6">
          {t("title")}
        </Title>
        <Paragraph className="text-lg text-text-secondary max-w-2xl mx-auto">
          {t("description")}
        </Paragraph>
      </div>

      <div className="max-w-full mx-auto">
        <div
          className="marquee-container relative flex overflow-hidden py-4"
          dir="ltr"
        >
          <div className="flex animate-marquee gap-8 whitespace-nowrap">
            {[
              ...(feedbacks || []),
              ...(feedbacks || []),
              ...(feedbacks || []),
              ...(feedbacks || []),
            ].map((testimonial, i) => (
              <div key={i} className="w-[350px] shrink-0">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
          
          {/* Optional: Add a second marquee row moving in reverse for more visual complexity */}
          {/* <div className="flex animate-marquee-reverse gap-8 whitespace-nowrap mt-8">
            ...
          </div> */}
        </div>
      </div>
    </section>
  );
}

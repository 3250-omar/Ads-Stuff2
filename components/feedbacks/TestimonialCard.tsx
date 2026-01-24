"use client";

import React, { memo } from "react";
import { Card, Avatar, Typography, Rate } from "antd";
import { MessageFilled } from "@ant-design/icons";

const { Text } = Typography;

interface TestimonialCardProps {
  testimonial: any;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="px-4 py-12">
      <Card
        hoverable
        className="rounded-3xl border-none shadow-lg hover:shadow-2xl transition-all! duration-300! flex flex-col items-center text-center group glass-card hover:-translate-y-2 h-[350px]"
        styles={{
          body: {
            padding: "28px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            height: "100%",
          },
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <Avatar
            src={testimonial.our_customers?.logo_url || testimonial.logo}
            size={72}
            className="border-4 border-white shadow-lg group-hover:scale-110 transition-transform bg-white object-contain p-1"
          />
          <div className="flex flex-col">
            <Text strong className="text-base m-0">
              {testimonial.our_customers?.name || testimonial.name}
            </Text>
            <Text
              type="secondary"
              className="text-xs uppercase tracking-widest"
            >
              {testimonial.customer_job || testimonial.job}
            </Text>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 grow justify-center">
          <MessageFilled className="text-primary/30 text-3xl" />
          <Text className="text-gray-600 italic leading-relaxed text-sm">
            &ldquo;
            {Array.isArray(testimonial.feedback_text)
              ? testimonial.feedback_text.join(" ")
              : testimonial.feedback_text}
            &rdquo;
          </Text>
        </div>

        <Rate
          disabled
          defaultValue={testimonial.rating}
          className="text-primary text-sm mt-auto"
        />
      </Card>
    </div>
  );
};

export default memo(TestimonialCard);

"use client";

import { Typography, Carousel, Spin } from "antd";
import { useGetAllFeedbacks } from "@/app/api/query";
import TestimonialCard from "@/components/feedbacks/TestimonialCard";

const { Title } = Typography;

export default function FeedBacks() {
  const { feedbacks, loading } = useGetAllFeedbacks();

  if (loading) {
    return (
      <div className="w-full h-[400px] animate-pulse bg-gray-50/50 rounded-[3rem]" />
    );
  }

  return (
    <section className="w-full py-16 overflow-hidden">
      <div className="text-center mb-12">
        <Title level={2} className="section-title">
          What Our Clients Say
        </Title>
      </div>

      <div className="max-w-full mx-auto px-4">
        <div className="marquee-container relative flex overflow-hidden py-4">
          <div className="flex animate-marquee gap-8 whitespace-nowrap">
            {[
              ...(feedbacks || []),
              ...(feedbacks || []),
              ...(feedbacks || []),
              ...(feedbacks || []),
            ].map((testimonial, i) => (
              <div key={i} className="w-[300px]">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

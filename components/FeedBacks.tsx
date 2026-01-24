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
        <Carousel
          autoplay
          infinite
          slidesToShow={5}
          slidesToScroll={1}
          dots={false}
          pauseOnHover
          autoplaySpeed={3000}
          className="feedback-carousel"
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {feedbacks?.map((testimonial: any, index: number) => (
            <TestimonialCard
              key={testimonial.id || index}
              testimonial={testimonial}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

"use client";

import { Card, Rate, Avatar, Typography } from "antd";
import { MessageFilled } from "@ant-design/icons";

const { Text, Title } = Typography;

export default function FeedBacks() {
  const testimonials = [
    {
      name: "John Doe",
      job: "Software Engineer",
      feedback:
        "Outstanding service and support! Highly recommend for any project needs.",
      logo: "/imgs/1.jpeg",
      rating: 5,
    },
    {
      name: "Jane Smith",
      job: "Project Manager",
      feedback:
        "Professional team with quick turnaround times. Exceeded our expectations.",
      logo: "/imgs/2.jpeg",
      rating: 5,
    },
    {
      name: "Michael Johnson",
      job: "Designer",
      feedback:
        "Creative solutions and attention to detail made all the difference.",
      logo: "/imgs/3.jpeg",
      rating: 4,
    },
    {
      name: "Emily Davis",
      job: "Marketing Specialist",
      feedback:
        "Reliable and innovative. Our campaigns have never been better.",
      logo: "/imgs/4.jpeg",
      rating: 5,
    },
    {
      name: "David Wilson",
      job: "Entrepreneur",
      feedback:
        "From concept to execution, they delivered perfectly on time and budget.",
      logo: "/imgs/5.jpeg",
      rating: 5,
    },
  ];

  const TestimonialCard = ({
    testimonial,
    index,
  }: {
    testimonial: (typeof testimonials)[0];
    index: number;
  }) => (
    <div className="shrink-0 w-[320px]">
      <Card
        hoverable
        className="rounded-3xl border-none shadow-lg hover:shadow-2xl transition-all! duration-300! flex flex-col items-center text-center group glass-card hover:-translate-y-2 h-full"
        styles={{
          body: {
            padding: "28px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          },
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <Avatar
            src={testimonial.logo}
            size={72}
            className="border-4 border-white shadow-lg group-hover:scale-110 transition-transform"
          />
          <div className="flex flex-col">
            <Text strong className="text-base m-0">
              {testimonial.name}
            </Text>
            <Text
              type="secondary"
              className="text-xs uppercase tracking-widest"
            >
              {testimonial.job}
            </Text>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <MessageFilled className="text-primary/30 text-3xl" />
          <Text className="text-gray-600 italic leading-relaxed text-sm">
            &ldquo;{testimonial.feedback}&rdquo;
          </Text>
        </div>

        <Rate
          disabled
          defaultValue={testimonial.rating}
          className="text-primary text-sm"
        />
      </Card>
    </div>
  );

  return (
    <section className="w-full py-16 overflow-hidden">
      <div className="text-center mb-12">
        <Title level={2} className="section-title">
          What Our Clients Say
        </Title>
      </div>

      {/* Reverse Marquee Container */}
      <div className="relative flex overflow-hidden py-4 marquee-container gap-5">
        <div className="flex animate-marquee-reverse gap-6 shrink-0">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`first-${index}`}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        <div className="flex animate-marquee-reverse gap-6 shrink-0">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`second-${index}`}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

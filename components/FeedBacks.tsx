"use client";

import { Card, Rate, Avatar, Typography, Space } from "antd";
import { MessageFilled } from "@ant-design/icons";

const { Text, Title } = Typography;

const FeedBacks = () => {
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

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 py-10">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          hoverable
          className="rounded-3xl border-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
          styles={{
            body: {
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            },
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <Avatar
              src={testimonial.logo}
              size={64}
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

          <div className="flex flex-col items-center gap-3">
            <MessageFilled className="text-primary/20 text-2xl" />
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
      ))}
    </section>
  );
};

export default FeedBacks;

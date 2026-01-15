"use client";

import { Carousel, Divider, Typography } from "antd";
import Image from "next/image";

const { Title, Paragraph } = Typography;

const customerImages = [
  "/imgs/1.jpeg",
  "/imgs/2.jpeg",
  "/imgs/3.jpeg",
  "/imgs/4.jpeg",
  "/imgs/5.jpeg",
  "/imgs/1.jpeg",
  "/imgs/2.jpeg",
  "/imgs/3.jpeg",
];

const OurCustomers = () => {
  return (
    <section className="space-y-12 py-16">
      <div className="flex flex-col items-center">
        <Title level={2} className="!text-primary !font-black !text-5xl !m-0">
          Our Dear Customers
        </Title>
        <Divider className="border-primary/30 w-1/4 min-w-[100px] my-6" />
        <Paragraph className="text-xl text-gray-500 max-w-2xl text-center">
          We are proud to serve our customers with our high-quality services and
          dedication to excellence.
        </Paragraph>
      </div>

      <div className="px-4">
        <Carousel
          autoplay
          slidesToShow={4}
          dots={false}
          className="customer-carousel"
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
          ]}
        >
          {customerImages.map((src, index) => (
            <div key={index} className="px-4">
              <div className="relative h-[250px] w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 border border-gray-100 group">
                <Image
                  src={src}
                  alt={`Customer ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default OurCustomers;

import { Quote, StarIcon } from "lucide-react";
import Image from "next/image";

const FeedBacks = () => {
  const test = [
    {
      name: "John Doe",
      job: "Software Engineer",
      feedback:
        "&ldquo;Outstanding service and support! Highly recommend for any project needs.&rdquo;",
      logo: "/imgs/1.jpeg",
      rating: 5,
    },
    {
      name: "Jane Smith",
      job: "Project Manager",
      feedback:
        "&ldquo;Professional team with quick turnaround times. Exceeded our expectations.&rdquo;",
      logo: "/imgs/2.jpeg",
      rating: 5,
    },
    {
      name: "Michael Johnson",
      job: "Designer",
      feedback:
        "&ldquo;Creative solutions and attention to detail made all the difference.&rdquo;",
      logo: "/imgs/3.jpeg",
      rating: 4,
    },
    {
      name: "Emily Davis",
      job: "Marketing Specialist",
      feedback:
        "&ldquo;Reliable and innovative. Our campaigns have never been better.&rdquo;",
      logo: "/imgs/4.jpeg",
      rating: 5,
    },
    {
      name: "David Wilson",
      job: "Entrepreneur",
      feedback:
        "&ldquo;From concept to execution, they delivered perfectly on time and budget.&rdquo;",
      logo: "/imgs/5.jpeg",
      rating: 5,
    },
  ];
  return (
    <section className="w-full grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:grid-cols-1">
      {test.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow-md shadow-secondary border-none hover:transform-[scale(1.02)] transition-all cursor-pointer duration-200 flex flex-col  items-center  justify-center gap-4 "
        >
          <div className="flex items-center flex-col gap-1 ">
            <Image
              src={testimonial.logo}
              alt={`${testimonial.name} logo`}
              width={52}
              height={52}
              className="rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-[16px]">{testimonial.name}</h3>
              <p className="text-gray-600 text-[14px]">{testimonial.job}</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 ">
            <Quote size={25} />
            <p className="text-gray-800 text-center text-[14px]">
              {testimonial.feedback}
            </p>
          </div>
          <div className="flex ">
            {Array.from({ length: testimonial.rating }, (_, i) => (
              <StarIcon
                key={i}
                size={20}
                fill={"#6B9071"}
                className="border-none outline-none "
                stroke={undefined}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeedBacks;

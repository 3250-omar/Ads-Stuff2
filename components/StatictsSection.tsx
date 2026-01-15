"use client";
import CountUp from "react-countup";
import { Typography } from "antd";

const { Title, Text } = Typography;

const StatictsSection = () => {
  const statistics = [
    { title: "Customers", count: 1000 },
    { title: "Projects", count: 500 },
    { title: "Awards", count: 250 },
  ];

  return (
    <section className="bg-[#E3EED4]/30 rounded-[3rem] border-2 border-[#E3EED4] grid grid-cols-3 gap-6 w-full max-sm:grid-cols-1 max-md:grid-cols-2 p-8">
      {statistics.map((statistic, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-2 group hover:bg-primary hover:-translate-y-2 hover:cursor-pointer transition-all duration-500 p-10 rounded-[2.5rem] bg-white shadow-sm hover:shadow-xl"
        >
          <div className="text-5xl font-black text-primary group-hover:text-white transition-colors duration-300">
            <Space size={0}>
              <span>+</span>
              <CountUp end={statistic.count} duration={4} delay={0.5} />
            </Space>
          </div>
          <Text className="text-xl font-medium text-gray-600 group-hover:text-white transition-colors duration-300">
            {statistic.title}
          </Text>
        </div>
      ))}
    </section>
  );
};

// Internal Space component mock if not using antd Space, but I'll use simple span
const Space = ({
  children,
  size,
}: {
  children: React.ReactNode;
  size?: number;
}) => <div className="flex items-center gap-0">{children}</div>;

export default StatictsSection;

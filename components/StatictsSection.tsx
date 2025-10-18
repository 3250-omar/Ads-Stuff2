"use client";
import CountUp from "react-countup";

const StatictsSection = () => {
  const statistics = [
    { title: "Customers", count: 1000 },
    { title: "Projects", count: 500 },
    { title: "Awards", count: 250 },
  ];
  return (
    <section className="rounded-4xl border-2 border-schemaWhite  text-primary grid grid-cols-3 gap-4 w-full max-sm:grid-cols-1 max-md:grid-cols-2 ">
      {statistics.map((statistic, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-4 hover:bg-primary hover:-translate-y-2 hover:cursor-pointer hover:text-white transition-all duration-300 px-6 py-10 rounded-4xl"
        >
          <div className="text-4xl font-bold">
            +<CountUp end={statistic.count} duration={4} delay={1} />
          </div>
          <p className="text-2xl">{statistic.title}</p>
        </div>
      ))}
    </section>
  );
};

export default StatictsSection;

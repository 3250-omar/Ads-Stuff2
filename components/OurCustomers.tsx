import CarouselComp from "./ui/carouselComponet";
import { Separator } from "./ui/separator";

const OurCustomers = () => {
  return (
    <section className="space-y-4">
      <div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-bold text-primary ">
            Our Dear Customers
          </h1>
          <Separator
            className="my-4 bg-secondary w-1/3  "
            orientation="horizontal"
          />
        </div>
        <p className="text-primary/80 text-xl">
          We are proud to serve our customers with our high-quality services.
        </p>
      </div>

      <CarouselComp
        items={[
          "/imgs/1.jpeg",
          "/imgs/2.jpeg",
          "/imgs/3.jpeg",
          "/imgs/4.jpeg",
          "/imgs/5.jpeg",
          "/imgs/5.jpeg",
          "/imgs/5.jpeg",
          "/imgs/1.jpeg",
          "/imgs/2.jpeg",
          "/imgs/3.jpeg",
          "/imgs/4.jpeg",
          "/imgs/5.jpeg",
          "/imgs/5.jpeg",
          "/imgs/5.jpeg",
        ]}
        contentClassName=" h-[300px] w-[300px]"
        cardClassName="rounded-2xl cursor-pointer"
        autoPlay
        hasArrows
      />
    </section>
  );
};

export default OurCustomers;

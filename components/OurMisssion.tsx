"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EyeIcon } from "lucide-react";

const OurMisssion = () => {
  return (
    <section className="w-full rounded-xl shadow-md p-4 grid grid-cols-2 max-sm:grid-cols-1 min-h-[300px]">
      <div className="flex flex-col gap-2 ">
        <h1 className="text-4xl font-bold text-primary ">Our Mission</h1>
        <p className="text-lg font-light text-primary/80">
          Our mission is to provide high-quality and efficient services to our
          clients, helping them achieve their goals.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Tabs
          defaultValue="mission"
          className="w-full  flex flex-col justify-between"
        >
          <TabsList className="text-primary border-2-secondary">
            <TabsTrigger value="mission">Our Mission</TabsTrigger>
            <TabsTrigger value="vision" className="flex items-center gap-2">
              Our Vision <EyeIcon />
            </TabsTrigger>
            <TabsTrigger value="goals">Our Goals</TabsTrigger>
          </TabsList>
          <TabsContent value="mission">
            <p>
              Our mission is to provide high-quality and efficient services to
              our clients, helping them achieve their goals.
            </p>
          </TabsContent>
          <TabsContent value="vision">
            <p>
              Our vision is to be the best in the industry, providing the best
              services to our clients.
            </p>
          </TabsContent>
          <TabsContent value="goals">
            <p>
              Our goals are to provide high-quality and efficient services to
              our clients, helping them achieve their goals.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default OurMisssion;

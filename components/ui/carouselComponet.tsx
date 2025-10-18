import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CarouselProps {
  hasArrows?: boolean;
  autoPlay?: boolean;
  items?: string[];
  cardClassName?: string;
}
export default function CarouselComp(props: CarouselProps) {
  const { items, hasArrows, autoPlay, cardClassName } = props;
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={
        autoPlay
          ? [
              Autoplay({
                delay: 2000,
              }),
            ]
          : []
      }
    >
      <CarouselContent className="w-full max-w-full ">
        {items?.map((item, index) => (
          <CarouselItem className={"-ml-1"} key={index}>
            <div>
              <Card className="border-none">
                <CardContent className="relative flex aspect-square items-center justify-center !p-0 ">
                  <Image
                    src={item}
                    alt={`Image ${index + 1}`}
                    width={400} // Set your desired width
                    height={400} // Set your desired height
                    className={cn(
                      "object-fill w-full max-h-full",
                      cardClassName
                    )}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {hasArrows && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
}

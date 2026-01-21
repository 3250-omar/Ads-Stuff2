import Image from "next/image";

// All available images

const positionStyles = {
  left: {
    transform: "translate3d(-115%, 30px, 0) rotate(-15deg) scale(0.88)",
    zIndex: 1,
    opacity: 0.4,
  },
  center: {
    transform: "translate3d(-50%, 0, 0) rotate(0deg) scale(1)",
    zIndex: 3,
    opacity: 1,
  },
  right: {
    transform: "translate3d(15%, 30px, 0) rotate(15deg) scale(0.88)",
    zIndex: 2,
    opacity: 0.6,
  },
};

export const positionOrders = [
  ["left", "center", "right"],
  ["right", "left", "center"],
  ["center", "right", "left"],
];

export const ImageStack = ({
  positionIndex,
  imageIndices,
  isSwappingImage,
  images,
}: {
  positionIndex: number;
  imageIndices: number[];
  isSwappingImage: number | null;
  images: string[];
}) => {
  return (
    <div className="relative w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-[320px] sm:h-[380px] md:h-[440px] lg:h-[500px]">
      {[0, 1, 2].map((cardIdx) => {
        const posKey = positionOrders[positionIndex][
          cardIdx
        ] as keyof typeof positionStyles;
        const style = positionStyles[posKey];
        const isSwapping = isSwappingImage === cardIdx;

        return (
          <div
            key={cardIdx}
            className="absolute left-1/2 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-[270px] sm:h-[320px] md:h-[370px] lg:h-[420px] rounded-3xl sm:rounded-4xl overflow-hidden shadow-xl sm:shadow-2xl shadow-primary/20 sm:shadow-primary/30 border-2 sm:border-3 md:border-4 border-white cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{
              zIndex: style.zIndex,
              transform: style.transform,
              opacity: isSwapping ? 0 : style.opacity,
              willChange: "transform, opacity",
            }}
          >
            <Image
              src={images[imageIndices[cardIdx]]}
              alt={`Portfolio Image ${cardIdx + 1}`}
              fill
              className="object-cover"
              fetchPriority="high"
              sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, (max-width: 1024px) 300px, 340px"
            />
            <div className="absolute inset-0 bg-linear-to-t from-darkModePrimary/40 to-transparent" />
          </div>
        );
      })}
    </div>
  );
};

export default ImageStack;

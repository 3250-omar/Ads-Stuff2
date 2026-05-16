import { Carousel, Image } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import MediaComp from "./MediaComp";

interface MediaCarouselProps {
  media: string[];
}

const SlickArrowPrev = ({ currentSlide, slideCount, ...props }: any) => (
  <LeftOutlined {...props} />
);
const SlickArrowNext = ({ currentSlide, slideCount, ...props }: any) => (
  <RightOutlined {...props} />
);

const MediaCarousel = ({ media }: MediaCarouselProps) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 relative">
      <Image.PreviewGroup>
        <Carousel
          arrows
          infinite
          prevArrow={<SlickArrowPrev />}
          nextArrow={<SlickArrowNext />}
          className="rounded-[3rem] overflow-hidden shadow-2xl bg-bg-card/20"
        >
          {media.map((url, index) => (
            <div
              key={index}
              className="!flex items-center justify-center min-h-[400px] md:min-h-[600px] outline-none py-4"
            >
              <MediaComp
                media={url}
                alt={`Project Media ${index + 1}`}
                className="max-w-full max-h-[550px] md:max-h-[580px] shadow-2xl rounded-[2.5rem]"
              />
            </div>
          ))}
        </Carousel>
      </Image.PreviewGroup>

      <style jsx global>{`
        .ant-carousel .slick-prev,
        .ant-carousel .slick-next {
          color: var(--color-primary);
          font-size: 24px;
          z-index: 10;
        }
        .ant-carousel .slick-prev {
          left: 20px;
        }
        .ant-carousel .slick-next {
          right: 20px;
        }
      `}</style>
    </div>
  );
};

export default MediaCarousel;

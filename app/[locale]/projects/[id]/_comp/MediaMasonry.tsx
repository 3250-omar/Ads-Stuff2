import { Image } from "antd";
import MediaComp from "./MediaComp";

interface MediaMasonryProps {
  media: string[];
}

const MediaMasonry = ({ media }: MediaMasonryProps) => {
  return (
    <Image.PreviewGroup>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
        {media.map((url, index) => (
          <div
            key={index}
            className="break-inside-avoid rounded-[2.5rem] overflow-hidden bg-bg-card/30 border border-white/5 shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-zoom-in"
          >
            <MediaComp
              media={url}
              alt={`Project Media ${index + 1}`}
              className="w-full h-auto transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </Image.PreviewGroup>
  );
};

export default MediaMasonry;

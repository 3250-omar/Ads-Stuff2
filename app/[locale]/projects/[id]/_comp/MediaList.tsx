import { Image } from "antd";
import MediaComp from "./MediaComp";

interface MediaListProps {
  media: string[];
}

const MediaList = ({ media }: MediaListProps) => {
  return (
    <div className="max-w-5xl mx-auto space-y-12 md:space-y-24 py-10">
      <Image.PreviewGroup>
        {media.map((url, index) => (
          <div
            key={index}
            className="group relative rounded-[3rem] overflow-hidden bg-bg-card/30 border border-white/5 shadow-xl hover:shadow-2xl transition-all duration-700"
          >
            <MediaComp
              media={url}
              alt={`Project Media ${index + 1}`}
              className="max-w-full mx-auto transition-transform duration-1000 group-hover:scale-[1.02]"
            />
            {/* Contextual Gradient for readability if text is added later */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </div>
        ))}
      </Image.PreviewGroup>
    </div>
  );
};

export default MediaList;

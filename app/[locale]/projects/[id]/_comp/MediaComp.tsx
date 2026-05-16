import { Image } from "antd";

const MediaComp = ({
  media,
  alt,
  className = "",
}: {
  media: string;
  alt?: string;
  className?: string;
}) => {
  const isVideo =
    media.endsWith(".mp4") || media.endsWith(".webm") || media.endsWith(".mov");

  return (
    <div
      className={`relative flex justify-center items-center w-full ${isVideo ? "" : "group"} ${className}`}
    >
      {isVideo ? (
        <video
          src={media}
          className="max-w-full max-h-full object-contain rounded-[2.5rem]"
          autoPlay
          controls
          loop
          muted
          playsInline
        />
      ) : (
        <Image
          src={media}
          alt={alt || "Media"}
          className="max-w-full max-h-full object-contain rounded-[2.5rem] "
          preview={{
            mask: null,
          }}
        />
      )}
    </div>
  );
};

export default MediaComp;

import Image from "next/image";

const MediaComp = ({
  media,
  alt,
  priority = false,
  className = "",
}: {
  media: string;
  alt?: string;
  priority?: boolean;
  className?: string;
}) => {
  const isVideo =
    media.endsWith(".mp4") || media.endsWith(".webm") || media.endsWith(".mov");

  return (
    <div
      className={`relative w-full h-full overflow-hidden rounded-2xl ${isVideo ? "" : "group"} ${className}`}
    >
      {isVideo ? (
        <video
          src={media}
          className="w-full h-full object-cover"
          autoPlay
          controls
          loop
          muted
          playsInline
        />
      ) : (
        <>
          <Image
            src={media}
            alt={alt || "Media"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority={priority}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </>
      )}
    </div>
  );
};

export default MediaComp;

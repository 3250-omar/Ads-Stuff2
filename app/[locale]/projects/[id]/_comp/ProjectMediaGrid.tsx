import { Project } from "@/types";
import MediaComp from "./MediaComp";

interface ProjectMediaGridProps {
  project: Project;
  imageRef: React.RefObject<HTMLDivElement | null>;
}

const BENTO_CLASSES = [
  "lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2",
  "lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1",
  "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
  "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
  "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
  "lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2",
  "lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2",
  "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
];

const ProjectMediaGrid = ({ project, imageRef }: ProjectMediaGridProps) => {
  const mediaItems = project.project_media || [];

  return (
    <div ref={imageRef} className="w-full mb-16 px-0">
      {mediaItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] md:auto-rows-[350px] lg:auto-rows-[380px] gap-6 md:gap-8">
          {mediaItems.map((url, index) => (
            <div
              key={index}
              className={`detail-card relative group overflow-hidden rounded-[2.5rem] bg-gray-50/50 shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${
                BENTO_CLASSES[index % BENTO_CLASSES.length]
              } h-full min-h-[300px]`}
            >
              <MediaComp
                media={url}
                alt={`${project.title} - ${index + 1}`}
                priority={index < 4}
                className="h-full w-full"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/5 pointer-events-none" />
            </div>
          ))}
        </div>
      ) : (
        <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center bg-gray-100 rounded-[3rem]">
          <p className="text-gray-400 text-lg">No media available</p>
        </div>
      )}
    </div>
  );
};

export default ProjectMediaGrid;

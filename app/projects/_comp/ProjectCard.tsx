import StatusBadge from "@/components/StatusBadge";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  project,
  classNames,
}: {
  project: Project;
  classNames?: string;
}) => {
  return (
    <div
      className={
        classNames +
        "bg-white p-4 rounded-xl shadow shadow-primary space-y-3 cursor-pointer hover:bg-secondary hover:scale-105  transition-all duration-300  "
      }
    >
      <h2 className="text-lg font-semibold ">{project.title}</h2>
      <div className="flex flex-col gap-2 items-center justify-center w-full  ">
        <p className="text-gray-600 ">{project.description}</p>
        <div className="relative w-full h-[200px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className=" object-cover rounded-xl "
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <StatusBadge status={project.status} />
        <Link
          href={project.link}
          className="font-bold text-sm text-primary hover:primary/50"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

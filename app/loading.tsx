import { Spinner } from "@/components/ui/spinner";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="!w-full !h-full items-center justify-center flex flex-col">
      <Image
        src="/Logo3IconMan.png"
        alt="Logo"
        width={400}
        height={400}
        className="object-contain"
        priority
      />
      <Spinner className="size-8 text-primary" />
    </div>
  );
};

export default Loading;

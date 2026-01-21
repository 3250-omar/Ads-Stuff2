// import { Spinner } from "@/components/ui/spinner";
import { Spin } from "antd";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full h-full items-center justify-center flex flex-col">
      <Image
        src="/Logo3IconMan.svg"
        alt="Logo"
        // width={400}
        // height={400}
        fill
        className="object-contain"
        priority
      />
      <Spin className="size-8 text-primary" />
    </div>
  );
};

export default Loading;

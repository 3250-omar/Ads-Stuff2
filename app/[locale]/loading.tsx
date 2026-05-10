// import { Spinner } from "@/components/ui/spinner";
import { Spin } from "antd";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-bg-primary items-center justify-center flex flex-col gap-8">
      <div className="relative w-32 h-32 animate-pulse">
        <Image
          src="/Logo3IconMan.svg"
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>
      <Spin size="large" className="text-primary" />
    </div>
  );
};

export default Loading;

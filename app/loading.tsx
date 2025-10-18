import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full h-full items-center justify-center flex">
      <Image
        src="/Logo 3 Icon Man.png"
        alt="Logo"
        width={400}
        height={400}
        className="object-contain فقشىسهفه"
        priority
      />
    </div>
  );
};

export default Loading;

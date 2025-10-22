"use client";

const Footer = () => {
  // const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();


  return (
    <footer className="w-full bg-secondary !mb-0 !p-4">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-center ">
        {/* <div className="flex flex-col items-center">
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter your Gmail"
            className="p-2 border border-gray-400 rounded-lg mb-4 w-full max-w-md"
          />
          <textarea
            ref={messageRef}
            placeholder="Type your message here"
            className="p-2 border border-gray-400 rounded-lg w-full max-w-md"
            rows={5}
          />
          <button
            className="bg-primary text-white p-2 rounded-lg mt-4 w-full max-w-md"
            onClick={handleSend}
          >
            Send
          </button>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;

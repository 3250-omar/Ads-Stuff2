import { Button } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";

const ToWhatsapp = () => {
  return (
    <Button
      type="link"
      icon={
        <WhatsAppOutlined
          style={{
            fontSize: "32px",
          }}
        />
      }
      className="fixed! bottom-30 left-10  rounded-full z-9999 text-green-500! hover:text-green-600! animate-bounce hover:animate-none transition-all duration-300 ease-in-out"
      target="_blank"
      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
      title="Contact on WhatsApp"   
    />
  );
};

export default ToWhatsapp;

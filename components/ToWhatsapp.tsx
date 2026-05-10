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
      className="fixed! bottom-10 left-10 w-16 h-16 rounded-2xl z-[9999] bg-bg-card/90 backdrop-blur-xl border border-white/10 flex items-center justify-center text-[#25D366]! shadow-2xl hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all duration-500 animate-float"
      target="_blank"
      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
      title="Contact on WhatsApp"   
    />
  );
};

export default ToWhatsapp;

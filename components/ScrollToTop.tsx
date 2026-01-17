"use client";

import { VerticalAlignTopOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY >= 100);
    };

    // Check initial scroll position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <Button
      type="primary"
      shape="circle"
      icon={<VerticalAlignTopOutlined />}
      size="large"
      className="fixed! right-10 bottom-30 z-9999 shadow-2xl hover:scale-110 transition-transform"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    />
  );
};

export default ScrollToTop;

"use client";

import { VerticalAlignTopOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY >= 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Check initial scroll position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
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

"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button, Typography } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";

const { Text } = Typography;

const LanguageSwitcher = ({
  variant = "default",
  forMobile = false,
}: {
  variant?: "default" | "dark";
  forMobile?: boolean;
}) => {
  const t = useTranslations("Language");
  const pathname = usePathname();
  const router = useRouter();

  const isArabic = pathname.startsWith("/ar");

  const handleToggle = () => {
    const newPath = isArabic
      ? pathname.replace(/^\/ar/, "/en")
      : pathname.replace(/^\/en/, "/ar");
    router.push(newPath || "/");
  };

  const isDark = variant === "dark";

  return (
    <Button
      type="text"
      onClick={handleToggle}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all border-none group ${
        isDark ? "hover:bg-white/10" : "hover:bg-primary/10"
      }`}
    >
      <GlobalOutlined
        className={`${
          isDark ? "text-white" : "text-primary"
        } group-hover:scale-110 transition-transform`}
      />
      {!forMobile ? (
        <Text
          className={`text-sm font-bold uppercase ${
            isDark ? "text-white" : "text-primary"
          }`}
        >
          {isArabic ? t("arabic") : t("english")}
        </Text>
      ) : null}
    </Button>
  );
};

export default LanguageSwitcher;

// components/LanguageToggle.tsx
"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
// import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SUPPORTED_LOCALES = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
];

function setLocaleCookie(locale: string) {
  // persist for 1 year
  document.cookie = `NEXT_LOCALE=${locale}; Path=/; Max-Age=${
    60 * 60 * 24 * 365
  }`;
}

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname() ?? "/";
  // const locale = useLocale();
  // const t = useTranslations("Language");

  const buildNewPath = (newLocale: string) => {
    // If current path already starts with a locale, replace it
    const matched = pathname.match(/^\/(en|ar)(\/.*)?$/);
    if (matched) {
      const rest = matched[2] ?? "";
      return `/${newLocale}${rest}`;
    }
    // If not, prepend the locale
    return `/${newLocale}${pathname === "/" ? "" : pathname}`;
  };

  const handleChange = (newLocale: string) => {
    const newPath = buildNewPath(newLocale);

    // set document direction immediately
    const dir =
      SUPPORTED_LOCALES.find((l) => l.code === newLocale)?.dir || "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = newLocale;

    // optional: set cookie so middleware/server logic can read it later if you implement that server-side
    setLocaleCookie(newLocale);

    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="capitalize">
            { "EN"}{" "}
            <span className="ml-2 hidden sm:inline">label</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-40">
          {SUPPORTED_LOCALES.map(({ code }) => (
            <DropdownMenuItem
              key={code}
              onClick={() => handleChange(code)}
              className={"font-semibold"}
            >
              {code === "en" ? "english" : "arabic"}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

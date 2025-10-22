"use client";
import { navItems } from "@/constants/routes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DrawerComp from "./ui/drawerComp";
import { useState } from "react";

const NavBar = () => {
  const pathName = usePathname();
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  return (
    <nav className="navbar">
      <Link href={"/"} className="w-[150px] h-[100px] relative">
        <Image src="/Logo3G.png" alt="Logo" fill className="object-contain" />
      </Link>
      <div className="flex items-center gap-5 max-sm:hidden">
        <div className="flex items-center gap-3">
          {navItems.map((item) => (
            <Link
              href={`${item.href}`}
              key={item.key}
              className={cn(
                "hover:text-primary transition-colors",
                pathName === item.href
                  ? "text-primary font-bold border-b-2 border-primary"
                  : ""
              )}
            >
              {item.key}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {/* <ModeToggle /> */}
          {/* <LanguageToggle /> */}
        </div>
      </div>
      <DrawerComp open={openSideBar} setOpen={setOpenSideBar} title="Menu" />
    </nav>
  );
};

export default NavBar;

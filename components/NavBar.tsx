"use client";
import { navItems } from "@/constants/routes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();
  return (
    <nav className="navbar">
      <Link href={"/"} className="w-[150px] h-[100px] relative">
        <Image src="/Logo3G.png" alt="Logo" fill className="object-contain" />
      </Link>
      <div className="flex items-center gap-5 max-sm:hidden">
        <div className="flex items-center gap-3">
          {navItems.map((item: { key: string; href: string }) => (
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
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[220px] rounded-full bg-primary/70 text-white z-50 mx-auto p-2  hidden max-sm:block">
        <div className="flex items-center gap-2 justify-between">
          {navItems.map((item: { key: string; href: string }) => (
            <Link
              href={`${item.href}`}
              key={item.key}
              className={cn(
                "hover:text-primary transition-colors max-sm:text-sm",
                pathName === item.href ? "text-black font-semibold" : ""
              )}
            >
              {item.key}
            </Link>
          ))}
        </div>
      </div>
      {/* <DrawerComp open={openSideBar} setOpen={setOpenSideBar} title="Menu" /> */}
    </nav>
  );
};

export default NavBar;

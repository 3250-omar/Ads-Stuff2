"use client";
import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "./button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";
import { navItems } from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface DrawerProps {
  title?: string;
  description?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hasActions?: boolean;
}

const DrawerComp: React.FC<DrawerProps> = ({
  title,
  description,
  open,
  setOpen,
  hasActions = false,
}) => {
  const pathName = usePathname();
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="hidden max-sm:block">
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="border-primary text-white ">
        <DrawerHeader>
          <DrawerClose asChild>
            <Button variant="ghost">
              <XIcon />
            </Button>
          </DrawerClose>
          <DrawerTitle className="text-white">{title || "Menu"}</DrawerTitle>
          {description && (
            <DrawerDescription>
              {description || "that is the description."}
            </DrawerDescription>
          )}

          <div className="flex flex-col gap-2 mt-5">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.key}
                onClick={() => setOpen(false)}
                className={cn(
                  "hover:text-primary transition-colors",
                  pathName === item.href
                    ? "font-bold text-primary border-b-2 border-primary "
                    : ""
                )}
              >
                {item.key}
              </Link>
            ))}
          </div>
        </DrawerHeader>
        {hasActions && (
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
            <Button>ok</Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComp;

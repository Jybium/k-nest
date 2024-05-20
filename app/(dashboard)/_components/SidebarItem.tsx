"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";


type SidebarItemProps ={
icon: LucideIcon,
href: string,
label: string
}

const SidebarItem = ({ icon :Icon, href, label }: SidebarItemProps) => {
  
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const handleClick = (href) => {
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex items-center text-slate-500 text-sm transition-all pl-6 hover:text-slate-600 hover:bg-slate-300/20 gap-x-2 font-[500]",
        isActive &&
          "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
      )}
    >
      <div className="flex items-center gap-x-2 py-4 ">
        <Icon
          className={cn("text-slate-500", isActive && "text-sky-700")}
          size={22}
         
        />

        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      ></div>
    </button>
  );
};

export default SidebarItem;

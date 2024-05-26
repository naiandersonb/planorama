"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, LogoIcon, LogoName } from "../logo";
import { sidebarItems } from "./sidebar-items";

export function Sidebar() {
  const pathname = usePathname();

  const checkPathname = (path: string): boolean => {
    return pathname.startsWith(path);
  };

  const isSelectedStyle =
    "dark:bg-slate-800 bg-slate-200 dark:text-slate-50 text-slate-950";

  return (
    <aside className="fixed top-0 left-0 bottom-0 p-4 max-w-64 dark:bg-slate-900 bg-slate-50">
      <Link href='/dashboard'>
      <Logo className="py-4">
        <LogoIcon />
        <LogoName />
      </Logo>
      </Link>

      <div className="mt-24 flex flex-col gap-2">
        {sidebarItems.map((item) => (
          <Link href={item.link} key={item.title}>
            <div
              className={`flex w-full px-4 items-center gap-4 h-12 dark:hover:bg-slate-800 hover:bg-slate-100 rounded-md ${
                checkPathname(item.link) && isSelectedStyle
              }`}
            >
              {item.icon}
              <p>{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}

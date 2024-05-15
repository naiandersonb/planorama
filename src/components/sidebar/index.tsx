'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, LogoIcon, LogoName } from "../logo";
import { SidebarItems } from "./sidebar-items";

export function Sidebar() {
  const pathname = usePathname()

  const checkPathname = (path: string): boolean => {
    return pathname.startsWith(path)
  }

  const isSelectedStyle = 'dark:bg-neutral-800 dark:text-[#ACF079] text-[#418B09] bg-neutral-100'

  return (
    <aside className="fixed top-0 left-0 bottom-0 p-4 border-r dark:border-neutral-800 max-w-64">
      <Logo className="py-4">
        <LogoIcon />
        <LogoName />
      </Logo>

      <div className="mt-12">
        <SidebarItems
          renderItem={(item) => (
            <Link href={item.link}>
              <div className={`flex w-full px-4 items-center gap-4 h-12 dark:hover:bg-neutral-800 hover:bg-neutral-100 rounded-md ${checkPathname(item.link) && isSelectedStyle}`}>
                {item.icon}
                <p>{item.title}</p>
              </div>
            </Link>
          )}
        />
      </div>
    </aside>
  );
}

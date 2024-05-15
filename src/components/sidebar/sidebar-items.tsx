import { Home, Settings, Wallet } from "lucide-react";
import { ReactNode } from "react";

/* export const SidebarItems = [
  { icon: <Home />, title: "Dashboard", link: "/dashboard" },
  { icon: <Wallet />, title: "Finance manager", link: "/finances" },
  { icon: <Settings />, title: "Settings", link: "/settings" },
];
 */

interface Item {
  icon: JSX.Element;
  title: string;
  link: string;
}

interface SidebarProps {
  renderItem: (item: Item) => ReactNode;
}

export const SidebarItems = ({ renderItem }: SidebarProps) => {
  const items = [
    { icon: <Home />, title: "Dashboard", link: "/dashboard" },
    { icon: <Wallet />, title: "Finance manager", link: "/finances" },
    { icon: <Settings />, title: "Settings", link: "/settings" },
  ];

  return (
    <ul className="flex flex-col gap-2 w-full">
      {items.map((item) => renderItem(item))}
    </ul>
  );
};

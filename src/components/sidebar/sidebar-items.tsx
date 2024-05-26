import { Home, Settings, Wallet } from "lucide-react";
import { ReactNode } from "react";

interface Item {
  icon: JSX.Element;
  title: string;
  link: string;
}

interface SidebarProps {
  renderItem: (item: Item) => ReactNode;
}

export const sidebarItems = [
  { icon: <Home />, title: "Dashboard", link: "/dashboard" },
  { icon: <Wallet />, title: "Finance manager", link: "/finances" },
  { icon: <Settings />, title: "Settings", link: "/settings" },
];

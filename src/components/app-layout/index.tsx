import { ReactNode } from "react";
import { Header } from "../header";
import { Sidebar } from "../sidebar";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex w-full justify-end">
      <div className="md:flex hidden">
      <Sidebar />
      </div>
      <section className="w-full md:max-w-[calc(100%-230px)] mt-20">
        <Header />
        <main>{children}</main>
      </section>
    </div>
  );
}

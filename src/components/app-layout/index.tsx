import { ReactNode } from "react";
import { Header } from "../header";
import { Sidebar } from "../sidebar";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex w-full justify-end">
      <Sidebar />
      <section className="w-full max-w-[calc(100%-230px)] mt-20">
        <Header />
        <main>{children}</main>
      </section>
    </div>
  );
}

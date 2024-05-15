import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";
import { ComponentProps, ReactNode } from "react";

export function LogoIcon() {
  return (
    <div
      className={cn(
        "w-8 h-8 bg-[#ACF079] flex items-center justify-center rounded-full"
      )}
    >
      <Zap className="text-[#0F5756] w-4" />
    </div>
  );
}

type LogoNameProps = ComponentProps<'p'> 

export function LogoName({...props}: LogoNameProps) {
  const {className} = props
  return <p className={cn("text-neutral-50", className)}>Planorama</p>;
}

interface LogoProps {
  children: ReactNode;
}

export function Logo({ children }: LogoProps) {
  return <div className="flex items-center gap-4">{children}</div>;
}

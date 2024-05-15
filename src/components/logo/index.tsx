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

type LogoNameProps = ComponentProps<"p">;

export function LogoName({ ...props }: LogoNameProps) {
  const { className } = props;
  return <p className={cn("dark:text-neutral-50 text-neutral-950", className)}>Planorama</p>;
}

interface LogoProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export function Logo({ children, ...props }: LogoProps) {
  const { className } = props;
  return (
    <div className={cn("flex items-center gap-4", className)}>{children}</div>
  );
}

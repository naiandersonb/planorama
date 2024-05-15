import { Logo, LogoIcon, LogoName } from "../logo";
import { ModeToggle } from "../mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Header() {
  return (
    <header className="h-20 flex items-center justify-between md:px-6 px-4 gap-6">
      <Logo>
        <LogoIcon />
        <LogoName className="md:inline hidden" />
      </Logo>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <ModeToggle />
      </div>
    </header>
  );
}

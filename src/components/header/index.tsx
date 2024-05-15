import { ModeToggle } from "../mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-60 h-20 flex items-center justify-end md:px-6 px-4 gap-6">
      <ModeToggle />
      <div className="flex items-center gap-4">
        <Avatar className="w-10 h-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

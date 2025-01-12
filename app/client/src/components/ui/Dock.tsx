import { BicepsFlexed, Bot, HomeIcon, User } from "lucide-react";
import { FloatingDock } from "./floating-dock";

function Dock() {
  const links = [
    {
      title: "Home",
      icon: (
        <HomeIcon className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "/home",
    },

    {
      title: "Dashboard",
      icon: (
        <BicepsFlexed className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "/dashboard",
    },
    {
      title: "Advisor",
      icon: (
        <Bot className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "/advisor",
    },
    {
      title: "Profile",
      icon: (
        <User className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "/profile",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
export default Dock;

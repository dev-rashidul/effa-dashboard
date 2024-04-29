import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, ChevronDown } from "lucide-react";
import avatar from "../../assets/avatar.svg";
import MobileSidebar from "./MobileSidebar";

const Header = () => {
  return (
    <>
      <header className="flex h-14 items-center border-l border-b border-[#F3F3F3] bg-white px-5 lg:h-[70px]">
        {/* Mobile Sidebar Component */}

        <MobileSidebar />

        <div className="w-full flex-1 ps-2 ps-md-0">
          <div className="site-title">
            <h4 className="text-lg md:text-2xl text-blackNormal font-medium">
              Scholarship
            </h4>
          </div>
        </div>
        <div className="header-right flex items-center">
          <div className="notification relative before:absolute before:w-2 before:h-2 before:top-0 before:right-0 before:bg-[#EC3C46] before:rounded-full">
            <Bell className="text-[#A4A4A4]" />
          </div>
          <div className="avatar ps-4 md:ps-6">
            <Avatar>
              <AvatarImage src={avatar} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer ps-2">
              <h5 className="flex text-base text-blackNormal font-medium">
                Andrew! <ChevronDown className="ps-2" />
              </h5>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  );
};

export default Header;

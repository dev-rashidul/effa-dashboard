import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import {
  BadgeHelp,
  LayoutDashboard,
  Settings,
  ShoppingCart,
} from "lucide-react";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Sidebar = () => {
  return (
    <>
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="relative flex h-full max-h-screen flex-col gap-2">
          <div className="logo flex justify-center items-center pt-8">
            <a href="/" className="">
              <img className="w-[180px]" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                to="/"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LayoutDashboard className="h-6 w-6" />
                Dashboard
              </Link>
              <Link
                to="/orders"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
              </Link>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="px-4 border-b-0">
                  <AccordionTrigger>Applicants</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-3">
                      <Button
                        asChild
                        variant="ghost"
                        className="text-start block"
                      >
                        <a href="#">btn</a>
                      </Button>
                      <Button
                        asChild
                        variant="ghost"
                        className="text-start block"
                      >
                        <a href="#">btn</a>
                      </Button>
                      <Button
                        asChild
                        variant="ghost"
                        className="text-start block"
                      >
                        <a href="#">btn</a>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="px-4 border-b-0">
                  <AccordionTrigger>Applicants</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-3">
                      <Button
                        asChild
                        variant="ghost"
                        className="text-start block"
                      >
                        <a href="#">btn</a>
                      </Button>
                      <Button
                        asChild
                        variant="ghost"
                        className="text-start block"
                      >
                        <a href="#">btn</a>
                      </Button>
                      <Button
                        asChild
                        variant="ghost"
                        className="text-start block"
                      >
                        <a href="#">btn</a>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </nav>
          </div>
          <div className="mt-auto p-4 fixed bottom-[20px]">
            <nav className="grid items-start text-sm font-medium">
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <BadgeHelp className="h-6 w-6" />
                Help & Support
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Settings className="h-6 w-6" />
                Setting
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

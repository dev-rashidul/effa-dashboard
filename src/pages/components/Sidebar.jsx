import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import {
  BadgeHelp,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  LayoutDashboard,
  NotebookText,
  Receipt,
  Route,
  Settings,
  UserCog,
  Wallet,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Sidebar = () => {
  return (
    <>
      <div className="hidden bg-white md:block">
        <div className="relative flex h-full max-h-screen flex-col">
          <div className="logo flex justify-center items-center pt-8">
            <a href="/" className="">
              <img className="w-[180px]" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="flex-1 pt-6">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <NavLink
                to="/dashboard"
                className="flex items-center text-sm text-LightBlack gap-3 rounded-lg px-3 py-3 mb-2"
              >
                <LayoutDashboard className="h-6 w-6" />
                Dashboard
              </NavLink>
              <NavLink
                to="/company-profile"
                className="flex items-center text-sm text-LightBlack bg-[#FEF6EC] gap-3 rounded-lg px-3 py-3 mb-2"
              >
                Company Profile
              </NavLink>
              <NavLink
                to="/"
                className="flex items-center text-sm text-LightBlack gap-3 rounded-lg px-3 py-3 mb-2"
              >
                <GraduationCap className="h-6 w-6" />
                Scholarships
              </NavLink>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="px-3 border-b-0">
                  <AccordionTrigger className="p-0 py-3 mb-2">
                    <NavLink
                      className="flex items-center text-sm text-LightBlack gap-3 rounded-lg hover:no-underline"
                      to="/applicants"
                    >
                      <Building2 className="w-6 h-6" />
                      Applicants
                    </NavLink>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col">
                      <Button
                        asChild
                        variant="ghost"
                        className="text-LightBlack hover:bg-transparent text-start block pt-2"
                      >
                        <a href="#">Dropdown 1</a>
                      </Button>
                      <Button
                        asChild
                        variant="ghost"
                        className="text-LightBlack hover:bg-transparent text-start block pt-2"
                      >
                        <a href="#">Dropdown 2</a>
                      </Button>
                      <Button
                        asChild
                        variant="ghost"
                        className="text-LightBlack hover:bg-transparent text-start block pt-2"
                      >
                        <a href="#">Dropdown 3</a>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <NavLink
                to="/job-descriptions"
                className="flex items-center text-sm text-LightBlack gap-3 rounded-lg px-3 py-3 mb-2"
              >
                <BriefcaseBusiness className="h-6 w-6" />
                Job Descriptions
              </NavLink>
              <NavLink
                to="/financials"
                className="flex items-center text-sm text-LightBlack gap-3 rounded-lg px-3 py-3 mb-2"
              >
                <Wallet className="h-6 w-6" />
                Financials
              </NavLink>
              <NavLink
                to="/reports"
                className="flex items-center text-sm text-LightBlack gap-3 rounded-lg px-3 py-3 mb-2"
              >
                <NotebookText className="h-6 w-6" />
                Reports
              </NavLink>
              <NavLink
                to="/company-assets"
                className="flex items-center text-sm text-LightBlack gap-3 rounded-lg px-3 py-3 mb-2"
              >
                <Receipt className="h-6 w-6" />
                Company Assets
              </NavLink>
              <NavLink
                to="/pathway"
                className="flex items-center text-sm text-LightBlack gap-3 rounded-lg px-3 py-3 mb-2"
              >
                <Route className="h-6 w-6" />
                Pathway
              </NavLink>
              <NavLink
                to="/roles"
                className="flex items-center text-sm text-LightBlack gap-3 rounded-lg px-3 py-3 mb-2"
              >
                <UserCog className="h-6 w-6" />
                Roles
              </NavLink>
            </nav>
          </div>
          <div className="mt-auto p-4 fixed bottom-[20px]">
            <nav className="grid items-start text-sm font-medium">
              <NavLink
                to="/help"
                className="flex items-center text-sm text-LightBlack gap-3 rounded-lg px-3 py-3"
              >
                <BadgeHelp className="h-6 w-6" />
                Help & Support
              </NavLink>
              <NavLink
                to="/settings"
                className="flex items-center text-sm text-LightBlack gap-3 rounded-lg px-3 py-3"
              >
                <Settings className="h-6 w-6" />
                Setting
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

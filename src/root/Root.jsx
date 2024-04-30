import { Outlet } from "react-router-dom";
import Header from "../pages/components/Header";
import Sidebar from "../pages/components/Sidebar";

const Root = () => {
  return (
    <div className="font-archivo">
      <div className="grid min-h-screen w-full md:grid-cols-[250px_1fr]">
        {/* Sidebar Component */}
        <Sidebar />

        <div className="flex flex-col">
          {/* Header Component */}
          <Header />

          <main className="flex flex-1 flex-col py-8 px-5 bg-[#FAFAFA]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Root;

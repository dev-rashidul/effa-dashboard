import { createBrowserRouter } from "react-router-dom";
import CreateScholarship from "../pages/CreateScholarship/CreateScholarship";
import Dashboard from "../pages/Dashboard/Dashboard";
import Root from "../root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/",
        element: <CreateScholarship />,
      },
    ],
  },
]);

export default router;

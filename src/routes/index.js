import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page";
import IPODetailsPage from "../pages/ipo-details/ipo-details-page";
import IPODashboard from "../pages/ipo-dashboard/ipodashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  }, 
  {
    path: "/stockbroker/:brokerType/:brokerId", 
    element: <IPODetailsPage />,
  }, 
  {
    path: "/ipo/ipo_dashboard.asp", 
    element: <IPODashboard />,
  }, 
]);

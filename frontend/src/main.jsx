import React from "react";
import App from "./App.jsx";
import ShopApp from "./components/shopPage/ShopApp.jsx";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import ShoppingPage from "./components/shopPage/ShopPage.jsx";
import AdminApp from "./components/AdminLogin/LoginApp.jsx";
import AdminDashboard from "./components/AdminLogin/AdminDashboard.jsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop/",
    element: <ShopApp />,
  },
  {
    path: "/shop/:itemId",
    element: <ShoppingPage />,
  },
  {
    path: "/login",
    element: <AdminApp />,
  },
  {
    path: "/admindash",
    element: <AdminDashboard />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

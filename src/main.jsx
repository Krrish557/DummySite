import React from "react";
import App from "./App.jsx";
import ShopApp from "./components/shopPage/ShopApp.jsx";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import ShoppingPage from "./components/shopPage/ShopPage.jsx";
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
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

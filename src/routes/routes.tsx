import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import MainPage from "../pages/MainPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "anime/:id",
        element: <MainPage />,
      },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={routes} />;
};

export default Routes;

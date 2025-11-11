import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import MainPage from "../pages/MainPage";
import DetailsPage from "../pages/DetailsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/anime" replace /> },
      {
        path: "anime",
        element: <MainPage />,
      },
      {
        path: "anime/:id",
        element: <DetailsPage />,
      },
      { path: "*", element: <Navigate to="/anime" replace /> },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={routes} />;
};

export default Routes;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Home,
  NewClaim,
  ExistingClaim,
  GetClaim,
  DeleteClaim,
} from "./pages/!pagesExports.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/new-claim",
        element: <NewClaim />,
      },
      {
        path: "/existing-claim",
        element: <ExistingClaim />,
      },
      {
        path: "/view-claim",
        element: <GetClaim />,
      },
      {
        path: "/delete-claim",
        element: <DeleteClaim />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

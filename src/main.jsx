import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App'
import Produto from './Produto'
import API from './API'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Produto",
    element: <Produto />
  },
  {
    path: "/API",
    element: <API />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
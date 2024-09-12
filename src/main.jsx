import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App'
import Produto from './Produto'
import Mapa from './Mapa'
import API from './API'
import Grafico from './Graficos'

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
  },
  {
    path: "/Maps",
    element: <Mapa />
  },
  {
    path: "/Grafico",
    element: <Grafico />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
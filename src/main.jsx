import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Importing pages
import Intro from "./pages/Intro";
import Project from "./pages/Project";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

//importing styles
import "./styles/globalStyles.css";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/intro",
    element: <Intro />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

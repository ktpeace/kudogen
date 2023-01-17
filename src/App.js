import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Results from "./Results";
import About from "./About";
import Credits from "./Credits";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/results",
      element: <Results />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/credits",
      element: <Credits />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Results from "./Results";
import About from "./About";
import Credits from "./Credits";

function App() {
  const [formEntries, setFormEntries] = useState({
    name: "",
    friendName: "",
    adjectives: "",
    color: "",
    description: "So proud to have you as a friend!",
    feelings: "",
    emojis: "",
  });

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <Home formEntries={formEntries} setFormEntries={setFormEntries} />
        ),
      },
      {
        path: "/results",
        element: <Results formEntries={formEntries} />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/credits",
        element: <Credits />,
      },
    ],
    { basename: "/kudogen" }
  );

  return <RouterProvider router={router} />;
}

export default App;

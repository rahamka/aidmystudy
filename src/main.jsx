import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import UniInfo from "./components/uniInfo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Hero />
    <UniInfo />
  </StrictMode>,
);

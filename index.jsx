import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import BaseLayout from "./lib/layouts/BaseLayout";
import AOS from "aos";
import "aos/dist/aos.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BaseLayout />
  </StrictMode>
);

AOS.init();
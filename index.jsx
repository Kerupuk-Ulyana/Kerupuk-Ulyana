import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import BaseLayout from "./lib/layouts/BaseLayout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BaseLayout />
  </StrictMode>
);

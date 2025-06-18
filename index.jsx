// import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import BaseLayout from "./lib/layouts/BaseLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { ViteReactSSG } from "vite-react-ssg/single-page";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BaseLayout />
//   </StrictMode>
// );

export const createRoot = ViteReactSSG(
  <StrictMode>
    <BaseLayout />
  </StrictMode>
);

const isClient = !!(
  (typeof window !== 'undefined' &&
  window.document && window.document.createElement)
);

if (isClient) {
  AOS.init();
}
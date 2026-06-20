import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import App from "./App";
import "./index.css";
import { SiteDataProvider } from "./context/SiteDataContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <SiteDataProvider>
          <App />
        </SiteDataProvider>
      </BrowserRouter>
    </MotionConfig>
  </React.StrictMode>
);


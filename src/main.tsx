import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CountryProvider } from "./context/CountryContext.tsx";
import "./index.css";

import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CountryProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </CountryProvider>
  </StrictMode>
);

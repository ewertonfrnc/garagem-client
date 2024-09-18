import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ExercisesProvider } from "./contexts/store.tsx";

import App from "./App.tsx";

// import "./assets/styles/main.scss";
import "./assets/base.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ExercisesProvider>
        <App />
      </ExercisesProvider>
    </BrowserRouter>
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ExercisesProvider } from "./contexts/store.tsx";

import App from "./App.tsx";

// import "./assets/styles/main.scss";
import "./assets/base.css";
import { WorkoutsProvider } from "./contexts/workouts.context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <WorkoutsProvider>
        <ExercisesProvider>
          <App />
        </ExercisesProvider>
      </WorkoutsProvider>
    </BrowserRouter>
  </StrictMode>,
);

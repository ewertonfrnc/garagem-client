import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home.tsx";
import WorkoutView from "./routes/Workout.view.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workout" element={<WorkoutView />} />
    </Routes>
  );
}

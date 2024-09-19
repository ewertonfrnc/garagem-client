import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home.tsx";
import WorkoutView from "./routes/Workout.view.tsx";
import ExercisesView from "./routes/exercises.view.tsx";
import WorkoutDetails from "./routes/workout-details.view.tsx";

export default function App() {
  return (
    <main className={"flex h-screen gap-4 p-4"}>
      <nav className={"rounded bg-stone-800 p-4"}>GARAGEM</nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/workouts" element={<WorkoutView />} />
        <Route path="/workouts/:workoutId" element={<WorkoutDetails />} />

        <Route path="/exercises" element={<ExercisesView />} />
      </Routes>
    </main>
  );
}

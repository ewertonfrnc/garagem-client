import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home.tsx";
import WorkoutView from "./routes/Workout.view.tsx";
// import Header from "./components/Header.component.tsx";

export default function App() {
  return (
    <>
      {/*<Header />*/}

      <main className={"flex h-screen gap-4 p-4"}>
        <nav className={"rounded bg-stone-800 p-4"}>GARAGEM</nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<WorkoutView />} />
        </Routes>
      </main>
    </>
  );
}

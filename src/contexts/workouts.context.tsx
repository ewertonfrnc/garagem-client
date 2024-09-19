import { createContext, ReactNode, useEffect, useState } from "react";
import { Workout } from "../interfaces/workout.interfaces.ts";
import { WorkoutService } from "../services";

type WorkoutsContextType = {
  error: string;
  loading: boolean;
  workouts: Workout[];
};
export const WorkoutsContext = createContext<WorkoutsContextType>({
  error: "",
  loading: false,
  workouts: [],
});

type Props = { children: ReactNode };
export const WorkoutsProvider = ({ children }: Props) => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function findAllWorkouts() {
    setLoading(true);

    WorkoutService.findAllWorkouts()
      .then((workouts) => setWorkouts(workouts))
      .catch((e) => setError(e));

    setLoading(false);
  }

  useEffect(() => {
    findAllWorkouts();
  }, []);

  const value = { error, loading, workouts };
  return (
    <WorkoutsContext.Provider value={value}>
      {children}
    </WorkoutsContext.Provider>
  );
};

import { createContext, ReactNode, useEffect, useState } from "react";
import { Workout } from "../interfaces/workout.interfaces.ts";
import { WorkoutService } from "../services";

type WorkoutsContextType = {
  error: string;
  loading: boolean;
  workout: Workout;
  workouts: Workout[];
  findWorkout: (workoutId: string) => void;
};
export const WorkoutsContext = createContext<WorkoutsContextType>({
  error: "",
  loading: false,
  workout: {} as Workout,
  workouts: [],
  findWorkout: () => {},
});

type Props = { children: ReactNode };
export const WorkoutsProvider = ({ children }: Props) => {
  const [workout, setWorkout] = useState<Workout>({} as Workout);
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

  function findWorkout(workoutId: string) {
    setLoading(true);

    WorkoutService.findWorkout(workoutId)
      .then((workout) => setWorkout(workout))
      .catch((e) => setError(e));

    setLoading(false);
  }

  useEffect(() => {
    findAllWorkouts();
  }, []);

  const value = { error, loading, workout, workouts, findWorkout };
  return (
    <WorkoutsContext.Provider value={value}>
      {children}
    </WorkoutsContext.Provider>
  );
};

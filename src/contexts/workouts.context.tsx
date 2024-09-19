import { createContext, ReactNode, useEffect, useState } from "react";
import { Workout } from "../interfaces/workout.interfaces.ts";
import { WorkoutService } from "../services";
import { WorkoutFormValues } from "../interfaces/exercices.interfaces.ts";

type WorkoutsContextType = {
  error: string;
  loading: boolean;
  workout: Workout;
  workouts: Workout[];
  findWorkout: (workoutId: string) => void;
  createWorkout: (workout: WorkoutFormValues) => void;
};
export const WorkoutsContext = createContext<WorkoutsContextType>({
  error: "",
  loading: false,
  workout: {} as Workout,
  workouts: [],
  findWorkout: () => {},
  createWorkout: () => {},
});

type Props = { children: ReactNode };
export const WorkoutsProvider = ({ children }: Props) => {
  const [workout, setWorkout] = useState<Workout>({} as Workout);
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function createWorkout(workout: WorkoutFormValues) {
    setLoading(true);

    WorkoutService.createWorkout(workout).then((createdWorkout) =>
      setWorkouts([createdWorkout, ...workouts]),
    );

    setLoading(false);
  }

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

  const value = {
    error,
    loading,
    workout,
    workouts,
    findWorkout,
    createWorkout,
  };
  return (
    <WorkoutsContext.Provider value={value}>
      {children}
    </WorkoutsContext.Provider>
  );
};

import React, { createContext, useEffect, useState } from "react";
import ExercisesService from "../services/exercises.service.ts";
import { Exercise } from "../interfaces/exercices.interfaces.ts"; // Importação correta do React

type ContextTypes = {
  loading: boolean;
  error: string;
  exercises: Exercise[];
};
export const ExercisesContext = createContext<ContextTypes>({
  error: "",
  loading: false,
  exercises: [],
});

type Props = { children: React.ReactNode };
export const ExercisesProvider = ({ children }: Props) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function fetchAllExercises() {
    setLoading(true);

    ExercisesService.fetchAllExercises()
      .then((exercises) => setExercises(exercises))
      .catch((e) => setError(e));

    setLoading(false);
  }

  useEffect(() => {
    fetchAllExercises();
  }, []);

  const value = { loading, error, exercises };
  return (
    <ExercisesContext.Provider value={value}>
      {children}
    </ExercisesContext.Provider>
  );
};

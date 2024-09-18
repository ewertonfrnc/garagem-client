import React, { createContext, useEffect, useState } from "react";
import ExercisesService from "../services/exercises.service.ts";
import { Exercise } from "../interfaces/exercices.interfaces.ts"; // Importação correta do React

type ContextTypes = {
  loading: boolean;
  error: string;
  exercises: Exercise[];
  targets: string[];
};
export const ExercisesContext = createContext<ContextTypes>({
  error: "",
  loading: false,
  targets: [],
  exercises: [],
});

type Props = { children: React.ReactNode };
export const ExercisesProvider = ({ children }: Props) => {
  const [targets, setTargets] = useState<string[]>([]);
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

  function fetchAllExerciseTargets() {
    setLoading(true);

    ExercisesService.fetchAllExerciseTargets()
      .then((targets) => setTargets(targets))
      .catch((e) => setError(e));

    setLoading(false);
  }

  useEffect(() => {
    fetchAllExerciseTargets();
  }, []);

  const value = { loading, error, exercises, targets };
  return (
    <ExercisesContext.Provider value={value}>
      {children}
    </ExercisesContext.Provider>
  );
};

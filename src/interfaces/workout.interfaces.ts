import { Exercise } from "./exercices.interfaces.ts";

export type Workout = {
  id: string;
  name: string;
  description: string;
  exercises: Exercise[];
};

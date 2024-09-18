import api from "./api.service.ts";
import { Exercise } from "../interfaces/exercices.interfaces.ts";

type ExercisesResponse = {
  status: boolean;
  data: Exercise[];
};

type TargetsResponse = {
  status: boolean;
  data: string[];
};

class ExercisesService {
  async fetchAllExercises() {
    const {
      data: { data },
    } = await api().get<ExercisesResponse>("/exercises");

    return data;
  }

  async fetchAllExerciseTargets() {
    const {
      data: { data },
    } = await api().get<TargetsResponse>("/exercises/targets");

    return data;
  }
}

export default new ExercisesService();

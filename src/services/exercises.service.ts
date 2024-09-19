import api from "./api.service.ts";
import { Exercise } from "../interfaces/exercices.interfaces.ts";

type ExercisesResponse = {
  status: boolean;
  data: Exercise[];
};

class ExercisesService {
  async fetchAllExercises() {
    const {
      data: { data },
    } = await api().get<ExercisesResponse>("/exercises");

    return data;
  }
}

export default new ExercisesService();

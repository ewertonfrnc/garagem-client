import api from "./api.service.ts";
import { workoutFormValues } from "../interfaces/exercices.interfaces.ts";
import { Workout } from "../interfaces/workout.interfaces.ts";

type WorkoutsResponse = {
  status: boolean;
  data: Workout[];
};

class WorkoutService {
  async createWorkout(workout: workoutFormValues) {
    const response = await api().post("/workouts", workout);
    console.log(response);
  }

  async findAllWorkouts() {
    const {
      data: { data },
    } = await api().get<WorkoutsResponse>("/workouts");

    return data;
  }
}

export default new WorkoutService();

import api from "./api.service.ts";
import { workoutFormValues } from "../interfaces/exercices.interfaces.ts";

class WorkoutService {
  async createWorkout(workout: workoutFormValues) {
    const response = await api().post("/workouts", workout);
    console.log(response);
  }
}

export default new WorkoutService();

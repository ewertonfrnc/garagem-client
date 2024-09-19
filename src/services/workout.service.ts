import api from "./api.service.ts";
import { workoutFormValues } from "../interfaces/exercices.interfaces.ts";
import { Workout } from "../interfaces/workout.interfaces.ts";

type WorkoutsResponse = { status: boolean; data: Workout[] };
type WorkoutResponse = { status: boolean; data: Workout };

class WorkoutService {
  async createWorkout(workout: workoutFormValues) {
    const {
      data: { data },
    } = await api().post<WorkoutResponse>("/workouts", workout);

    return data;
  }

  async findAllWorkouts() {
    const {
      data: { data },
    } = await api().get<WorkoutsResponse>("/workouts");

    return data;
  }

  async findWorkout(workoutId: string) {
    const {
      data: { data },
    } = await api().get<WorkoutResponse>(`/workouts/${workoutId}`);

    return data;
  }
}

export default new WorkoutService();

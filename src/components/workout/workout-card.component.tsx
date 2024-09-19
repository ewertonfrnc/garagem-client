import { Workout } from "../../interfaces/workout.interfaces.ts";
import { Link } from "react-router-dom";

type Props = { workout: Workout };
export default function WorkoutCard({ workout }: Props) {
  return (
    <Link
      to={`/workouts/${workout.id}`}
      key={workout.id}
      className="m-1 inline-block w-full rounded-lg bg-stone-900 p-4 transition hover:bg-stone-800"
    >
      <p className="font-bold">{workout.name}</p>
      <p className="">{workout.description}</p>
    </Link>
  );
}

import { Exercise } from "../interfaces/exercices.interfaces.ts";
import { Link } from "react-router-dom";

type Props = { exercise: Exercise };
export default function ExerciseCard({ exercise }: Props) {
  return (
    <Link
      to={exercise.id}
      key={exercise.id}
      type={"button"}
      className={"rounded bg-stone-800 p-4"}
    >
      <p className={"mb-2 font-bold"}>{exercise.name.toUpperCase()}</p>

      <div>
        <p className={""}>
          <span className={"font-bold"}>Target: </span>
          <span>{exercise.target}</span>
        </p>
      </div>

      <div>
        <p className={""}>
          <span className={"font-bold"}>Body part: </span>
          <span>{exercise.bodyPart}</span>
        </p>
      </div>

      <div>
        <p className={""}>
          <span className={"font-bold"}>Equipment: </span>
          <span>{exercise.equipment}</span>
        </p>
      </div>
    </Link>
  );
}

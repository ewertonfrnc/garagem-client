import { useContext } from "react";
import { ExercisesContext } from "../contexts/store.tsx";

export default function ExercisesView() {
  const { loading, exercises } = useContext(ExercisesContext);

  return (
    <div>
      <h1 className={"text-3xl font-semibold uppercase"}>Exercícios</h1>

      <div>
        {loading && !exercises.length ? (
          <p>Carregando...</p>
        ) : (
          exercises.map((exercise) => <p key={exercise.id}>{exercise.name}</p>)
        )}
      </div>
    </div>
  );
}

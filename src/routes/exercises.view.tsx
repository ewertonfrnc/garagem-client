import { useContext } from "react";
import { ExercisesContext } from "../contexts/store.tsx";

import ExerciseCard from "../components/exercise-card.component.tsx";
import ViewWrapper from "../components/view-wrapper.component.tsx";
import ViewHeader from "../components/view-header.component.tsx";

export default function ExercisesView() {
  const { loading, exercises } = useContext(ExercisesContext);

  return (
    <ViewWrapper>
      <ViewHeader title={"Exercícios"} />

      <div className={"grid grid-cols-3 gap-4 py-4"}>
        {loading && !exercises.length ? (
          <p>Carregando...</p>
        ) : (
          exercises.map((exercise) => (
            <ExerciseCard exercise={exercise} key={exercise.id} />
          ))
        )}
      </div>
    </ViewWrapper>
  );
}

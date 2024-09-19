import { useParams } from "react-router-dom";

import ViewWrapper from "../components/view-wrapper.component.tsx";
import ViewHeader from "../components/view-header.component.tsx";
import { useContext, useEffect } from "react";
import { WorkoutsContext } from "../contexts/workouts.context.tsx";

export default function WorkoutDetails() {
  const { workoutId } = useParams();
  const { loading, workout, findWorkout } = useContext(WorkoutsContext);

  useEffect(() => {
    if (workoutId) {
      findWorkout(workoutId);
    }
  }, [workoutId]);

  return (
    <ViewWrapper>
      <ViewHeader title="Detalhes do treino" />

      <div>
        {loading || !workout ? (
          <p>Carregando...</p>
        ) : (
          <div>
            <h1>{workout.name}</h1>
          </div>
        )}
      </div>
    </ViewWrapper>
  );
}

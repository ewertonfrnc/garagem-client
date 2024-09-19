import { useContext } from "react";

import { WorkoutsContext } from "../contexts/workouts.context.tsx";

import ViewWrapper from "../components/view-wrapper.component.tsx";
import ViewHeader from "../components/view-header.component.tsx";
import WorkoutCard from "../components/workout/workout-card.component.tsx";

export default function WorkoutView() {
  const { loading, workouts } = useContext(WorkoutsContext);

  return (
    <ViewWrapper>
      <ViewHeader title={"Treinos"} />

      <div>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          workouts.map((workout) => (
            <WorkoutCard workout={workout} key={workout.id} />
          ))
        )}
      </div>
    </ViewWrapper>
  );
}

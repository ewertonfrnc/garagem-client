import { useContext, useState } from "react";

import { WorkoutsContext } from "../contexts/workouts.context.tsx";

import ViewWrapper from "../components/view-wrapper.component.tsx";
import ViewHeader from "../components/view-header.component.tsx";
import WorkoutCard from "../components/workout/workout-card.component.tsx";
import WorkoutForm from "../components/workout/workout-form.component.tsx";
import { WorkoutFormValues } from "../interfaces/exercices.interfaces.ts";

export default function WorkoutView() {
  const { loading, workouts, createWorkout } = useContext(WorkoutsContext);
  const [isEditing, setIsEditing] = useState(false);

  function handleSubmit(formValues: WorkoutFormValues) {
    createWorkout(formValues);
    setIsEditing(!isEditing);
  }

  return (
    <ViewWrapper>
      <ViewHeader title={"Treinos"} />

      <div className="flex justify-end">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="rounded-full bg-stone-900 px-4 py-2 transition hover:bg-stone-800"
        >
          {!isEditing ? "Criar treino" : "Cancelar"}
        </button>
      </div>

      {isEditing ? (
        <WorkoutForm onSubmit={handleSubmit} />
      ) : (
        <div>
          {loading ? (
            <p>Carregando...</p>
          ) : (
            workouts.map((workout) => (
              <WorkoutCard workout={workout} key={workout.id} />
            ))
          )}
        </div>
      )}
    </ViewWrapper>
  );
}

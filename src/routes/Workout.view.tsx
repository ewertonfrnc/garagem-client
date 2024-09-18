import { ChangeEvent, useState } from "react";
import workoutService from "../services/workout.service.ts";

export default function WorkoutView() {
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await workoutService.createWorkout(formValues);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h1>Criar Treino</h1>

      <form className={"flex flex-col gap-4 p-2"} onSubmit={handleSubmit}>
        <div className={"flex flex-col gap-2"}>
          <label htmlFor="name" className={"font-bold text-orange-500"}>
            Nome do treino
          </label>
          <input
            type="text"
            name={"name"}
            id="name"
            className={"rounded-xl px-4 py-1 text-slate-900"}
            value={formValues.name}
            onChange={handleChange}
          />
        </div>

        <div className={"flex flex-col gap-2"}>
          <label htmlFor="description" className={"font-bold text-orange-500"}>
            Descrição do treino
          </label>
          <input
            type="text"
            name={"description"}
            id="description"
            className={"rounded-xl px-4 py-1 text-slate-900"}
            value={formValues.description}
            onChange={handleChange}
          />
        </div>

        <div className={"text-center"}>
          <button
            type={"submit"}
            className={"rounded-xl bg-orange-800 px-6 py-2"}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

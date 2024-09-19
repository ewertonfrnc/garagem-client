import Input from "../input.component.tsx";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { WorkoutsContext } from "../../contexts/workouts.context.tsx";
import { WorkoutFormValues } from "../../interfaces/exercices.interfaces.ts";

const initialValues = {
  name: "",
  description: "",
};

type Props = {
  onSubmit: (formValues: WorkoutFormValues) => void;
};

export default function WorkoutForm({ onSubmit }: Props) {
  const { loading } = useContext(WorkoutsContext);
  const [formValues, setFormValues] = useState(initialValues);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(formValues);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        label="Nome"
        type="text"
        name="name"
        id="name"
        autoComplete="off"
        required
        value={formValues.name}
        onChange={handleChange}
      />

      <Input
        label="Descrição"
        type="text"
        name="description"
        id="description"
        autoComplete="off"
        required
        value={formValues.description}
        onChange={handleChange}
      />

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={loading}
          className={`w-1/2 cursor-pointer rounded-full bg-orange-700 px-4 py-2 transition hover:bg-orange-800 ${loading && "disabled:bg-orange-100 disabled:text-stone-900"}`}
        >
          Criar
        </button>
      </div>
    </form>
  );
}

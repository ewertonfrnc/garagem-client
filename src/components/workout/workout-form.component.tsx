import Input from "../input.component.tsx";

export default function WorkoutForm() {
  return (
    <form className="flex flex-col gap-4">
      <Input
        label="Nome"
        type="text"
        name="name"
        id="name"
        autoComplete="off"
      />

      <Input
        label="Descrição"
        type="text"
        name="description"
        id="description"
        autoComplete="off"
      />
    </form>
  );
}

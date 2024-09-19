import { useNavigate } from "react-router-dom";

type Props = { title: string };
export default function ViewHeader({ title }: Props) {
  const navigate = useNavigate();

  return (
    <div className={"flex items-center gap-4"}>
      <button
        className={"h-10 w-10 rounded-full bg-stone-800"}
        onClick={() => navigate("/")}
      >
        &laquo;
      </button>

      <h1 className={"text-3xl font-semibold uppercase"}>{title}</h1>
    </div>
  );
}

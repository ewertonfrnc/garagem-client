import { Link } from "react-router-dom";

export default function Home() {
  const routes = [
    { label: "Treinos", route: "/workouts" },
    { label: "Exercícios", route: "/exercises" },
    { label: "Alunos", route: "/students" },
  ];

  return (
    <div>
      <h1>Atalhos</h1>

      <div className={"grid grid-cols-3 gap-4"}>
        {routes.map((route, idx) => (
          <Link
            className={"inline-block rounded bg-stone-800 p-5 text-center"}
            to={route.route}
            key={idx}
          >
            <p>{route.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

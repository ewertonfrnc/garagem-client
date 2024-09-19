import { useParams } from "react-router-dom";

export default function ExerciseDetailsView() {
  const params = useParams();
  console.log("params", params);

  return (
    <div>
      <h1>Details</h1>
    </div>
  );
}

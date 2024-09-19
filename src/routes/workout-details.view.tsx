import { useParams } from "react-router-dom";

import ViewWrapper from "../components/view-wrapper.component.tsx";
import ViewHeader from "../components/view-header.component.tsx";

export default function WorkoutDetails() {
  const params = useParams();

  console.log(params);

  return (
    <ViewWrapper>
      <ViewHeader title="Detalhes do treino" />
    </ViewWrapper>
  );
}

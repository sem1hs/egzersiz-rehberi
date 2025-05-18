import { useSearchParams } from "react-router-dom";
import { useExercises } from "../hooks/useExercises";
import ExercisesCard from "./ExercisesCard";
import Loader from "./Loader";
import Error from "./Error";

const Exercises = () => {
  const [searchParams] = useSearchParams();
  const selectedBodyParts = searchParams.get("bodyPart") || undefined;
  const selectedName = searchParams.get("name") || undefined;
  const { data, isLoading, isError, error } = useExercises({
    bodyPart: selectedBodyParts,
    name: selectedName,
  });

  return (
    <section className="col-span-2">
      {!isLoading && (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-0">
          {data?.map((val) => {
            return <ExercisesCard key={val.id} exercise={val} />;
          })}
        </ul>
      )}
      {isLoading && <Loader />}
      {isError && <Error error={error} />}
    </section>
  );
};

export default Exercises;

import { useSearchParams } from "react-router-dom";
import { Exercise } from "../types/exercise";
import ExercisesCard from "./ExercisesCard";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const Favorites = () => {
  const [favoritesExercises, setFavoritesExercises] = useState<Exercise[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [searchParams] = useSearchParams();
  const bodyPart = searchParams.get("bodyPart") || null;
  const name = searchParams.get("name") || null;

  useEffect(() => {
    setIsLoading(true);

    const time = setTimeout(() => {
      const data = localStorage.getItem(import.meta.env.VITE_LS_KEY);
      const parsedData = data ? JSON.parse(data) : [];

      const filteredData = parsedData.filter((val: Exercise) => {
        if (bodyPart && val.bodyPart !== bodyPart) return false;
        if (name && !val.name.includes(name.toLowerCase())) return false;
        return true;
      });

      setFavoritesExercises(filteredData);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(time);
  }, [bodyPart, name]);

  return (
    <section className="col-span-2">
      {isLoading && <Loader />}
      {!isLoading && favoritesExercises.length > 0 && (
        <ul className="grid grid-cols-3 gap-8">
          {favoritesExercises.map((val: Exercise) => {
            return <ExercisesCard key={val.id} exercise={val} />;
          })}
        </ul>
      )}
      {!isLoading && favoritesExercises.length === 0 && (
        <div className="flex items-center justify-center">
          <p className="text-white text-sm md:text-lg text-center px-4 md:text-left md:px-0">
            Henüz favori egzersiz eklemediniz veya bu kategoride hiç favori
            egzersiz eklemediniz 🏋️‍♂️
          </p>
        </div>
      )}
    </section>
  );
};

export default Favorites;

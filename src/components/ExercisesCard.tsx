import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { Exercise } from "../types/exercise";
import { capitalize } from "../utils/capitalize";
import { addDeleteFavorite, isFavorite } from "../utils/localStorage";
import { useState } from "react";

type Props = {
  exercise: Exercise;
};

const ExercisesCard = ({ exercise }: Props) => {
  const [isFav, setIsFav] = useState(isFavorite(exercise.id));

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFav((fav) => !fav);
    addDeleteFavorite(exercise);
  };
  return (
    <li className="border-1 border-white rounded-lg flex flex-col overflow-hidden w-[75%] md:w-full place-self-center shadow-2xl translate-0 hover:translate-y-2 transition-transform">
      <div className="relative">
        <img src={exercise.gifUrl} />
        <button
          onClick={handleClick}
          className="absolute top-2 right-2 w-max inline-block justify-self-end cursor-pointer"
        >
          <i>
            {isFav && (
              <HeartIconSolid className="h-5 w-5 md:h-7 md:w-7 text-red-500" />
            )}
            {!isFav && (
              <HeartIconOutline className="h-5 w-5 md:h-7 md:w-7 text-red-500" />
            )}
          </i>
        </button>
      </div>
      <div className="px-4 py-2">
        <h1 className="text-gray-200 text-base md:text-lg ">
          {capitalize(exercise.name)}
        </h1>
        <p className="text-gray-300 text-sm md:text-base mt-1 md:mt-3">
          <b>Body Part</b> : {capitalize(exercise.bodyPart)}
        </p>
        <p className="text-gray-300 text-sm md:text-base">
          <b>Equipment</b> : {capitalize(exercise.equipment)}
        </p>
      </div>
    </li>
  );
};

export default ExercisesCard;

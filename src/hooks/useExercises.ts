import { QueryFunction, useQuery } from "@tanstack/react-query";
import {
  getAllExercises,
  getExerciseByBodyPart,
  getExerciseByName,
} from "../controllers/exerciseController";
import { Exercise } from "../types/exercise";

export const useExercises = (filters: { bodyPart?: string; name?: string }) => {
  const queryFn: QueryFunction<Exercise[]> = async () => {
    if (filters.bodyPart) {
      return await getExerciseByBodyPart(filters.bodyPart);
    } else if (filters.name) {
      return await getExerciseByName(filters.name);
    } else {
      return await getAllExercises();
    }
  };

  return useQuery<Exercise[]>({
    queryKey: ["exercises", filters.bodyPart ?? "", filters.name ?? ""],
    queryFn,
    staleTime: 1000 * 60 * 5,
  });
};

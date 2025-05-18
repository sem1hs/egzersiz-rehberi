import axiosInstance from "../api/axiosInstance";
import { Exercise } from "../types/exercise";

export const getExerciseByName = async (name: string): Promise<Exercise[]> => {
  try {
    const response = await axiosInstance.get(`/exercises/name/${name}`);
    return response.data;
  } catch (error) {
    throw new Error(
      "Egzersiz verileri alınırken hata oluştu. Lütfen tekrar deneyin."
    );
  }
};

export const getExerciseByBodyPart = async (
  bodyPart: string
): Promise<Exercise[]> => {
  try {
    const response = await axiosInstance.get(`/exercises/bodyPart/${bodyPart}`);
    return response.data;
  } catch (error) {
    throw new Error(
      "Egzersiz verileri alınırken hata oluştu. Lütfen tekrar deneyin."
    );
  }
};
export const getAllExercises = async (): Promise<Exercise[]> => {
  try {
    const response = await axiosInstance.get("/exercises");
    return response.data;
  } catch (error) {
    throw new Error(
      "Egzersiz verileri alınırken hata oluştu. Lütfen tekrar deneyin."
    );
  }
};

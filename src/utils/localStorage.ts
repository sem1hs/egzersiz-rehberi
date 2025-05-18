import { Exercise } from "../types/exercise";

export const getFavorites = (): Exercise[] => {
  const data = localStorage.getItem(import.meta.env.VITE_LS_KEY);
  return data ? JSON.parse(data) : [];
};

export const isFavorite = (exerciseId: string) => {
  const favs = getFavorites();
  return favs.some((fav) => fav.id === exerciseId);
};

export const addDeleteFavorite = (exercise: Exercise) => {
  const favs = getFavorites();
  const isFav = isFavorite(exercise.id);

  if (isFav) {
    const newFavs = favs.filter((fav) => fav.id !== exercise.id);
    localStorage.setItem(import.meta.env.VITE_LS_KEY, JSON.stringify(newFavs));
  } else {
    localStorage.setItem(
      import.meta.env.VITE_LS_KEY,
      JSON.stringify([...favs, exercise])
    );
  }
};

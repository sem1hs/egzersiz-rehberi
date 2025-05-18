import Aside from "./Aside";
import Exercises from "./Exercises";
import { Route, Routes } from "react-router-dom";
import Favorites from "./Favorites";

const Main = () => {
  return (
    <main className="grid grid-cols-3 relative">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Aside />
              <Exercises />
            </>
          }
        />
        <Route
          path="/favorites"
          element={
            <>
              <Aside />
              <Favorites />
            </>
          }
        />
      </Routes>
    </main>
  );
};

export default Main;

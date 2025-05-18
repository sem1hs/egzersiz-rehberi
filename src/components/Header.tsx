import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";
import Form from "./Form";

const Header = () => {
  const location = useLocation().pathname;

  return (
    <header>
      <nav className="grid grid-cols-3 items-center mb-8 md:mb-16 px-3">
        <Link
          to="/"
          className="text-white text-base md:text-2xl text-center md:text-left"
        >
          Egzersiz Rehberi Uygulaması
        </Link>
        <Form />
        <Link
          to="/favorites"
          className="w-max inline-block justify-self-end pr-2 cursor-pointer"
        >
          <i>
            {location === "/favorites" ? (
              <HeartIconSolid className="h-7 w-7 text-red-500" />
            ) : (
              <HeartIconOutline className="h-7 w-7 text-red-500" />
            )}
          </i>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

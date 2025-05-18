import { useState } from "react";
import { capitalize } from "../utils/capitalize";
import { useSearchParams } from "react-router-dom";
import { bodyPartList } from "../constants/bodyParts";

const Aside = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedData, setSelectedData] = useState<string | null>(
    searchParams.get("bodyPart")
  );
  const paramVal = searchParams.get("bodyPart");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const params = new URLSearchParams();

    if (selectedData === value) {
      setSelectedData("");
      params.delete("bodyPart", value);
    } else {
      setSelectedData(value);
      params.append("bodyPart", value);
    }
    setSearchParams(params);
  };

  return (
    <aside className="sticky top-0">
      <ul className="flex flex-col gap-3 px-4 md:px-0">
        {bodyPartList.map((val) => {
          return (
            <li key={val} className="flex gap-2 items-center">
              <input
                type="checkbox"
                name={val}
                id={val}
                className="w-6 h-6 accent-blue-500"
                value={val}
                checked={paramVal === val}
                onChange={handleChange}
              />
              <label className="text-gray-200 text-sm md:text-lg" htmlFor={val}>
                {capitalize(val)}
              </label>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Aside;

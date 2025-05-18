import { SyncLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <SyncLoader size={18} color="#fff" />
    </div>
  );
};

export default Loader;

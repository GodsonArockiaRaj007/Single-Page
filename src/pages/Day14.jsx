import { useNavigate } from "react-router-dom";

const Day14 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-purple-800 flex flex-col items-center pt-14">

      <h1 className="text-white text-6xl font-bold mb-14">
        Day14 Tasks
      </h1>

      <div className="flex flex-col gap-8">

        <button
          onClick={() => navigate("/search")}
          className="bg-purple-950 text-white text-2xl font-semibold rounded-full px-24 py-5 hover:bg-purple-950 transition-all duration-300"
        >
          Product Search
        </button>

        <button
          onClick={() => navigate("/category")}
          className="bg-purple-950 text-white text-2xl font-semibold rounded-full px-24 py-5 hover:bg-purple-950 transition-all duration-300"
        >
          Category Filter
        </button>

       

      </div>

    </div>
  );
};

export default Day14;
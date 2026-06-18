import { useState } from "react";

const Task9 = () => {
  const [mobile, setMobile] = useState(null);

  const handleLoadMobile = () => {
    setMobile(9344958856);
  };

  return (
    <div className="bg-stone-100 w-80 p-6 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-4">Task-9</h2>

      <h3 className="text-2xl font-semibold mb-4"> Mobile Number </h3>

      <button onClick={handleLoadMobile} className="bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-3xl">
        Load Mobile
      </button>

      {mobile && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow">
          <p className="text-lg"><span className="font-bold">Mobile:</span> {mobile}</p>
        </div>
      )}
    </div>
  );
};

export default Task9;
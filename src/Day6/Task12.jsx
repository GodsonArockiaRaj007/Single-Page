import { useState } from "react";

const Task12 = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActivate = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="bg-stone-100 w-80 p-6 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-4">Task-12</h2>
      <h3 className="text-2xl font-semibold mb-4"> Employee Status</h3>
      <p className="text-lg mb-4">Status: {isActive ? "Active" : "Inactive"}</p>
      <button onClick={handleActivate}className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-3xl">
        {isActive ? "Inactive" : "Active"}
      </button>
    </div>
  );
};

export default Task12;
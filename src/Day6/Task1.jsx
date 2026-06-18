import { useState } from "react";

const Task1 = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="bg-stone-100 w-85 p-6 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-4">Task-1</h2>

      <h3 className="text-2xl font-semibold mb-4">Counter Application</h3>
      <p className="text-lg mb-4">Count: {count}</p>

      <div className="flex gap-2 ">
        <button onClick={handleIncrement}className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-3xl">
          Increment
        </button>

        <button onClick={handleDecrement}className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-3xl">
          Decrement
        </button>

        <button onClick={handleReset}className="bg-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded-3xl">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Task1;
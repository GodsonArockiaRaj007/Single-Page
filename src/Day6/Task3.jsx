import { useState } from "react";

const Task3 = () => {
  const [age, setAge] = useState(18);

  const handleAgeIncrease = () => {
    setAge(age + 1);
  };

  return (
    <div className="bg-stone-100 w-80 p-6 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-4">Task-3</h2>
      <h3 className="text-2xl font-semibold mb-4">Age Increment</h3>
      <p className="text-lg mb-4">Age: {age}</p>
      <button onClick={handleAgeIncrease}className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-3xl">
        Increase Age
      </button>
    </div>
  );
};

export default Task3;
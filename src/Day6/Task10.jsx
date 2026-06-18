import { useState } from "react";

const Task10 = () => {
  const [salary, setSalary] = useState(25000);

  const handleIncreaseSalary = () => {
    setSalary(salary + 5000);
  };

  return (
    <div className="bg-stone-100 w-80 p-6 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-4">Task-10 </h2>
      <h3 className="text-2xl font-semibold mb-4"> Salary Update </h3>
      <p className="text-lg mb-4">Salary: ₹{salary}</p>

      <button onClick={handleIncreaseSalary} className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-3xl">
        Increase Salary
      </button>
    </div>
  );
};

export default Task10;
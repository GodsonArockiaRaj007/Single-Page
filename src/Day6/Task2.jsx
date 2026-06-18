import { useState } from "react";

const Task2 = () => {
  const [name, setName] = useState("Godson");

  const handleNameChange = () => {
    setName("Godson Arockia Raj");
  };

  return (
    <div className="bg-stone-100 w-80 p-6 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-4">Task-2</h2>
      <h3 className="text-2xl font-semibold mb-4">Student Name Update</h3>
      <p className="text-lg mb-4">Name: {name}</p>
      <button onClick={handleNameChange} className="bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-3xl">
        Change Name
      </button>
    </div>
  );
};

export default Task2;
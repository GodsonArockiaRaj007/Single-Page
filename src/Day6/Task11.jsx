import { useState } from "react";

const Task11 = () => {
  const [course, setCourse] = useState("MERN");

  const handleCourseChange = () => {
    setCourse("React Native");
  };

  return (
    <div className="bg-stone-100 w-80 p-6 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-4"> Task-11</h2>
      <h3 className="text-2xl font-semibold mb-4">Course Selection</h3>
      <p className="text-lg mb-4"> Selected Course: {course}</p>

      <button onClick={handleCourseChange}className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-3xl">
        Change Course
      </button>
    </div>
  );
};

export default Task11;
import { useState } from "react";

const Task13 = () => {
  const [attendance, setAttendance] = useState(0);

  const handlePresent = () => {
    setAttendance(attendance + 1);
  };

  return (
    <div className="bg-stone-100 w-80 p-6 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-4">Task-13</h2>
      <h3 className="text-2xl font-semibold mb-4">Attendance Tracker</h3>
      <p className="text-lg mb-4">Total Attendance: {attendance}</p>
      <button onClick={handlePresent}className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-3xl">
        Present
      </button>
    </div>
  );
};

export default Task13;
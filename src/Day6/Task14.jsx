import { useState } from "react";

const Task14 = () => {
  const [showProfile, setShowProfile] = useState(false);

  const handleShowProfile = () => {
    setShowProfile(true);
  };

  return (
    <div className="bg-stone-100 w-80 p-6 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-4">Task-14</h2>
      <h3 className="text-2xl font-semibold mb-4"> Profile Visibility </h3>
      <button  onClick={handleShowProfile} className="bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-3xl">
        Show Profile
      </button>

      {showProfile && (
        <div className="mt-4 bg-white p-4 rounded- shadow">
          <p className="text-lg"><span className="font-bold">Name:</span> Godson</p>
          <p className="text-lg"><span className="font-bold">City:</span> Chennai </p>
          <p className="text-lg"><span className="font-bold">Course:</span> MERN Stack</p>
        </div>
      )}
    </div>
  );
};

export default Task14;
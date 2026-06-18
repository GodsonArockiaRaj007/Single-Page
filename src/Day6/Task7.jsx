import { useState } from "react";

const Task7 = () => {
  const [user, setUser] = useState(null);

  const handleLoadUser = () => {
    setUser({
      name: "Godson",
      city: "Chennai",
    });
  };

  return (
    <div className="bg-stone-100 w-80 p-6 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-4">Task-7</h2>

      <h3 className="text-2xl font-semibold mb-4">User Data Loading</h3>

      <button onClick={handleLoadUser} className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-3xl">
        Load User
      </button>

      {user && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow">
          <p className="text-lg"><span className="font-bold">Name:</span> {user.name}</p>
          <p className="text-lg"><span className="font-bold">City:</span> {user.city} </p>
        </div>
      )}
    </div>
  );
};

export default Task7;
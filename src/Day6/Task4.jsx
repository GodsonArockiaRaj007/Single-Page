import { useState } from "react";

const Task4 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="bg-stone-100 w-80 p-6 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-4">Task-4 </h2>
      <h3 className="text-2xl font-semibold mb-4">Login Status</h3>
      <p className="text-lg mb-4">{isLoggedIn ? "Logged In" : "Logged Out"}</p>

      <button onClick={handleLogin}className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-3xl">
        Login
      </button>
    </div>
  );
};

export default Task4;
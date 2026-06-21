import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Object() {
  const [user, setUser] = useState(null);

  const toggleUser = () => {
    if (user === null) {
      setUser({
        name: "Godson",
        age: 21,
        city: "Chennai",
      });
    } else {
      setUser(null);
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
    <div className="bg-purple-800 min-h-screen">
       <button onClick={handleClick}className="bg-blue-700 flex gap-5 items-center p-3 rounded-3xl font-bold">
        <img src="./back.png" className="w-10 h-10 rounded-full" alt="Back"/>
        Back
      </button>

      <div className="flex justify-center mt-10 ">
        <div className="flex flex-col items-center gap-4p-5 rounded-3xl">
      <h1 className="text-center font-bold text-3xl mb-10">Click on the button to display the hidden Object</h1>

          <button className="bg-amber-500 p-3 mb-10 rounded-3xl border-2"onClick={toggleUser}>
            {user ? "Hide User" : "Show User"}
          </button>

          {user && (
            <div className="bg-amber-500 p-5 rounded-3xl">
              <h1 className="font-bold mb-2">User Details:</h1>
              <h2>Name: {user.name}</h2>
              <h2>Age: {user.age}</h2>
              <h2>City: {user.city}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
     
    </>
  );
}

export default Object;
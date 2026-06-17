import { useState } from "react";

function StateObject() {
  const [user, setUser] = useState(null);

  const showUser = () => {
    setUser({
      name: "Godson",
      age: 21,
      city: "Chennai",
    });
  };

  return (
    <>
    <div className="flex justify-center mt-10">
          <div className="bg-white p-5 rounded-3xl">
        <h1 className="font-bold text-3xl text-center">Task-5</h1>
        <h1>Click the button to show User details</h1>
      <button className="bg-amber-500 p-3 rounded-3xl border-2" onClick={showUser}>Show User</button>

      {user && (
        <div className=" bg-blue-400 w-fit p-5 rounded-3xl">
            <h1 className="font-bold">User Details:</h1>
          <h2>Name: {user.name}</h2>
          <h2>Age: {user.age}</h2>
          <h2>City: {user.city}</h2>
        </div>
      )}
    </div>
    </div>
    </>
  
  );
}

export default StateObject;
import { useState } from "react";

function App() {
  const [name, setName] = useState("Godson");

  const changeName = () => {
    setName("Godson Arockia Raj");
  };

  return (
    <>
    <div className="flex justify-center mt-10">
        <div className="bg-white p-5 rounded-2xl border-2 w-fit">
        <h1 className="font-bold text-3xl">Task-3</h1>
      <h1>Name: {name}</h1>

      <button className="bg-blue-600 border-2 p-3 rounded-3xl" onClick={changeName}>
        Change Name
      </button>
    </div>
    </div>
    </>
    
  );
}

export default App;
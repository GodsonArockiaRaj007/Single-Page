import { useState } from "react";

function StateArray() {
  const [fruits, setFruits] = useState([]);

  const showFruits = () => {
    setFruits([
      "Apple",
      "Banana",
      "Mango",
      "Orange"
    ]);
  };

  return (
    <>
    <div className="flex justify-center mt-10">
        <div className="bg-white  border-2 rounded-2xl p-5  w-fit">
             <div className="flex flex-col items-center gap-4">
      <h1 className="font-bold text-3xl">Task-6</h1>

      <button
        className="bg-amber-500 p-3 rounded-3xl border-2"
        onClick={showFruits}
      >
        Show Array
      </button>

      {fruits.length > 0 && (
        <div className="bg-blue-400 p-5 rounded-3xl">
          <ul>
            {fruits.map((fruit, index) => (
              <li key={index}>{index+1}.{fruit}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
    </div>
    
   
    </>
    
  );
}

export default StateArray;
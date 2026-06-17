import  { useState } from "react";

function Counter() {
  const [count,setCount]=useState(0)
  const handleIncrease=()=>{
      setCount(count+1)
  }
   const handleDecrease=()=>{
    if(count>0)
    {
      setCount(count-1)
    }
    else
    {
      setCount(0)
    }
      
  }
  const handleReset=()=>{
    setCount(0)
  }
  return (
    <>
    <div className="flex justify-center mt-10">
        <div className="bg-white border-2 w-fit p-5 rounded-3xl">
            <h1 className="font-bold text-3xl text-center">Task-4</h1>
             <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold bg-yellow-400 rounded-3xl w-fit p-5 m-10">{count}</h1>
                <div className="flex gap-5">
                    <button className="bg-green-400 p-5 text-2xl rounded-2xl font-bold" onClick={handleIncrease}>Increase</button>
                    <button className="bg-red-500 p-5 text-2xl rounded-2xl font-bold" onClick={handleDecrease}>Decrease</button>
                    <button className="bg-gray-400 p-5 text-2xl rounded-2xl font-bold" onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    </div>
        
    </>
  );
}

export default Counter;
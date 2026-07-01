import { useEffect, useState } from "react"

const Task2 = () => {

    const [count,setCount]=useState(0)

    useEffect(()=>{
        console.log("Count Updated")
    },[count])

  return (
    <>
        <h1 className="text-2xl font-bold mb-5">Task 2</h1>

        <h2 className="text-xl mb-5">Count : {count}</h2>

        <button onClick={()=>setCount(count+1)} className="bg-purple-800 text-white px-5 py-2 rounded-xl">
            Increment
        </button>
        <h3>Open console to see the text </h3>
    </>
  )
}

export default Task2
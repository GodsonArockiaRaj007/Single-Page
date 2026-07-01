import { useEffect, useState } from "react"

const Task3 = () => {

    const [count,setCount]=useState(0)

    useEffect(()=>{
        document.title=`Count : ${count}`
    },[count])

  return (
    <>
        <h1 className="text-2xl font-bold mb-5">Task 3</h1>

        <h2 className="text-xl mb-5">Count : {count}</h2>

        <button onClick={()=>setCount(count+1)} className="bg-purple-800 text-white px-5 py-2 rounded-xl">
            Increment
        </button>
    </>
  )
}

export default Task3
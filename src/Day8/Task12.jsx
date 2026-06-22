import { useState } from "react"

const Task12 = () => {
    const[first,setFirst]=useState("")
    const[last,setLast]=useState("")
    const[full,setFull]=useState("")
    const handleFirst=(e)=>{
        setFirst(e.target.value)
    }
    const handleLast=(e)=>{
        setLast(e.target.value)
    }
    const handleFull=()=>{
        setFull(first+" "+last)
    }

  return (
    
    <>
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-5 w-70">
        <h1 className="font-bold text-3xl">Task12</h1>
        <label htmlFor="first"> Username:</label>
        <input type="text" id="first" className="border-2 rounded" onChange={handleFirst} />
        <label htmlFor="last">Password:</label>
        <input type="password" id="last" className="border-2 rounded" onChange={handleLast} />
        <button className="bg-violet-500 text-white px-4 py-2 rounded mt-2" onClick={handleFull}>Show user details</button>
        {full.length>0 && 
            <div>
                <p className="font-bold">Username: {first}</p>
                <p className="font-bold">Password: {last}</p>
            </div>
        }
    </div>
    </>
  )
}

export default Task12
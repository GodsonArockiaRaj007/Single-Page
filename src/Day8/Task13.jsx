import { useState } from "react"

const Task13 = () => {
    const[first,setFirst]=useState("")
   
    const[full,setFull]=useState("")
    const handleFirst=(e)=>{
        setFirst(e.target.value)
    }

    const handleFull=()=>{
        setFull(first)
    }

  return (
    
    <>
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-5 w-70">
        <h1 className="font-bold text-3xl">Task13</h1>
        <label htmlFor="first"> Enter feedback</label>
        
        <textarea name="first" id="first" onChange={handleFirst}  placeholder="Enter here..."></textarea>       
        <button className="bg-violet-500 text-white px-4 py-2 rounded mt-2" onClick={handleFull}>Show user details</button>
        {full.length>0 && 
            <div>
                <p className="font-bold">User Feedback: {full}</p>
                
            </div>
        }
    </div>
    </>
  )
}

export default Task13
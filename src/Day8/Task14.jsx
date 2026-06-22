import { useState } from "react"

const Task14 = () => {
    const[first,setFirst]=useState("")
       
    const handleFirst=(e)=>{
        setFirst(e.target.value)
    }
  return (
    
    <>
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-5 w-70">
        <h1 className="font-bold text-3xl">Task12</h1>
        <label htmlFor="first"> Search</label>
        <input type="search" id="first" className="border-2 rounded" onChange={handleFirst} placeholder="Search" />
        
       
                <p className="font-bold">Search Content: {first}</p>
               
           
    </div>
    </>
  )
}

export default Task14
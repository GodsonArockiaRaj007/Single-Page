
import { useState } from "react"


const Task1 = () => {
    const [name,setName]=useState(" ")
    const handleChange=(e)=>{
        setName(e.target.value)
    }
  return (
    <>
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-5 w-70">
        <h1 className="font-bold text-3xl">Task1</h1>
        <div>
        <label htmlFor="name">Enter Name:</label>
        <input type="text" id="name" className="border-2 rounded" onChange={handleChange}/>
        <p>Entered name:{name}</p>
    </div>
    </div>
    
    </>
  )
}

export default Task1
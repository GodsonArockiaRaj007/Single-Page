
import { useState } from "react"

const Task3 = () => {
    const [age,setage]=useState(0)
            const handleChange=(e)=>{
                setage(e.target.value)
            }
  return (
    <>
     <div className="bg-white rounded-2xl p-5 flex flex-col gap-5 w-70">
        <h1 className="font-bold text-3xl">Task3</h1>
        <div>
        <label htmlFor="age">Enter Age:</label>
        <input type="number" id="age" className="border-2 rounded" onChange={handleChange}/>
        <p>User Age:{age}</p>
    </div>
    </div>
    
    </>
  )
}

export default Task3
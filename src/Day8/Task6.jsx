
import { useState } from "react"


const Task6 = () => {
    const [city,setCity]=useState(" ")
    const handleChange=(e)=>{
        setCity(e.target.value)
    }
  return (
    <>
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-5 w-70">
        <h1 className="font-bold text-3xl">Task6</h1>
        <div>
        <label htmlFor="city">Enter City:</label>
        <input type="text" id="city" className="border-2 rounded" onChange={handleChange}/>
        <p>Entered City:{city}</p>
    </div>
    </div>
    
    </>
  )
}

export default Task6
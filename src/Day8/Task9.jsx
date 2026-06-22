
import { useState } from "react"


const Task9 = () => {
    const [content,setContent]=useState("")
    const handleChange=(e)=>{
        setContent(e.target.value)
    }
  return (
    <>
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-5 w-70">
        <h1 className="font-bold text-3xl">Task9</h1>
        <div>
        <label htmlFor="content">Enter Text:</label>
        <input type="text" id="content" className="border-2 rounded" onChange={handleChange}/>
        <p>Uppercase:{content.toUpperCase()}</p>
    </div>
    </div>
    
    </>
  )
}

export default Task9
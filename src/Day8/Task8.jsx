
import { useState } from "react"


const Task8 = () => {
    const [content,setContent]=useState("")
    const handleChange=(e)=>{
        setContent(e.target.value)
    }
  return (
    <>
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-5 w-70">
        <h1 className="font-bold text-3xl">Task8</h1>
        <div>
        <label htmlFor="content">Enter Anything:</label>
        <input type="text" id="content" className="border-2 rounded" onChange={handleChange}/>
        <p>No. of characters in the content:{content.length}</p>
    </div>
    </div>
    
    </>
  )
}

export default Task8



import { useState } from "react"

const Task7 = () => {
    const [course,setCourse]=useState("")
            const handleChange=(e)=>{
                setCourse(e.target.value)
            }
  return (
    <>
     <div className="bg-white rounded-2xl p-5 flex flex-col gap-5 w-70">
        <h1 className="font-bold text-3xl">Task7</h1>
        <div>
         <label htmlFor="course">Select Course:</label>
        <select  className="border-2 rounded p-1" value={course}  onChange={handleChange}>
        <option value="">Select a course</option>
        <option value="React">React</option>
        <option value="HTML">HTML</option>
        <option value="Node">Node</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Express">Express</option>
      </select>
      <p>Selected Course:{course}</p>
    </div>
    </div>
    
    </>
  )
}



export default Task7;
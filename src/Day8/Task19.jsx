import { useState } from "react"

const Task19 = () => {
  const [task,setTask]=useState("")

  const [tasks,setTasks]=useState([])
  
  const handleTask=(e)=>{
    setTask(e.target.value)
  }
const handleClick=()=>{
    
   
    setTasks((prev)=>[...prev,task])
    setTask("")
  }
  return (
     <>
    <div className="bg-white rounded-2xl  flex  flex-col gap-5 w-150 text-center mx-auto mt-15 p-10">
        <h1 className="font-bold text-3xl">Task19</h1>
        <div className="space-y-3">
            <h1 className="font-bold text-3xl bg-amber-400 p-3 rounded-3xl border-2">Todo List</h1>
        <label htmlFor="name" className="w-30 inline-block" >Enter Task:</label>
        <input type="text" id="name" className="border-2 rounded" onChange={handleTask} value={task}/> <br />
        <button className="bg-violet-500 text-white px-4 py-2 rounded mt-5" onClick={handleClick}>Add Task</button>
        <h1 className="font-bold">Todo Tasks</h1>
        <div className="flex flex-col justify-center items-center">
               {tasks.map((e,i)=>(
                <h1 key={i}>{i+1}.{e}</h1>
       ))}
        </div>
    
        
    </div>
    </div>
    
    </>
  )
}

export default Task19
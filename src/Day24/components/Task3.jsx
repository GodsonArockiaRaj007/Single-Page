import { useReducer, useState } from "react"


const reduce=(tasks,action)=>{
  switch(action.type)
  {
    case"Add":
      return [...tasks,action.payload]
    case"Delete":
      return tasks.filter((e)=>e.id!=action.payload.id)
    case"Update":
      return tasks.map((e)=>e.id==action.payload.id?{...e,task:action.payload.task}:e)
    case"Check":
      return tasks.map((e)=>e.id==action.payload.id?{...e,status:!e.status}:e)
    default:
      return tasks
  }
}

const Task3 = () => {
  const[tasks,dispatch]=useReducer(reduce,[])
  const [task,setTask]=useState("")
  const [editId,setEditId]=useState(null)
  // const [status,setStatus]=useState(false)


  const handleAdd=()=>{
    if(task=="")
        {
            alert("Enter the Task")
            return
        }
    if(editId)
    {
      dispatch({
        type:"Update",
        payload:{id:editId,task:task}
      })
      setEditId(null)
    }
    else{
      const newData={
        id:Date.now(),
        status:false,
        task:task
      }
      dispatch({
        type:"Add",
        payload:newData
      })
    }

    setTask("")
    // setStatus(false)
  }

  const handleEdit=(e)=>{
    setEditId(e.id)
    setTask(e.task)
    // setStatus(e.status)
  }

  const handleDelete=(e)=>{
    dispatch({
      type:"Delete",
      payload:e
    })
  }
  const handleCheck=(e)=>{
    dispatch({
      type:"Check",
      payload:e
    })

  }
  const handleChange=(e)=>{
    setTask(e.target.value)
  }
  return (
    <>
    <input type="text" placeholder="Enter Task" onChange={handleChange} value={task} />
    <button onClick={handleAdd}>{editId?"Update Task":"Add Task"}</button>


    <table>

        <thead>
            <tr>
                <th>ID</th>
                <th>Task</th>
                <th colSpan={2}>Actions</th>
                <th>Completion</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>

            
    {
      tasks.map((e)=>(
        <tr key={e.id}>
          <td>{e.id}</td>
          <td>{e.task}</td>
          <td><button onClick={()=>handleEdit(e)}>Edit</button></td>
          <td><button onClick={()=>handleDelete(e)}>Delete</button></td>
          <td><input type="checkbox" onChange={()=>handleCheck(e)} checked={e.status} /></td>
          <td>{e.status?"Completed":"Not Completed"}</td>
        </tr>
      ))
    }

        </tbody>
         

    </table>

    
    </>
  )
}

export default Task3
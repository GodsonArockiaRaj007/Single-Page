import { useReducer, useState } from "react"

const reduce=(datas,action)=>{
    switch(action.type)
    {
        case"Add":
            return[...datas,action.payload]
        case"Delete":
            return datas.filter((e)=>e.id!=action.payload.id)
        case"Update":
            return datas.map((e)=>e.id==action.payload.id?{...e,name:action.payload.name}:e)
        default:
            datas
    }
}
const Task2 = () => {
    const[name,setName]=useState("")
    const[datas,dispatch]=useReducer(reduce,[])
    const[editId,setEditId]=useState(null)

    const handleAdd=()=>{
        if(name=="")
        {
            alert("Enter the name")
            return
        }
        if(editId)
        {
            dispatch({
                type:"Update",
                payload:{
                    id:editId,
                    name:name
                }
            })  
            
            setEditId(null)
        }
        else
        {
            const newdata={
                id:Date.now(),
                name:name
            }
            dispatch({
                type:"Add",
                payload:newdata
            })
        }

        setName("")

    }

    const handleEdit=(e)=>{
        setEditId(e.id)
        setName(e.name)
    }

    const handleDelete=(e)=>{
        dispatch({
            type:"Delete",
            payload:e
            
        })
    }

    const handleChange=(e)=>{
        setName(e.target.value)
    }
  return (
    <>
    <label htmlFor="name">Enter Student Name:</label>
    <input type="text" id="name" placeholder="Enter Student Name..." value={name} onChange={handleChange}  />
    <button onClick={handleAdd}>{editId?"Update":"Add"}</button>
    <table>

        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th colSpan={2}>Actions</th>
            </tr>
        </thead>
        <tbody>

            {datas.map((e)=>(
        <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td><button onClick={()=>handleEdit(e)}>Edit</button></td>
            <td><button onClick={()=>handleDelete(e)}>Delete</button></td>
        </tr>
    ))}

        </tbody>
         

    </table>
   
    </>
  )
}

export default Task2
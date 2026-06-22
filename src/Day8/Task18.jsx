import { useState } from "react"

const Task18 = () => {
  const [name,setName]=useState("")
  const [age,setAge]=useState("")
  const [role,setRole]=useState("")
  const [employees,setEmployees]=useState([])
  
  const handleName=(e)=>{
    setName(e.target.value)
  }
  const handleAge=(e)=>{
    setAge(e.target.value)
  }
  const handleRole=(e)=>{
    setRole(e.target.value)
  }
  const handleClick=()=>{
    
   
    setEmployees((prev)=>[...prev,{name,age,role}])
    setName("")
    setAge("")
    setRole("")
  }
  return (
     <>
    <div className="bg-white rounded-2xl  flex  flex-col gap-5 w-150 text-center mx-auto mt-15 p-10">
        <h1 className="font-bold text-3xl">Task18</h1>
        <div className="space-y-3">
        <label htmlFor="name" className="w-30 inline-block" >Enter Name:</label>
        <input type="text" id="name" className="border-2 rounded" onChange={handleName} value={name}/> <br />
        <label htmlFor="age" className="w-30 inline-block">Enter Age:</label>
        <input type="number" id="age" className="border-2 rounded" onChange={handleAge} value={age}/> <br />
        <label htmlFor="role" className="w-30 inline-block">Enter Role:</label>
        <input type="text" id="role" className="border-2 rounded" onChange={handleRole} value={role}/> <br />
        <button className="bg-violet-500 text-white px-4 py-2 rounded mt-5" onClick={handleClick}>Add Employee</button>
        <h1 className="font-bold">Employees List</h1>
        <div className="flex flex-col justify-center items-center">
               {employees.map((e,i)=>(
        <div key={i} className="bg-amber-400 w-50 m-5 rounded-3xl p-5  items-center">
            <h1>Employee {i+1}</h1>
            <p>Name:{e.name}</p>
            <p>Age:{e.age}</p>
            <p>Role:{e.role}</p>
        </div>

       ))}
        </div>
    
        
    </div>
    </div>
    
    </>
  )
}

export default Task18
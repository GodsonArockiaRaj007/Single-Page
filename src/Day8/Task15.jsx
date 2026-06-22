import { useState } from "react"

const Task15 = () => {
    const [name,setName]=useState("")
    const [age,setAge]=useState(0)
    const [city,setCity]=useState("")
    const [course,setCourse]=useState("")
    const [user,setUser]=useState(null)
    const handleName=(e)=>{
        setName(e.target.value)
    }
     const handleAge=(e)=>{
        setAge(e.target.value)
    }
     const handleCity=(e)=>{
        setCity(e.target.value)
    }
     const handleCourse=(e)=>{
        setCourse(e.target.value)
    }
    const handleClick=()=>{
        setUser({name,age,city,course})
    }


  return (
    <>
    <div className="bg-white rounded-2xl  flex  flex-col gap-5 w-150 text-center mx-auto mt-15 p-10">
        <h1 className="font-bold text-3xl">Task15</h1>
       <div className="border-2 rounded-3xl space-y-4 p-5">
        <label htmlFor="name" className="w-30 inline-block">Enter Name:</label>
        <input type="text" id="name" className="border-2 rounded" onChange={handleName}/><br />
        <label htmlFor="age"className="w-30 inline-block">Enter Age:</label>
        <input type="number" id="age" className="border-2 rounded" onChange={handleAge}/><br />
        <label htmlFor="course" className="w-30 inline-block">Enter Course:</label>
        <input type="text" id="course" className="border-2 rounded" onChange={handleCourse}/><br />
        <label htmlFor="city" className="w-30 inline-block">Enter City:</label>
        <input type="text" id="city" className="border-2 rounded" onChange={handleCity}/><br />
        <button className="bg-violet-500 text-white px-4 py-2 rounded mt-2" onClick={handleClick}>Show user</button>
    </div>
    {user &&(
    <div className="border-2 p-5 font-bold text-center rounded-3xl">
        <h1>User Details</h1>
        <p>name:{user.name}</p>
        <p>Age:{user.age}</p>
        <p>City:{user.city}</p>
        <p>Course:{user.course}</p>
    </div>
    )}
    </div>
    
    </>
  )
}

export default Task15
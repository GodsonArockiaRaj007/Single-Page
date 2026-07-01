import { useEffect, useState } from "react"

const Task4 = () => {

    const [users,setUsers]=useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>{setUsers(data)
        console.log(data)}
         )
       
       
        
    },[])
    

  return (
    <>
        <h1 className="text-2xl font-bold mb-5">Task 4</h1>

        {
            users.map((e)=>(
                <p key={e.id}>{e.name}</p>
            ))
        }
        <h2 className="font-bold">Open console to see all the details</h2>
    </>
  )
}

export default Task4
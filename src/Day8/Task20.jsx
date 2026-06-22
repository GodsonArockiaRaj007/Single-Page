import { useState } from "react"

const Task20 = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [mobile,setMobile]=useState("")
  const [message,setMessage]=useState("")
    const [users,setUsers]=useState([])
  const handleName=(e)=>{
    setName(e.target.value)
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handleMobile=(e)=>{
    setMobile(e.target.value)
  }
    const handleMessage=(e)=>{
    setMessage(e.target.value)
  }
  const handleClick=()=>{
    
   
    setUsers((prev)=>[...prev,{name,email,mobile,message}])
    setName("")
    setMobile("")
    setEmail("")
    setMessage("")
  }
  return (
     <>
    <div className="bg-white rounded-2xl  flex  flex-col gap-5 w-150 text-center mx-auto mt-15 p-10">
        <h1 className="font-bold text-3xl">Task20</h1>
        <h1 className="font-bold text-3xl">User Form</h1>
        <div className="space-y-3 border-2 rounded-2xl p-5">
        <label htmlFor="name" className="w-30 inline-block" >Enter Name:</label>
        <input type="text" id="name" className="border-2 rounded" onChange={handleName} value={name}/> <br />
        <label htmlFor="email" className="w-30 inline-block">Enter Email:</label>
        <input type="text" id="email" className="border-2 rounded" onChange={handleEmail} value={email}/> <br />
        <label htmlFor="mobile" className="w-30 inline-block">Enter Mobile:</label>
        <input type="number" id="mobile" className="border-2 rounded" onChange={handleMobile} value={mobile}/> <br />
        <label htmlFor="message" className="w-30 inline-block -mt-25">Enter Message:</label>
        <textarea name="message" id="message" className="border-2 rounded" onChange={handleMessage} value={message}/><br />
        <button className="bg-violet-500 text-white px-4 py-2 rounded mt-5" onClick={handleClick}>Submit</button>
        
        
       <div>
           <h1 className="font-bold">Users List</h1>
           <div className="flex flex-wrap justify-center gap-5">
  {users.map((e, i) => (
    <div key={i}className="bg-amber-400 w-60 rounded-3xl p-5 break-words text-left">
      <p><span className="font-bold">Name:</span> {e.name}</p>
      <p><span className="font-bold">Email:</span> {e.email}</p>
      <p><span className="font-bold">Mobile:</span> {e.mobile}</p>
      <p><span className="font-bold">Message:</span> {e.message}</p>
    </div>
  ))}
</div>
       </div>
         
        
       
    
        
    </div>
    </div>
    
    </>
  )
}

export default Task20
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate=useNavigate()
    const [user,setUser]=useState({name:"",email:"",password:""})
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(user.name==""||user.email==""||user.password=="")
        {
            alert("Enter All the Details")
            return
        }
        const local=JSON.parse(localStorage.getItem("data"))||[]
        
        const check=local.find((e)=>e.email==user.email)

        if(check)
        {
            alert("Email Already Exists")
            return
        }
        local.push(user)
        localStorage.setItem("data",JSON.stringify(local))
        alert("User Successfully Registered")
        navigate("/Day12login")


    }
  return (
    <>
    <div className="bg-purple-800  min-h-screen">
        <div className="flex justify-center p-20">
                  <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-5 w-fit">
            <h1 className="font-bold text-3xl text-center text-purple-800">Register Form</h1>
            <label htmlFor="name" className="font-semibold w-30 inline-block">Enter Name</label>:
            <input type="text" id="name" className="border-2 p-1 m-2 rounded-3xl" name="name" onChange={handleChange} value={user.name} /><br />
            <label htmlFor="email" className="font-semibold w-30 inline-block">Enter Email</label>:
            <input type="text" id="email" className="border-2 p-1 m-2 rounded-3xl" name="email" onChange={handleChange} value={user.email} /><br />
            <label htmlFor="password" className="font-semibold w-30 inline-block">Enter Password</label>:
            <input type="password" id="password" className="border-2 p-1 m-2 rounded-3xl" name="password" onChange={handleChange} value={user.password} /><br />
            <input type="submit" className="bg-purple-800 text-white font-bold w-40 p-2 rounded-2xl block mx-auto mt-3 " value="Register"/>
            <span>If already have an account?</span> <button type="button" className="bg-purple-800 text-white font-bold p-1 rounded-2xl inline-block mx-auto mt-1 "  onClick={()=>navigate("/Day12login")}>Login</button>
        </form>
        </div>
      
       
    </div>
    </>
  )
}

export default Register
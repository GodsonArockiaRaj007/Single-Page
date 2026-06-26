import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate=useNavigate()
  const [user,setUser]=useState({email:"",password:""})
  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
      e.preventDefault()
       if(user.email==""||user.password=="")
        {
            alert("Fill Email and Password to Login")
            return
        }
      const local=JSON.parse(localStorage.getItem("data")) ||[]
      const login=local.find((e)=>e.email==user.email&&e.password==user.password)

      if(!login)
      {
        alert("Invalid credentials")
        return
      }
      localStorage.setItem("Auth",JSON.stringify(login))
      alert("Login Successfull")
      navigate("/dashboard")


  }
  return (
    <>
    <div className="bg-purple-800  min-h-screen" >
      <div className="flex justify-center p-20">
          <form  onSubmit={handleSubmit} className="bg-white rounded-2xl p-5 w-fit">
        <h1 className="font-bold text-3xl text-center text-purple-800">Login Form</h1>
        <label className="font-semibold w-30 inline-block" htmlFor="email">Enter Email</label>:
        <input className="border-2 p-1 m-2 rounded-3xl" type="text" name="email" id="email" value={user.email} onChange={handleChange} /><br />
        <label className="font-semibold w-30 inline-block" htmlFor="password">Enter Password</label>:
        <input className="border-2 p-1 m-2 rounded-3xl" type="password" name="password" id="password" value={user.password} onChange={handleChange} /><br />
        <input className="bg-purple-800 text-white font-bold p-3 rounded-2xl block mx-auto mt-2  w-30" type="submit" value="Login" name="" id="" />
        <span className="ml-15 mr-2">new user?</span><button type="button" className="bg-purple-800 text-white  font-bold p-1 rounded-2xl inline-block mx-auto mt-1 " onClick={()=>navigate("/Day12")}>Register</button>

      </form>
      </div>
      
    </div>
    </>
  )
}

export default Login
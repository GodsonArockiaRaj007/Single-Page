import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate(-1)
  }
  return (
    <>
    <div className="bg-blue-400 h-screen  p-5">
   
      <button onClick={handleClick} className=" bg-blue-700 flex gap-5 items-center p-3 rounded-3xl  font-bold  "><img src="../../public/back.png" className="w-10 h-10 rounded-4xl" alt="" /> Back</button>
   
    <div className="  flex justify-center mt-30">
      <form className=" border-2 border-black w-fit rounded-3xl p-5 space-y-3  bg-white  ">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <label className=" inline-block w-20" htmlFor="">Email:</label>
        <input className="border-2 border-black rounded-2xl p-2 ml-2 " type="text" placeholder="Enter Email" /> <br />
        <label className="inline-block w-20" htmlFor="">Password:</label>
        <input className="border-2 border-black rounded-2xl p-2 ml-2" type="password" placeholder="Enter Password"/> <br />
        <input className="text-center border-2 border-black bg-blue-600 text-white p-2 rounded-3xl block mx-auto" type="submit" />
      </form>
    </div>
    </div>
    </>
  )
}

export default Login

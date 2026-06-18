import { useNavigate ,NavLink } from "react-router-dom"

const Navbar = () => {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/login")

  }
  const handleRegister=()=>{
    navigate("/register")
  }
  return (
    <>
    <div className="flex justify-between bg-blue-500 h-18  p-2 items-center">
        <div className=" w-14 h-14 rounded-4xl">
            <img className="rounded-4xl" src="../../public/download.jpg" alt="" />
        </div>
        <div >
              <h1 className="bg-white rounded-3xl text-blue-600 font-bold p-3 text-2xl ">Soft Logic</h1>
        </div>
        <div className="flex gap-10">
            <NavLink to="/" className={({ isActive }) =>isActive? "bg-blue-900 p-2 rounded-4xl text-white": "bg-black p-2 rounded-4xl text-white"}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) =>isActive? "bg-blue-900 p-2 rounded-4xl text-white": "bg-black p-2 rounded-4xl text-white"}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) =>isActive? "bg-blue-900 p-2 rounded-4xl text-white": "bg-black p-2 rounded-4xl text-white"}>Contact</NavLink>
            <NavLink to="/services" className={({ isActive }) =>isActive? "bg-blue-900 p-2 rounded-4xl text-white": "bg-black p-2 rounded-4xl text-white"}>Services</NavLink>
            <button className="text-black bg-white rounded  p-2" onClick={handleClick}>Login</button>
            <button className="text-black bg-white rounded mr-10 p-2" onClick={handleRegister}>Register</button>
        </div>
    </div>
    </>
  )
}

export default Navbar
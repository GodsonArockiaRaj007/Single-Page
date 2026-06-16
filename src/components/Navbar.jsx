import {NavLink } from "react-router-dom"

const Navbar = () => {
 
  return (
    <>
    <div className="flex justify-between bg-purple-950 h-18  p-2 items-center">
        <div className=" w-14 h-14 rounded-4xl">
            <img className="rounded-4xl" src="./download.jpg" alt="" />
        </div>
        <div >
              <h1 className="bg-white rounded-3xl text-blue-600 font-bold p-3 text-2xl ">Soft Logic</h1>
        </div>
        <div className="flex gap-10">
            <NavLink to="/" className={({ isActive }) =>isActive? "bg-blue-900 p-2 rounded-4xl text-white": "bg-black p-2 rounded-4xl text-white"}>Home</NavLink>
             <NavLink to="/tasks" className={({ isActive }) =>isActive? "bg-blue-900 p-2 rounded-4xl text-white": "bg-black p-2 rounded-4xl text-white"}>Tasks</NavLink>
           
        </div>
    </div>
    </>
  )
}

export default Navbar
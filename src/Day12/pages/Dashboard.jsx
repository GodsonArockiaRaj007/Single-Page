import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate=useNavigate()
  const [user] = useState(()=>JSON.parse(localStorage.getItem("Auth"))||{});
  

  return (
    <>
    <div className="bg-purple-800  min-h-screen">
       <button className="inline-block bg-white rounded-3xl text-purple-800 font-bold p-3 m-3" onClick={()=>{localStorage.removeItem("Auth") 
      navigate("/Day12login")}}>Logout</button> <h1 className="font-bold text-5xl text-center text-white">Dashboard</h1>

      <div>
        
      </div>
        <div className="bg-white rounded-2xl p-5 w-fit text-white space-y-3 mx-auto my-15" >
          <h1 className="font-bold text-3xl text-purple-800 text-center">User Details</h1>
          <p className="bg-purple-800 p-3 rounded-3xl w-90"> <span className="text-white font-semibold w-20 inline-block"> Name</span>: {user.name}</p>
           <p className="bg-purple-800 p-3 rounded-3xl w-90 text-white"> <span className="text-white font-semibold w-20 inline-block"> Email</span>: {user.email}</p>
           <p className="bg-purple-800 p-3 rounded-3xl w-90 text-white"> <span className="text-white font-semibold w-20 inline-block"> Password</span>: {user.password}</p>
        </div>
     
    </div>
      
    </>
  );
};

export default Dashboard;
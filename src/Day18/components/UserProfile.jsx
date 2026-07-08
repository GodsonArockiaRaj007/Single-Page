import { useContext } from "react"
import Day18Context from "../../contexts/Day18Context"


const UserProfile = () => {
    const {userProfile}=useContext(Day18Context)
  return (
    <>
    <div className="bg-white p-5 w-70 h-50 rounded-3xl text-purple-800 ">
         <h1 className="text-center font-bold text-3xl ">User Details</h1>
        <p ><span className="font-bold">Name:  </span>{userProfile.name}</p>
        <p ><span className="font-bold">Email:  </span>{userProfile.email}</p>
        <p ><span className="font-bold">Role   :  </span>{userProfile.role}</p>
    </div>
   
    </>
  )
}

export default UserProfile
import { useNavigate } from "react-router-dom"

const Day11 = () => {
    const navigate=useNavigate()
  return (
    <>
    <div className="bg-purple-800 min-h-screen">
       <div className="flex justify-center">
            <h1 className="text-5xl font-bold text-center  text-white  mt-10 ">Day11 Tasks</h1>
        </div>
      <div className="flex flex-col items-center gap-6 mt-10">
        <button className="bg-purple-950 text-white font-bold text-2xl rounded-4xl w-90 p-4 transition duration-100 hover:scale-110 " onClick={()=>navigate('/studentregistration')}>Student Registration Form</button>
        <button className="bg-purple-950 text-white font-bold text-2xl rounded-4xl w-90 p-4     transition duration-100 hover:scale-110 " onClick={()=>navigate('/employeedetails')}>Employee Details Form</button>
        <button className="bg-purple-950 text-white font-bold text-2xl rounded-4xl w-90 p-4     transition duration-100 hover:scale-110 " onClick={()=>navigate('/productmanagement')}>Product Management Form</button>
        <button className="bg-purple-950 text-white font-bold text-2xl rounded-4xl w-90 p-4     transition duration-100 hover:scale-110 " onClick={()=>navigate('/schoolmanagement')}>School management Form</button>
        <button className="bg-purple-950 text-white font-bold text-2xl rounded-4xl w-90 p-4     transition duration-100 hover:scale-110 " onClick={()=>navigate('/userprofile')}>User Profile Form</button>
      </div>
        

    </div>
    </>
  )
}

export default Day11
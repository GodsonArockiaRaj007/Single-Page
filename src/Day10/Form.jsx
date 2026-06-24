import { useState } from "react"

const Form = () => {
    const [userData,setUserData]=useState({userName:"",userAge:"",userCity:""})
    const [allData,setAllData]=useState([])
    const handleData=(e)=>{
        setUserData({...userData,[e.target.name]:[e.target.value]})
    }
    const handleUser=(e)=>{
        e.preventDefault()
        setAllData((prev)=>[...prev,userData])
    }
    const deleteData=(id)=>{
        setAllData(allData.filter((e)=>e !== id))
        
    }
    
  return (
    <>
    <div className="flex justify-center p-5" >   
        <form className="bg-white p-8 rounded-3xl   flex flex-col items-center border ">
            <table className="w-full border-separate border-spacing-y-4">
                <thead>
                    <tr>
                           <td colSpan="2" className="text-center">
                            <h1 className="text-3xl font-bold "> Register Form </h1></td>       
                    </tr>
                </thead>
                <tbody className="w-full">
                    <tr>
                    <td><label htmlFor="name" className=" font-bold text-2xl">Enter Name:</label></td>
                    <td><input className="w-full px-4 py-2 border-2  rounded-xl " type="text" id="name" name="userName" onChange={handleData} /></td>
                </tr>
                 <tr>
                    <td><label htmlFor="age" className=" font-bold text-2xl">Enter Age:</label></td>
                    <td><input className="w-full px-4 py-2 border-2  rounded-xl " type="text" id="age" name="userAge" onChange={handleData}  /></td>
                </tr>
                 <tr>
                    <td><label htmlFor="city" className=" font-bold text-2xl">Enter City:</label></td>
                    <td><input className="w-full px-4 py-2 border-2  rounded-xl " type="text" id="city" name="userCity" onChange={handleData}  /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button  className="bg-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-purple-700 transition duration-300 shadow-md" onClick={handleUser}>Register</button></td>
                </tr>
                </tbody>
                
            </table>
        </form>
    </div>
   <div className="mt-6 flex flex-wrap gap-4 justify-center">
  {allData &&
    allData.map((e, i) => (
      <divk ey={i}className="bg-white p-5 rounded-2xl  border  w-70 ">
        <p className="text-lg font-semibold ">
          Name: <span className="font-normal">{e.userName}</span>
        </p>

        <p className="text-lg font-semibold  mt-2">
          Age: <span className="font-normal">{e.userAge}</span>
        </p>

        <p className="text-lg font-semibold  mt-2">
          City: <span className="font-normal">{e.userCity}</span>
        </p>

        <div className="flex gap-3 mt-4 justify-center">
          <button  onClick={() => deleteData(e)}className="bg-red-500 text-white font-semibold px-4 py-2 rounded-xl ">Delete</button> 
        </div>
      </divk>
    ))}
</div>
    </>
  )
}

export default Form
import { useState } from "react"
// Name, Email, Mobile, Address
const UserProfile  = () => {
    const [user,setUser]=useState({name:"",email:"",mobile:"",address:""})
    const [data,setData]=useState([])
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})                                                                                                                                                                                                                                                  
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(user.name==""||user.email==""||user.mobile==""||user.address=="")
        {
            alert("Enter all details before submitting")
            return
        }
            setData((prev)=>[...prev,user])
            setUser({name:"",email:"",mobile:"",address:""})
    }
  return (
    <>
    <div className="bg-purple-800 min-h-screen">

        <div className="flex justify-center p-10">
            <form className="bg-white p-10 rounded-2xl w-fit">
            <h1 className="font-bold text-3xl text-center text-purple-600 ">User Profile Form</h1>
            <label htmlFor="name" className="w-40 inline-block font-semibold">Enter School Name</label>:
            <input type="text" id="name" name="name" className="border-2 rounded-2xl p-1 m-2" onChange={handleChange} value={user.name} /><br />
            <label htmlFor="age" className="w-40 inline-block font-semibold">Enter Email</label>:
            <input type="text" id="age" name="email" className="border-2 rounded-2xl p-1 m-2" onChange={handleChange} value={user.email} /><br />
            <label htmlFor="course" className="w-40 inline-block font-semibold">Enter Mobile</label>:
            <input type="text" id="course" name="mobile" className="border-2 rounded-2xl p-1 m-2" onChange={handleChange} value={user.mobile} /><br />
            <label htmlFor="brand" className="w-40 inline-block font-semibold">Enter Address</label>:
            <input type="text" id="brand" name="address" className="border-2 rounded-2xl p-1 m-2" onChange={handleChange} value={user.address} /><br />
            <div className="flex justify-center">
            <button className="bg-purple-600 rounded-2xl p-2 text-white font-bold" onClick={handleSubmit}>Submit</button>

            </div>
        </form>
        </div>
        
        <div className="flex gap-10 justify-center flex-wrap">
             {data &&
                data.map((e,i)=>(
                    <div key={i} className="bg-white rounded-2xl p-5 w-fit text-purple-800 font-semibold ">
                        <h1 className="text-2xl font-bold text-white bg-purple-800 p-2 w-fit rounded-2xl mx-auto mb-2">User{i+1}</h1>
                        <div className="flex flex-col justify-center mx-15 space-y-1 ">
                            <p><span className="font-bold w-25 inline-block ">User Name</span>: {e.name}</p>
                        <p><span className="font-bold w-25 inline-block">Email</span>: {e.email}</p>
                        <p><span className="font-bold w-25 inline-block">Mobile</span>: {e.mobile}</p>
                        <p><span className="font-bold w-25 inline-block">Address</span>: {e.address}</p>

                        </div>
                        

                    </div>
                ))
        }
        </div>
       

    </div>
    </>
  )
}

export default UserProfile







// Name, Email, Mobile, Address
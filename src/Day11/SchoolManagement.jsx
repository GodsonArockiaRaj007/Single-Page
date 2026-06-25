import { useState } from "react"
// School Name, Principal Name, City, Total Students
const SchoolManagement  = () => {
    const [school,setSchool]=useState({name:"",principal:"",city:"",students:""})
    const [data,setData]=useState([])
    const handleChange=(e)=>{
        setSchool({...school,[e.target.name]:e.target.value})                                                                                                                                                                                                                                                  
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(school.name==""||school.principal==""||school.city==""||school.students=="")
        {
            alert("Enter all details before submitting")
            return
        }
            setData((prev)=>[...prev,school])
            setSchool({name:"",principal:"",city:"",students:""})
    }
  return (
    <>
    <div className="bg-purple-800 min-h-screen">

        <div className="flex justify-center p-10">
            <form className="bg-white p-10 rounded-2xl w-fit">
            <h1 className="font-bold text-3xl text-center text-purple-600 ">School Management Form</h1>
            <label htmlFor="name" className="w-40 inline-block font-semibold">Enter School Name</label>:
            <input type="text" id="name" name="name" className="border-2 rounded-2xl p-1 m-2" onChange={handleChange} value={school.name} /><br />
            <label htmlFor="age" className="w-40 inline-block font-semibold">Enter Principal Name</label>:
            <input type="text" id="age" name="principal" className="border-2 rounded-2xl p-1 m-2" onChange={handleChange} value={school.principal} /><br />
            <label htmlFor="course" className="w-40 inline-block font-semibold">Enter City</label>:
            <input type="text" id="course" name="city" className="border-2 rounded-2xl p-1 m-2" onChange={handleChange} value={school.city} /><br />
            <label htmlFor="brand" className="w-40 inline-block font-semibold">Enter no. of Students</label>:
            <input type="text" id="brand" name="students" className="border-2 rounded-2xl p-1 m-2" onChange={handleChange} value={school.students} /><br />
            <div className="flex justify-center">
            <button className="bg-purple-600 rounded-2xl p-2 text-white font-bold" onClick={handleSubmit}>Submit</button>

            </div>
        </form>
        </div>
        
        <div className="flex gap-10 justify-center flex-wrap">
             {data &&
                data.map((e,i)=>(
                    <div key={i} className="bg-white rounded-2xl p-5 w-90 text-purple-800 font-semibold ">
                        <h1 className="text-2xl font-bold text-white bg-purple-800 p-2 w-fit rounded-2xl mx-auto mb-2">School{i+1}</h1>
                        <div className="flex flex-col justify-center mx-15 space-y-1">
                            <p><span className="font-bold w-30 inline-block">School Name</span>: {e.name}</p>
                        <p><span className="font-bold w-30 inline-block">Principal Name</span>: {e.principal}</p>
                        <p><span className="font-bold w-30 inline-block">City</span>: {e.city}</p>
                        <p><span className="font-bold w-30 inline-block">Total Students</span>: {e.students}</p>

                        </div>
                        

                    </div>
                ))
        }
        </div>
       

    </div>
    </>
  )
}

export default SchoolManagement






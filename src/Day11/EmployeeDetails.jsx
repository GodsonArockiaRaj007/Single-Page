import { useState } from "react"

const EmployeeDetails  = () => {
    const [employee,setEmployee]=useState({name:"",id:"",department:"",salary:""})
    const [data,setData]=useState([])
    const handleChange=(e)=>{
        setEmployee({...employee,[e.target.name]:e.target.value})                                                                                                                                                                                                                                                  
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(employee.name==""||employee.id==""||employee.department==""||employee.salary=="")
        {
            alert("Enter all details before submitting")
            return
        }
            setData((prev)=>[...prev,employee])
            setEmployee({name:"",id:"",department:"",salary:""})
    }
  return (
    <>
    <div className="bg-purple-800 min-h-screen">

        <div className="flex justify-center p-10">
            <form className="bg-white p-10 rounded-2xl w-fit">
            <h1 className="font-bold text-3xl text-center text-purple-600 ">Employee Details Form</h1>
            <label htmlFor="name" className="w-35 inline-block font-semibold">Enter Name</label>:
            <input type="text" id="name" name="name" className="border-2 rounded-2xl p-1 m-2" onChange={handleChange} value={employee.name} /><br />
            <label htmlFor="age" className="w-35 inline-block font-semibold">Enter ID</label>:
            <input type="text" id="age" name="id" className="border-2 rounded-2xl p-1 m-2" onChange={handleChange} value={employee.id} /><br />
            <label htmlFor="course" className="w-35 inline-block font-semibold">Enter Department</label>:
            <input type="text" id="course" name="department" className="border-2 rounded-2xl p-1 m-2" onChange={handleChange} value={employee.department} /><br />
            <label htmlFor="city" className="w-35 inline-block font-semibold">Enter Salary</label>:
            <input type="text" id="city" name="salary" className="border-2 rounded-2xl p-1 m-2" onChange={handleChange} value={employee.salary} /><br />
            <div className="flex justify-center">
            <button className="bg-purple-600 rounded-2xl p-2 text-white font-bold" onClick={handleSubmit}>Submit</button>

            </div>
        </form>
        </div>
        
        <div className="flex gap-10 justify-center flex-wrap">
             {data &&
                data.map((e,i)=>(
                    <div key={i} className="bg-white rounded-2xl p-5 w-80 text-purple-800 font-semibold ">
                        <h1 className="text-2xl font-bold text-white bg-purple-800 p-2 w-fit rounded-2xl mx-auto mb-2">Employee{i+1}</h1>
                        <div className="flex flex-col justify-center mx-15">
                            <p><span className="font-bold w-23 inline-block">Name</span>: {e.name}</p>
                        <p><span className="font-bold w-23 inline-block">ID</span>: {e.id}</p>
                        <p><span className="font-bold w-23 inline-block">Department</span>: {e.department}</p>
                        <p><span className="font-bold w-23 inline-block">Salary</span>: {e.salary}</p>

                        </div>
                        

                    </div>
                ))
        }
        </div>
       

    </div>
    </>
  )
}

export default EmployeeDetails 

//  Employee Name, Employee ID, Department, Salary
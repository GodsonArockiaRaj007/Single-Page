import { useState } from "react"

const StudentRegistration  = () => {
    const [student,setStudent]=useState({name:"",age:"",course:"",city:""})
    const [data,setData]=useState([])
    const handleChange=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value})                                                                                                                                                                                                                                                  
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
         if(student.name==""||student.age==""||student.course==""||student.city=="")
        {
            alert("Enter all details before submitting")
            return
        }
            setData((prev)=>[...prev,student])
            setStudent({name:"",age:"",course:"",city:""})
    }
  return (
    <>
    <div className="bg-purple-800 min-h-screen">

        <div className="flex justify-center p-10">
            <form className="bg-white p-10 rounded-2xl w-fit">
            <h1 className="font-bold text-3xl text-center text-purple-600 
            ">Student Register Form</h1>
            <label htmlFor="name" className="w-25 inline-block font-semibold">Enter Name:</label>
            <input type="text" id="name" name="name" className="border-2 rounded-2xl p-1 m-2" onChange={handleChange} value={student.name} /><br />
            <label htmlFor="age" className="w-25 inline-block font-semibold">Enter Age:</label>
            <input type="text" id="age" name="age" className="border-2 rounded-2xl p-1 m-2" onChange={handleChange} value={student.age} /><br />
            <label htmlFor="course" className="w-25 inline-block font-semibold">Enter Course:</label>
            <input type="text" id="course" name="course" className="border-2 rounded-2xl p-1 m-2" onChange={handleChange} value={student.course} /><br />
            <label htmlFor="city" className="w-25 inline-block font-semibold">Enter City:</label>
            <input type="text" id="city" name="city" className="border-2 rounded-2xl p-1 m-2" onChange={handleChange} value={student.city} /><br />
            <div className="flex justify-center">
            <button className="bg-purple-600 rounded-2xl p-2 text-white font-bold" onClick={handleSubmit}>Submit</button>

            </div>
        </form>
        </div>
        
        <div className="flex gap-10 justify-center flex-wrap">
             {data &&
                data.map((e,i)=>(
                    <div key={i} className="bg-white rounded-2xl p-5 w-70 text-purple-800 font-semibold ">
                        <h1 className="text-2xl font-bold text-white bg-purple-800 p-2 w-fit rounded-2xl mx-auto mb-2">Student{i+1}</h1>
                        <p><span className="font-bold w-15 inline-block">Name</span>: {e.name}</p>
                        <p><span className="font-bold w-15 inline-block">Age</span>: {e.age}</p>
                        <p><span className="font-bold w-15 inline-block">Course</span>: {e.course}</p>
                        <p><span className="font-bold w-15 inline-block">City</span>: {e.city}</p>

                    </div>
                ))
        }
        </div>
       

    </div>
    </>
  )
}

export default StudentRegistration 

// Name, Age, Course, City 
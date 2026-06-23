import { useState,useEffect } from "react"

const StudentList = ({students}) => {
    const [loading,setLoading]=useState(false)
  return (
    <>
    <div>
        {useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, [])}
        {loading? 
            <div>
                <h1 className="font-bold">Students List</h1>
                {students.map((e,i)=>(
                    <p key={i}>{i+1}.{e}</p>
                ))}
            </div>   : <h1>Loading...</h1> 
    }
    </div>
    </>
  )
}

export default StudentList
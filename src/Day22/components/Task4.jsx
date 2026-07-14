import { useMemo, useState } from "react"

const totalSalary=(employees)=>{
    // console.log("Salary");
    
    let salary=0
    for (let employee of employees)
    {
        salary+=employee.salary
    }
    return salary
}

const Task4 = () => {
    const [theme,setTheme]=useState(false)

        // console.log("Components");

    
const employees=[
        {id:100,name:"Godson",age:22,salary:500000},
        {id:101,name:"Joel",age:21,salary:600000},
        {id:102,name:"Darvin",age:21,salary:700000}
    ]

    const result=useMemo(()=>{

        const salary=totalSalary(employees)
        return salary
    },[])

    const handleClick=()=>{
        // console.log("Theme");
        setTheme(!theme)
    }

  return (
    <>
    <p>Total Salary:{result}</p>

    <div className={theme?"bg-black text-white":" bg-white text-black"}>
        <p>Box</p>
      </div>
      <button onClick={handleClick}>{theme?"Dark":"Light"}</button>
    </>
  )
}

export default Task4
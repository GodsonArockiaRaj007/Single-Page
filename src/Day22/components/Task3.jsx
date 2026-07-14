import { useMemo, useState } from "react"


const countPlaced=(students)=>{

    // console.log("Placed");
    
    let count=0;
        for (let student of students)
    {
        if(student.placed==true){
            count+=1
        }
    }
    return count

}
const countUnPlaced=(students)=>{

    // console.log("UnPlaced");
    
    let count=0;
        for (let student of students)
    {
        if(student.placed==false){
            count+=1
        }
    }
    return count

}

const Task3 = () => {


    const [theme,setTheme]=useState(false)

    // console.log("Components");
    

    const students=[
        {id:100,name:"Godson",age:22,placed:false},
        {id:101,name:"Joel",age:21,placed:false},
        {id:102,name:"Darvin",age:21,placed:true}
    ]

    const selected=useMemo(()=>{

      const result=countPlaced(students)   
      return result     

    },[])
     const unselected=useMemo(()=>{

      const result=countUnPlaced(students)   
      return result     

    },[])
    
      const handleClick=()=>{
        // console.log("Theme");
        setTheme(!theme)
    }

    const total=students.length

    
  return (
    <>

    <p>Total Students:{total}</p>
    <p>Placed:{selected}</p>
    <p>UnPlaced:{unselected}</p>


    <div className={theme?"bg-black text-white":" bg-white text-black"}>
        <p>Box</p>
      </div>
      <button className="border-2 w-fit p-2 rounded-2xl" onClick={handleClick}>{theme?"Dark":"Light"}</button>
    
    
    </>
  )
}

export default Task3
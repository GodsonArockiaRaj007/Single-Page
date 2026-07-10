import { useState } from "react"


const useLocalStorage = (name) => {

    const [student,setStudent]=useState("")
    const [display,setDisplay]=useState("")
    const getName=()=>{

        const local=JSON.parse(localStorage.getItem(name))
        setDisplay(local)
    }

     
    const setName=(value)=>{
        setStudent(value)
        localStorage.setItem(name,JSON.stringify(value))
    }


  return{student,getName,setName,setStudent,display}
}

export default useLocalStorage
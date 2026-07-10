import { useState } from "react"


const useToggle = () => {
    const[toggle,setToggle]=useState(false)
    const handleClick=(e)=>{
        e.preventDefault()
        setToggle(!toggle)

    }
  return {toggle,handleClick}
}

export default useToggle
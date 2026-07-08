import { useRef } from "react"


const Task1 = () => {
    const inputRef=useRef()
    const displayRef=useRef()
    const handleChange=()=>{
        displayRef.current.innerHTML=inputRef.current.value
    }

  return (
    <>
    <div>
        <input type="text" ref={inputRef} onChange={handleChange}  />
        <p ref={displayRef}></p>
    </div>
    </>
  )
}

export default Task1
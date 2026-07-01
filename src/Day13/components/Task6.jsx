import { useEffect, useState } from "react"

const Task6 = () => {

    const [time,setTime]=useState(new Date())

    useEffect(()=>{
        const timer=setInterval(()=>{
            setTime(new Date())
        },1000)

        return ()=>clearInterval(timer)
    },[])

  return (
    <>
    <h1 className="text-2xl font-bold text-center mb-5">Task-6 </h1>
        <h1 className="text-2xl font-bold text-center mb-5">Digital Clock</h1>

        <div className=" text-3xl font-bold rounded-2xl p-5 text-center">
            {time.toLocaleTimeString("en-US",{hour12:true})}
        </div>
    </>
  )
}

export default Task6
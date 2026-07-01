import { useEffect, useState } from "react"

const Task5 = () => {

    const [count,setCount]=useState([])

    useEffect(()=>{

        const timer=setInterval(()=>{
            setCount(prev=>[...prev,prev.length+1])
        },1000)

        return ()=>clearInterval(timer)

    },[])

  return (
    <>
        <h1 className="text-2xl font-bold mb-5">Task 5</h1>

        <div className="flex flex-wrap gap-3">
    {
        count.map((e,i)=>(
            <div key={i} >
                {e}
            </div>
        ))
    }
</div>
    </>
  )
}

export default Task5
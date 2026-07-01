import { useEffect } from "react"

const Task1 = () => {

    useEffect(()=>{
        console.log("Component Loaded")
    },[])

  return (
    <>
        <h1 className="text-2xl font-bold mb-5">Task 1</h1>
        <p>Open Console</p>
        <p>Component Loaded will display only once</p>
    </>
  )
}

export default Task1
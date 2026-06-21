import { Link } from "react-router-dom"
const Day7 = () => {
  return (
    <>
    <div className="bg-purple-800 min-h-screen">
        <div className="flex justify-center flex-col items-center gap-10">
        <h1 className="font-bold text-3xl">Day7 - This task contains the components that use usestate to handle array,object,array of object</h1>
            <Link className="bg-purple-950 text-white font-bold text-2xl rounded-4xl w-fit p-4     transition duration-100 hover:scale-110" to='/array'>Array</Link>
            <Link className="bg-purple-950 text-white font-bold text-2xl rounded-4xl w-fit p-4     transition duration-100 hover:scale-110" to='/Object'>Object</Link>
            <Link className="bg-purple-950 text-white font-bold text-2xl rounded-4xl w-fit p-4     transition duration-100 hover:scale-110" to='/arrayofobject'>Array of Object</Link>
    </div>
    </div>
    
             


    </>
  )
}

export default Day7
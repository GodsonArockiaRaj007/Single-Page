import { Link } from "react-router-dom"
const Tasks = () => {
  return (
    <>
    <div className="bg-purple-800 min-h-screen">
        <div className="flex justify-center">
            <h1 className="text-5xl font-bold text-center bg-purple-950 border-purple-950 border-3 shadow-2xs shadow-black text-white w-fit p-5 rounded-3xl mt-10 ">Tasks</h1>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center mt-10 ">
            
              <Link className="bg-purple-950  font-bold text-2xl rounded-4xl w-fit p-4 text-white  transition duration-100 hover:scale-110" to='/Day1'>Day1</Link>
            <Link className="bg-purple-950 text-white font-bold text-2xl rounded-4xl w-fit p-4     transition duration-100 hover:scale-110 " to='https://routing-seven-pied.vercel.app/'>Day2</Link>
            <Link className="bg-purple-950 text-white font-bold text-2xl rounded-4xl w-fit p-4     transition duration-100 hover:scale-110 " to='/Day3'>Day3</Link>
            <Link className="bg-purple-950 text-white font-bold text-2xl rounded-4xl w-fit p-4     transition duration-100 hover:scale-110" to='/Day4'>Day4</Link>
            <Link className="bg-purple-950 text-white font-bold text-2xl rounded-4xl w-fit p-4     transition duration-100 hover:scale-110" to='/Day5'>Day5</Link>
            <Link className="bg-purple-950 text-white font-bold text-2xl rounded-4xl w-fit p-4     transition duration-100 hover:scale-110" to='/Day6'>Day6</Link>

        </div>
    </div>
    </>
  )
}

export default Tasks
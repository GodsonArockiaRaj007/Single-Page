import { Link } from "react-router-dom"
const Home = () => {
  return (
    <>
    <div className="bg-blue-400 h-screen">
        <h1 className="text-5xl font-bold text-center">Tasks</h1>
        <div className="flex items-center justify-center mt-10">
              <Link className="bg-green-600 border-2 font-bold text-2xl rounded-4xl w-fit p-4 " to='https://multi-components-sigma.vercel.app/'>Day1</Link>
            <Link className="bg-green-600 border-2 font-bold text-2xl rounded-4xl w-fit p-4 " to='https://routing-seven-pied.vercel.app/'>Day2</Link>
            <Link className="bg-green-600 border-2 font-bold text-2xl rounded-4xl w-fit p-4 " to='/Day3'>Day3</Link>
            <Link className="bg-green-600 border-2 font-bold text-2xl rounded-4xl w-fit p-4 " to='/Day4'>Day4</Link>
        </div>
    </div>
    </>
  )
}

export default Home
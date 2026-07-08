import { useContext } from "react"
import Day18Context from "../../contexts/Day18Context"


const StudentTable = () => {
    const {students}=useContext(Day18Context)
  return (
    <>
    <div className="bg-white p-5 w-60 rounded-3xl h-40 ">
         <table >
        <thead>
            <tr className="text-purple-950">
                <th className="w-20">ID</th>
                <th className="w-20">Name</th>
                <th className="w-20">Course</th>
            </tr>
        </thead>
        <tbody>
            {students.map((e,i)=>(
                <tr  className="text-purple-800 text-center" key={i}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.course}</td>
                </tr>
            ))}
        </tbody>
    </table>

    </div>
   
    </>
  )
}

export default StudentTable
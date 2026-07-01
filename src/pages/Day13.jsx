import Task1 from "../Day13/components/Task1"
import Task2 from "../Day13/components/Task2"
import Task3 from "../Day13/components/Task3"
import Task4 from "../Day13/components/Task4"
import Task5 from "../Day13/components/Task5"
import Task6 from "../Day13/components/Task6"

const Day13 = () => {
  return (
    <div className="bg-purple-800 min-h-screen p-10">

        <h1 className="text-4xl font-bold text-center text-white mb-10">
            useEffect Tasks
        </h1>

        <div className="grid grid-cols-3 gap-8">

            <div className="bg-white p-5 rounded-3xl">
                <Task1/>
            </div>

            <div className="bg-white p-5 rounded-3xl">
                <Task2/>
            </div>

            <div className="bg-white p-5 rounded-3xl">
                <Task3/>
            </div>

            <div className="bg-white p-5 rounded-3xl ">
                <Task4/>
            </div>

            <div className="bg-white p-5 rounded-3xl">
                <Task5/>
            </div>

            <div className="bg-white p-5 rounded-3xl">
                <Task6/>
            </div>

        </div>

    </div>
  )
}

export default Day13
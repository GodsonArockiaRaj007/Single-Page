import SchoolCard from "./SchoolCard"
import SchoolStats from "./SchoolStats"
const School = ({schools}) => {
  return (
    <>
    <div className="bg-blue-300 ">
        <div>
             <div className="" >
            <h1 className="text-center font-bold text-3xl">Task1</h1>
            <h1 className="text-center font-bold text-3xl">School Management</h1>
            <div className="grid grid-cols-3 ">
                {schools.map((school,i)=>(
                    <div key={i} className="bg-amber-400 shadow-2xl border-2 p-3 rounded-3xl w-100 m-5 transition duration-300 hover:scale-105">
                    
                        <p><span className="font-bold text-blue-900">{school.schoolName}</span></p>
                        <p><span className="font-bold text-blue-900">{school.city}</span></p>
                        <p><span className="font-bold">Principal :</span>{school.principal.name}</p>
                        <p><span className="font-bold">Students:</span>{school.teachers}</p>
                        <p><span className="font-bold">Teachers:</span>{school.students}</p>
                        
                    </div>

                ))}
            </div>
        </div>

        </div>
        <div>
             <div className="" >
            <h1 className="text-center font-bold text-3xl">Task2</h1>
            <div className="grid grid-cols-3 ">
                {schools.map((school,i)=>(
                    <div key={i} className="bg-purple-500 shadow-2xl border-2 p-3 rounded-3xl w-100 m-5 transition duration-300 hover:scale-105">
                    
                        <p><span className="font-bold text-blue-900">{school.schoolName}</span></p>
                        {school.courses.map((e,i)=>(
                            <div key={i}>
                                <p>{i+1}.{e}</p>
                            </div>
                        ))}
                        
                    </div>

                ))}
            </div>
        </div>

        </div>
        <div>
            <h1 className="text-center font-bold text-3xl mb-4">Task3</h1>
            
                <div className="flex justify-center">
                    <div className="bg-red-400 w-fit border-2 p-4 rounded-3xl ">
                <h1 className="font-bold text-2xl mb-4">School Stats</h1>
                    <SchoolStats schools={schools} />
                </div>
                
                
            </div>
            <div>
                <h1 className="font-bold text-2xl mb-4 text-center mt-10">School Card</h1>
                <SchoolCard schools={schools}/>
            </div>
        </div>


    </div>
    </>
  )
}

export default School
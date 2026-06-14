
const Student = ({name,age,course,city}) => {
  return (
    <>
    <div className="flex justify-center items-center mb-5 ">

      <div className="bg-amber-50 p-5 w-70 rounded-3xl  text-justify">
        <h1 className="font-bold text-3xl mb-5 text-center">Task-1</h1>
        <h1 className="font-bold text-2xl">Student Detail:</h1>
        <p>Name:{name}</p>
        <p>Age:{age}</p>
        <p>Course:{course}</p>
        <p>City:{city}</p>
      </div>
        
    </div>
    </>
  ) 
}

export default Student


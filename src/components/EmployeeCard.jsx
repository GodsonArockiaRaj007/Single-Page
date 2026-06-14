
const EmployeeCard = (props) => {
  return (
    <>
    <div className="flex justify-center items-center ">
      <div className="bg-amber-50 p-5 w-70 rounded-3xl  text-justify">
        <h1 className="font-bold text-3xl mb-5 text-center ">Task-2</h1>
        <h1 className="font-bold text-2xl" >Employee Detail:</h1>
        <p>Name:{props.name}</p>
        <p>ID:{props.id}</p>
        <p>Department:{props.department}</p>
        <p>Salary:{props.salary}</p>
        <p>Experience:{props.experience}</p>
      </div>
      
    </div>
    </>
  )
}

export default EmployeeCard



const Employee = ({employee}) => {
   const{company,name,role,salary}=employee
  return (
    <>
    <div className="flex justify-center items-center mt-5 ">
      <div className="bg-amber-50 p-5 w-70 rounded-3xl  text-justify">
        <h1 className="font-bold text-3xl mb-5 text-center ">Bonus Task-1</h1>
        <h1 className="font-bold text-2xl">Company Details:</h1>
        <p>Company:{company}</p>
        <p>Name:{name}</p>
        <p>Role:{role}</p>
        <p>Salary:{salary}</p>
      </div>
        
    </div>
    </>
  )
}

export default Employee
import useLocalStorage from "../hooks/useLocalStorage"


const LocalStorage = () => {
    const {student,setStudent,getName,setName,display}=useLocalStorage("studentName")
  return (
    <>

    <div className="bg-white  p-5 rounded-3xl">
        <label htmlFor="">Enter Student Name : </label>
        <input className=" border-2 rounded-3xl p-2" type="text" onChange={(e)=>setStudent(e.target.value) }  value={student}  />
    <button className="bg-purple-950 text-white text-xl p-2 rounded-3xl m-3" onClick={()=>setName(student)}>Save name</button>

    <button className="bg-purple-950 text-white text-xl p-2 rounded-3xl m-3"  onClick={getName}>Display Name</button>
    <p>{display}</p>

    </div>
    
    
    </>
  )
}

export default LocalStorage
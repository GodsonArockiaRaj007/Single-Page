
const User = ({user}) => {
    const {name,email,phone,city}=user
  return (
    <>
     <div className="flex justify-center items-center mt-5 ">
      <div className="bg-amber-50 p-5 w-70 rounded-3xl  text-justify">
        <h1 className="font-bold text-3xl mb-5 text-center ">Task-5</h1>
        <h1 className="font-bold text-2xl">User Details:</h1>
        <p>Name:{name}</p>
        <p>Email:{email}</p>
        <p>Phone:{phone}</p>
        <p>City:{city}</p>
      </div>
       
    </div>
    </>
  )
}

export default User
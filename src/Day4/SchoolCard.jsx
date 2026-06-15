
const SchoolCard = ({schools}) => {
  return (
    <>
    <div className=" grid grid-cols-3" >
        {schools.map((e,i)=>(
            <div className=" bg-green-600 p-4 border-2 rounded-2xl w-100 m-5 " key={i}>
                <p><span className="font-bold ">School Name:</span>{e.schoolName}</p>
                <p><span className="font-bold">Principal Name:</span>{e.principal.name}</p>
                <p> <span className="font-bold">City:</span>{e.city}</p>
                <p><span className="font-bold">Sports Available:</span></p>
                {e.sports.map((e,i)=>(
                    <p key={i}>{i+1}.{e}</p>
                ))}
            </div>
        ))}
    </div>
    </>
  )
}

export default SchoolCard

const SchoolStats = ({schools}) => {
    const school=schools.length;
    let teacher=0;
    let student=0;
    for(let school of schools)
    {
        teacher+=school.teachers
    }
    for(let school of schools)
    {
        student+=school.students
    }
  return (

    <>
    <div>
        <p><span className="font-bold">Total Schools:</span>{school}</p>
        <p><span className="font-bold">Total Teachers:</span>{teacher}</p>
        <p><span className="font-bold">Total Students:</span>{student}</p>
      
    </div>
    </>
  )
}

export default SchoolStats

const Skills = ({skills}) => {
  return (
    <>
    <div className="flex justify-center items-center mt-5 ">
      <div className="bg-amber-50 p-5 w-70 rounded-3xl  text-justify">
        <h1  className="font-bold text-3xl mb-5 text-center ">Task-4</h1>
        <h1 className="font-bold text-2xl">Skills:</h1>
        <div className="p-5">
            {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
        ))}
        </div>
         
      </div>
        
    </div>
    </>
  )
}

export default Skills
const GrandChild = ({ name, course }) => {
  return (
    <>
    <div className="flex justify-center items-center mt-5 ">
      <div className="bg-amber-50 p-5 w-70 rounded-3xl  text-justify">
        <h1 className="font-bold text-3xl mb-5 text-center ">Props Drilling Task</h1>
        <h1 className="font-bold text-2xl">GrandChild </h1>
        <p>Name: {name}</p>
        <p>Course: {course}</p>
      </div>
    
    </div>   
    </>
  );
};

export default GrandChild;
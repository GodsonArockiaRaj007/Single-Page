const CourseCard = ({ courseName, duration, fees }) => {
  return (
    <div className="flex justify-center items-center mt-5 ">
      <div className="bg-amber-50 p-5 w-70 rounded-3xl  text-justify">
        <h1  className="font-bold text-3xl mb-5 text-center ">Interview-Oriented Task</h1>
        <h1 className="font-bold text-2xl">Course Details:</h1>
        <p> Course Name:{courseName}</p>
        <p>Duration: {duration}</p>
        <p>Fees: ₹{fees}</p>
      </div>
        
    </div>
  );
};

export default CourseCard;
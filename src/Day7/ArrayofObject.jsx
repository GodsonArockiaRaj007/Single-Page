import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ArrayofObject() {
  const [students, setStudents] = useState([]);

  const toggleStudents = () => {
    if (students.length === 0) {
      setStudents([
        { id: 1, name: "Godson", age: 21 },
        { id: 2, name: "Joel", age: 21 },
        { id: 3, name: "Darvin", age: 21 },
      ]);
    } else {
      setStudents([]);
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
    <div className="bg-purple-800 min-h-screen">
         <button onClick={handleClick} className="bg-blue-700 flex gap-5 items-center p-3 rounded-3xl font-bold">
        <img src="./back.png" className="w-10 h-10 rounded-full"alt="Back"/>
        Back
      </button>

      <div className="flex justify-center mt-10">
        <div className=" p-5 rounded-3xl  w-fit">
          <div className="flex flex-col items-center gap-4">
      <h1 className="text-center font-bold text-3xl mb-10">Click on the button to display the hidden Array of Object</h1>

            <button className="bg-amber-500 p-3 rounded-3xl border-2" onClick={toggleStudents}>
              {students.length === 0
                ? "Show Students"
                : "Hide Students"}
            </button>

            {students.length > 0 && (
              <div className="flex flex-wrap justify-center gap-4">
                {students.map((student) => (
                  <div
                    key={student.id}
                    className="bg-amber-500  p-5 rounded-3xl border-2 w-64"
                  >
                    <h3 className="font-bold text-xl mb-2">
                      Student {student.id}
                    </h3>

                    <p className="text-lg">
                      <span className="font-semibold">Name:</span>{" "}
                      {student.name}
                    </p>

                    <p className="text-lg">
                      <span className="font-semibold">Age:</span>{" "}
                      {student.age}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
     
    </>
  );
}

export default ArrayofObject;
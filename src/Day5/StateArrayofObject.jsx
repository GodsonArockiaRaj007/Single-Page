import { useState } from "react";

function StateArrayofObject() {
  const [students, setStudents] = useState([]);

  const showStudents = () => {
    setStudents([
      { id: 1, name: "Godsom", age: 21 },
      { id: 2, name: "Joel", age: 21 },
      { id: 3, name: "Darvin", age: 21 },
    ]);
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white p-5 rounded-3xl mt-10 border-2 w-fit">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-bold text-3xl text-center">
            Task-7
          </h1>

          <button
            className="bg-amber-500 p-3 rounded-3xl border-2"
            onClick={showStudents}
          >
            Show Students
          </button>

          {students.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4">
              {students.map((student) => (
                <div
                  key={student.id}
                  className="bg-blue-400 p-5 rounded-3xl border-2 w-64"
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
  );
}

export default StateArrayofObject;
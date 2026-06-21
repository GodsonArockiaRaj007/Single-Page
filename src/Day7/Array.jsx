import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Array() {
  const [arr, setarr] = useState([]);

  const toggleArray = () => {
    if (arr.length === 0) {
      setarr([
        "HTML5",
        "CSS3",
        "JS ES6+",
        "React",
        "SQL"
      ]);
    } else {
      setarr([]);
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="bg-purple-800 min-h-screen">
      <button onClick={handleClick} className="bg-blue-700 flex gap-5 items-center p-3 rounded-3xl font-bold">
        <img src="./back.png" className="w-10 h-10 rounded-4xl" alt="" />Back
      </button>

      <h1 className="text-center font-bold text-3xl">Click on the button to display the hidden Array</h1>

      <div className="flex justify-center mt-10">
        <div className="flex flex-col items-center gap-4">
          <button className="bg-amber-500 p-3 rounded-3xl border-2"onClick={toggleArray}>
            {arr.length === 0 ? "Show Array" : "Hide Array"}
          </button>

          {arr.length > 0 && (
            <div className="bg-amber-500 p-5 rounded-3xl">
              <ul>
                {arr.map((e, i) => (
                  <li key={i}>{i+1}. {e}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Array;
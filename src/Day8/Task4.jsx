import { useState } from "react";

const Task4 = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Email must contain @ symbol");
    } else {
      setError("");
      
    }
  };

  return (
    <div>
      <div className="bg-white rounded-2xl p-5 flex flex-col gap-5 w-70">
        <h1 className="font-bold text-3xl">Task4</h1>

        <div>
          <label htmlFor="email">Enter Email:</label>
          <input type="email" id="email" className="border-2 rounded" value={email} onChange={handleChange} />

          <p>Email: {email}</p>

          <button className="bg-violet-500 text-white px-4 py-2 rounded mt-2" onClick={handleSubmit}>
            Submit
          </button>

          {error && (
            <p className="text-red-500 mt-2">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task4;
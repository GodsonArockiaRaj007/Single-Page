import { useState } from "react";

const Task5 = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setPhone(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length!=10) {
      setError("Phone number must contain 10 digits");
    } else {
      setError("");
      
    }
  };

  return (
    <div>
      <div className="bg-white rounded-2xl p-5 flex flex-col gap-5 w-70">
        <h1 className="font-bold text-3xl">Task5</h1>

        <div>
          <label htmlFor="phone">Enter Phone Number:</label>
          <input type="number" id="phone" className="border-2 rounded" value={phone} onChange={handleChange} />

          <p>Phone: {phone}</p>

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

export default Task5;
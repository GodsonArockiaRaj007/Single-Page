import { useState } from "react";

const Task15 = () => {
  const [balance, setBalance] = useState(10000);

  const handleDeposit = () => {
    setBalance(balance + 1000);
  };

  const handleWithdraw = () => {
    if (balance > 0) {
      setBalance(balance - 1000);
    }
    else{
        alert("Insuffecient Balance")
    }
  };

  return (
    <div className="bg-stone-100 w-80 p-6 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-4"> Task-15</h2>
      <h3 className="text-2xl font-semibold mb-4"> Bank Balance </h3>
      <p className="text-lg mb-4"> Balance: ₹{balance}</p>

      <div className="flex gap-3">
        <button onClick={handleDeposit} className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-3xl" >
          Deposit
        </button>

        <button onClick={handleWithdraw}className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-3xl">
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default Task15;
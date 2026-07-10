import useCounter from "../hooks/useCounter"

const Counter1 = () => {

  const{count,increment,decrement,reset}=useCounter(15)
  return (
    <>
    <div className="bg-white rounded-3xl p-5 w-80 ">
       <h1 className="font-bold text-center text-xl mb-3">Counter 2 (initial value:15)</h1>
      <h1 className="text-center">Count:{count}</h1>
      <button className="border-2 font-bold w-20 rounded-3xl bg-purple-950 text-white text-4xl text-center" onClick={increment}>+</button>
      <button className="border-2 font-bold w-20 rounded-3xl bg-purple-950 text-white text-4xl text-center" onClick={decrement}>-</button>
      <button className="border-2 font-bold w-20 rounded-3xl bg-purple-950 text-white text-3xl text-center" onClick={reset}>reset</button>

    </div>
   
    </>
  )
}

export default Counter1
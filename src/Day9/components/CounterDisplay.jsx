
const CounterDisplay = ({symbol,onclick}) => {
  return (
    <>
    <div>
        
        <button className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-900" onClick={onclick}>{symbol}</button>
    </div>
    </>
  )
}

export default CounterDisplay
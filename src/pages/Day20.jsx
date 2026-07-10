
import Counter1 from "../Day20/components/Counter1"
import Counter2 from "../Day20/components/Counter2"
// import Fetch from "../Day20/components/Fetch"
import LocalStorage from "../Day20/components/LocalStorage"
import Toggle from "../Day20/components/Toggle"
import Search from "../Day20/components/Search"
const Day20 = () => {
  return (
    <>

    <div className="min-h-screen bg-purple-800 p-10">

      <div className=" flex flex-wrap gap-10">
    <Counter1/>
    <Counter2/>
    <Toggle/>
    <LocalStorage/>
   
     
      </div>
       
     <Search/>
    {/* <Fetch/> */}

    </div>
    
    
    </>
  )
}

export default Day20
import { useContext } from "react"
import ProductsCard from "../Day18/components/ProductsCard"
import UserProfile from "../Day18/components/UserProfile"
import Day18Context from "../contexts/Day18Context"
import Header from "../Day18/components/Header"
import Sidebar from "../Day18/components/Sidebar"
import Card from "../Day18/components/Card"
import StudentTable from "../Day18/components/StudentTable"
import { Cart } from "../Day18/components/Cart"
const Day18 = () => {
  const {theme,handleClick}=useContext(Day18Context)
  return (
    <>
    <div className="bg-purple-800 min-h-screen p-10 ">
      <div className="flex flex-wrap gap-10">
        <UserProfile/>
      <ProductsCard/>
      <div className=" flex flex-col gap-3 bg-white p-5 w-70 rounded-3xl">
        <p className="font-bold text-purple-950">Click button to Change Theme</p>
        <button className="bg-purple-950 text-white rounded-3xl p-2 text-2xl text-center font-bold w-fit" onClick={handleClick}>{theme?"Light":"Dark"}</button>
      <Header/>
      <Sidebar/>
      <Card/>

      </div>
      
      <StudentTable/>
      <Cart/>

      </div>
      
    </div>
    
    </>
  )
}

export default Day18
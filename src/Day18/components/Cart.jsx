import {  useContext } from "react"
import Day18Context from "../../contexts/Day18Context"

export const Cart = () => {
    const {cart}=useContext(Day18Context)
  return (
   <>
   <div className="bg-white p-5 w-60 h-50 rounded-3xl">
     <h1 className="text-3xl text-center text-purple-950 font-bold">Cart</h1>
   {cart.map((e,i)=>(
    <p className="text-purple-800 font-bold text-center " key={i}>{i+1}. {e.product} x {e.qty}</p>
   ))}

   </div>
  

   </>
  )
}

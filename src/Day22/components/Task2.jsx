import { useMemo, useState } from "react"


const Task2 = () => {
    const [theme,setTheme]=useState(false)
    // const [total,setTotal]=useState(0)

     const Cart=[
        {id:100,name:"Laptop",price:60000,qnty:3},
        {id:101,name:"Mobile",price:20000,qnty:5},
        {id:102,name:"TV",price:30000,qnty:10},
        {id:103,name:"Printer",price:15000,qnty:8}
    ]

    // console.log("Components");
    
    
    const result=useMemo(()=>{

      // console.log("Cart");
      
        const sum=Cart.reduce((acc,e,)=>  acc+(e.price*e.qnty),0)
        return sum
      
    },[])

    const handleClick=()=>{
        // console.log("Theme");
        setTheme(!theme)
    }
  return (
    <>

    <h1>Grand Total:</h1>
    <p>total:{result}</p>
    


    <div className={theme?"bg-black text-white":" bg-white text-black"}>
        <p>Box</p>
      </div>
      <button onClick={handleClick}>{theme?"Dark":"Light"}</button>
    </>
  )
}

export default Task2
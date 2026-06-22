import { useState } from "react"

const Task17 = () => {
  const [name,setName]=useState("")
  const [arr,setArr]=useState([])
  const handleName=(e)=>{
    setName(e.target.value)

  }
  const handleClick=()=>{
   
    setArr((prev)=>[...prev,name])
    setName("")
  }
  return (
     <>
    <div className="bg-white rounded-2xl  flex  flex-col gap-5 w-150 text-center mx-auto mt-15 p-10">
        <h1 className="font-bold text-3xl">Task17</h1>
        <div>
        <label htmlFor="name">Enter Product Name:</label>
        <input type="text" id="name" className="border-2 rounded" onChange={handleName} value={name}/> <br />
        <button className="bg-violet-500 text-white px-4 py-2 rounded mt-5" onClick={handleClick}>Add Product</button>
        <h1>Product List</h1>
        <ol>
          {arr.map((e,i)=>(
          <li key={i}>{i+1}.{e}</li>
        ))}
        </ol>
        
    </div>
    </div>
    
    </>
  )
}

export default Task17
import { useState } from "react"
// Product Name, Price, Category, Brand 
const ProductManagement  = () => {
    const [product,setProduct]=useState({name:"",price:"",category:"",brand:""})
    const [data,setData]=useState([])
    const handleChange=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value})                                                                                                                                                                                                                                                  
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(product.name==""||product.price==""||product.category==""||product.brand=="")
        {
            alert("Enter all details before submitting")
            return
        }
            setData((prev)=>[...prev,product])
            setProduct({name:"",price:"",category:"",brand:""})
    }
  return (
    <>
    <div className="bg-purple-800 min-h-screen">

        <div className="flex justify-center p-10">
            <form className="bg-white p-10 rounded-2xl w-fit">
            <h1 className="font-bold text-3xl text-center text-purple-600 
            ">Product Management Form</h1>
            <label htmlFor="name" className="w-35 inline-block font-semibold">Enter Name</label>:
            <input type="text" id="name" name="name" className="border-2 rounded-2xl p-1 m-2" onChange={handleChange} value={product.name} /><br />
            <label htmlFor="age" className="w-35 inline-block font-semibold">Enter Price</label>:
            <input type="text" id="age" name="price" className="border-2 rounded-2xl p-1 m-2" onChange={handleChange} value={product.price} /><br />
            <label htmlFor="course" className="w-35 inline-block font-semibold">Enter Category</label>:
            <input type="text" id="course" name="category" className="border-2 rounded-2xl p-1 m-2" onChange={handleChange} value={product.category} /><br />
            <label htmlFor="brand" className="w-35 inline-block font-semibold">Enter Brand</label>:
            <input type="text" id="brand" name="brand" className="border-2 rounded-2xl p-1 m-2" onChange={handleChange} value={product.brand} /><br />
            <div className="flex justify-center">
            <button className="bg-purple-600 rounded-2xl p-2 text-white font-bold" onClick={handleSubmit}>Submit</button>

            </div>
        </form>
        </div>
        
        <div className="flex gap-10 justify-center flex-wrap">
             {data &&
                data.map((e,i)=>(
                    <div key={i} className="bg-white rounded-2xl p-5 w-90 text-purple-800 font-semibold ">
                        <h1 className="text-2xl font-bold text-white bg-purple-800 p-2 w-fit rounded-2xl mx-auto mb-2">Product{i+1}</h1>
                        <div className="flex flex-col justify-center mx-15">
                            <p><span className="font-bold w-23 inline-block">Name</span>: {e.name}</p>
                        <p><span className="font-bold w-23 inline-block">Price</span>: {e.price}</p>
                        <p><span className="font-bold w-23 inline-block">Category</span>: {e.category}</p>
                        <p><span className="font-bold w-23 inline-block">Brand</span>: {e.brand}</p>

                        </div>
                        

                    </div>
                ))
        }
        </div>
       

    </div>
    </>
  )
}

export default ProductManagement




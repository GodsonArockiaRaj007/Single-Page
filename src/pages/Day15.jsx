import { useEffect, useState } from "react"


const Day15 = () => {
    const [data,setData]=useState([])
    const [cat,setCat]=useState([])
    const [search,setSearch]=useState("")
    const [category,setCategory]=useState("")
    const [sort,setSort]=useState("")

    const dataFetch =async()=>{
            try{
         
            const response=await fetch("https://dummyjson.com/products")
            const data=await response.json()
            setData(data.products)
            // console.log(data);

            const cat=data.products.map((e)=>e.category)
            const unique=new Set(cat)
            setCat([...unique])
             }
              catch(error)
        {
        console.log(error);
        
        }   
        
    }
   
     useEffect(()=>{
        dataFetch()
    },[])
   
    

    const handleSearch=(e)=>{
        setSearch(e.target.value)
    }
    const handleCategory=(e)=>{
        setCategory(e.target.value)
    }
    const handleSort=(e)=>{
        setSort(e.target.value)
    }

    let result=[...data]
    if(search)
    {
        result=result.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()))
    }
    if(category)
    {
        result=result.filter((e)=>e.category==category)
    }
    if(sort)
    {
        if(sort=="asc")
        {
            result.sort((a,b)=>a.price-b.price)
        }
        if(sort=="dec")
        {
            result.sort((a,b)=>b.price-a.price)
        }
    }
    
   
  return (
    <>
    <div className="bg-purple-800 min-h-screen p-10">
        <div className="flex gap-15 justify-center mb-10">
             <input className="bg-white rounded-3xl p-2 w-70 " type="search" placeholder="Enter Product..." onChange={handleSearch} />
        <select name="" id="" className="bg-white rounded-3xl p-2" onChange={handleCategory}>
            <option value="">Select Category</option>
            {
                cat.map((e,i)=>(
                    <option value={e} key={i}>{e}</option>
                ))
            }


        </select>
        <select name="" id="" className="bg-white rounded-3xl p-2" onChange={handleSort}>
            <option value="">Select Sort</option>
            <option value="asc">Low to High</option>
            <option value="dec">High to Low</option>


        </select>

        </div>
       

        <div className="flex flex-wrap gap-10 justify-center">
            {result.length>0?
                result.map((e,i)=>(
                    <div className="w-60 m-5 border-3 rounded-2xl border-purple-950 text-center" key={i}>
                        <img src={e.thumbnail} alt={e.title} />
                        <p className="font-bold">{e.title}</p>
                        <p className="font-semibold">{e.category}</p>
                        <p>${e.price}</p>
                    </div>
                )):<h1>No Product Found</h1>
            }

           
        </div>
        <div className="">
                <h1 className="text-center text-5xl font-bold"> Beauty Products</h1>
             <div className="flex flex-wrap">
                
                {data.filter((e)=>e.category=="beauty")
                .map((e,i)=>(
                    <div className="w-60 m-5 border-3 rounded-2xl border-purple-950 text-center" key={i}>
                        <img src={e.thumbnail} alt={e.title} />
                        <p className="font-bold">{e.title}</p>
                        <p className="font-semibold">{e.category}</p>
                        <p>${e.price}</p>
                    </div>
                ))}
            </div>
            <h1 className="text-center text-5xl font-bold"> Fragrances</h1>
             <div className="flex flex-wrap">
                
                {data.filter((e)=>e.category=="fragrances")
                .map((e,i)=>(
                    <div className="w-60 m-5 border-3 rounded-2xl border-purple-950 text-center" key={i}>
                        <img src={e.thumbnail} alt={e.title} />
                        <p className="font-bold">{e.title}</p>
                        <p className="font-semibold">{e.category}</p>
                        <p>${e.price}</p>
                    </div>
                ))}
            </div>
            <h1 className="text-center text-5xl font-bold"> Furniture</h1>
            <div className="flex flex-wrap">
                
                {data.filter((e)=>e.category=="furniture")
                .map((e,i)=>(
                    <div className="w-60 m-5 border-3 rounded-2xl border-purple-950 text-center" key={i}>
                        <img src={e.thumbnail} alt={e.title} />
                        <p className="font-bold">{e.title}</p>
                        <p className="font-semibold">{e.category}</p>
                        <p>${e.price}</p>
                    </div>
                ))}
            </div>
            <h1 className="text-center text-5xl font-bold"> Groceries</h1>
             <div className="flex flex-wrap">
                
                {data.filter((e)=>e.category=="groceries")
                .map((e,i)=>(
                    <div className="w-60 m-5 border-3 rounded-2xl border-purple-950 text-center" key={i}>
                        <img src={e.thumbnail} alt={e.title} />
                        <p className="font-bold">{e.title}</p>
                        <p className="font-semibold">{e.category}</p>
                        <p>${e.price}</p>
                    </div>
                ))}
            </div>


        </div>

    </div>
    </>
  )
}

export default Day15
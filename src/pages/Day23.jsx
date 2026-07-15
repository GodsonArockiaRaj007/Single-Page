import { useCallback, useMemo, useState } from "react"


const Day23 = () => {
    // console.log("Components");
    const [search,setSearch]=useState("")
    const [theme,setTheme]=useState(false)
    const products=[
        {id:100,name:"Laptop",price:60000},
        {id:101,name:"Mobile",price:20000},
        {id:102,name:"TV",price:30000},
        {id:103,name:"Printer",price:15000}
    ]
    const searchProduct = useCallback((input, data) => {
    // console.log("Search");
    return data.filter((e) =>
    e.name.toLowerCase().includes(input.toLowerCase())
  );
}, []);

    const result=useMemo(()=>{
        return searchProduct(search,products)
    },[search])

    const handleClick = useCallback(() => {
        // console.log("theme");
        
  setTheme(prev => !prev);
}, []);

    const handleChange = useCallback((e) => {
  setSearch(e.target.value);
}, []);
  return (
    <>
        <input type="text" onChange={handleChange} placeholder="Search products" />
      { result.length>0?
        result?.map((e)=>(
            <div key={e.id}>
                <p>ID:{e.id}</p>
                <p>Name:{e.name}</p>
                <p>Price:{e.price}</p>
            </div>
            
        ))
        : "No data Found"
      }  

      <div className={theme?"bg-black text-white":" bg-white text-black"}>
        <p>Box</p>
      </div>
      <button className="border-2 w-fit p-2 rounded-2xl" onClick={handleClick}>{theme?"Dark":"Light"}</button>
    </>
   
  )
}

export default Day23
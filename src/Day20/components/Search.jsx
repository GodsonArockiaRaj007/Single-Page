import useSearch from "../hooks/useSearch"
import useFetch from "../hooks/useFecth"


const Search = () => {
    const{data,error,loading}=useFetch("https://dummyjson.com/products")

    const datas=data.products||[]
    const{setSearch,newData,search}=useSearch(datas)
    
     if(error)
    {
        return <h1>{error}</h1>
    }
    if(loading)
    {
        return <h1>Loading.....</h1>
    }
    

  return (
    <>
    <div className="bg-white p-5 rounded-3xl m-10">
       <div className="flex justify-center">
        <input type="text" className="border-2 rounded-3xl p-3 w-120 m-3 " placeholder="Search..." value={search} name="" id="" onChange={(e)=>setSearch(e.target.value)} />

       </div>
        <div className="flex  flex-wrap gap-10">
             {newData.length>0? newData.map((e)=>(
              <div key={e.id} className="bg-purple-800 text-white p-3 rounded-3xl w-70">
                <p className="font-bold text-xl text-center">{e.title}</p>
                <img src={e.thumbnail} alt="" />
                <p>ID:{e.id}</p>
                <p>Title:{e.title}</p>
                <p>Price:{e.price}</p>
            </div>

        )): <h1>No Result Found</h1>}

        </div>
       
    </div>
    
    </>
  )
}

export default Search
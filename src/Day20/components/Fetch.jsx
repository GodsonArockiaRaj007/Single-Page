import useFetch from "../hooks/useFecth"


const Fetch = () => {
    const{data,error,loading}=useFetch("https://dummyjson.com/products")
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
    
        <div className="flex  flex-wrap gap-10">
             {data.length>0? data.map((e)=>(
              <div key={e.id} className="bg-purple-800 text-white p-3 rounded-3xl w-70">
                <p className="font-bold text-xl text-center">{e.title}</p>
                <img src={e.thumbnail} alt="" />
                <p>ID:{e.id}</p>
                <p>Title:{e.title}</p>
                <p>Price:{e.price}</p>
            </div>

        )): <h1>No Result Found</h1>}

        </div>
   </>
  )
}

export default Fetch
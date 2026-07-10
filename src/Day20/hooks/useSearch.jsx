import { useState } from "react"

const useSearch = (data) => {
    const[search,setSearch]=useState("")
    
        const newData=data.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()))

  return {setSearch,newData,search}
  
}

export default useSearch
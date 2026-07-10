import { useEffect, useState } from "react"


const useFetch = (url) => {
    const [data,setData]=useState([])
    const[error,setError]=useState("")
    const [loading,setLoading]=useState(true)

    const getData= async()=>{
        try{
            const fetchData=await fetch(url)
            const res= await fetchData.json()
            
            setData(res)

        }
        catch(error)
        {
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }


    useEffect(()=>{
        getData()
    },[url])

  return {data,error,loading}
}

export default useFetch
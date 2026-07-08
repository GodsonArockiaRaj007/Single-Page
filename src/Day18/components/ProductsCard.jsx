import { useContext } from "react"
import Day18Context from "../../contexts/Day18Context"



const ProductsCard = () => {
    const {products}=useContext(Day18Context)
  return (
    <>
    <div className="bg-white p-5 rounded-3xl w-70 ">
        <h1 className="text-3xl font-bold text-purple-950">Products</h1>
    {
        products.map((e,i)=>(
            <div className="bg-purple-800 text-white p-3 rounded-3xl m-3" key={i}>
                <p > <span className="font-bold">id : </span>{e.id}</p>
                <p ><span className="font-bold">Title : </span>{e.title}</p>
                <p ><span className="font-bold">Price : </span>{e.price}</p>
            </div>
        ))
    }

    </div>
    
    </>
  )
}

export default ProductsCard
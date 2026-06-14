
const Product = ({name,price,category,brand}) => {
  return (
    <>
    <div className="flex justify-center items-center mt-5 ">
      <div className="bg-amber-50 p-5 w-70 rounded-3xl  text-justify">
        <h1 className="font-bold text-3xl mb-5 text-center ">Task-3</h1>
        <h1 className="font-bold text-2xl">Product Details</h1>
        <p>Name:{name}</p>
        <p>Price:{price}</p>
        <p>Category:{category}</p>
        <p>Brand:{brand}</p>
      </div>
       
    </div>
    </>
  )
}

export default Product

import { useState } from "react";

const Task8 = () => {
  const [product, setProduct] = useState(undefined);

  const handleLoadProduct = () => {
    setProduct({
      name: "Laptop",
      brand: "Lenovo",
      price: 60000,
    });
  };

  return (
    <div className="bg-stone-100 w-80 p-6 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-4">Task-8</h2>

      <h3 className="text-2xl font-semibold mb-4"> Product Details</h3>

      <button onClick={handleLoadProduct} className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-3xl">
        Load Product
      </button>

      {product && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow">
          <p className="text-lg"><span className="font-bold">Name:</span> {product.name}</p>

          <p className="text-lg"> <span className="font-bold">Brand:</span> {product.brand}</p>

          <p className="text-lg"> <span className="font-bold">Price:</span> ₹{product.price}</p>
        </div>
      )}
    </div>
  );
};

export default Task8;
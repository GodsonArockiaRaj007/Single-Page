import { useEffect, useState } from "react";

const Category = () => {
  const [datasShow, setDatasShow] = useState([]);
  const [catDatas, setCatDatas] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const res = await response.json();

      setDatasShow(res.products);
    };

    fetchData();
  }, []);

  const categories = [...new Set(datasShow.map((e) => e.category))];

  const categoryResult = catDatas
    ? datasShow.filter((e) => e.category === catDatas)
    : datasShow;

  return (
    <div className="min-h-screen bg-purple-800 p-10">

      <h1 className="text-5xl font-bold text-center text-white mb-10">
        Category Filter
      </h1>

      <div className="flex justify-center mb-12">
        <select
          className="w-125 p-3 rounded-lg border-2 border-white bg-white outline-none text-lg"
          value={catDatas}
          onChange={(e) => setCatDatas(e.target.value)}
        >
          <option value="">All Categories</option>

          {categories.map((e, i) => (
            <option key={i} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-8">

        {categoryResult.length > 0 ? (
          categoryResult.map((e) => (
            <div
              key={e.id}
              className="bg-white w-72 rounded-2xl shadow-lg overflow-hidden hover:scale-105 duration-300"
            >
              <img
                src={e.thumbnail}
                alt={e.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">

                <h2 className="text-xl font-bold mb-2">
                  {e.title}
                </h2>

                <p className="text-gray-600 mb-2">
                  Category : {e.category}
                </p>

                <p className="text-xl font-bold text-green-700 mb-4">
                  ₹ {e.price}
                </p>

                <button className="w-full bg-purple-800 text-white py-2 rounded-lg hover:bg-purple-900">
                  Buy Now
                </button>

              </div>
            </div>
          ))
        ) : (
          <h2 className="text-white text-2xl font-semibold">
            No Products Found
          </h2>
        )}

      </div>
    </div>
  );
};

export default Category;
import { useEffect, useState } from "react";

const Search = () => {
  const [datasShow, setDatasShow] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const res = await response.json();
      setDatasShow(res.products);
    };

    fetchData();
  }, []);

  const searchResult = datasShow.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-purple-800 p-10">

      <h1 className="text-5xl font-bold text-center text-white mb-10">
        Product Search
      </h1>

      <div className="flex justify-center mb-12">
        <input
          type="text"
          placeholder="Search Product..."
          className="w-125 p-3 rounded-lg border-2 border-white bg-white outline-none text-lg"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-8">

        {searchResult.length > 0 ? (
          searchResult.map((e) => (
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

export default Search;
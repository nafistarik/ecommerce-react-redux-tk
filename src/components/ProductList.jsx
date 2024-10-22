import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useGetProductsQuery } from "../services/productApi";

export default function ProductList() {
  const { data: allProducts, error, isLoading } = useGetProductsQuery();
  const [visibleProducts, setVisibleProducts] = useState([]); // at first showing 12, then 20, 28
  const [isFetching, setIsFetching] = useState(false); // loading ..
  const [hasMore, setHasMore] = useState(true); // anymore product
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (allProducts) {
      setVisibleProducts(allProducts.slice(0, 12));
    }
  }, [allProducts]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >= // screenHeight +  scroll  >=
        document.documentElement.offsetHeight - 100 // document height - 100px
      ) {
        loadMoreProducts(); //render more
      }
    };
    window.addEventListener("scroll", handleScroll); // show or not depends on scroll
    return () => window.removeEventListener("scroll", handleScroll); // product finished, Scroll cleanup
  }, [visibleProducts]);

  const loadMoreProducts = () => {
    if (
      allProducts &&
      visibleProducts.length < allProducts.length &&
      !isFetching //animation not showing
    ) {
      setIsFetching(true); //animation will show
      setTimeout(() => {
        const moreProducts = allProducts.slice(
          visibleProducts.length,
          visibleProducts.length + 8
        );
        setVisibleProducts([...visibleProducts, ...moreProducts]); // 0-12, 12-20
        setIsFetching(false); // animation off
      }, 1500); // 1.5 seconds
    } else {
      setHasMore(false); // product finished
    }
  };

  const filteredProducts = visibleProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  ); // fitering by search from visible

  const dispatch = useDispatch();

  if (error)
    return (
      <div className="my-48 md:mt-28 text-center text-xl font-semibold text-gray-800 animate-pulse">
        Error: {error.message}
      </div>
    );
  if (isLoading)
    return (
      <div className="my-48 md:mt-28 text-center text-xl font-semibold text-gray-800 animate-pulse">
        Loading...
      </div>
    );

  return (
    <div className="container mx-auto p-8 mt-40 md:mt-24">
      <h3 className="text-3xl text-gray-800 font-bold text-center mb-10">
        Our Products
      </h3>
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm} //search term to form
          onChange={(e) => setSearchTerm(e.target.value)} // form to search term
          className="rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent transition duration-200 w-full py-2 px-4 bg-gray-100 placeholder-gray-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col justify-between"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-cover mb-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.title}
              </h3>
              <div className="flex justify-between items-center ">
                <p className="text-red-500 text-xl font-bold">
                  ${product.price}
                </p>
                <button
                  onClick={() => dispatch(addToCart(product))} //addToCart's reducerFunction dispatch
                  className="bg-gray-700 text-white py-2 px-3 rounded-md hover:bg-gray-800 transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* animation showing */}
      {isFetching && (
        <div className="flex flex-col items-center mt-6">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-blue-500 border-gray-200 h-12 w-12 animate-spin shadow-lg"></div>
          <p className="mt-2 text-xl font-semibold text-gray-800 text-center animate-pulse">
            Loading more products...
          </p>
        </div>
      )}

      {/* product finished */}
      {!hasMore && (
        <div className="flex justify-center mt-12">
          <p className="text-xl font-semibold text-gray-800 bg-gray-100 rounded-lg py-3 px-8 shadow-sm text-center">
            No more products to load!
          </p>
        </div>
      )}
    </div>
  );
}

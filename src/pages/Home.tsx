import SingleProduct from "../components/product/SingleProduct";
import useProducts from "../hooks/useProducts";

const Home = () => {
  const { products, isProductsFetching } = useProducts();

  return (
    <div className="container-box py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {isProductsFetching
          ? <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
          <div className="p-2 bg-gradient-to-tr animate-spin from-green-500 to-blue-500 via-purple-500 rounded-full">
              <div className="bg-white rounded-full">
                  <div className="w-8 h-8 rounded-full"></div>
              </div>
          </div>
      </div>
          : products?.length > 0 &&
            products.map((product) => (
              <SingleProduct key={product?.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Home;

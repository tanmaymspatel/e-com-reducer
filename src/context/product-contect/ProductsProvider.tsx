import { ReactNode, useEffect, useState } from "react";
import { getProducts } from "../../services/product.services";
import { ProductsCtx } from "./ProductContext";
import { IProduct } from "../../utility/model/product.model";

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isProductsFetching, setIsProductsFetching] = useState(false);

  const getAllProducts = async () => {
    try {
      setIsProductsFetching(true);
      const res = await getProducts();
      if (res.status === 200) {
        setProducts(res.data.products);
        setIsProductsFetching(false);
      } else {
        setIsProductsFetching(false);
      }
    } catch (err) {
      console.error(err);
      setIsProductsFetching(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ProductsCtx.Provider value={{ products , isProductsFetching }}>{children}</ProductsCtx.Provider>
  );
};

export default ProductsProvider;

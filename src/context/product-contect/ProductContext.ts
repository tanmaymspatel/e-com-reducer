import { createContext } from "react";
import { IProduct } from "../../utility/model/product.model";

interface IProductsCtx {
  products: IProduct[];
  isProductsFetching: boolean;
}

export const ProductsCtx = createContext<IProductsCtx>({} as IProductsCtx);

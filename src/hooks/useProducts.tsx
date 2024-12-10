import { useContext } from 'react'
import { ProductsCtx } from '../context/product-contect/ProductContext'

const useProducts = () => {
  return useContext(ProductsCtx)
}

export default useProducts
import { IconStarFilled } from "@tabler/icons-react";
import useCart from "../../hooks/useCart";
import { actions } from "../../utility/constants/constants";
import { IProduct } from "../../utility/model/product.model";

const SingleProduct = ({ product }: { product: IProduct }) => {
  const { dispatch } = useCart();

  return (
    <div className="group shadow-lg rounded-tl-sm">
      <figure className="border-b-2 border-slate-100 overflow-hidden">
        <img
          className="w-[100%] h-auto  duration-300 group-hover:scale-125"
          src={product?.thumbnail}
          alt={product?.title}
        />
      </figure>
      <div>
        <div className="pt-2 md:pt-4 px-2 md:px-4">
          <div className="flex items-center justify-between">
            <p title={product?.title} className="truncate font-bold">
              {product?.title}
            </p>
            <p className="border-2 px-4 py-1 rounded-md flex items-center justify-center">
              {product?.category}
            </p>
          </div>
          <p>
            <span>&#36;</span> {product?.price}
          </p>
          <p className="flex items-center gap-2 justify-end">
            <IconStarFilled fill="yellow" size={20} />
            <span>{product?.rating}</span>
          </p>
        </div>
        <button
          className="bg-blue-600 text-white w-full mt-2 py-2 uppercase "
          onClick={() =>
            dispatch({
              type: actions.ADD_TO_CART,
              payload: {
                id: product.id,
                title: product.title,
                price: product.price,
                minimumOrderQuantity: product.minimumOrderQuantity,
                thumbnail: product.thumbnail,
              },
            })
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;

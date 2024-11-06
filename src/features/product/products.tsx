import { useState } from "react";
import { addToCartReducer } from "./products-slice";
import { useAppDispatch } from "../../app/store";
import { IProduct } from "../../types/products-types";

function EachProductCard({ product }: { product: IProduct }) {
  const [count, setCount] = useState(0);
  const dispatch = useAppDispatch();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    if (count > 0) {
      dispatch(addToCartReducer({ product, quantity: count }));
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-2 max-w-[240px] w-full mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-1g hover:bg-white transition duration-300 ease-in-out hover:shadow-lg hover:border"
      />
      <h1 className=" text-lg flex items-center justify-around">
        {product.name}
      </h1>
      <div className=" text-lg font-semibold text-gray-150 flex items-center justify-around ">
        Rs. {product.price}
      </div>

      {}
      <div className="flex items-center justify-around">
        <button
          onClick={decrement}
          className="bg-white border rounded-full px-3 py-1 "
        >
          -
        </button>
        <input
          type="text field"
          className="border h-9  text-center block w-16 py-2.5 dark:bg-white-700 dark:text-black"
          value={count}
        />
        <button
          onClick={increment}
          className="bg-white border rounded-full px-3 py-1"
        >
          +
        </button>
      </div>
      <div className="flex items-center justify-around my-4">
        <button
          type="button"
          className="bg-green-700 text-white rounded mt-4 w-full py-2 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-500 "
          onClick={addToCart}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
export default EachProductCard;

import { IProduct } from "../types/products-types";
import React from "react";

interface CartItem {
  product: IProduct;
  quantity: number;
  totalPrice: number;
}

interface CartModalProps {
  isOpen: boolean;
  closeModal: () => void;
  cartItems: CartItem[];
  cartTotalPrice: number;
}

function CartModal({
  isOpen,
  closeModal,
  cartItems,
  cartTotalPrice,
}: CartModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-96 p-4">
        <h2 className="text-lg font-bold mb-4 text-gray-400">My Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center mb-4 text-black"
            >
              <div className="flex items-center">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-10 h-10 object-cover"
                />
                <p>{item.product.name}</p>
              </div>
              <div className="text-right">
                <p>Qty: {item.quantity}</p>
                <p>Price: Rs. {item.product.price}</p>
                <p>Total: Rs. {item.totalPrice}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-right">
          <h3 className="font-bold text-lg text-green-400">
            Total Price: Rs. {cartTotalPrice}
          </h3>
        </div>
        <button
          onClick={closeModal}
          className="bg-orange-500 text-gray px-4 py-2 mt-4 rounded "
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;

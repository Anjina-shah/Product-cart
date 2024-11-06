import { useState } from "react";
import { useAppSelector } from "../app/store";
import CartModal from "./cart-modal";

function NavBar() {
  const cartItems = useAppSelector((state) => state.product.cartItems);
  const cartTotal = useAppSelector((state) => state.product.cartTotal);
  const cartTotalPrice = useAppSelector(
    (state) => state.product.cartTotalPrice
  ); // Select total price

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4 text-center bg-green-900 mb-2 text-white">
      <h1 className="text-2xl">Total Cart: {cartTotal}</h1>
      <button
        onClick={openModal}
        className="ml-4 bg-white text-green-900 px-4 py-2 rounded"
      >
        View Cart
      </button>

      <CartModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        cartItems={cartItems}
        cartTotalPrice={cartTotalPrice} // Pass total price as prop
      />
    </div>
  );
}

export default NavBar;

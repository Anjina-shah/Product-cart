import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/products-types";

export interface CartItem {
  product: IProduct;
  quantity: number;
  totalPrice: number;
}
export interface ProductState {
  cartItems: CartItem[];
  cartTotal: number;
  cartTotalPrice: number;
}

const initialState: ProductState = {
  cartItems: [],
  cartTotal: 0,
  cartTotalPrice: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCartReducer(
      currentState,
      action: PayloadAction<{ product: IProduct; quantity: number }>
    ) {
      const { product, quantity } = action.payload;
      // Check if the product is already in the cart
      const existingProduct = currentState.cartItems.find(
        (item) => item.product.id === product.id
      );

      if (existingProduct) {
        // Update the quantity and total price of the existing product
        existingProduct.quantity += quantity;
        existingProduct.totalPrice += product.price * quantity;
      } else {
        // Add new product to cart
        currentState.cartItems.push({
          product,
          quantity,
          totalPrice: product.price * quantity,
        });
      }

      // Update the overall cart total and cart total price
      currentState.cartTotal += quantity;
      currentState.cartTotalPrice += product.price * quantity;
    },
  },
});

// Action creators are generated for each case reducer function

export default productSlice.reducer;
export const { addToCartReducer } = productSlice.actions;

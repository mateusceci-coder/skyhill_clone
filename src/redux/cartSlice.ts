import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInCart } from "../interfaces/productInCart";

interface CartState {
  items: Array<{
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
    size: string;
  }>;
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductInCart>) {

      const existingProduct = state.items.find(p => p.id === action.payload.id && p.size === action.payload.size);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    decreaseQuantity(state, action: PayloadAction<{id: number, size: string}>) {
      const product = state.items.find(p => p.id === action.payload.id && p.size === action.payload.size);
      if (product && product.quantity > 0) {
        product.quantity -= 1;
      }
    },
    increaseQuantity(state, action: PayloadAction<{id: number, size: string}>) {
      const product = state.items.find(p => p.id === action.payload.id && p.size === action.payload.size);
      if (product) {
        product.quantity += 1;
      }
    },
    removeFromCart(state, action: PayloadAction<{id: number, size: string}>) {
      state.items = state.items.filter(p => p.id !== action.payload.id && p.size !== action.payload.size);
    }
  }
  },
);

export const { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;


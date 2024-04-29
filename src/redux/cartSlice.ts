import { createSlice } from "@reduxjs/toolkit";
import { ProductInCart } from "../interfaces/productInCart";

const initialState = {
  cart: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload);
    }
  }
  },
);

export default cartSlice.reducer;


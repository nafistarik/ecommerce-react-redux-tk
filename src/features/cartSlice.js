import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload; // addToCart's product is action.payload
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      ); //item already exist or not

      if (existingItem) { // already exist
        
        existingItem.quantity += 1; // quantity increase
        existingItem.totalPrice += item.price; // price increase
      } else {
        state.cartItems.push({ ...item, quantity: 1, totalPrice: item.price }); // quantity, totalPrice property added
      }

      state.totalQuantity += 1; // total quantity increase however
      state.totalPrice += item.price; // total price increase however
    },
    removeFromCart: (state, action) => {
      const item = action.payload; // clicked product
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      ); //item already exists

      if (existingItem) {
        if (existingItem.quantity > 1) { // more than one
          existingItem.quantity -= 1; // quantity reduce by one
          existingItem.totalPrice -= item.price; 
          state.totalQuantity -= 1; 
          state.totalPrice -= item.price; 
        } else { // if quantity one
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== item.id // remove item from cart
          );
          state.totalQuantity -= 1; 
          state.totalPrice -= existingItem.totalPrice;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

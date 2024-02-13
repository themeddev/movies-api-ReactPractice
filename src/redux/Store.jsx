import { configureStore } from "@reduxjs/toolkit";
// import wishlistReducer from './WishlistSlice'
import wishlistReducer from './WishlistSlice'

export const store = configureStore({
  reducer: {
    // wishlist: wishlistReducer,
    wishlist: wishlistReducer,

  }
});

import { createSlice } from "@reduxjs/toolkit";

const addFavSlice = createSlice({
  name: "addTofav",
  initialState: [],
  reducers: {
    addFav: (state, action) => {
      console.log("movie added", action.payload);
    },
    deleteFav: (state, action) => {
      console.log("movie deleted", action.payload);
    },
  },
});

// export const { addFav, deleteFav } = addFavSlice.actions;
// export default addFavSlice.reducer;

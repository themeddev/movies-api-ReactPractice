import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  buttonText: [],
};

const addFavReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      // return {
      //   ...state,
      //   buttonText: [...state.buttonText, action.payload],
      // };
      return console.log('Movie added', action.payload)
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    addTofav: addFavReducer,
  }
});

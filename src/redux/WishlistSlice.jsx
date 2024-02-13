// WishlistSlicer.jsx
import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    movies: [],
  },
  reducers: {
    addMovie: (state, action) => {
      const existingMovieIndex = state.movies.findIndex(movie => movie.imdbID === action.payload.imdbID);
      if (existingMovieIndex !== -1) {
        state.movies[existingMovieIndex].quantity += 1;
      } else {
        state.movies.push({ ...action.payload, quantity: 1 });
      }
    },
    removeMovie: (state, action) => {
      const existingMovieIndex = state.movies.findIndex(movie => movie.imdbID === action.payload.imdbID);
      if (existingMovieIndex !== -1) {
        if (state.movies[existingMovieIndex].quantity > 1) {
          state.movies[existingMovieIndex].quantity -= 1;
        } else {
          state.movies = state.movies.filter(movie => movie.imdbID !== action.payload.imdbID);
        }
      }
    },
  },
});

export const { addMovie, removeMovie } = wishlistSlice.actions;
export default wishlistSlice.reducer;

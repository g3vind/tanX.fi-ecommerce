import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
  },
});

export default favoriteSlice.reducer;
export const { addToFavorite } = favoriteSlice.actions;

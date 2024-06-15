"use client";
const { createSlice } = require("@reduxjs/toolkit");

const loadStateFromLocalStorage = () => {
    try {
      const wishlistArray = JSON.parse(localStorage.getItem("wishlistArray")) || [];
      const wishlistDataPrices = JSON.parse(localStorage.getItem("wishlistDataPrices")) || [];
      return { wishlistArray, wishlistDataPrices };
    } catch (e) {
      console.error("Failed to load state from localStorage:", e);
      return { wishlistArray: [], wishlistDataPrices: [] };
    }
  };
  
const initialState = loadStateFromLocalStorage();

const wishlistSlice = createSlice({
    name:'wishlistSlice',
    initialState,
    reducers:{
        setWishlistData:(state,action) => {
            state.wishlistArray = action.payload;
        },
        setWishlistDataPrices:(state,action) => {
            state.wishlistDataPrices = action.payload;
        }
    }
});

export const {setWishlistData,setWishlistDataPrices} = wishlistSlice.actions;
export default wishlistSlice.reducer;
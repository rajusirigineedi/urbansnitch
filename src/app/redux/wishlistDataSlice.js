"use client";
const { createSlice } = require("@reduxjs/toolkit");

const wishlistSlice = createSlice({
    name:'wishlistSlice',
    initialState:{
        wishlistArray:[],
        wishlistDataPrices:[]
    },
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
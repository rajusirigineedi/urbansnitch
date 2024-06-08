"use client";
const { createSlice } = require("@reduxjs/toolkit");

const wishlistSlice = createSlice({
    name:'wishlistSlice',
    initialState:{
        wishlistArray:[]
    },
    reducers:{
        setWishlistData:(state,action) => {
            state.wishlistArray = action.payload;
        }
    }
});

export const {setWishlistData} = wishlistSlice.actions;
export default wishlistSlice.reducer;
"use client"
import wishlistDataSlice from "./wishlistDataSlice";
import productDetailsSlice from "./productDetailsSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        wishlist:wishlistDataSlice,
        product:productDetailsSlice
    }
});

export default store;
"use client"
import wishlistDataSlice from "./wishlistDataSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        wishlist:wishlistDataSlice
    }
});

export default store;
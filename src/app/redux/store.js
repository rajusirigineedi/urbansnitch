"use client"
import wishlistDataSlice from "./wishlistDataSlice";
import sidebarToggleSlice from "./sidebarToggleSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        wishlist:wishlistDataSlice,
        sidebar:sidebarToggleSlice
    }
});

export default store;
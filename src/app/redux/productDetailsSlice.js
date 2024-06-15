const { createSlice } = require("@reduxjs/toolkit");

const loadStateFromLocalStorage = () => {
    try {
      const productDetails = JSON.parse(localStorage.getItem("productDetails")) || [];
      return { productDetails };
    } catch (e) {
      console.error("Failed to load state from localStorage:", e);
      return { productDetails: [] };
    }
  };
  
const initialState = loadStateFromLocalStorage();

const productDetailsSlice = createSlice({
    name:'productDetailsSlice',
    initialState,
    reducers:{
        setProductDetailsData:(state,action) => {
            state.productDetails = action.payload;
        }
    }
});

export const {setProductDetailsData} = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
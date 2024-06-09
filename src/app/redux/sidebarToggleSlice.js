const { createSlice } = require("@reduxjs/toolkit");

const sidebarToggleSlice = createSlice({
    name:'sidebarToggleSlice',
    initialState:{
        sidebarToggle:false,
    },
    reducers:{
        toggleSidebar:(state,action) => {
            state.sidebarToggle = !state.sidebarToggle;
        }
    }
});

export const { toggleSidebar } = sidebarToggleSlice.actions;
export default sidebarToggleSlice.reducer;
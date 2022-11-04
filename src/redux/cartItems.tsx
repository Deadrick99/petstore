import { createSlice } from "@reduxjs/toolkit";
import { MerchItem } from "../pages/Merch";


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
       cartItems: []
    },
    reducers: {
        setViews: (state) => {
           state.views ++;
        },
     
    },
});

export const { setViews } = viewsSlice.actions;
export default viewsSlice.reducer;
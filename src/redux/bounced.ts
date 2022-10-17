import { createSlice } from "@reduxjs/toolkit";


export const bouncedSlice = createSlice({
    name: 'bounced',
    initialState: {
       bounced: true
    },
    reducers: {
        setBounced: (state) => {
           state.bounced = false;
        },
     
    },
});

export const { setBounced } = bouncedSlice.actions;
export default bouncedSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";


export const petNameSlice = createSlice({
    name: 'petName',
    initialState: {
       petName:'asd'
    },
    reducers: {
        setPetName: (state,action) => {
            state.petName = action.payload;
        },
     
    },
});

export const { setPetName } = petNameSlice.actions;
export default petNameSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";


export const petNameSlice = createSlice({
    name: 'petName',
    initialState: {
       petName:'',
        petId:'',
        itemId:'',
    },
    reducers: {
        setPetName: (state,action) => {
            state.petName = action.payload;
        },
        setPetId:(state,action)=>{
            state.petId = action.payload;
        },
         setItemId:(state,action)=>{
            state.itemId = action.payload;
        }
     
    },
});

export const { setPetName,setPetId,setItemId } = petNameSlice.actions;
export default petNameSlice.reducer;
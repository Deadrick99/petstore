import { createSlice } from "@reduxjs/toolkit";


export const petNameSlice = createSlice({
    name: 'petName',
    initialState: {
       petName:'',
        petId:'',
        itemId:'',
        pageName:'',
        approve:''
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
        },
        setPageName:(state,action)=>{
            state.pageName = action.payload;
        },
        setApprove:(state,action)=>{
            state.pageName = action.payload;
        }
     
    },
});

export const { setPetName,setPetId,setItemId, setPageName, setApprove } = petNameSlice.actions;
export default petNameSlice.reducer;
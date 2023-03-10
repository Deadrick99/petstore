import { createSlice } from "@reduxjs/toolkit";


export const pageTimeSlice = createSlice({
    name: 'pageTime',
    initialState: {
       startPageTime: 0,
       endPageTime:0,
       totalPageTime: 0
    },
    reducers: {
        setPageStart: (state, action) => {
           
            state.startPageTime =action.payload
       
        },
        setPageEnd :(state, action) => {
            
            state.endPageTime=action.payload
           
           
        },
        setPageTotal :(state) => {
          
           state.totalPageTime = state.endPageTime - state.startPageTime
           
        },
     
    },
});

export const { setPageStart } = pageTimeSlice.actions;
export const { setPageEnd } =pageTimeSlice.actions;
export const { setPageTotal } = pageTimeSlice.actions;
export default pageTimeSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const d = new Date();
export const timeSlice = createSlice({
    name: 'time',
    initialState: {
       startTime: 0,
       endTime:0,
       totalTime:0
    },
    reducers: {
        setStart: (state) => {
           state.startTime = d.getTime();
        },
        setEnd :(state) => {
           state.startTime = d.getTime();
        },
        setTotal :(state) => {
           state.totalTime = state.endTime - state.startTime;
        },
     
    },
});

export const { setStart } = timeSlice.actions;
export const { setEnd } = timeSlice.actions;
export const { setTotal } = timeSlice.actions;
export default timeSlice.reducer;
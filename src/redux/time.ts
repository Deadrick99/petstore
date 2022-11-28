import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
interface timeState
{
   startTime:number
   endTime:number
   totalTime:number
}
const d = new Date();
 const initialState= {
       startTime: d.getTime(),
       endTime:0,
       totalTime:0
    } as timeState

export const timeSlice = createSlice({
    name: 'time',
    initialState,
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
        setSendTotal: (state) => {
             
        }
     
    },
});

export const { setStart } = timeSlice.actions;
export const { setEnd } = timeSlice.actions;
export const { setTotal } = timeSlice.actions;
export const { setSendTotal } = timeSlice.actions;
export default timeSlice.reducer;
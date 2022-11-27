import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
interface timeState
{
   startTime:number
   endTime:number
   totalTime:number
}
 const initialState= {
       startTime: 0,
       endTime:0,
       totalTime:0
    } as timeState
const d = new Date();
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
             Axios.post("https://monitoringapiteam4.azurewebsites.net/api/Metrics/AddPageTime/"+state.totalTime+"/null");
        }
     
    },
});

export const { setStart } = timeSlice.actions;
export const { setEnd } = timeSlice.actions;
export const { setTotal } = timeSlice.actions;
export const { setSendTotal } = timeSlice.actions;
export default timeSlice.reducer;
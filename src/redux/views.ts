import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const viewsSlice = createSlice({
    name: 'views',
    initialState: {
       views: 1
    },
    reducers: {
        setViews: (state) => {
            state.views ++;
        },
        setSendViews:(state) => {
            Axios.post("https://monitoringapiteam4.azurewebsites.net/api/Metrics/AddPageTime/"+state.views+"/"+0);
        }
     
    },
});

export const { setViews } = viewsSlice.actions;
export const { setSendViews } = viewsSlice.actions;
export default viewsSlice.reducer;
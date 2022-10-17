import { createSlice } from "@reduxjs/toolkit";


export const viewsSlice = createSlice({
    name: 'views',
    initialState: {
       views: 1
    },
    reducers: {
        setViews: (state) => {
           state.views ++;
        },
     
    },
});

export const { setViews } = viewsSlice.actions;
export default viewsSlice.reducer;
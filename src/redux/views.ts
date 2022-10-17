import { createSlice } from "@reduxjs/toolkit";


export const viewsSlice = createSlice({
    name: 'views',
    initialState: {
       views: 0
    },
    reducers: {
        setViews: (state) => {
           state.views += state.views;
        },
     
    },
});

export const { setViews } = viewsSlice.actions;
export default viewsSlice.reducer;
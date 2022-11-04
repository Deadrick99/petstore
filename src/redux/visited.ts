import { createSlice } from "@reduxjs/toolkit";


export const visitedSlice = createSlice({
    name: 'visited',
    initialState: {
       visited: false
    },
    reducers: {
        setVisited: (state) => {
            console.log("setvisited");
           state.visited = true;
        },
     
    },
});

export const { setVisited } = visitedSlice.actions;
export default visitedSlice.reducer;
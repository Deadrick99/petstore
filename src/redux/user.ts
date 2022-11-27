import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        token: '',
        admin:'',
        loggedIn:''
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setAdmin:(state,action)=>{
            state.admin = action.payload;
        },
        setLoggedIn:(state,action)=>{
            state.loggedIn = action.payload;
        }
    },
});

export const { setEmail, setToken, setAdmin,setLoggedIn } = userSlice.actions;
export default userSlice.reducer;
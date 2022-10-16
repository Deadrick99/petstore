import { configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist"
import userReducer from "./user";
import visitedReducer from "./visited";
import storage from 'redux-persist/lib/storage'

const store = configureStore({
    reducer: {
        user: userReducer,
        visited:visitedReducer
    }
});
const persistConfig={
    key:'main-root',
    storage
}
export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;
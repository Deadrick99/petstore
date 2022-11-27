import { configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist"
import userReducer from "./user";
import visitedReducer from "./visited";
import storage from 'redux-persist/lib/storage';
import bouncedReducer from "./bounced";
import viewsReducer from "./views"
import timeReducer from "./time"
import pageTimeReducer from "./pageTime";
import petNameReducer from "./petName"

const store = configureStore({
    reducer: {
        user: userReducer,
        visited:visitedReducer,
        bounced: bouncedReducer,
        views: viewsReducer,
        time :timeReducer,
        pageTime:pageTimeReducer,
        petName: petNameReducer
    }
});

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme";
import userReducer from "./features/user";


export const loginStore = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer
    }
})
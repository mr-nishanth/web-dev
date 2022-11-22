import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./reducer/card";

export default configureStore({
    reducer: {
        card: cardReducer
    }
})
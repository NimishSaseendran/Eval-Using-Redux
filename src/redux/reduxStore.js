import { configureStore } from "@reduxjs/toolkit";
import evalSlice from "./evalSlice";

const store = configureStore({
    reducer : {
        evalReducer : evalSlice
    }
})

export default store
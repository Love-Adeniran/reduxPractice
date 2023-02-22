import { configureStore } from "@reduxjs/toolkit";
import { slice } from "./slices/profileSlice";
import { Qslice } from "./slices/questionSlice";


const store = configureStore({
    reducer:{
        Profile: slice,
        test: Qslice
    }
})
export default store
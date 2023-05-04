import {configureStore} from "@reduxjs/toolkit"
import frameworksSlice from "./frameworksSlice"
export const store = configureStore({
    reducer:{
        frameworks: frameworksSlice
    }
})
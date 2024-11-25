import { configureStore } from "@reduxjs/toolkit";
import sourcesReducer from './sourcesSlice'

const store = configureStore({
    reducer: {
        sources: sourcesReducer
    }
})


export default store
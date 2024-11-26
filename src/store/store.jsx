import { configureStore } from "@reduxjs/toolkit";
import sourcesReducer from './sourcesSlice'
import latestReducer from './latestSlice'

const store = configureStore({
    reducer: {
        sources: sourcesReducer,
        latest: latestReducer
    }
})


export default store
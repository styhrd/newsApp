import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api_key = import.meta.env.VITE_API_KEY;
const url = 'https://newsapi.org/v2/everything';

export const fetchLatest = createAsyncThunk('latest/fetchLatest', async (pagenum) => {
    const response = await axios.get(url, {
        params: {
            apiKey: api_key,
            sortBy: publishedAt,
            pageSize: 10,
            page:pagenum
        }
    })

    return response.data.articles || []
})

const latestSlice = createSlice({
    name: "latest",
    initialState: {
        latestNews:[]
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLatest.fulfilled, (state, action) => {
                state.latestNews = action.payload
            })
    }
})

export default latestSlice.reducer
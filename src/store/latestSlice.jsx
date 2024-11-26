import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api_key = import.meta.env.VITE_API_KEY;
const url = 'https://newsapi.org/v2/everything';


export const fetchLatest = createAsyncThunk('latest/fetchLatest', async ({ pagenum, query }) => {
    try {
        const response = await axios.get(url, {
            params: {
                apiKey: api_key,
                sortBy: 'publishedAt',
                q: query,
                pageSize: 10,
                page: pagenum,
            },
        });
        return response.data.articles || [];
    } catch (error) {
        console.log(error);
    }
});

const latestSlice = createSlice({
    name: "latest",
    initialState: {
        latestNews:[],
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchLatest.fulfilled, (state, action) => {
                state.latestNews = action.payload
            })
    }
})

export default latestSlice.reducer
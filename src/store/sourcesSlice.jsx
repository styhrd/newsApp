import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const api_key = import.meta.env.VITE_API_KEY
const url = 'https://newsapi.org/v2/top-headlines/sources'

export const fetchSources = createAsyncThunk('sources/fetchSources', async (cat, lang, coun) => {
    const response = await axios.get(url, {
        params: {
            apiKey: api_key,
            category: cat,
            language: lang,
            country: coun

        }
    })

    return response.data.sources || []
})

const sourcesSlice = createSlice({
    name: "sources",
    initialState: {
        sources: []
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchSources.fulfilled, (state, action) => {
                state.sources = action.payload
            })
    }
})

export default sourcesSlice.reducer
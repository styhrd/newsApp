import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api_key = import.meta.env.VITE_API_KEY;
const url = 'https://newsapi.org/v2/top-headlines/sources';

// Asynchronous Thunks to fetch sources based on category or country
export const fetchSources = createAsyncThunk('sources/fetchSources', async (cat) => {
    const response = await axios.get(url, {
        params: {
            apiKey: api_key,
            category: cat,
        }
    });

    return response.data.sources || [];
});

export const fetchSourcesCount = createAsyncThunk('sources/fetchSourcesCount', async (count) => {
    const response = await axios.get(url, {
        params: {
            apiKey: api_key,
            country: count,
        }
    });

    return response.data.sources || [];
});

const sourcesSlice = createSlice({
    name: "sources",
    initialState: {
        sources: [], // All sources
        selectedSource: null // Details of the selected source
    },
    reducers: {
        // Reducer to select a source by its id
        fetchDetails: (state, action) => {
            const selectedDetails = state.sources.find((source) => source.id === action.payload);
            state.selectedSource = selectedDetails || null; // Update selected source or set null if not found
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSources.fulfilled, (state, action) => {
                state.sources = action.payload; // Store fetched sources
            })
            .addCase(fetchSourcesCount.fulfilled, (state, action) => {
                state.sources = action.payload; // Store fetched sources by country
            });
    }
});

export const { fetchDetails } = sourcesSlice.actions;

export default sourcesSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios'
import { Article } from '../types/type';
import { NewsState } from '../types/type';


const API_KEY = "9d0586cac9174864b5772bfaf5bab763"
const filter = "country=us"


const initialState: NewsState = {
    newsData: [],
    loading: false,
    error: null
}

export const getNews = createAsyncThunk("getNews", async () => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?${filter}&apiKey=${API_KEY}`)
    console.log(response.data)
    return response.data.articles;
})


export const NewsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getNews.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(getNews.fulfilled, (state, action) => {
            state.loading = false;
            state.newsData = action.payload;
        })
        builder.addCase(getNews.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Beklenmeyen Bir Hata Oluştu"

        })
    }
})

export default NewsSlice.reducer
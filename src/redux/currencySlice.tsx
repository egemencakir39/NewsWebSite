import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'


const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const BASE_KEY = "fca_live_FmnXKq4RVn4DcODkaOfqOGp4Rvyg9oUrSraND8fP";

export interface CurrencyState {
    currencyData: Record<string, number>;
    loading: boolean;
    error: string | null;
}

const initialState: CurrencyState = {
    currencyData: {},
    loading: false,
    error: null
}
export const getCurrency = createAsyncThunk("getCurrency", async () => {
    const response = await axios.get(`${BASE_URL}?apikey=${BASE_KEY}&base_currency=TRY`);
    console.log(response.data.data)
    return response.data.data;

})

export const CurrencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getCurrency.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(getCurrency.fulfilled, (state, action) => {
            state.loading = false;
            state.currencyData = action.payload;
        })
        builder.addCase(getCurrency.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Beklenmeyen Bir Hata Oluştu"
        })

    }
})


export default CurrencySlice.reducer
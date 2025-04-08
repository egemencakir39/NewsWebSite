import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from '../redux/currencySlice'
import newsReducer from '../redux/newsSlice'

export const store = configureStore({
    reducer: {
        currency: currencyReducer,
        news: newsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
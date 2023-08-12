import { configureStore } from "@reduxjs/toolkit"
import createSliceProducts from "./api/products"
import { logger } from "redux-logger"
import createSliceBuy from "./buy/createSliceBuy"

const store = configureStore({
    reducer: {
        products: createSliceProducts,
        buy: createSliceBuy,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store
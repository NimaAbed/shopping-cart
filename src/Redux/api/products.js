import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    error: "",
}

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const data = await axios.get("https://fakestoreapi.com/products")
    return data.data
})

const createSliceProducts = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default createSliceProducts.reducer
export { fetchProducts }
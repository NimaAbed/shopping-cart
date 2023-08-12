import { createSlice } from "@reduxjs/toolkit";
import { totals } from "../../helper/helper";

const initialState = {
    itemSelected: [],
    itemCounter: 0,
    total: 0,
    checkOut: false
}

const createSliceBuy = createSlice({
    name: "buy",
    initialState,
    reducers: {
        addToCard: (state, action) => {
            if (!state.itemSelected.find(item => item.id === action.payload.id)) {
                state.itemSelected.push({ ...action.payload, quentity: 1 })
                state.itemCounter = totals(state).itemCounter
                state.total = totals(state).total.toFixed(2)
            }
        },
        increaseItem: (state, action) => {
            if (state.itemSelected.find(item => item.id == action.payload.id)) {
                const index = state.itemSelected.findIndex(item => item.id === action.payload.id)
                state.itemSelected[index].quentity += 1
                state.itemCounter = totals(state).itemCounter
                state.total = totals(state).total.toFixed(2)
            }
        },
        decreaseItem: (state, action) => {
            if (state.itemSelected.find(item => item.id == action.payload.id)) {
                const index = state.itemSelected.findIndex(item => item.id === action.payload.id)
                const quentity = state.itemSelected[index].quentity
                if (quentity > 1) {
                    state.itemSelected[index].quentity -= 1
                    state.itemCounter = totals(state).itemCounter
                    state.total = totals(state).total.toFixed(2)
                } else {
                    const result = state.itemSelected.filter(item => item.id !== action.payload.id)
                    state.itemSelected = result
                    state.itemCounter = totals(state).itemCounter
                    state.total = totals(state).total.toFixed(2)
                }
            }
        },
        checkout: (state) => {
            state.itemSelected = []
            state.itemCounter = 0
            state.total = 0
            state.checkOut = true
        },
        clear: (state) => {
            state.itemSelected = []
            state.itemCounter = 0
            state.total = 0
            state.checkOut = false
        }
    }
})

export default createSliceBuy.reducer
export const { addToCard, increaseItem, decreaseItem, checkout, clear } = createSliceBuy.actions
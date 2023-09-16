import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = '';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: filtersInitialState,
    reducers: {
        setFilter: {
            reducer(state, action) {
                action.payload.toLowerCase()
            },
        },
        prepare(name) {
            return {
            payload: name,
            };
        },
    }
})

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: ""
};

const filterSlice = createSlice({
    name: "filters",
    initialState: initialState,
    reducers:{
        filterSlise(state, action) {
            state.name = action.payload;
        },
    },
})

export const { filterSlise } = filterSlice.actions;
export const selectNameFilter = state => state.filters.name;
export const filtersReducer = filterSlice.reducer;
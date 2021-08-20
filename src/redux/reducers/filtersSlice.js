import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    category: 'women',
    filter: ''
};

const filterSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
});

export const {setCategory, setFilter} = filterSlice.actions;
export const selectFilters = state => state.filters;
export default filterSlice.reducer;

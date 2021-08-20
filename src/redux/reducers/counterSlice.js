import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.count++;
        },
        decrement: (state, action) => {
            state.count--;
        }
    }
});

export const {increment, decrement} = counterSlice.actions;
export const selectCount = state => state.counter;
export default counterSlice.reducer;
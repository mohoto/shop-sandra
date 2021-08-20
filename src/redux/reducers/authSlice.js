import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: null,
    authentificated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.user = action.payload;
            state.authentificated = true;
        },
        logOut: (state, action) => {
            state.user = null;
            state.authentificated = false;
        },
        updateProfile: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const {logIn, logOut, updateProfile} = authSlice.actions;
export const selectAuth = state => state.auth;
export default authSlice.reducer;
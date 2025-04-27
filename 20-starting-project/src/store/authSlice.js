import { createSlice } from "@reduxjs/toolkit";

const initialState =  {auth: false};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {state.auth = false},
        login: (state) => {state.auth = true}
    }

});

export const authActions = authSlice.actions;
export default authSlice.reducer;
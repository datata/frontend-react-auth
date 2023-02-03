import { createSlice } from "@reduxjs/toolkit";

const initialState = { jwt: ""};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateJwt: (state, action) => {
            state.jwt = action.payload
        }
    }
})

export const { updateJwt } = authSlice.actions;
export default authSlice.reducer

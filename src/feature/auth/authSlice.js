import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    jwt: "",
    user: {
        id: "",
        email: "",
        name: ""
    },
    isLogged: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateJwt: (state, action) => {
            state.jwt = action.payload
        },
        updateUserProfile: (state, action) => {
            state.user.id = action.payload.id;
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
        },
        updateIsLogged: (state, action) => {
            state.isLogged = action.payload
        },
    }
})

export const { updateJwt, updateUserProfile, updateIsLogged } = authSlice.actions;
export default authSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    jwt: "",
    user: {
        id: "",
        email: "",
        name: ""
    }
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
        }
    }
})

export const { updateJwt, updateUserProfile } = authSlice.actions;
export default authSlice.reducer

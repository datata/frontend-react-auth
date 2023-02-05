import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    tasks: []
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        updateTasks: (state, action) => {
            state.tasks = action.payload
        },
        logout: (state, action) => {
            console.log('logout');
            state.tasks = [];
        }
    }
})

export const { updateTasks, logout } = taskSlice.actions;
export default taskSlice.reducer

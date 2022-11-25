import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: {
            username: "",
            age: null,
            email: ""
        }
    },
    reducers: {
        // here state is current state of application
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = {
                username: "",
                age: null,
                email: ""
            }
        }
    }
})

export default userSlice.reducer;

export const { login, logout } = userSlice.actions
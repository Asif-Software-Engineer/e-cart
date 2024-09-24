import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk('auth/login', async (credentials) => {
    const {name, password} = credentials;
    const storedUser = JSON.parse(sessionStorage.getItem("authUser"));
    if (!storedUser || storedUser.name !== name || storedUser.password !== password) {
        throw new Error('Invalid username or password');
    }
    return {...storedUser, authUser: true};
});

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(sessionStorage.getItem("authUser")) || {
            name: "",
            password: "",
            email: "",
            authUser: false,
        },
        status: 'idle',
        error: null,
    },
    reducers: {
        // login(state, action) {
        //     const { name, password } = action.payload;
        //     const userValidation = /^[A-Za-z]{4,30}$/i.test(name);
        //     const passwordValidation = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,20}$/i.test(password);

        //     if (!userValidation || !passwordValidation) {
        //         state.error = "Invalid credentials";
        //         return;
        //     }

        //     const storedUser = JSON.parse(sessionStorage.getItem("authUser"));
        //     if (storedUser.name === name && storedUser.password === password) {
        //         state.user = { ...storedUser, authUser: true };
        //         sessionStorage.setItem("authUser", JSON.stringify(state.user));
        //     } else {
        //         state.error = "Invalid username or password";
        //     }
        // },
        logout(state) {
            state.user = {
                name: "",
                password: "",
                email: "",
                authUser: false,
            };
            sessionStorage.clear();
        },
        signup(state, action) {
            const newUser = action.payload;
            state.user = { ...newUser, authUser: false };
            sessionStorage.setItem("authUser", JSON.stringify(state.user));
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
                sessionStorage.setItem("authUser", JSON.stringify(state.user));
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

export const { logout, signup } = authSlice.actions;
export default authSlice.reducer;

import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./features/auth/authSlice"
import adminReducer from "./features/admin/adminSlice"
import companiesReducer from "./features/companies/companiesSlice"
import usersReducer from "./features/users/usersSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        admin: adminReducer,
        companies: companiesReducer,
        users: usersReducer
    }
})
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "./authServices";

const initialState = {
    admin: JSON.parse(window.localStorage.getItem("admin")) || {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
}

export const register = createAsyncThunk("auth/register", 
async(data, thunkAPI)=>{
    try{
        return await authServices.register(data)
    }
    catch(err){
        let message = "";
        if(!err?.response){
            message = "No server response"
        }
        else if(err?.response?.status === 400){
            message = "There is some admin information missing"
        }
        else if(err?.response?.status === 401){
            window.localStorage.removeItem("admin");
        }
        else if(err?.response?.status === 409){
            message = "Username or email used before"
        }
        else{
            message = "Signup faild"
        }
        return thunkAPI.rejectWithValue(message)
    }
})

export const logIn = createAsyncThunk("auth/log-in",
async(admin, thunkAPI)=>{

    try{
        const response = await authServices.logIn(admin)

        // console.log("response in logIn", response)

        window.localStorage.setItem("admin", JSON.stringify(response))
        return response;
    }
    catch(err){
        let message = "";
        if(!err?.response){
            message = "No server response"
        }
        else if(err?.response?.status === 400){
            message = "There is some admin information missing"
        }
        else if(err?.response?.status === 401){
            message = "Uncorrect email or password"
        }
        else{
            message = "LogIn faild"
        }
        return thunkAPI.rejectWithValue(message)
    }
})

export const logOut = createAsyncThunk("auth/log-out", async()=>{

    const response = await authServices.logOut()

    console.log("response in logOut", response)

    window.localStorage.removeItem("admin")
    
    // thunkAPI.dispatch(reset())
    return response;
})
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetState: (state)=>{
            state.admin= {}
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message= ""
        },
        resetStateStatus: (state)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message= ""
        },
        resetAccessToken: (state, action)=>{
            state.admin= {...state.admin, accessToken: action.payload}
        },

    },
    extraReducers: (builder)=>{
        builder
        .addCase(register.pending, (state)=>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
            state.message= ""
        })
        .addCase(register.fulfilled, (state)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.message= ""
        })
        .addCase(register.rejected, (state, action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message= action.payload
        })
        .addCase(logIn.pending, (state)=>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
            state.message= ""
        })
        .addCase(logIn.fulfilled, (state, action)=>{
            state.admin = action.payload
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.message= ""
        })
        .addCase(logIn.rejected, (state, action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message= action.payload
        })
        .addCase(logOut.pending, (state)=>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
            state.message= ""
        })
        .addCase(logOut.fulfilled, (state)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.message= ""
        })
    }
})

export const selectAuth = (state) => state.auth;
export const {resetState, resetStateStatus, resetAccessToken} = authSlice.actions;
export default authSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get_users } from "./usersServices.js";

const initialState = {
    users: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
}

export const getUsers = createAsyncThunk("users/all",
async(data, thunkAPI)=>{
    try{

        const response = await get_users();
        console.log("response in getusers action: ", response)
        return response;
    }
    catch(err){
        let message = "";
        if(!err?.response){
            message = "No server response"
        }
        else if(err?.response?.status === 401){
            window.localStorage.removeItem("admin");
        }
        else if(err?.response?.status === 403){
            message = "forbidden session"
        }
        else{
            message = "get all users faild"
        }
        return thunkAPI.rejectWithValue(message)
    }
})

const usersSlice = createSlice({
    name: "users",
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
        }
    },
    extraReducers: (builder)=>{
      builder
      .addCase(getUsers.pending, (state, action)=>{
          state.isLoading= true
          state.isSuccess= false
          state.isError= false
          state.message= ""
      })
      .addCase(getUsers.fulfilled, (state, action)=>{
            state.users = action.payload
            state.isLoading= false
            state.isSuccess= true
            state.isError= false
            state.message= ""
      })
      .addCase(getUsers.rejected, (state, action)=>{
          state.isLoading= false
          state.isSuccess= false
          state.isError= true
          state.message= action.payload
      })
    }
});

export const selectUsers = (state) => state.users;
export const {resetState, resetStateStatus} = usersSlice.actions;
export default usersSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ban_company, create_company, delete_company, get_all_companies, unban_company } from "./companiesServices";

const initialState = {
    companies: {
        all: [],
        banned: [],
        deleted: []
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
}

export const getAllCompanies = createAsyncThunk("companies/all",
async(_, thunkAPI)=>{
    try{

        const response = await get_all_companies();
        console.log("response in getAllCompanies action: ", response)
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

export const createCompany = createAsyncThunk("companies/create",
async(companyData, thunkAPI)=>{
    try{
        console.log("user data in create company", companyData)
        return await create_company(companyData);
    }
    catch(err){
        let message = "";
        if(!err?.response){
            message = "No server response"
        }
        else if(err?.response?.status === 400){
            message = "Missing some user data"
        }
        else if(err?.response?.status === 401){
            message = "You are not logged in"
        }
        else if(err?.response?.status === 403){
            message = "Your session is ended, login again"
        }
        else if(err?.response?.status === 404){
            console.log("404 error: ", err.response)
            message = "This user not found"
        }
        else{
            message = "something went wrong"
        }
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteCompany = createAsyncThunk("companies/delete-company",
async(companyId, thunkAPI)=>{
    try{
        console.log("company id in deleteCompany method", companyId)
        return await delete_company(companyId);
    }
    catch(err){
        let message = "";
        if(!err?.response){
            message = "No server response"
        }
        else if(err?.response?.status === 400){
            message = "Missing company id"
        }
        else if(err?.response?.status === 401){
            message = "You are not logged in"
        }
        else if(err?.response?.status === 403){
            message = "Your session is ended, login again"
        }
        else if(err?.response?.status === 404){
            message = "This user not found"
        }
        else{
            message = "something went wrong"
        }
        return thunkAPI.rejectWithValue(message)
    }
})

export const banCompany = createAsyncThunk("companies/ban-company",
async({companyId, period}, thunkAPI)=>{
    try{
        console.log("company id and period in banCompany method", companyId, period)
        return await ban_company(companyId, period);
    }
    catch(err){
        let message = "";
        if(!err?.response){
            message = "No server response"
        }
        else if(err?.response?.status === 400){
            message = "Missing company id"
        }
        else if(err?.response?.status === 401){
            message = "You are not logged in"
        }
        else if(err?.response?.status === 403){
            message = "Your session is ended, login again"
        }
        else if(err?.response?.status === 404){
            message = "This user not found"
        }
        else{
            message = "something went wrong"
        }
        return thunkAPI.rejectWithValue(message)
    }
})

export const unbanCompany = createAsyncThunk("companies/unban-company",
async(companyId, thunkAPI)=>{
    try{
        console.log("company id in unbanCompany method", companyId)
        return await unban_company(companyId);
    }
    catch(err){
        let message = "";
        if(!err?.response){
            message = "No server response"
        }
        else if(err?.response?.status === 400){
            message = "Missing company id"
        }
        else if(err?.response?.status === 401){
            message = "You are not logged in"
        }
        else if(err?.response?.status === 403){
            message = "Your session is ended, login again"
        }
        else if(err?.response?.status === 404){
            message = "This user not found"
        }
        else{
            message = "something went wrong"
        }
        return thunkAPI.rejectWithValue(message)
    }
})

const companiesSlice = createSlice({
    name: "companies",
    initialState,
    reducers: {
        addToCompanies: (state, action)=>{
            state.companies= {
                ...state.companies,
                all: [action.payload, ...state.companies.all]
            }
        },
        addToBannedCompanies: (state, action)=>{
            console.log("bannedCompany", action.payload)
            state.companies= {
                ...state.companies,
                banned: [action.payload, ...state.companies.banned]
            }
        },
        updateBannedCompanies: (state, action)=>{
            state.companies= {
                ...state.companies,
                banned: [...action.payload]
            }
        },
        addToDeletedCompanies: (state, action)=>{    
            state.companies= {
                ...state.companies,
                deleted: [action.payload, ...state.companies.deleted]
            }
        },
        updateDeletedCompanies: (state, action)=>{    
            state.companies= {
                ...state.companies,
                deleted: [...action.payload]
            }
        },
        resetState: (state, action)=>{
            state.companies= {}
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
        manuplateCompanies: (state, action)=>{
            state.companies= action.payload(state.companies);
        }
    },
    extraReducers: (builder)=>{
      builder
      .addCase(getAllCompanies.pending, (state, action)=>{
          state.isLoading= true
          state.isSuccess= false
          state.isError= false
          state.message= ""
      })
      .addCase(getAllCompanies.fulfilled, (state, action)=>{
            state.companies = action.payload
            state.isLoading= false
            state.isSuccess= true
            state.isError= false
            state.message= ""
      })
      .addCase(getAllCompanies.rejected, (state, action)=>{
          state.isLoading= false
          state.isSuccess= false
          state.isError= true
          state.message= action.payload
      })
    }
});

export const selectCompanies = state => state.companies;
export const {manuplateCompanies, addToCompanies, addToBannedCompanies, updateBannedCompanies, addToDeletedCompanies, updateDeletedCompanies, resetState, resetStateStatus} = companiesSlice.actions;
export default companiesSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ban_User, create_user, delete_User, get_users, unban_User } from "./adminServices";

const initialState = {
    admin: {
        adminData: null, 
        companies: [], 
        bannedCompanies: [], 
        deletedCompanies: [],
        users: [], 
        bannedUsers: [], 
        deletedUsers: []
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
}

// export const getMyAccountInfo = createAsyncThunk("user/myAccount/info",
// async(userName, thunkAPI)=>{
//     try{
//         console.log("userName in getMyAccountInfo", userName)
//         return await userServices.getMyAccountInfo();
//     }
//     catch(err){
//         let message = "";
//         if(!err?.response){
//             message = "No server response"
//         }
//         else if(err?.response?.status === 400){
//             message = "Missing some post information"
//         }
//         else if(err?.response?.status === 401){
//             message = "You are not logged in"
//         }
//         else if(err?.response?.status === 403){
//             message = "Your session is ended, login again"
//         }
//         else if(err?.response?.status === 404){
//             message = "This account not found"
//         }
//         else{
//             message = "Faild to get your account"
//         }
//         return thunkAPI.rejectWithValue(message)
//     }
// })

// export const getAccountInfo = createAsyncThunk("user/account/info",
// async(userName, thunkAPI)=>{
//     try{
//         console.log("userName in getAccountInfo", userName)
//         return await userServices.getAccountInfo(userName);
//     }
//     catch(err){
//         let message = "";
//         if(!err?.response){
//             message = "No server response"
//         }
//         else if(err?.response?.status === 400){
//             message = "Missing some post information"
//         }
//         else if(err?.response?.status === 404){
//             message = "This account not found"
//         }
//         else{
//             message = "Faild to get user account"
//         }
//         return thunkAPI.rejectWithValue(message)
//     }
// })

// export const getMyPosts = createAsyncThunk("user/myAccount/posts",
// async(userName, thunkAPI)=>{
//     try{
//         console.log("userName in getMyPosts", userName)
//         return await userServices.getMyPosts();
//     }
//     catch(err){
//         let message = "";
//         if(!err?.response){
//             message = "No server response"
//         }
//         else if(err?.response?.status === 400){
//             message = "Missing some post information"
//         }
//         else if(err?.response?.status === 401){
//             message = "You are not logged in"
//         }
//         else if(err?.response?.status === 403){
//             message = "Your session is ended, login again"
//         }
//         else{
//             message = "Faild to get your account"
//         }
//         return thunkAPI.rejectWithValue(message)
//     }
// })

// export const getUserPosts = createAsyncThunk("user/account/posts",
// async(userName, thunkAPI)=>{
//     try{
//         console.log("userName in getUserPosts", userName)
//         return await userServices.getUserPosts(userName);
//     }
//     catch(err){
//         let message = "";
//         if(!err?.response){
//             message = "No server response"
//         }
//         else if(err?.response?.status === 400){
//             message = "Missing some post information"
//         }
//         else if(err?.response?.status === 404){
//             message = "user account not found"
//         }
//         else{
//             message = "Faild to get user posts"
//         }
//         return thunkAPI.rejectWithValue(message)
//     }
// })

// export const uploadVector = createAsyncThunk("user/vector/upload", 
// async (formData, thunkAPI)=>{
//     try{
//         console.log("formData in upload vector", formData)
//         return await userServices.uploadVector(formData);
//     }
//     catch(err){
//         let message = "";
//         if(!err?.response){
//             message = "No server response"
//         }
//         else if(err?.response?.status === 400){
//             message = "Missing some post information"
//         }
//         else if(err?.response?.status === 401){
//             message = "You are not logged in"
//         }
//         else if(err?.response?.status === 403){
//             message = "Your session is ended, login again"
//         }
//         else{
//             message = "Faild to upload user vector"
//         }
//         return thunkAPI.rejectWithValue(message)
//     }
    
// })

// export const editAccount = createAsyncThunk("user/account/edit",
// async(userInformation, thunkAPI)=>{
//     try{
//         console.log("userInformation in editAccount function", userInformation)
//         return await userServices.editAccount(userInformation);
//     }
//     catch(err){
//         let message = "";

//         if(!err?.response){
//             message = "No server response"
//         }
//         else if(err?.response?.status === 401){
//             message = "You are not logged in"
//         }
//         else if(err?.response?.status === 403){
//             message = "Your session is ended, login again"
//         }
//         else{
//             message = "Faild to edit your account"
//         }
//         return thunkAPI.rejectWithValue(message)
//     }
// })

export const createUser = createAsyncThunk("admin/create-user",
async(userData, thunkAPI)=>{
    try{
        console.log("user data in create user", userData)
        return await create_user(userData);
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

export const getUser = createAsyncThunk("admin/get-users",
async(_, thunkAPI)=>{
    try{
        return await get_users();
    }
    catch(err){
        let message = "";
        if(!err?.response){
            message = "No server response"
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

export const deleteUser = createAsyncThunk("admin/delete-user",
async(userId, thunkAPI)=>{
    try{
        console.log("user id in delete user", userId)
        return await delete_User(userId);
    }
    catch(err){
        let message = "";
        if(!err?.response){
            message = "No server response"
        }
        else if(err?.response?.status === 400){
            message = "Missing user id"
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

export const banUser = createAsyncThunk("admin/ban-user",
async({userId, period}, thunkAPI)=>{
    try{
        console.log("user id and period in ban user", userId, period)
        return await ban_User(userId, period);
    }
    catch(err){
        let message = "";
        if(!err?.response){
            message = "No server response"
        }
        else if(err?.response?.status === 400){
            message = "Missing user id"
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

export const unbanUser = createAsyncThunk("admin/unban-user",
async(userId, thunkAPI)=>{
    try{
        console.log("user id user", userId)
        return await unban_User(userId);
    }
    catch(err){
        let message = "";
        if(!err?.response){
            message = "No server response"
        }
        else if(err?.response?.status === 400){
            message = "Missing user id"
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

const adminSlice = createSlice({
  name: "admin",
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
    addToCompanies: (state, action)=>{
        state.admin = {...state.admin, companies: [action.payload, ...state.admin.companies]}
    },
    addToBannedCompanies: (state, action)=>{
        state.admin= {...state.admin, bannedCompanies: [action.payload, ...state.admin.bannedCompanies]}
    },
    addToDeletedCompanies: (state, action)=>{
        state.admin= {...state.admin, bannedCompanies: [action.payload, ...state.admin.bannedCompanies]}
    },
    addUser: (state, action)=>{
        state.admin = {...state.admin, users: [action.payload, ...state.admin.users]}
    },
    addToBannedUsers: (state, action)=>{
        state.admin= {...state.admin, bannedUsers: [action.payload, ...state.admin.bannedUsers]}
    },
    addToDeletedUsers: (state, action)=>{
        state.admin= {...state.admin, bannedUsers: [action.payload, ...state.admin.bannedUsers]}
    }
  },
  extraReducers: (builder)=>{
    builder
    .addCase(getUser.pending, (state, action)=>{
        state.isLoading= true
        state.isSuccess= false
        state.isError= false
        state.message= ""
    })
    .addCase(getUser.fulfilled, (state, action)=>{
        state.admin = {...state.admin, ...action.payload}
        state.isLoading= false
        state.isSuccess= true
        state.isError= false
        state.message= ""
    })
    .addCase(getUser.rejected, (state, action)=>{
        state.isLoading= false
        state.isSuccess= false
        state.isError= true
        state.message= action.payload
    })
    .addCase(createUser.pending, (state, action)=>{
        state.isLoading= true
        state.isSuccess= false
        state.isError= false
        state.message= ""
    })
    .addCase(createUser.fulfilled, (state, action)=>{
        state.admin = {
            ...state.admin, 
            users: [action.payload, ...state.admin.users]
        }
        state.isLoading= false
        state.isSuccess= true
        state.isError= false
        state.message= ""
    })
    .addCase(createUser.rejected, (state, action)=>{
        state.isLoading= false
        state.isSuccess= false
        state.isError= true
        state.message= action.payload
    })
  } 
})

export const selectAdmin = state => state.admin;
export const {resetState, resetStateStatus, addToCompanies, addToBannedCompanies, addToDeletedCompanies, addUser, addToBannedUsers, addToDeletedUsers} = adminSlice.actions;
export default adminSlice.reducer;
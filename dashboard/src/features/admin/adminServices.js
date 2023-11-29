import axios from "../../api/axios";
import withInterceptors from "../../utils/withInterceptors";

// const getAccountInfo = async(userName)=>{
//     console.log("userName in accountinfo service", userName)
//     const response = await axios
//     .get(`/user/${userName}/accountInfo`)
//     console.log("response in get user account", response)
//     return response.data;
// }

// const getMyAccountInfo = async()=>{
//     const axiosWithInterceptors = await withInterceptors();
//     const response = await axiosWithInterceptors
//     .get(`/user/myAccountInfo`)
//     console.log("response in get my account", response)
//     return response.data;
// }

// const getUserPosts = async(userName)=>{
//     console.log("userName in getUserPosts service", userName)
//     const response = await axios
//     .get(`/user/${userName}/userPosts`)
//     console.log("response in getUserPosts", response)
//     return response.data;
// }

// const getMyPosts = async()=>{
//     const axiosWithInterceptors = await withInterceptors();
//     const response = await axiosWithInterceptors
//     .get(`/user/myPosts`)
//     console.log("response in get myPosts", response)
//     return response.data;
// }

// const uploadVector = async(formData)=>{
//     const axiosWithInterceptors = await withInterceptors();
//     const response = await axiosWithInterceptors
//     .post("/file/upload",formData, {
//         headers: {"content-type": "multipart/form-data"}
//     })
//     // .then(res=> console.log("res",res))
//     console.log("response in upload user vector", response)
//     return response.data;
// }

// const editAccount = async(userInformation)=>{
//     const axiosWithInterceptors = await withInterceptors();
//     const response = await axiosWithInterceptors
//         .put(`/user/account/edit`,JSON.stringify({...userInformation}))
//         console.log("response in edit user account", response)
//         return response.data;
    
// }
export const create_user = async (userData)=>{
    const axiosWithInterceptors = await withInterceptors();
    const response = await axiosWithInterceptors
    .post("/admin/create-user", JSON.stringify(userData));

    return response.data;
}

export const get_users = async ()=>{
    const axiosWithInterceptors = await withInterceptors();
    console.log("axiosWithInterceptors", axiosWithInterceptors);
    const response = await axiosWithInterceptors
                            .get("/users/all");

    return response.data;
}

export const delete_User = async(userId)=>{
    const axiosWithInterceptors = await withInterceptors();
    const response = await axiosWithInterceptors
    .post(`/admin/delete-user`, JSON.stringify({userId}))
    // console.log("response in delete user", response)
    return response.data;
}

export const ban_User = async(userId, period)=>{
   console.log("userId", userId, "period", period);
    const axiosWithInterceptors = await withInterceptors();
    const response = await axiosWithInterceptors
    .post(`/admin/user/ban`, JSON.stringify({userId, period}))
    // console.log("response in ban user", response)
    return response.data;
}

export const unban_User = async(userId)=>{
   console.log("userId", userId);
    const axiosWithInterceptors = await withInterceptors();
    const response = await axiosWithInterceptors
    .post(`/admin/unban-user`, JSON.stringify({userId}))
    // console.log("response in ban user", response)
    return response.data;
}

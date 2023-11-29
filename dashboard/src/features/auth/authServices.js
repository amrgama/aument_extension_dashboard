import axios from "../../api/axios";
import { axiosPrivate } from "../../api/axios";

const register = async(adminData)=>{
    console.log("adminData", adminData);
    const response = await axios.post("/admin/register", JSON.stringify(adminData),
    {
        headers: {'Content-Type': "application/json"},
        withCredentials: true
    })
    return response.data
}

const logIn = async(adminData)=>{
    const response = await axios.post("/admin/auth/log-in", JSON.stringify(adminData),
    {
        headers: {'Content-Type': "application/json"},
        withCredentials: true
    })
    return response.data
}

const logOut = async()=>{
    const response = await axios.get("/admin/auth/log-out",{
        withCredentials: true,
    })
    return response.data
}

const authServices ={
    register,
    logIn,
    logOut,
}

export default authServices
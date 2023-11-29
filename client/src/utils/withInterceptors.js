// import axios from "axios"
import { axiosPrivate } from "../api/axios"
import refresh from "./refresh"
import { toast } from 'react-toastify'

const withInterceptors = async()=>{
    const accessToken = JSON.parse(window.localStorage.getItem("user"))?.accessToken
    console.log("accesstoken in withAxios", accessToken)

    const requestIntercept = axiosPrivate.interceptors.request.use(
        config =>{
            if(!config.headers['Authorization']){
                config.headers['Authorization'] = `Bear ${accessToken}`
                console.log("Authorization",config.headers['Authorization'])
            }
            // console.log("Authorization",config.headers['Authorization'])
            return config;
        }, (error)=> {
            console.log("error in withAxios", error)
            return Promise.reject(error)
        }
    )

    const responseIntercept = axiosPrivate.interceptors.response.use(
        response => response,
        async(error)=>{
            console.log("error in responseInterce", error.config)
            const prevRequest = error?.config
            if(error?.response?.status === 403 && !prevRequest.sent){
                prevRequest.sent = true;
                const newAccessToken = await refresh()
                console.log("newAccessToken", newAccessToken)
                prevRequest.headers["Authorization"] = `Bear ${newAccessToken}`
                console.log("response in responseIntercepter", error.response.data)

                const user = JSON.parse(window.localStorage.getItem("user"))
                // console.log("userbefore", user)
                window.localStorage.setItem("user", JSON.stringify({...user, "accessToken": newAccessToken}))
                // const newuser = JSON.parse(window.localStorage.getItem("user"))
                // console.log("userafter", newuser)

                console.log("prevRequest", prevRequest)
                
                return axiosPrivate(prevRequest)
            }
            if(error?.response?.status === 401 && !prevRequest.sent){
                window.localStorage.removeItem("user");
            }
            return Promise.reject(error);
        }
    )

    // axiosPrivate.interceptors.request.eject(requestIntercept)
    // axiosPrivate.interceptors.response.eject(responseIntercept)  
    return axiosPrivate
}

export default withInterceptors;
import axios from "../../api/axios";
import withInterceptors from "../../utils/withInterceptors.js";

export const get_users = async ()=>{
    const axiosWithInterceptors = await withInterceptors();
    console.log("axiosWithInterceptors", axiosWithInterceptors);
    const response = await axiosWithInterceptors
                            .get("/users/all");

    return response.data;
}
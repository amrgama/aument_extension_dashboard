import axios from "../../api/axios";
import withInterceptors from "../../utils/withInterceptors.js";

export const get_all_companies = async ()=>{
    const axiosWithInterceptors = await withInterceptors();
    console.log("axiosWithInterceptors", axiosWithInterceptors);
    const response = await axiosWithInterceptors
                            .get("/companies/all");

    return response.data;
}

export const create_company = async (companyData)=>{
    const axiosWithInterceptors = await withInterceptors();
    const response = await axiosWithInterceptors
    .post("/companies/create-company", JSON.stringify(companyData));

    return response.data;
}

export const delete_company = async(companyId)=>{
    const axiosWithInterceptors = await withInterceptors();
    const response = await axiosWithInterceptors
    .post(`/companies/delete-company`, JSON.stringify({companyId}))
    // console.log("response in delete user", response)
    return response.data;
}

export const undelete_company = async(companyId)=>{
    console.log("companyId", companyId);
     const axiosWithInterceptors = await withInterceptors();
     const response = await axiosWithInterceptors
     .post(`/companies/undelete-company`, JSON.stringify({companyId}))
     // console.log("response in ban user", response)
     return response.data;
 }

export const ban_company = async(companyId, period)=>{
   console.log("companyId", companyId, "period", period);
    const axiosWithInterceptors = await withInterceptors();
    const response = await axiosWithInterceptors
    .post(`/companies/ban-company`, JSON.stringify({companyId, period}))
    // console.log("response in ban user", response)
    return response.data;
}

export const unban_company = async(companyId)=>{
   console.log("companyId", companyId);
    const axiosWithInterceptors = await withInterceptors();
    const response = await axiosWithInterceptors
    .post(`/companies/unban-company`, JSON.stringify({companyId}))
    // console.log("response in ban user", response)
    return response.data;
}
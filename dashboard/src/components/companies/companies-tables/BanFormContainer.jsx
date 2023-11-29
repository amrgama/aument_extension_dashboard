import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import BanForm from './BanForm';
import { addToBannedCompanies, selectCompanies } from '../../../features/companies/companiesSlice';
import { ban_company } from '../../../features/companies/companiesServices';

const BanFormContainer = ({companyId, setDisable}) => {
    const dispatch = useDispatch()
    const response= useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    
    const {companies: {banned: bannedUsers}} = useSelector(selectCompanies);
    async function handleSubmit (companyId, period){
        try{
            setIsLoading(true);
            response.current = await ban_company(companyId, period);
            setIsLoading(false);
            setIsSuccess(true);
        }
        catch(err){
            console.log("error: ", err);
            setIsError(true);
            if(!err?.response){
                setErrorMsg("No server response")
            }
            else if(err?.response?.status === 400){
                setErrorMsg("Missing company id")
            }
            else if(err?.response?.status === 401){
                setErrorMsg("You are not logged in")
            }
            else if(err?.response?.status === 403){
                setErrorMsg("Your session is ended, login again")
            }
            else if(err?.response?.status === 404){
                setErrorMsg("This user not found")
            }
            else{
                setErrorMsg("something went wrong")
            }
        }
    }

    useEffect(()=>{
        
        if(response.current && isSuccess){
            toast.success("company banned successfully")
            // setDisable(true);
            console.log("new added banned company", response.current);
            dispatch(addToBannedCompanies(response.current))
        }
        
        if(isError && errorMsg){
            toast.error(errorMsg);
        }
    }, [response.current, isLoading, isSuccess, isError, errorMsg])
    
    return <BanForm 
                handleSubmit={handleSubmit} 
                companyId={companyId} 
                isLoading={isLoading} 
                isError={isError}
            /> 
}

export default BanFormContainer
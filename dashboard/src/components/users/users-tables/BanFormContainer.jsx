import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToBannedUsers, banUser, resetStateStatus, selectAdmin } from '../../../features/admin/adminSlice';
import { toast } from 'react-toastify';
import BanForm from './BanForm';
import { ban_User } from '../../../features/admin/adminServices';

const BanFormContainer = ({userId, setDisable}) => {
    const dispatch = useDispatch()
    const response= useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    
    const {admin: {bannedUsers}} = useSelector(selectAdmin);
    async function handleSubmit (userId, period){
        try{
            setIsLoading(true);
            response.current = await ban_User(userId, period);
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
                setErrorMsg("Missing user id")
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
            toast.success("user banned successfully")
            setDisable(true);
            console.log("new added banned user", response.current);
            dispatch(addToBannedUsers(response.current))
        }
        
        if(isError && errorMsg){
            toast.error(errorMsg);
        }
    }, [response.current, isLoading, isSuccess, isError, errorMsg])
    
    return <BanForm 
                handleSubmit={handleSubmit} 
                userId={userId} 
                isLoading={isLoading} 
                isError={isError}
            /> 
}

export default BanFormContainer
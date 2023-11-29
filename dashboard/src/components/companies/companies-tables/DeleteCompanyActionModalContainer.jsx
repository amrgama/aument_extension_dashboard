import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import ActionModal from '../../UI-kits/modals/action-modal/ActionModal';
import { toast } from 'react-toastify';
import {addToDeletedUsers } from '../../../features/admin/adminSlice';
import { addToDeletedCompanies, deleteCompany } from '../../../features/companies/companiesSlice';
import { delete_company } from '../../../features/companies/companiesServices';

const DeleteCompanyActionModalContainer = ({companyId, show, setShow}) => {

    const dispatch = useDispatch()
    const response = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const doAction = async()=>{
        // console.log("form data: ", data);

        try{
            setIsLoading(true);
            response.current = await delete_company(companyId);
            setIsLoading(false);
            setIsSuccess(true);
        }
        catch(err){

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
                setErrorMsg("This company not found")
            }
            else{
                setErrorMsg("something went wrong")
            }
        }
    }

    useEffect(()=>{
    
        if(isError){
          toast.error(errorMsg);
        }
    
        if(isSuccess){
            toast.success("company deleted successfully")
            setShow(false);
            dispatch(addToDeletedCompanies(response.current)) 
        }
    
    }, [response.current, isLoading, isSuccess, isError, errorMsg])

  return (
    <ActionModal
        id={'delete-user-modal'} 
        title={"Delete User"} 
        message={"Are you sure you want to delete this user?"}
        show={show}
        setShow={setShow}
        doAction={doAction}
        // actionConfig={{method: deleteUser, param: {userId}}}
        // selector={selector}
    />
  )
}

export default DeleteCompanyActionModalContainer
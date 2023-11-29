import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ActionModal from '../../UI-kits/modals/action-modal/ActionModal';
import { toast } from 'react-toastify';
import { undelete_company } from '../../../features/companies/companiesServices';
import { addToDeletedCompanies, manuplateCompanies, selectCompanies, updateDeletedCompanies } from '../../../features/companies/companiesSlice';

const UndeleteCompanyActionModalContainer = ({companyId, show, setShow, setIsDeleted}) => {
   
    const dispatch = useDispatch();
    const {companies: {deleted: deletedCompanies}} = useSelector(selectCompanies);
    const response = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    async function doAction(){

        try{
            setIsLoading(true);
            response.current = await undelete_company(companyId);
            setIsLoading(false);
            setIsSuccess(true);
        }
        catch(err){
            
            setIsError(true)
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
    
    function filterDeletedCompanies(deletedCompanies, deletedCompany){

        return deletedCompanies.filter(deleted_Company => {
            console.log("deleted_Company: ", deleted_Company, "deletedCompany: ", deletedCompany);
            return deleted_Company._id !== deletedCompany._id
        })
    }

    useEffect(()=>{
    
        if(isError){
          toast.error(errorMsg);
        }
    
        if(isSuccess){
            setIsDeleted(false);
            dispatch(updateDeletedCompanies(filterDeletedCompanies(deletedCompanies, response.current)))
            toast.success("company undeleted successfully")
            setShow(false);
        }
    
    }, [response.current, isLoading, isSuccess, isError, errorMsg])


  return (
    <ActionModal
        id={'undeleteCompanyModal'} 
        title={"undelete Company"} 
        message={"Are you sure you want to undelete this company?"}
        show={show}
        setShow={setShow}
        doAction={doAction}
    />
  )
}

export default UndeleteCompanyActionModalContainer
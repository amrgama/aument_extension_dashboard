import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ActionModal from '../../UI-kits/modals/action-modal/ActionModal';
import { toast } from 'react-toastify';
import { unban_company } from '../../../features/companies/companiesServices';
import { addToDeletedCompanies, selectCompanies, updateBannedCompanies } from '../../../features/companies/companiesSlice';

const UnbanCompanyActionModalContainer = ({companyId, show, setShow}) => {

    const dispatch = useDispatch()
    const {companies: {banned: bannedCompanies}} = useSelector(selectCompanies);
    const response = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const doAction = async()=>{
        // console.log("form data: ", data);

        try{
            setIsLoading(true);
            response.current = await unban_company(companyId);
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

    function filterBannedCompanies(bannedCompanies, bannedCompany){

        return bannedCompanies.filter(banned_Company => {
            console.log("banned_Company: ", banned_Company, "bannedCompany: ", bannedCompany);
            return banned_Company._id !== bannedCompany._id
        })
    }

    useEffect(()=>{
    
        if(isError){
          toast.error(errorMsg);
        }
    
        if(isSuccess){
            toast.success("company unbanned successfully")
            setShow(false);
            dispatch(updateBannedCompanies(filterBannedCompanies(bannedCompanies, response.current)))
        }
    
    }, [response.current, isLoading, isSuccess, isError, errorMsg])

  return (
    <ActionModal
        id={'unbanCompanyModal'} 
        title={"unban Company"} 
        message={"Are you sure you want to unban this company?"}
        show={show}
        setShow={setShow}
        doAction={doAction}
    />
  )
}

export default UnbanCompanyActionModalContainer
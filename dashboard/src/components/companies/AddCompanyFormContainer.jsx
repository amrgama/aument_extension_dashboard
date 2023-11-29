import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { create_company } from '../../features/companies/companiesServices';
import AddCompanyForm from './AddCompanyForm';
import { addToCompanies } from '../../features/companies/companiesSlice';

const AddCompanyFormContainer = ({setCloseModal}) => {

    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [newCompany, setNewCompany] = useState({});

    const submitForm = async(data)=>{
        // console.log("form data: ", data);

        if(!!data){
            try{
                setIsLoading(true);
                setNewCompany(await create_company(data));
                setIsLoading(false);
                setIsSuccess(true);
            }
            catch(err){
                setIsError(true);
                if(!err?.response){
                    setErrorMsg("No server response")
                }
                else if(err?.response?.status === 400){
                    setErrorMsg("Missing some company data")
                }
                else if(err?.response?.status === 401){
                    setErrorMsg("You are not logged in")
                }
                else if(err?.response?.status === 403){
                    setErrorMsg("Your session is ended, login again")
                }
                else{
                    setErrorMsg("something went wrong")
                }
            }
        }
    }

    useEffect(()=>{
    
        if(isError){
          toast.error(errorMsg);
          setCloseModal(isSuccess);
        }
    
        if(isSuccess){
            dispatch(addToCompanies(newCompany)) 
            toast.success("new company added successfully")
            setCloseModal(isSuccess);
        }
    
    }, [isLoading, isSuccess, isError, errorMsg])
  return (
    <AddCompanyForm submitForm={submitForm} isLoading={isLoading} />
  )
}

export default AddCompanyFormContainer
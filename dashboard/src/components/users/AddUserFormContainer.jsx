import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, createUser, selectAdmin } from '../../features/admin/adminSlice';
import AddUserForm from './AddUserForm';
import { toast } from 'react-toastify';
import { create_user } from '../../features/admin/adminServices';

const AddUserFormContainer = ({setCloseModal}) => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [newUser, setNewUser] = useState({});

    const submitForm = async(data)=>{
        // console.log("form data: ", data);

        if(!!data){
            try{
                setIsLoading(true);
                setNewUser(await create_user(data));
                setIsLoading(false);
                setIsSuccess(true);
            }
            catch(err){
                setIsError(true);
                if(!err?.response){
                    setErrorMsg("No server response")
                }
                else if(err?.response?.status === 400){
                    setErrorMsg("Missing some user data")
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
    }

    useEffect(()=>{
    
        if(isError){
          toast.error(errorMsg);
          setCloseModal(isSuccess);
        }
    
        if(isSuccess){
            dispatch(addUser(newUser)) 
            toast.success("new user added successfully")
            setCloseModal(isSuccess);
        }
    
    }, [isLoading, isSuccess, isError, errorMsg])
  return (
    <AddUserForm submitForm={submitForm} isLoading={isLoading} />
  )
}

export default AddUserFormContainer
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { unban_User } from '../../../features/admin/adminServices';
import ActionModal from '../../UI-kits/modals/action-modal/ActionModal';
import { toast } from 'react-toastify';
import { addToDeletedUsers } from '../../../features/admin/adminSlice';

const UnbanUserActionModalContainer = ({userId, show, setShow}) => {

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
            response.current = await unban_User(userId);
            setIsLoading(false);
            setIsSuccess(true);
        }
        catch(err){
            
            setIsError(true)
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
    
        if(isError){
          toast.error(errorMsg);
        }
    
        if(isSuccess){
            toast.success("new user added successfully")
            setShow(false);
            dispatch(addToDeletedUsers(response.current)) 
        }
    
    }, [response.current, isLoading, isSuccess, isError, errorMsg])

  return (
    <ActionModal
        id={'unban-user-modal'} 
        title={"unban User"} 
        message={"Are you sure you want to unban this user?"}
        show={show}
        setShow={setShow}
        doAction={doAction}
    />
  )
}

export default UnbanUserActionModalContainer
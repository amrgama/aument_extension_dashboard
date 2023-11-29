import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from '../form/FormInput';
import SubmitBtn from '../form/SubmitBtn';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, resetStateStatus, selectAdmin } from '../../features/admin/adminSlice';

const yupSchema = yup.object({
    companyName: yup.string()
    .required("company name is required"),
    username: yup.string()
    .required("username is required")
    .min(5, "username must contain at least 5 characters"),
    password: yup.string()
    .required("password is required")
    .min(8, "password length must contain at least 8 characters")
});

const AddUserForm = ({submitForm, isLoading}) => {

    const {
        handleSubmit,
        register,
        formState: {errors}
    } = useForm({
      resolver: yupResolver(yupSchema)
    })
    
    // const dispatch = useDispatch()
    // const {admin, isLoading, isSuccess, isError, message} = useSelector(selectAdmin);
      // const [isDisabled, setIsDisabled] = useState(false)
    
      // useEffect(()=>{
    
      //   if(isError){
      //     toast.error(message);
      //   }
    
      //   // if(isSuccess && admin){
      //   //   dispatch(resetStateStatus())
      //   // }
    
      // }, [admin, isLoading, isSuccess, isError, dispatch])
    
      const isDisapled = (errors)=> {
        if(Object.keys(errors).length){
          return true
        }
        return false
      }
    
    // const onSubmit = (data)=>{
    //     // if(data) console.log("sended data")
    //     if(data){
    //       console.log("submitData", data)
    //       // if( 
    //       // validUsername(data.multiValue, { "startsWith": {value: "@"} }) ){
    //       // const {multiValue, ...rest} = data;
    //       // data={...rest, "username": multiValue};
    //       // }
    //       // else{
    //       // const {multiValue, ...rest} = data;
    //       // data= {...rest, "email": multiValue};
    //       // }
    //       // console.log("dataafter", data);
    //       // dispatch(createUser(data))
    //       handleSubmit(data);
    //     }
    // }
  return (
    <form
      onSubmit={handleSubmit(submitForm)} 
      autoComplete='off'
      noValidate
      className='flex flex-col gap-5'
    >
        <FormInput
          id="companyName"
          name="companyName"
          type={"text"}
          register={{...register("companyName")}}
          placeholder={"enter company name"}
          errorMsg={errors.companyName?.message}
        />
        <FormInput
          id="username"
          name="username"
          type={"text"}
          register={{...register("username")}}
          placeholder={"enter username"}
          errorMsg={errors.username?.message}
        />
        <FormInput
          id="password"
          name="password"
          type={"password"}
          register={{...register("password")}}
          placeholder={"enter password"}
          errorMsg={errors.password?.message}
        />
        <SubmitBtn
          text={"Create"}
          isLoading={isLoading}
          isDisabled={isDisapled(errors)}
          extraClasses={"mt-1"}
        />
    </form>
  )
}

export default AddUserForm
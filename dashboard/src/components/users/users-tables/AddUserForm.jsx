import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
// import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from '../../form/FormInput';
import SubmitBtn from '../../form/SubmitBtn';

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
    
    const isDisapled = (errors)=> {
        if(Object.keys(errors).length){
            return true
        }
        return false
    }
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
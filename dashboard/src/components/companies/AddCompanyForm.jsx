import React from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import "react-toastify/dist/ReactToastify.css";
import FormInput from '../form/FormInput';
import SubmitBtn from '../form/SubmitBtn';
import { useDispatch, useSelector } from 'react-redux';

const yupSchema = yup.object({
    companyName: yup.string()
    .required("company name is required"),
    email: yup.string()
    .required("email is required")
    .email(),
    password: yup.string()
    .required("password is required")
    .min(8, "password length must contain at least 8 characters")
});

const AddCompanyForm = ({submitForm, isLoading}) => {

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
          id="email"
          name="email"
          type={"text"}
          register={{...register("email")}}
          placeholder={"enter company email"}
          errorMsg={errors.email?.message}
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

export default AddCompanyForm
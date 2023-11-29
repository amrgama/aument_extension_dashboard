import React, { useEffect, useState } from 'react'
import Container from '../components/Container';
import { Link, useNavigate } from 'react-router-dom'
import FormInput from '../components/form/FormInput';
import { useForm } from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useDispatch, useSelector } from 'react-redux';
import { logIn, resetStateStatus } from '../features/auth/authSlice';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubmitBtn from '../components/form/SubmitBtn';
import FirstHeader from '../components/typography/FirstHeader';
import { validUsername } from '../utils/helper';

const yupSchema = yup.object({
  multiValue: yup.string()
  .required("username or email is required")
  .email("invalid email"),
  password: yup.string()
  .required("password is required")
  .min(8, "password length must contain at least 8 characters")
});

const SignIn = () => {
  const {
    handleSubmit,
    register,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(yupSchema)
  })

  const dispatch = useDispatch()
  const {admin, isLoading, isSuccess, isError, message} = useSelector(state => state.auth)
  const navigate = useNavigate()
  // const [isDisabled, setIsDisabled] = useState(false)

  useEffect(()=>{

    if(isError){
      toast.error(message);
    }

    if(isSuccess && admin){
      navigate("/");
      dispatch(resetStateStatus())
    }

  }, [admin, isLoading, isSuccess, isError, navigate, dispatch])

  const isDisapled = (errors)=> {
    if(Object.keys(errors).length){
      return true
    }
    return false
  }

  const submit = (data)=>{
    // if(data) console.log("sended data")
    if(data){
      console.log("submitData", data)
      if( 
        validUsername(data.multiValue, { "startsWith": {value: "@"} }) ){
        const {multiValue, ...rest} = data;
        data={...rest, "username": multiValue};
      }
      else{
        const {multiValue, ...rest} = data;
        data= {...rest, "email": multiValue};
      }
      console.log("dataafter", data);
      dispatch(logIn(data))
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 ">
      <Container>
        <div className="min-h-screen flex flex-col py-11">
            <form 
              onSubmit={handleSubmit(submit)} 
              autoComplete='off'
              noValidate
              className='w-full md:w-1/2 max-w-lg flex flex-col gap-3 px-10 py-12 bg-white shadow-md rounded-3xl m-auto'
            >
              <FirstHeader text={"Sign In"} />
              <FormInput
                label={"what is your username or email?"}
                id="multiValue"
                name="multiValue"
                type={"text"}
                register={{...register("multiValue")}}
                placeholder={"enter username or email"}
                errorMsg={errors.multiValue?.message}
              />
              <FormInput
                label={"What is your password?"}
                id="password"
                name="password"
                type={"password"}
                register={{...register("password")}}
                placeholder={"password"}
                errorMsg={errors.password?.message}
              />
              <span className="block text-light font-medium my-2">
                if you does not have account? <a href="/sign-up" className="text-primary underline">create one</a>
              </span>
              <SubmitBtn
                text={"Get in"}
                isLoading={isLoading}
                isDisabled={isDisapled(errors)}
              />
            </form>
        </div>
      </Container>
    </main>
  )
}

export default SignIn
import React, { useEffect, useState } from 'react'
import Container from '../components/Container';
import { Link, useNavigate } from 'react-router-dom'
import FormInput from '../components/form/FormInput';
import { useForm } from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useDispatch, useSelector } from "react-redux"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubmitBtn from '../components/form/SubmitBtn';
import FirstHeader from '../components/typography/FirstHeader';
import { register as adminRegister, resetStateStatus } from '../features/auth/authSlice';

const yupSchema = yup.object({
  fullName: yup.string()
  .required("first name is required")
  .min(6, "full name length must contain at least 6 characters"),
  username: yup.string().required("username is required"),
  email: yup.string().
  required("email is required").
  email(),
  password: yup.string().
  required("password is required").
  min(8, "password length must contain at least 8 characters")
});

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: {errors}
  } = useForm({
      resolver: yupResolver(yupSchema)
  })

  const dispatch = useDispatch();
  const {admin, isLoading, isSuccess, isError, message} = useSelector(state => state.auth)
  const navigate = useNavigate();
  // const [isDisabled, setIsDisabled] = useState(false)

  useEffect(()=>{

    console.log("isError", isError, "message", message);
    if(isError){
      toast.error(message);
    }

    if(isSuccess && !!!Object.keys(admin).length){
      navigate("/sign-in");
      dispatch(resetStateStatus());
    }

  }, [isLoading, isSuccess, isError, navigate, dispatch])

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
      dispatch(adminRegister(data))
    }
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <Container>
          <div className="min-h-screen flex flex-col py-5">
              <form 
                onSubmit={handleSubmit(submit)} 
                autoComplete='off'
                noValidate
                className='w-full lg:w-1/2 max-w-lg flex flex-col gap-3 px-10 py-12 bg-white shadow-md rounded-3xl m-auto'
              >
                <FirstHeader text={"Sign Up"} />
                <FormInput
                  label={"what is your full name?"}
                  id="fullName"
                  name="fullName"
                  type={"text"}
                  register={{...register("fullName")}}
                  placeholder={"full name"}
                  errorMsg={errors.fullName?.message}
                />
                <FormInput
                  label={"what is your username?"}
                  id="username"
                  name="username"
                  type={"text"}
                  register={{...register("username")}}
                  placeholder={"username"}
                  errorMsg={errors.username?.message}
                />
                <FormInput
                  label={"What is your email?"}
                  id="email"
                  name="email"
                  type={"email"}
                  register={{...register("email")}}
                  placeholder={"email"}
                  errorMsg={errors.email?.message}
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
                  if you already have account? <a href="/sign-in" className="text-primary underline">log in</a>
                </span>
                <SubmitBtn
                  text={"create account"}
                  isLoading={isLoading}
                  isDisabled={isDisapled(errors)}
                />
              </form>
          </div>
      </Container>
    </main>
  )
}

export default SignUp
import React, { useEffect, useState } from 'react'
import {useFormContext} from "react-hook-form"
import ErrorMsg from './ErrorMsg'
import { AnimatePresence } from 'framer-motion'
import {BsEye, BsEyeSlash} from "react-icons/bs"

const FormInput = ({label, id, name, type, placeholder, register, errorMsg, extraClasses}) => {
  console.log("yupErrors", errorMsg);
  const [show, setShow] = useState(false);
  
  const handleShowPasswordButton = (e)=> {
    e.preventDefault();
    setShow(prev => !prev)
  }

  if(type === "password"){

    return (
      <div className="form-control w-full">
        {
          label &&
          <label className="label">
            <span className="label-text">{label}</span>
          </label>
        }
        <div className="join">
          <input
            id={id}
            type={!show? type: "text"}
            name={name}
            placeholder={placeholder}
            {...register}
            className="input input-bordered join-item w-full bg-white text-dark font-medium shadow-md"
          />
          <button 
            onClick={handleShowPasswordButton}
            className="btn join-item bg-secondary border-0 hover:bg-secondary/95"
          >
            { show && <BsEye className={`text-lg ${errorMsg? "text-red-500": "text-dark"}`} /> }
            { !show && <BsEyeSlash className={`text-xl ${errorMsg? "text-red-500": "text-dark"}`} /> }
          </button>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          { errorMsg && <ErrorMsg message={errorMsg} />}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="form-control w-full">
      {
        label &&
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      }
      <input
        id={id}
        type={!show? type: "text"}
        name={name}
        placeholder={placeholder}
        {...register}
        className="input input-bordered join-item bg-white text-dark font-medium shadow-md"
      />
      <AnimatePresence mode="wait" initial={false}>
        { errorMsg && <ErrorMsg message={errorMsg} />}
      </AnimatePresence>
    </div>
  )
}

export default FormInput
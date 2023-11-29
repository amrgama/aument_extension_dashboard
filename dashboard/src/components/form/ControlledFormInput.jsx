import React, { useEffect, useState } from 'react'
import {useFormContext} from "react-hook-form"
import ErrorMsg from './ErrorMsg'
import { AnimatePresence } from 'framer-motion'
import {BsEye, BsEyeSlash} from "react-icons/bs"

const ControlledFormInput = ({label, id, name, type, onChange, value, placeholder, errorMsg, extraClasses}) => {
    console.log("yupErrors", errorMsg);
    const [show, setShow] = useState(false);
  
    const handleShowPasswordButton = e=> {
      e.preventDefault();
      setShow(prev => !prev)
    }
  if(type === "password"){

    return (
      <div className="form-control w-full">
        <div className="join">
          {
            label &&
            <label className="label">
              <span className="label-text">{label}</span>
            </label>
          }
          <input
            id={id}
            type={type}
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            className="input input-bordered join-item"
          />
          <button 
            onClick={handleShowPasswordButton}
            className="btn join-item rounded-r-full"
          >
            { show && <BsEye className={`fs-5 ${errorMsg? "text-red-500": "text-dark"}`} /> }
            { !show && <BsEyeSlash className={`fs-5 ${errorMsg? "text-red-500": "text-dark"}`} /> }
          </button>
        </div>
        <input
          id={id}
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className="input input-bordered bg-white w-full" 
        />
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
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="input input-bordered bg-white w-full" 
      />
      <AnimatePresence mode="wait" initial={false}>
        { errorMsg && <ErrorMsg message={errorMsg} />}
      </AnimatePresence>
    </div>
  )
}

export default ControlledFormInput
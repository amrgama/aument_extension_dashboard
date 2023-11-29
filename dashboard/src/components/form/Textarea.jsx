import React from 'react'
import ErrorMsg from './ErrorMsg'
import { AnimatePresence } from 'framer-motion'

const Textarea = ({label, id, name, type, placeholder, register, errorMsg, extraClasses}) => {
  
  return(
    <div className="form-control">
      {
        label &&
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      }
      <textarea 
        id={id}
        type={type}
        name={name}
        {...register}
        placeholder={placeholder}
        className="textarea textarea-bordered bg-white h-36 "
      ></textarea>
      <AnimatePresence mode="wait" initial={false}>
        { errorMsg && <ErrorMsg message={errorMsg} />}
      </AnimatePresence>
    </div>
  )
}

export default Textarea
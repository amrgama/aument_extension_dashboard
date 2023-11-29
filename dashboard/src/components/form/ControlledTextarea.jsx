import React from 'react'
import ErrorMsg from './ErrorMsg'
import { AnimatePresence } from 'framer-motion'

const ControlledTextarea = ({label, id, name, type, onChange, value, placeholder, errorMsg, textareaWrapperClasses, textareaClasses}) => {

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
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="textarea textarea-bordered bg-white h-36 "
      ></textarea>
      <AnimatePresence mode="wait" initial={false}>
        { errorMsg && <ErrorMsg message={errorMsg} />}
      </AnimatePresence>
    </div>
  )
}

export default ControlledTextarea
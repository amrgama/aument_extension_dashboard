import React from 'react'

const FormModalButton = ({text, icon, modalId, extraClasses}) => {
    const className = "btn capitalize border border-solid border-dark text-dark px-4 py-1" + " " + 
    `${extraClasses? extraClasses : ""}`;
  
    return (
    <button 
        onClick={()=>document.getElementById(`${modalId}`).showModal()}
        className={className} style={{height: "35px"}}
    >
        {icon && icon}
        {text}
    </button>
  )
}

export default FormModalButton
import React from 'react'

const ModalButton = ({text, icon, modalId, setShow, extraClasses}) => {
    const className = "btn min-h-[2.5rem] !h-fit text-dark capitalize border border-solid border-dark rounded-lg px-4" + " " + 
    `${extraClasses? extraClasses : ""}`;
  
    return (
        <button 
            type="button"
            onClick={e => setShow(true)}
            className={className}
            data-modal-target={modalId} 
            data-modal-toggle={modalId}
        >
            {icon && icon}
            {text}
        </button>
    )
}

export default ModalButton
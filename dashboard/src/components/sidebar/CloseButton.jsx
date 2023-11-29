import React from 'react'

const CloseButton = ({id, sidebarRef}) => {
  return (
    <button 
        type="button" 
        className="text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-full text-sm w-8 h-8 ms-auto flex justify-center items-center" 
        data-sidebar-hide={id}
        onClick={e => {
            sidebarRef.current.style.transform = "translateX(-100%)";
        }}
        >
        <svg 
            className="w-3 h-3" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 14 14"
        >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
        <span className="sr-only">Close modal</span>
    </button>
  )
}

export default CloseButton
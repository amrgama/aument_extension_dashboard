import React, { useEffect, useRef, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';

const ActionModal = ({id, title, show, setShow, doAction}) => {

  return (
    <div 
      id={id} 
      tabIndex="-1" 
      aria-hidden="true" 
      className={`fixed top-0 left-0 right-0 z-50 ${(!show)? "opacity-0 scale-0" : "opacity-1 scale-100"} flex justify-center items-center bg-dark/30 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full`}
      style={{
        visibility: `${(show)? "visible": "hidden"}`,
        transition: "transform 0.2s, opacity 0.2s, visibility 0.2s",
        margin: "0px"
      }}
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <button 
            type="button" 
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-full text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" 
            data-modal-hide={id}
            onClick={e => setShow(false)}
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
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900">{title}</h3>                
            <div className="text-end space-x-4">
              <button
                onClick={e => setShow(false)}
                className="btn btn-outline min-h-[2.5rem] h-fit btn-error capitalize"
              >Close</button>
              <button 
                type='button'
                onClick={e => doAction()}
                className='btn min-h-[2.5rem] h-fit capitalize text-primary hover:text-white border-primary bg-transparent hover:bg-primary'
              >
                confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActionModal
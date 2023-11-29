import React from 'react'

const ActionButton = ({text, apiConfig}) => {
  return (
    <button 
        type='button' 
        onClick={e => apiConfig.method(...apiConfig.params)}
        className='btn capitalize text-primary hover:text-white border-primary bg-transparent hover:bg-primary'
    >
        {text ?? "confirm"}
    </button>
  )
}

export default ActionButton
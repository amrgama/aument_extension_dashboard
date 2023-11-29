import React from 'react'

const Container = ({extraClasses, children}) => {
    
    const className = `container px-4 md:px-0 mx-auto ${extraClasses? extraClasses: ""}`;
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default Container
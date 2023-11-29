import React from 'react'

const SecondHeader = ({text, extraClasses}) => {
    const className = `text-lg text-dark font-medium leading-loose mb-2 ${extraClasses? extraClasses: ""}`
    return (
     <h2 className={className}>{text}</h2>
    )
}

export default SecondHeader
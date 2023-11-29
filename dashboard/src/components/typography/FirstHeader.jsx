import React from 'react'

const FirstHeader = ({text, extraClasses, children}) => {
    let classes = "text-3xl text-dark text-start font-extrabold font-mono ";
    classes += extraClasses? extraClasses : "";

    return (
        <h1 className={classes}>
            {text}
            {children}
        </h1>
    );
}

export default FirstHeader
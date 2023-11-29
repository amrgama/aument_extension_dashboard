import React from 'react'
import {HiArrowLongDown, HiArrowLongUp} from "react-icons/hi2";

const SmallCard = ({title, icon, count, percent, extraClasses}) => {
    const className= `${(!!extraClasses)? extraClasses: ""} card w-1/2 bg-white shadow-xl`
    return (
        <div className={className}>
            <div className="card-body justify-between !p-6 !gap-1">
                <div className='flex justify-between items-center gap-3'>
                    <span className="card-title inline-flex capitalize leading text-xl font-normal">{title}</span>
                    {!!icon && icon}
                </div>
                <span className='text-xl text-secondary font-semibold font-mono'>{count}</span>
                <div className='flex flex-wrap items-center text-light text-xl font-semibold font-mono'>
                    {
                        !!percent && 
                        <>( <span>{percent}</span> {(percent > 0)? <HiArrowLongUp className='' /> :<HiArrowLongDown className='' />} )</>
                    }
                </div>
            </div>
        </div>
    )
}

export default SmallCard
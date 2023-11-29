import React, { useEffect, useState } from 'react'

const BanForm = ({handleSubmit, companyId}) => {
    
    const [checkedInput, setCheckedInput] = useState(null);
    const [period, setPeriod] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);

    useEffect(()=>{

        if(!!checkedInput && !!period){
            setTimeoutId(
                setTimeout(()=>{
                    handleSubmit(companyId, period)
                }, 300)
            );
        }

        return ()=>{
            clearTimeout(timeoutId);
        }
    }, [period, checkedInput])

    return (
    <form 
        // onSubmit={onSubmit}
        className='flex justify-center gap-5'
    >
        <div
            className={`btn cursor-default w-fit ${(checkedInput !== "p7Day")? "text-slate-400": "text-secondary"} hover:text-secondary border ${(checkedInput !== "p7Day")? "border-slate-400": "border-secondary"} hover:border-secondary bg-transparent hover:bg-transparent p-3`}
        >
            <input 
                type="radio" 
                name='period' 
                id="p7Day" 
                onChange={e => {
                    setCheckedInput(e.currentTarget.id)
                    setPeriod("7d");
                }}
                className='radio radio-sm radio-success text-secondary'/>
            <label htmlFor="p7Day" className="cursor-pointer capitalize">7 day</label>
        </div>
        <div
            className={`btn cursor-default w-fit ${(checkedInput !== "p30Day")? "text-slate-400": "text-secondary"} hover:text-secondary border ${(checkedInput !== "p30Day")? "border-slate-400": "border-secondary"} hover:border-secondary bg-transparent hover:bg-transparent p-3`}
        >
            <input 
                type="radio" 
                name='period' 
                id="p30Day" 
                onChange={e => {
                    setCheckedInput(e.currentTarget.id)
                    setPeriod("30d")
                }}
                className='radio radio-sm radio-success text-secondary'/>
            <label htmlFor="p30Day" className="cursor-pointer capitalize">30 day</label>
        </div>
        <div
            className={`btn cursor-default w-fit ${(checkedInput !== "pByAdmin")? "text-slate-400": "text-secondary"} hover:text-secondary border ${(checkedInput !== "pByAdmin")? "border-slate-400": "border-secondary"} hover:border-secondary bg-transparent hover:bg-transparent p-3`}
        >
            <input 
                type="radio" 
                name='period' 
                id="pByAdmin" 
                onChange={e => {
                    setCheckedInput(e.currentTarget.id)
                    setPeriod("byMe")
                }}
                className='radio radio-sm radio-success text-secondary'/>
            <label htmlFor="pByAdmin" className="cursor-pointer capitalize">by me</label>
        </div>

    </form>
  )
}

export default BanForm
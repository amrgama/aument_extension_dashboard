import React from 'react'

const EmptyTable = ({tableConfig}) => {
    const renderdTableHead = tableConfig?.head.map((item, i)=>{
        return <span className='table-cell flex-1 p-3' key={i}>{item}</span>
    })

  return (
    <div className="overflow-x-auto">
        <div className="flex flex-col">
            <div className="w-full flex items-center text-slate-300 text-base capitalize font-bold border-b border-b-slate-800">
                {renderdTableHead}
            </div>
            <div className="w-full h-full">
                <div className='h-full p-3 flex items-center justify-center text-slate-500 text-3xl'>
                    {
                        (!!tableConfig.data)?
                            tableConfig.data
                        :
                            "Table is empty."
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmptyTable
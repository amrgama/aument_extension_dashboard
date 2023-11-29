import React from 'react'

const TableHead = ({header}) => {
    const renderdTableHeader = header.map((item, i)=>{
        return <th key={i}>{item}</th>
    })
  return (
    <tr className='text-base capitalize'>{renderdTableHeader}</tr>
  )
}

export default TableHead
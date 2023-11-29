import React from 'react'
import TableHead from '../../UI-kits/tables/TableHead';

const SkeletonTable = ({tableConfig}) => {
    console.log(tableConfig)
    const renderedCells= tableConfig.head.map((head, i) =>{
        return <td key={i} className='text-transparent'>{head}</td>
    });

  return (
    <div className="overflow-auto" style={{maxHeight: "480px"}}>
        <table role="status" className="table animate-pulse">
            {/* head */}
            <thead>
                <TableHead header={tableConfig.head} />
            </thead>
            <tbody>
                <tr className='bg-slate-200'>{renderedCells}</tr>
                <tr className='bg-slate-200'>{renderedCells}</tr>
                <tr className='bg-slate-200'>{renderedCells}</tr>
            </tbody>
        </table>
    </div>
  )
}

export default SkeletonTable
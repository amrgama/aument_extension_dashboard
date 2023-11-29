import React, { useEffect, useState } from 'react'
import { getUser, selectAdmin } from '../../../features/admin/adminSlice.js'
// import Lottie from 'lottie-react';
import vector from "../../../assets/vector.webp"

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import TableHead from '../../UI-kits/tables/TableHead.jsx'
import TableRow from './TableRow.jsx'
import { selectCompanies } from '../../../features/companies/companiesSlice.js'

const DeletedCompaniesActionTable = ({tableConfig}) => {
    
    // const {companies :{deleted: deletedCompanies}} = useSelector(selectCompanies);
    
    const renderedTableRows = tableConfig.data?.map((rowData, i)=>{
        // console.log("rowData: ", rowData);
        return <TableRow 
                    key={i} 
                    header={tableConfig.head} 
                    rowData={rowData} 
                    banActionButton={false} 
                    deleteActionButton={true} 
                />
    })

    return (
    <div className="overflow-auto" style={{maxHeight: "480px"}}>
        <table className="table">
            {/* head */}
            <thead>
                <TableHead header={tableConfig.head} />
            </thead>
            <tbody>
                {renderedTableRows}
            </tbody>
        </table>
    </div>
  )
}

export default DeletedCompaniesActionTable